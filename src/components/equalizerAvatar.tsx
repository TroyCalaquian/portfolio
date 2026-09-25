import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface EqualizerAvatarProps {
  size?: number;
}


const BASE_HEIGHTS = [14, 22, 34, 44, 54, 44, 34, 22, 14];
const BAR_WIDTH = 7;
const GAP = 4;

export function EqualizerAvatar({ size = 260 }: EqualizerAvatarProps) {
  const barRefs = useRef<(SVGRectElement | null)[]>([]);
  const tweensRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const tweens = barRefs.current
      .map((bar, i) =>
        bar
          ? gsap.to(bar, {
              scaleY: gsap.utils.random(0.5, 1.35),
              transformOrigin: "center",
              duration: gsap.utils.random(0.5, 1.1),
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.06,
            })
          : null
      )
      .filter((t): t is gsap.core.Tween => t !== null);

    tweensRef.current = tweens;

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, []);

  const handleEnter = () => {
    tweensRef.current.forEach((t) => t.timeScale(2.2));
  };
  const handleLeave = () => {
    tweensRef.current.forEach((t) => t.timeScale(1));
  };

  const totalWidth = BASE_HEIGHTS.length * BAR_WIDTH + (BASE_HEIGHTS.length - 1) * GAP;
  const startX = (120 - totalWidth) / 2;

  return (
    <div
      role="img"
      aria-label="Animated audio-equalizer avatar"
      className="profile-image"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: "50%",
        border: "3px solid var(--mantine-color-mossGreen-5)",
        background:
          "light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <svg width="70%" height="70%" viewBox="0 0 120 120" aria-hidden="true">
        {BASE_HEIGHTS.map((h, i) => {
          const x = startX + i * (BAR_WIDTH + GAP);
          const y = 60 - h / 2;
          const color =
            i % 2 === 0
              ? "var(--mantine-color-mossGreen-5)"
              : "var(--mantine-color-deepGreen-5)";
          return (
            <rect
              key={i}
              ref={(el) => {
                barRefs.current[i] = el;
              }}
              x={x}
              y={y}
              width={BAR_WIDTH}
              height={h}
              rx={BAR_WIDTH / 2}
              fill={color}
            />
          );
        })}
      </svg>
    </div>
  );
}
