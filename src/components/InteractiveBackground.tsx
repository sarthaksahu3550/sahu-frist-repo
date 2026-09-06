import { useEffect, useRef, useState } from "react";
import { CircleDot, Network, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type BackgroundMode = "net" | "halo" | "stars";

const modes: { id: BackgroundMode; label: string; icon: typeof Network }[] = [
  { id: "net", label: "Network background", icon: Network },
  { id: "halo", label: "Halo background", icon: CircleDot },
  { id: "stars", label: "Star background", icon: Sparkles },
];

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const InteractiveBackground = ({ showControls = true }: { showControls?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<BackgroundMode>("net");
  const modeRef = useRef(mode);
  const pointer = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const points: Point[] = [];
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let primary = "hsl(40 90% 55%)";
    let accent = "hsl(160 80% 50%)";
    let foreground = "hsl(40 20% 92%)";

    const readThemeColors = () => {
      const styles = getComputedStyle(document.documentElement);
      primary = `hsl(${styles.getPropertyValue("--primary").trim()})`;
      accent = `hsl(${styles.getPropertyValue("--accent").trim()})`;
      foreground = `hsl(${styles.getPropertyValue("--foreground").trim()})`;
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      readThemeColors();

      points.length = 0;
      const count = width < 640 ? 34 : 62;
      for (let i = 0; i < count; i += 1) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          radius: Math.random() * 1.8 + 0.7,
        });
      }
    };

    const updatePointer = (x: number, y: number) => {
      pointer.current = { x, y, active: true };
    };
    const onPointerMove = (event: PointerEvent) => updatePointer(event.clientX, event.clientY);
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updatePointer(touch.clientX, touch.clientY);
    };
    const clearPointer = () => {
      pointer.current.active = false;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const currentMode = modeRef.current;
      const distanceLimit = currentMode === "stars" ? 0 : width < 640 ? 132 : 174;

      for (const point of points) {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < -10 || point.x > width + 10) point.vx *= -1;
        if (point.y < -10 || point.y > height + 10) point.vy *= -1;

        if (pointer.current.active) {
          const dx = point.x - pointer.current.x;
          const dy = point.y - pointer.current.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 150 && distance > 0) {
            const force = (150 - distance) / 1500;
            point.vx += (dx / distance) * force;
            point.vy += (dy / distance) * force;
          }
        }
        point.vx = Math.max(-0.65, Math.min(0.65, point.vx));
        point.vy = Math.max(-0.65, Math.min(0.65, point.vy));
      }

      if (currentMode !== "halo") {
        context.lineWidth = 0.7;
        for (let i = 0; i < points.length; i += 1) {
          for (let j = i + 1; j < points.length; j += 1) {
            const first = points[i];
            const second = points[j];
            const distance = Math.hypot(first.x - second.x, first.y - second.y);
            if (distance < distanceLimit) {
              context.globalAlpha = (1 - distance / distanceLimit) * (currentMode === "net" ? 0.32 : 0.16);
              context.strokeStyle = primary;
              context.beginPath();
              context.moveTo(first.x, first.y);
              context.lineTo(second.x, second.y);
              context.stroke();
            }
          }
        }
      }

      for (const point of points) {
        context.globalAlpha = currentMode === "stars" ? 0.58 : 0.42;
        context.fillStyle = currentMode === "stars" ? foreground : accent;
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      }

      if (pointer.current.active) {
        const halo = context.createRadialGradient(pointer.current.x, pointer.current.y, 0, pointer.current.x, pointer.current.y, 150);
        halo.addColorStop(0, `${accent.replace(")", " / 0.24)")}`);
        halo.addColorStop(1, `${accent.replace(")", " / 0)")}`);
        context.globalAlpha = currentMode === "halo" ? 1 : 0.55;
        context.fillStyle = halo;
        context.beginPath();
        context.arc(pointer.current.x, pointer.current.y, 150, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", clearPointer);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", clearPointer);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", clearPointer);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", clearPointer);
    };
  }, []);

  return (
    <>
      <div className={`interactive-background interactive-background-${mode}`} aria-hidden="true">
        <div className="interactive-background-glow" />
        <canvas ref={canvasRef} />
      </div>
      {showControls && (
        <div className="fixed bottom-5 left-5 z-40 flex items-center gap-1 rounded-full border border-border bg-card/75 p-1 shadow-lg backdrop-blur-md" aria-label="Background style">
          {modes.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              type="button"
              variant={mode === id ? "secondary" : "ghost"}
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => setMode(id)}
              aria-label={label}
              title={label}
            >
              <Icon className="h-4 w-4" />
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default InteractiveBackground;