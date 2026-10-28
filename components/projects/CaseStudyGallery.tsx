
"use client";

import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export default function CaseStudyGallery({
  images,
}: {
  images: GalleryImage[];
}) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, images.length]);

  return (
    <>
      <div className="gallery">
        {images.map((image, index) => (
          <figure className="figure" key={image.src}>
            <button
              type="button"
              className="case-gallery-trigger imageFrame"
              onClick={() => setSelected(index)}
              aria-label={`Enlarge ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="image"
                loading="lazy"
              />
              <span className="case-gallery-zoom">
                View larger ↗
              </span>
            </button>

            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>

      
{selected !== null && (
  <div
    className="hotel-lightbox"
    role="dialog"
    aria-modal="true"
    aria-label={images[selected].alt}
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        setSelected(null);
      }
    }}
  >
    <div className="hotel-lightbox-toolbar case-gallery-toolbar">
      <button
        type="button"
        onClick={() => setSelected(null)}
        aria-label="Close enlarged screenshot"
      >
        ✕ Close
      </button>
    </div>

    <div className="hotel-lightbox-main case-gallery-lightbox-main">
      <img
        src={images[selected].src}
        alt={images[selected].alt}
      />
    </div>
  </div>
)}

    </>
  );
}
