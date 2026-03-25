"use client";

import Image from "next/image";
import classes from "./GalleryBlock.module.css";

const GalleryBlock = ({ block }) => {
  const images = block?.innerBlocks || [];

  if (!images.length) return null;

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {images.map((img, i) => {
          const src = img?.attributes?.url;
          const alt = img?.attributes?.alt || `Gallery image ${i + 1}`;
          const caption = img?.attributes?.caption || alt;

          if (!src) return null;

          return (
            <a key={img?.attributes?.id || i} href={src} data-fancybox="article" data-caption={caption} className={classes.item}>
              <div className={classes.imageWrap}>
                <Image src={src} alt={alt} fill className={classes.image} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryBlock;
