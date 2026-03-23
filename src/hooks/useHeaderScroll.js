"use client";

import { useEffect } from "react";

import classes from "@/components/Header/Header.module.css";

export function useHeaderScroll(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const header = root.querySelector("[data-header-root]");
    if (!header) return;

    let lastScrollY = window.scrollY || 0;
    let ticking = false;

    const applyState = () => {
      const currentY = window.scrollY || 0;

      if (currentY > 8) header.classList.add(classes.scrolled);
      else header.classList.remove(classes.scrolled);

      if (currentY <= 0) {
        header.classList.remove(classes.hidden);
        header.classList.add(classes.visible);
      } else if (currentY > lastScrollY && currentY > 120) {
        header.classList.add(classes.hidden);
        header.classList.remove(classes.visible);
      } else {
        header.classList.remove(classes.hidden);
        header.classList.add(classes.visible);
      }

      lastScrollY = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(applyState);
    };

    header.classList.add(classes.visible);
    applyState();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rootRef]);
}
