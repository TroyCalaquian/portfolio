// src/hooks/usePageAnimation.ts
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function usePageAnimation() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".animate-section", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, { scope: container });

  return container;
}