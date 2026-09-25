import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


const DEFAULT_LINES = [
  '> initializing_website...',
  '> establishing_connection...',
  '> connection_established',
  '> welcome_',
];

interface BootSequenceProps {
  lines?: string[];
  onComplete?: () => void;
  color?: string;
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
