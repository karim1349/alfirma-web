"use client";

import { useEffect } from "react";

export default function CursorEffect() {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      return;
    }

    const cursorEffect = document.createElement("div");
    cursorEffect.classList.add("cursor-effect");
    document.body.appendChild(cursorEffect);

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorEffect.style.left = `${clientX}px`;
      cursorEffect.style.top = `${clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (document.body.contains(cursorEffect)) {
        document.body.removeChild(cursorEffect);
      }
    };
  }, []);

  return null; // nothing visible here, just side effect
}
