"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
function Fireworks({
  active = true,
  duration = 3000,
  interval = 800,
  maxFireworks = 20,
}: {
  active?: boolean;
  duration?: number; // ms total celebration time
  interval?: number; // ms between bursts
  maxFireworks?: number; // max simultaneous particles groups
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const runningRef = useRef(false);

  // Particle + burst types
  type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
  };

  type Burst = {
    x: number;
    y: number;
    color: string;
    particles: Particle[];
  };

  const burstsRef = useRef<Burst[]>([]);

  const colors = useMemo(
    () => [
      "#fde047", // yellow-300
      "#f59e0b", // amber-500
      "#22d3ee", // cyan-400
      "#38bdf8", // sky-400
      "#a78bfa", // violet-400
      "#34d399", // emerald-400
      "#f472b6", // pink-400
    ],
    []
  );

  const spawnBurst = (w: number, h: number) => {
    if (burstsRef.current.length >= maxFireworks) return;
    const x = Math.random() * w * 0.8 + w * 0.1;
    const y = Math.random() * h * 0.4 + h * 0.1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const count = 28 + Math.floor(Math.random() * 22);
    const particles: Particle[] = Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 3.5; // initial speed
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 40 + Math.random() * 30,
        size: 1 + Math.random() * 2.2,
      };
    });

    burstsRef.current.push({ x, y, color, particles });
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width: w, height: h } = canvas;
    ctx.fillStyle = "rgba(0,0,0,0)"; // transparent clear (overlay canvas)
    ctx.clearRect(0, 0, w, h);

    // update + render
    burstsRef.current.forEach((burst) => {
      burst.particles.forEach((p) => {
        // physics
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03; // gravity
        p.vx *= 0.99; // slight air resistance
        p.vy *= 0.99;

        // fade out
        const alpha = 1 - p.life / p.maxLife;
        ctx.globalAlpha = Math.max(alpha, 0);
        ctx.fillStyle = burst.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    });

    // prune finished bursts
    burstsRef.current = burstsRef.current.filter((b) =>
      b.particles.some((p) => p.life < p.maxLife)
    );

    rafRef.current = requestAnimationFrame(draw);
  };

  // resize canvas to parent/container size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (active && !runningRef.current) {
      runningRef.current = true;
      // kick off drawing loop
      rafRef.current = requestAnimationFrame(draw);

      // spawn bursts on a cadence
      const start = Date.now();
      const loop = () => {
        if (!runningRef.current) return;
        const elapsed = Date.now() - start;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        spawnBurst(w, h);
        if (elapsed < duration) {
          timeoutRef.current = setTimeout(loop, interval);
        } else {
          runningRef.current = false;
        }
      };
      loop();
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      runningRef.current = false;
      burstsRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, duration, interval, maxFireworks]);

  return (
    <canvas
      ref={canvasRef}
      className={
        "pointer-events-none absolute inset-0 z-30"
      }
    />
  );
}

export {Fireworks}
