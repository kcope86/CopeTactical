import "../styles/gallery.css";

import { useState } from "react";
import { builds } from "../data/builds";

export default function GalleryPage() {
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);

  const next = () => {
    if (index === null) return;
    setIndex((index + 1) % builds.length);
  };

  const prev = () => {
    if (index === null) return;
    setIndex((index - 1 + builds.length) % builds.length);
  };

  return (
    <div className="page gallery-page">
      <div className="gallery-inner">
        <h1>Build Gallery</h1>

        <div className="gallery-grid">
          {builds.map((build, i) => (
            <div key={build.id} className="gallery-card">
              
              {/* IMAGE → opens viewer */}
              <div
                className="gallery-image-wrapper"
                onClick={() => open(i)}
              >
                <img
                  src={build.images[0].src}
                  alt={build.images[0].alt}
                />
              </div>

              {/* TITLE → product page later */}
              <div className="gallery-title">
                {build.name}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {index !== null && (
        <div className="lightbox">

          <button
            className="lightbox-close"
            onClick={close}
          >
            ×
          </button>

          <button
            className="lightbox-prev"
            onClick={prev}
          >
            ‹
          </button>

          <img
            className="lightbox-image"
            src={builds[index].images[0].src}
            alt=""
          />

          <button
            className="lightbox-next"
            onClick={next}
          >
            ›
          </button>

        </div>
      )}
    </div>
  );
}