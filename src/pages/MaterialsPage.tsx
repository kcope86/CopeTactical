import "../styles/materials.css";

import { Link } from "react-router-dom";
import { materialCategories } from "../data/materialCategories";

export default function MaterialsPage() {
  return (
    <div className="page materials-page">
      <div className="materials-inner">
        <div className="materials-hero">
          <h1>Materials</h1>
          <p>
            Browse the materials and hardware categories used across Cope Tactical
            builds. Select a category to view available options.
          </p>
        </div>

        <div className="materials-grid">
          {materialCategories.map((category) => (
            <Link
              key={category.slug}
              to={`/materials/${category.slug}`}
              className="materials-card-link"
            >
              <article className="materials-card">
                <div className="materials-card-image-wrapper">
                  <img src={category.imageSrc} alt={category.imageAlt} />
                </div>

                <div className="materials-card-body">
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                  <span className="materials-card-cta">View options</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}