import "../styles/build-detail.css";

import { Link, useParams } from "react-router-dom";
import { MouseEvent, useRef, useState, WheelEvent } from "react";
import { getBuildById, getBuildGalleryImages } from "../data/buildHelpers";

export default function BuildDetailPage() {
  const { id } = useParams<{ id: string }>();
  const build = id ? getBuildById(id) : undefined;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const lastWheelTimeRef = useRef(0);

  if (!build) {
    return (
      <div className="page build-detail-page">
        <div className="build-detail-inner">
          <p className="build-detail-eyebrow">Build Not Found</p>
          <h1>That build is not available.</h1>

          <Link to="/gallery" className="build-detail-back-link">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = getBuildGalleryImages(build);
  const lightboxImages = [build.hero, ...galleryImages];

  const closeLightbox = () => setSelectedImageIndex(null);

  const showNextImage = () => {
    if (selectedImageIndex === null) return;

    setSelectedImageIndex(
      (selectedImageIndex + 1) % lightboxImages.length
    );
  };

  const showPreviousImage = () => {
    if (selectedImageIndex === null) return;

    setSelectedImageIndex(
      (selectedImageIndex - 1 + lightboxImages.length) %
        lightboxImages.length
    );
  };

  const handleLightboxBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  const handleLightboxWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (selectedImageIndex === null) return;

    e.preventDefault();

    const now = Date.now();
    if (now - lastWheelTimeRef.current < 180) {
      return;
    }

    const absX = Math.abs(e.deltaX);
    const absY = Math.abs(e.deltaY);

    if (absX < 8 && absY < 8) {
      return;
    }

    lastWheelTimeRef.current = now;

    if (absX > absY) {
      if (e.deltaX > 0) {
        showNextImage();
      } else if (e.deltaX < 0) {
        showPreviousImage();
      }

      return;
    }

    if (e.deltaY > 0) {
      showNextImage();
    } else if (e.deltaY < 0) {
      showPreviousImage();
    }
  };

  return (
    <div className="page build-detail-page">
      <div className="build-detail-inner">
        <Link to="/gallery" className="build-detail-back-link">
          ← Back to Gallery
        </Link>

        <div className="build-detail-hero">
          <div
            className="build-detail-main-image-wrapper"
            onClick={() => setSelectedImageIndex(0)}
          >
            <img
              src={build.hero}
              alt={build.name}
              className="build-detail-main-image"
            />
          </div>

          <div className="build-detail-summary">
            <p className="build-detail-eyebrow">Build Detail</p>

            <h1>{build.name}</h1>

            {build.description && (
              <p className="build-detail-description">
                {build.description}
              </p>
            )}

            {build.details && (
              <div className="build-detail-meta">
                {build.details.map((d) => (
                  <div
                    key={d.label}
                    className="build-detail-meta-item"
                  >
                    <span className="build-detail-meta-label">
                      {d.label}
                    </span>

                    <span className="build-detail-meta-value">
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <section className="build-detail-gallery-section">
          <h2>Build Gallery</h2>

          <div className="build-detail-gallery-grid">
            {galleryImages.map((imageSrc, index) => (
              <div
                key={imageSrc}
                className="build-detail-gallery-card"
                onClick={() => setSelectedImageIndex(index + 1)}
              >
                <img
                  src={imageSrc}
                  alt={`${build.name} ${index + 1}`}
                  className="build-detail-gallery-image"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="lightbox"
          onClick={handleLightboxBackdropClick}
          onWheel={handleLightboxWheel}
        >
          <button className="lightbox-prev" onClick={showPreviousImage}>
            ‹
          </button>

          <div className="lightbox-image-wrapper">
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>

            <img
              className="lightbox-image"
              src={lightboxImages[selectedImageIndex]}
              alt={`${build.name} image ${selectedImageIndex + 1}`}
            />
          </div>

          <button className="lightbox-next" onClick={showNextImage}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}