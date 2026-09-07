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

interface TrailPoint {
  x: number;
  y: number;
  life: number;
  hue: number;
}

const CursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const trail = useRef<TrailPoint[]>([]);
  const hue = useRef(0);
  const animationFrame = useRef<number>(0);
  const lastSpawn = useRef(0);

  const spawnParticles = useCallback((x: number, y: number, count: number, burst = false) => {
    for (let i = 0; i < count; i++) {
      const angle = burst ? (Math.PI * 2 * i) / count + Math.random() * 0.4 : Math.random() * Math.PI * 2;
      const speed = burst ? Math.random() * 5 + 2 : Math.random() * 1.2 + 0.2;
      particles.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (burst ? 0 : 0.8),
        life: 1,
        maxLife: burst ? 45 + Math.random() * 30 : 28 + Math.random() * 20,
        size: burst ? Math.random() * 4 + 2 : Math.random() * 2.6 + 1,
        hue: burst ? (hue.current + Math.random() * 360) % 360 : (hue.current + Math.random() * 60) % 360,
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
      hue.current = (hue.current + 4) % 360;
      trail.current.push({ x: point.clientX, y: point.clientY, life: 1, hue: hue.current });
      if (trail.current.length > 26) trail.current.shift();
      const now = Date.now();
      if (now - lastSpawn.current > 26) {
        spawnParticles(point.clientX, point.clientY, 2);
        lastSpawn.current = now;
      }
    };

    const onClick = (e: MouseEvent | TouchEvent) => {
      const point = "touches" in e ? e.changedTouches[0] : e;
      if (!point) return;
      spawnParticles(point.clientX, point.clientY, 22, true);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("click", onClick);
    window.addEventListener("touchstart", onClick, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // rainbow ribbon trail
      trail.current = trail.current.filter((t) => {
        t.life -= 0.035;
        return t.life > 0;
      });
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 1; i < trail.current.length; i++) {
        const a = trail.current[i - 1];
        const b = trail.current[i];
        const alpha = b.life * 0.55;
        ctx.strokeStyle = `hsla(${b.hue}, 95%, 62%, ${alpha})`;
        ctx.lineWidth = b.life * 9;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        ctx.strokeStyle = `hsla(${b.hue}, 95%, 62%, ${alpha * 0.18})`;
        ctx.lineWidth = b.life * 22;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      particles.current = particles.current.filter((p) => {
        p.life -= 1 / p.maxLife;
        if (p.life <= 0) return false;

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03;
        p.vx *= 0.99;

        const alpha = p.life * 0.85;
        const size = p.size * p.life;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${alpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 60%, ${alpha * 0.14})`;
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
      className="fixed inset-0 z-[55] pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default CursorEffect;
