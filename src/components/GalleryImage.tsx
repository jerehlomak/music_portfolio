import React from "react";

interface GalleryImageProps {
  src: string;
  alt: string;
  classNameModifier: string; // e.g. "_5", "_4"
}

export default function GalleryImage({ src, alt, classNameModifier }: GalleryImageProps) {
  return (
    <div className={`gallery-image-container ${classNameModifier}`}>
      <img
        src={src}
        loading="lazy"
        sizes="(max-width: 479px) 93vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1439px) 91vw, 93vw"
        alt={alt}
        className="gallery-image"
      />
    </div>
  );
}
