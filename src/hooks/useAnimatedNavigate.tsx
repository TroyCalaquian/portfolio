// src/hooks/useAnimatedNavigate.ts
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

export function useAnimatedNavigate() {
  const navigate = useNavigate();
  const location = useLocation();

  return (path: string) => {
    if (path === location.pathname) return;

    gsap.to(".page-container", {
      opacity: 0,
      y: -20,
      duration: 0.4,
      onComplete: () => {
        navigate(path);
      },
    });
  };
}
