import "../styles/build-detail.css";

import { Link, useParams } from "react-router-dom";
import { getBuildById, getBuildGalleryImages } from "../data/buildHelpers";

export default function BuildDetailPage() {
  const { id } = useParams<{ id: string }>();
  const build = id ? getBuildById(id) : undefined;

  if (!build) {
    return (
      <div className="page build-detail-page">
        <div className="build-detail-inner">
          <p className="build-detail-eyebrow">Build Not Found</p>
          <h1>That build is not available.</h1>
          <p className="build-detail-description">
            The build you are looking for does not exist or is not currently
            published.
          </p>

          <Link to="/gallery" className="build-detail-back-link">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = getBuildGalleryImages(build);

  return (
    <div className="page build-detail-page">
      <div className="build-detail-inner">
        <Link to="/gallery" className="build-detail-back-link">
          ← Back to Gallery
        </Link>

        <div className="build-detail-hero">
          <div className="build-detail-main-image-wrapper">
            <img
              src={build.hero}
              alt={build.name}
              className="build-detail-main-image"
            />
          </div>

          <div className="build-detail-summary">
            <p className="build-detail-eyebrow">Build Detail</p>
            <h1>{build.name}</h1>

            <p className="build-detail-description">
              This build page is the new foundation for future product and
              storefront work. It currently shows the core imagery and
              structure, and will later expand with configuration options,
              materials, hardware details, and ordering or inquiry actions.
            </p>

            <div className="build-detail-meta">
              <div className="build-detail-meta-item">
                <span className="build-detail-meta-label">Build ID</span>
                <span className="build-detail-meta-value">{build.id}</span>
              </div>

              <div className="build-detail-meta-item">
                <span className="build-detail-meta-label">Gallery Images</span>
                <span className="build-detail-meta-value">
                  {build.galleryCount}
                </span>
              </div>

              <div className="build-detail-meta-item">
                <span className="build-detail-meta-label">Status</span>
                <span className="build-detail-meta-value">
                  {build.available ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="build-detail-gallery-section">
          <h2>Build Gallery</h2>

          <div className="build-detail-gallery-grid">
            {galleryImages.map((imageSrc, index) => (
              <div key={imageSrc} className="build-detail-gallery-card">
                <img
                  src={imageSrc}
                  alt={`${build.name} gallery image ${index + 1}`}
                  className="build-detail-gallery-image"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}