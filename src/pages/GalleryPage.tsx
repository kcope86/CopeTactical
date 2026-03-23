import "../styles/gallery.css";

import FeaturedCard from "../components/FeaturedCard";
import { builds } from "../data/builds";

export default function GalleryPage() {
  return (
    <div className="page gallery-page">
      <div className="gallery-inner">
        <h1>Build Gallery</h1>

        <div className="gallery-grid">
          {builds.map((build) => (
            <FeaturedCard
              key={build.id}
              imageSrc={build.images[0].src}
              imageAlt={build.images[0].alt}
              title={build.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}