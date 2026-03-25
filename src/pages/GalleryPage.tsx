import "../styles/gallery.css";

import { Link } from "react-router-dom";
import { MouseEvent, useMemo, useState } from "react";
import { getAvailableBuilds, getBuildGalleryImages } from "../data/buildHelpers";

export default function GalleryPage() {
  const availableBuilds = useMemo(() => getAvailableBuilds(), []);
  const [selectedBuildIndex, setSelectedBuildIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedBuild =
    selectedBuildIndex !== null ? availableBuilds[selectedBuildIndex] : null;

  const selectedBuildImages = selectedBuild
    ? [selectedBuild.hero, ...getBuildGalleryImages(selectedBuild)]
    : [];

  const open = (buildIndex: number) => {
    setSelectedBuildIndex(buildIndex);
    setSelectedImageIndex(0);
  };

  const close = () => {
    setSelectedBuildIndex(null);
    setSelectedImageIndex(0);
  };

  const next = () => {
    if (selectedBuildImages.length === 0) return;
    setSelectedImageIndex(
      (current) => (current + 1) % selectedBuildImages.length
    );
  };

  const prev = () => {
    if (selectedBuildImages.length === 0) return;
    setSelectedImageIndex(
      (current) =>
        (current - 1 + selectedBuildImages.length) % selectedBuildImages.length
    );
  };

  const handleLightboxBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <div className="page gallery-page">
      <div className="gallery-inner">
        <h1>Build Gallery</h1>

        <div className="gallery-grid">
          {availableBuilds.map((build, i) => (
            <div key={build.id} className="gallery-card">
              <div className="gallery-image-wrapper" onClick={() => open(i)}>
                <img src={build.thumb} alt={build.name} />
              </div>

              <Link to={`/build/${build.id}`} className="gallery-title-link">
                <div className="gallery-title">{build.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {selectedBuild && selectedBuildImages.length > 0 && (
        <div className="lightbox" onClick={handleLightboxBackdropClick}>
          <button className="lightbox-close" onClick={close}>
            ×
          </button>

          <button className="lightbox-prev" onClick={prev}>
            ‹
          </button>

          <div className="lightbox-counter">
            {selectedImageIndex + 1} / {selectedBuildImages.length}
          </div>

          <img
            className="lightbox-image"
            src={selectedBuildImages[selectedImageIndex]}
            alt={`${selectedBuild.name} image ${selectedImageIndex + 1}`}
          />

          <button className="lightbox-next" onClick={next}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}