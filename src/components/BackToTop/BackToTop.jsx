"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import site from "@/settings/site";
import classes from "./BackToTop.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const threshold = site.backToTop.showAfter || 300;
  const frameRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (frameRef.current) return;

      frameRef.current = window.requestAnimationFrame(() => {
        setVisible(window.scrollY > threshold);
        frameRef.current = null;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  const scrollTop = useCallback(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  return (
    <button
      onClick={scrollTop}
      className={`${classes.button} ${visible ? classes.visible : ""} ${
        site.backToTop.position === "left" ? classes.left : classes.right
      }`}
      aria-label="Back to top"
    >
      <KeyboardArrowUpIcon />
    </button>
  );
}
