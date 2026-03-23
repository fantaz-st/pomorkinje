"use client";

import { useRef } from "react";
import classes from "./Header.module.css";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";

const HeaderScrollController = ({ children }) => {
  const rootRef = useRef(null);

  useHeaderScroll(rootRef);

  return (
    <div ref={rootRef} className={classes.scrollHost}>
      {children}
    </div>
  );
};

export default HeaderScrollController;
