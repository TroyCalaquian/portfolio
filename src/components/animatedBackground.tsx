import { useEffect, useRef } from 'react';
import { useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { gsap } from 'gsap';

const NODE_COUNT = 46;
const MAX_LINK_DIST = 140;
const NODE_SPEED = 0.15;
const CURSOR_RADIUS = 130;
const CURSOR_PUSH = 1.4;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface AnimatedBackgroundProps {
  background?: string;
  linkColor?: string;
  nodeColor?: string;
  gridColor?: string;
  scanlineColor?: string;
  revealDelay?: number;
}

export function AnimatedBackground({
  background,
  linkColor,
  nodeColor,
  gridColor,
  scanlineColor,
  revealDelay = 0,
}: AnimatedBackgroundProps = {}) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);

  const isDark = colorScheme === 'dark';
  const bg = background ?? (isDark ? theme.colors.dark[7] : theme.white);
  const gridLine =
    gridColor ??
    (isDark ? 'rgba(122,199,79,0.06)' : 'rgba(56,108,11,0.06)');
  const accent = linkColor ?? theme.colors.mossGreen[isDark ? 5 : 6];
  const accent2 = nodeColor ?? theme.colors.deepGreen[isDark ? 4 : 5];
  const scanline = scanlineColor ?? accent;

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * NODE_SPEED,
      vy: (Math.random() - 0.5) * NODE_SPEED,
    }));

    const mouse = { x: -9999, y: -9999 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    let frameId: number;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          const mdx = n.x - mouse.x;
          const mdy = n.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < CURSOR_RADIUS && mDist > 0.01) {
            const force = (1 - mDist / CURSOR_RADIUS) * CURSOR_PUSH;
            n.x += (mdx / mDist) * force;
            n.y += (mdy / mDist) * force;
          }
        }
      }

      if (mouse.x > -1000) {
        for (const n of nodes) {
          const mdx = n.x - mouse.x;
          const mdy = n.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < CURSOR_RADIUS) {
            ctx.strokeStyle = accent;
            ctx.globalAlpha = (1 - mDist / CURSOR_RADIUS) * 0.35;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_LINK_DIST) {
            ctx.strokeStyle = accent;
            ctx.globalAlpha = (1 - dist / MAX_LINK_DIST) * 0.18;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 0.5;
      for (const n of nodes) {
        ctx.fillStyle = accent2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      frameId = requestAnimationFrame(draw);
    };
    draw();

    let tl: gsap.core.Timeline | undefined;
    if (scanlineRef.current && !prefersReducedMotion) {
      tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });
      tl.fromTo(
        scanlineRef.current,
        { yPercent: -10, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.4, ease: 'power1.out' }
      ).to(scanlineRef.current, {
        yPercent: 110,
        opacity: 0,
        duration: 3.2,
        ease: 'none',
      });
    }

    let revealTween: gsap.core.Tween | undefined;
    if (wrapper && !prefersReducedMotion) {
      revealTween = gsap.fromTo(
        wrapper,
        { opacity: 0, scale: 1.04 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: revealDelay,
          ease: 'power2.out',
        }
      );
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      tl?.kill();
      revealTween?.kill();
    };
  }, [accent, accent2, revealDelay]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        zIndex: -1,
        pointerEvents: 'none',
        background: bg,
        backgroundImage: `
          linear-gradient(${gridLine} 1px, transparent 1px),
          linear-gradient(90deg, ${gridLine} 1px, transparent 1px)
        `,
        backgroundSize: '42px 42px',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />
      <div
        ref={scanlineRef}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '18vh',
          background: `linear-gradient(180deg, transparent, ${scanline}14, transparent)`,
          opacity: 0,
        }}
      />
    </div>
  );
}