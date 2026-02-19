import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

const CursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>(0);
  const lastSpawn = useRef(0);

  const spawnParticles = useCallback((x: number, y: number, count: number, burst = false) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = burst ? Math.random() * 4 + 2 : Math.random() * 1.5 + 0.3;
      particles.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (burst ? 0 : 1),
        life: 1,
        maxLife: burst ? 40 + Math.random() * 30 : 25 + Math.random() * 20,
        size: burst ? Math.random() * 4 + 2 : Math.random() * 3 + 1,
        hue: 30 + Math.random() * 30,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent | TouchEvent) => {
      const point = "touches" in e ? e.touches[0] : e;
      if (!point) return;
      mouse.current = { x: point.clientX, y: point.clientY };
      const now = Date.now();
      if (now - lastSpawn.current > 30) {
        spawnParticles(point.clientX, point.clientY, 2);
        lastSpawn.current = now;
      }
    };

    const onClick = (e: MouseEvent | TouchEvent) => {
      const point = "touches" in e ? e.changedTouches[0] : e;
      if (!point) return;
      spawnParticles(point.clientX, point.clientY, 15, true);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("click", onClick);
    window.addEventListener("touchstart", onClick, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.life -= 1 / p.maxLife;
        if (p.life <= 0) return false;

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03;
        p.vx *= 0.99;

        const alpha = p.life * 0.8;
        const size = p.size * p.life;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${alpha})`;
        ctx.fill();

        // glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 55%, ${alpha * 0.15})`;
        ctx.fill();

        return true;
      });

      animationFrame.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrame.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchstart", onClick);
    };
  }, [spawnParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-30 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default CursorEffect;
