import "../styles/materials.css";

import { Link, useParams } from "react-router-dom";
import { getMaterialCategoryBySlug } from "../data/materialCategories";
import { materialItems } from "../data/materialItems";

type MaterialInfoContent = {
  title: string;
  paragraphs: string[];
};

function getMaterialInfoContent(categorySlug: string): MaterialInfoContent {
  switch (categorySlug) {
    case "paracord":
      return {
        title: "Paracord Information",
        paragraphs: [
          "550 paracord is a strong, lightweight nylon cord originally used in parachute suspension lines. It is commonly used in tactical gear, outdoor equipment, and custom sling construction.",
          "Different colors and patterns are available, including solid, diamond, camo, and multi-color weaves.",
        ],
      };

    case "webbing-material":
      return {
        title: "Webbing Material Information",
        paragraphs: [
          "Webbing forms the structural base of many sling builds. Different materials offer different feel, stiffness, texture, and durability depending on the intended use.",
          'Available options may include nylon and cotton webbing in widths such as 1", 1-1/4", and 1-1/2". Material choice affects comfort, flexibility, and overall finished appearance.',
        ],
      };

    case "webbing-hardware":
      return {
        title: "Webbing Hardware Information",
        paragraphs: [
          "Webbing hardware is used to secure, route, adjust, and connect sling straps. Common examples include triglides, ladder locks, and quick-release buckles.",
          'Select what you need based on style, function, strength, and finish. Compatibile with webbing widths such as 1", 1-1/4", and 1-1/2".',
        ],
      };

    case "rings-and-d-rings":
      return {
        title: "Rings & D-Rings Information",
        paragraphs: [
          "Rings and D-rings are used as connection points, routing points, and transition hardware in custom sling setups. They can affect both function and appearance depending on size and finish.",
          "Different sizes, shapes, and coatings may be used depending on the application, whether for attachment, adjustment, or integration with clips and adapters.",
        ],
      };

    case "rifle-attachment-points":
      return {
        title: "Rifle Attachment Point Information",
        paragraphs: [
          "Rifle attachment points connect the sling to the firearm. Common options include QD swivels, QD loop mounts, HK-style clips, snap clips, and other attachment hardware.",
          "The best option depends on shooter preference, rifle platform, mounting hardware already installed on the firearm, and the type of sling setup being built.",
        ],
      };

    case "adapters":
  return {
    title: "Adapter Information",
    paragraphs: [
      "Adapters are used to convert a standard two-point sling into a one-point sling configuration. These adapters allow the sling to connect to a single rear attachment point while still using traditional two-point sling hardware.",
      "This provides greater freedom of movement while maintaining the strength and adjustability of a two-point sling. Adapters are commonly used on rifles equipped with rear QD mounts, loops, or clip-style attachment points.",
    ],
  };

    default:
      return {
        title: "Material Information",
        paragraphs: [
          "This section provides additional context about the materials and hardware used in this category.",
        ],
      };
  }
}

export default function MaterialDetailsPage() {
  const { category } = useParams<{ category: string }>();

  const materialCategory = category
    ? getMaterialCategoryBySlug(category)
    : undefined;

  if (!materialCategory) {
    return (
      <div className="page material-details-page">
        <div className="material-details-inner">
          <div className="material-details-not-found">
            <h1>Material category not found</h1>
            <Link to="/materials" className="material-details-back-link">
              Back to Materials
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const itemsForCategory = materialItems
    .filter((item) => item.categorySlug === materialCategory.slug)
    .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));

  const infoContent = getMaterialInfoContent(materialCategory.slug);

  return (
    <div className="page material-details-page">
      <div className="material-details-inner">
        <div className="material-details-header-wide">
          <div className="material-details-side-image">
            <img
              src={materialCategory.imageSrc}
              alt={materialCategory.imageAlt}
            />
          </div>

          <div className="material-details-copy">
            <p className="material-details-eyebrow">Materials</p>
            <h1>{materialCategory.title}</h1>
            <p>{materialCategory.description}</p>
          </div>

          <div className="material-details-side-image">
            <img
              src={materialCategory.imageSrc}
              alt={materialCategory.imageAlt}
            />
          </div>
        </div>

        <section className="material-info-section">
          <h2>{infoContent.title}</h2>

          {infoContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <section className="material-details-content">
          {itemsForCategory.length === 0 && (
            <div className="material-details-placeholder">
              <h2>No materials added yet</h2>
              <p>
                This category exists, but no material items were found in
                materialItems.ts
              </p>
            </div>
          )}

          {itemsForCategory.length > 0 && (
            <div className="material-items-grid">
              {itemsForCategory.map((item) => (
                <article key={item.id} className="material-item-card">
                  <div className="material-item-image-wrapper">
                    <img src={item.imageSrc} alt={item.imageAlt} />
                  </div>

                  <div className="material-item-card-body">
                    <h2>{item.name}</h2>

                    {item.subtitle && (
                      <p className="material-item-subtitle">{item.subtitle}</p>
                    )}

                    {item.description && (
                      <p className="material-item-description">
                        {item.description}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <div className="material-details-actions">
          <Link to="/materials" className="material-details-back-link">
            Back to Materials
          </Link>
        </div>
      </div>
    </div>
  );
}