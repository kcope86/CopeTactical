export type MaterialCategory = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

export const materialCategories: MaterialCategory[] = [
  // ===== TOP ROW =====

  {
    slug: "paracord",
    title: "Paracord",
    imageSrc: "/images/materials/categories/paracord.jpg",
    imageAlt: "Paracord category",
    description: "Browse available paracord colors, patterns, and combinations.",
  },

  {
    slug: "webbing-material",
    title: "Webbing Material",
    imageSrc: "/images/materials/categories/webbing-material.jpg",
    imageAlt: "Webbing material category",
    description: "View webbing types used in sling construction.",
  },

  {
    slug: "webbing-hardware",
    title: "Webbing Hardware",
    imageSrc: "/images/materials/categories/webbing-hardware.jpg",
    imageAlt: "Webbing hardware category",
    description: "Buckles, triglides, sliders, and other hardware.",
  },

  // ===== BOTTOM ROW =====

  {
    slug: "rings-and-d-rings",
    title: "Rings & D-Rings",
    imageSrc: "/images/materials/categories/rings-and-d-rings.jpg",
    imageAlt: "Rings and D-rings category",
    description: "Metal rings, D-rings, and attachment hardware.",
  },

  {
    slug: "rifle-attachment-points",
    title: "Rifle Attachment Points",
    imageSrc: "/images/materials/categories/attachment-points.jpg",
    imageAlt: "Rifle attachment points category",
    description: "Mounting options for different rifle platforms.",
  },

  {
    slug: "adapters",
    title: "Adapters",
    imageSrc: "/images/materials/categories/adapters.jpg",
    imageAlt: "Adapters category",
    description: "Adapters for connecting slings to various setups.",
  },
];

export function getMaterialCategoryBySlug(slug: string) {
  return materialCategories.find((category) => category.slug === slug);
}