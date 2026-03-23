"use client";

import { useState } from "react";

export function useMobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  const openDrawer = () => setOpen(true);

  const closeDrawer = () => {
    setOpen(false);
    setExpanded({});
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return {
    open,
    expanded,
    openDrawer,
    closeDrawer,
    toggleExpand,
  };
}
