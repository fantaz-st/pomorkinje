"use client";

import { useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ArticleFancybox = ({ children }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    Fancybox.bind(root, '[data-fancybox="article"]', {
      Thumbs: false,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
    });

    return () => {
      Fancybox.unbind(root);
      Fancybox.close();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
};

export default ArticleFancybox;
