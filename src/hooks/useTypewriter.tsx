import { useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

export function useTypewriter(text: string, delay = 0.6) {
  const target = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.to(target.current, {
      duration: text.length * 0.05,
      text,
      delay,
      ease: "none",
    });
  });

  return target;
}