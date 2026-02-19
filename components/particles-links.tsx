"use client";

import { useEffect, useRef } from "react";

type Theme = "dark" | "light";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ParticlesLinks({ theme }: { theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const count = clamp(Math.floor(window.innerWidth / 22), 48, 120);
    const linkDistance = 135;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: 1.2 + Math.random() * 2.1,
    }));

    const palette =
      theme === "dark"
        ? { point: "rgba(255, 79, 163, 0.75)", line: "255, 216, 77" }
        : { point: "rgba(255, 79, 163, 0.6)", line: "255, 183, 3" };

    function resize() {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = palette.point;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > linkDistance) continue;

          const alpha = (1 - dist / linkDistance) * (theme === "dark" ? 0.36 : 0.26);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${palette.line}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      rafId = window.requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(rafId);
    };
  }, [theme]);

  return (
    <div className="links-canvas-wrap" aria-hidden>
      <canvas ref={canvasRef} className="links-canvas" />
    </div>
  );
}
