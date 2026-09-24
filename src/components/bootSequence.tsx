import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/**
 * BootSequence
 * ------------
 * A full-screen "terminal booting up" overlay shown briefly on load,
 * before fading out to reveal the site underneath. Meant to be mounted
 * once at the top of your app (e.g. in Layout.tsx, alongside
 * AnimatedBackground) — since Layout persists across route changes,
 * it naturally only plays once per session rather than on every
 * navigation.
 *
 * Pass its total duration as `revealDelay` to <AnimatedBackground /> so
 * the network background finishes powering on right as this overlay
 * clears — the two effects read as one moment instead of two.
 *
 * Respects prefers-reduced-motion: renders nothing at all in that case,
 * so the site just loads normally with no overlay to wait out.
 */

const DEFAULT_LINES = [
  '> initializing_system...',
  '> establishing_connection...',
  '> connection_established',
  '> welcome_',
];

interface BootSequenceProps {
  /** Lines shown one at a time, in order. */
  lines?: string[];
  /** Called once the overlay has fully faded out. */
  onComplete?: () => void;
  /** Text color. Defaults to a neon green suited to a dark theme. */
  color?: string;
  /** Background color of the overlay itself. Defaults to black. */
  background?: string;
}

export function BootSequence({
  lines = DEFAULT_LINES,
  onComplete,
  color = '#7AC74F',
  background = '#000000',
}: BootSequenceProps) {
  const [mounted, setMounted] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setMounted(false);
      onComplete?.();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setMounted(false);
        onComplete?.();
      },
    });

    lineRefs.current.forEach((el) => {
      if (!el) return;
      tl.to(el, { opacity: 1, duration: 0.2, ease: 'power1.out' }, '+=0.15');
    });

    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power1.inOut',
      delay: 0.4,
    });

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ fontFamily: 'ui-monospace, "SF Mono", "Courier New", monospace' }}>
        {lines.map((line, i) => (
          <div
            key={i}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            style={{ color, opacity: 0, fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
