import "../styles/gallery.css";

import { Link } from "react-router-dom";
import { useMemo } from "react";
import { getAvailableBuilds } from "../data/buildHelpers";

export default function GalleryPage() {
  const availableBuilds = useMemo(() => getAvailableBuilds(), []);

  return (
    <div className="page gallery-page">
      <div className="gallery-inner">
        <h1>Build Gallery</h1>

        <section className="gallery-info-section">
          <h2>Gallery Information</h2>
          <p>
            This gallery showcases completed sling builds and custom design
            examples. Each build highlights different combinations of paracord,
            webbing, hardware, adapters, and attachment methods.
          </p>
          <p>
            Select any build to view more detail about that configuration.
          </p>
        </section>

        <div className="gallery-list">
          {availableBuilds.map((build) => {
            const weaveDetail = build.details?.find(
              (d) => d.label === "Weave"
            );

            return (
              <Link
                key={build.id}
                to={`/build/${build.id}`}
                className="gallery-banner-link"
              >
                <article className="gallery-banner">
                  <div className="gallery-banner-image-wrapper">
                    <img src={build.thumb} alt={build.name} />
                  </div>

                  <div className="gallery-banner-content">
  <h2 className="gallery-banner-title">
    {build.name}
  </h2>

  {weaveDetail && (
    <div className="gallery-banner-meta-row">
      <span className="gallery-banner-meta-label">
        Pattern:
      </span>

      <span className="gallery-banner-meta-value">
        {weaveDetail.value}
      </span>
    </div>
  )}

  {build.description && (
    <div className="gallery-banner-meta-row">
      <span className="gallery-banner-meta-label">
        Description:
      </span>

      <span className="gallery-banner-meta-value">
        {build.description}
      </span>
    </div>
  )}
</div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}