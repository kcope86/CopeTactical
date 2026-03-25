export type MaterialItem = {
  id: string;
  categorySlug: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
  subtitle?: string;
  sortOrder?: number;
};

export const materialItems: MaterialItem[] = [
// =========================
// PARACORD
// =========================
{
  id: "paracord-black-550",
  categorySlug: "paracord",
  name: "Black 550 Paracord",
  imageSrc: "/images/materials/paracord/black-550.jpg",
  imageAlt: "Black 550 paracord",
  subtitle: "550 paracord",
  description: "Solid black 550 paracord.",
  sortOrder: 1,
},
{
  id: "paracord-white-550",
  categorySlug: "paracord",
  name: "White 550 Paracord",
  imageSrc: "/images/materials/paracord/white-550.jpg",
  imageAlt: "White 550 paracord",
  subtitle: "550 paracord",
  description: "Solid white 550 paracord.",
  sortOrder: 2,
},
{
  id: "paracord-od-green-550",
  categorySlug: "paracord",
  name: "OD Green 550 Paracord",
  imageSrc: "/images/materials/paracord/od-green-550.jpg",
  imageAlt: "OD green 550 paracord",
  subtitle: "550 paracord",
  description: "Solid OD green 550 paracord.",
  sortOrder: 3,
},
{
  id: "paracord-teal-550",
  categorySlug: "paracord",
  name: "Teal 550 Paracord",
  imageSrc: "/images/materials/paracord/teal-550.jpg",
  imageAlt: "Teal 550 paracord",
  subtitle: "550 paracord",
  description: "Solid teal 550 paracord.",
  sortOrder: 4,
},
{
  id: "paracord-coyote-550",
  categorySlug: "paracord",
  name: "Coyote 550 Paracord",
  imageSrc: "/images/materials/paracord/coyote-550.jpg",
  imageAlt: "Coyote 550 paracord",
  subtitle: "550 paracord",
  description: "Solid coyote brown 550 paracord.",
  sortOrder: 5,
},
{
  id: "paracord-desert-tan-550",
  categorySlug: "paracord",
  name: "Desert Tan 550 Paracord",
  imageSrc: "/images/materials/paracord/desert-tan-550.jpg",
  imageAlt: "Desert tan 550 paracord",
  subtitle: "550 paracord",
  description: "Solid desert tan 550 paracord.",
  sortOrder: 6,
},
{
  id: "paracord-gold-550",
  categorySlug: "paracord",
  name: "Gold 550 Paracord",
  imageSrc: "/images/materials/paracord/gold-550.jpg",
  imageAlt: "Gold 550 paracord",
  subtitle: "550 paracord",
  description: "Solid gold 550 paracord.",
  sortOrder: 7,
},
{
  id: "paracord-biosludge-550",
  categorySlug: "paracord",
  name: "Biosludge 550 Paracord",
  imageSrc: "/images/materials/paracord/biosludge-550.jpg",
  imageAlt: "Biosludge 550 paracord",
  subtitle: "550 paracord",
  description: "Green, white, and black patterned 550 paracord.",
  sortOrder: 8,
},
{
  id: "paracord-white-diamond-550",
  categorySlug: "paracord",
  name: "White Diamond 550 Paracord",
  imageSrc: "/images/materials/paracord/white-diamond-550.jpg",
  imageAlt: "White diamond 550 paracord",
  subtitle: "550 paracord",
  description: "White and black diamond-pattern 550 paracord.",
  sortOrder: 9,
},
{
  id: "paracord-black-diamond-550",
  categorySlug: "paracord",
  name: "Black Diamond 550 Paracord",
  imageSrc: "/images/materials/paracord/black-diamond-550.jpg",
  imageAlt: "Black diamond 550 paracord",
  subtitle: "550 paracord",
  description: "Black and grey diamond-pattern 550 paracord.",
  sortOrder: 10,
},
{
  id: "paracord-imperial-red-diamond-550",
  categorySlug: "paracord",
  name: "Imperial Red Diamond 550 Paracord",
  imageSrc: "/images/materials/paracord/imperial-red-diamond-550.jpg",
  imageAlt: "Imperial red diamond 550 paracord",
  subtitle: "550 paracord",
  description: "Imperial red and black diamond-pattern 550 paracord.",
  sortOrder: 11,
},
{
  id: "paracord-neon-turquoise-diamond-550",
  categorySlug: "paracord",
  name: "Neon Turquoise Diamond 550 Paracord",
  imageSrc: "/images/materials/paracord/neon-turquoise-diamond-550.jpg",
  imageAlt: "Neon turquoise diamond 550 paracord",
  subtitle: "550 paracord",
  description: "Neon turquoise and black diamond-pattern 550 paracord.",
  sortOrder: 12,
},
{
  id: "paracord-gold-diamond-550",
  categorySlug: "paracord",
  name: "Gold Diamond 550 Paracord",
  imageSrc: "/images/materials/paracord/gold-diamond-550.jpg",
  imageAlt: "Gold diamond 550 paracord",
  subtitle: "550 paracord",
  description: "Gold and black diamond-pattern 550 paracord.",
  sortOrder: 13,
},
  // =========================
  // WEBBING MATERIAL
  // =========================

  {
    id: "webbing-nylon-green",
    categorySlug: "webbing-material",
    name: "Nylon Webbing - Green",
    imageSrc: "/images/materials/webbing-material/nylon-webbing-green.jpg",
    imageAlt: "Green nylon webbing roll",
    subtitle: 'Available sizes: 1", 1-1/4", 1-1/2"',
    description:
      "Green nylon webbing with a standard woven finish. Available in 1\", 1-1/4\", and 1-1/2\" widths.",
    sortOrder: 1,
  },
  {
    id: "webbing-nylon-grey",
    categorySlug: "webbing-material",
    name: "Nylon Webbing - Grey",
    imageSrc: "/images/materials/webbing-material/nylon-webbing-grey.jpg",
    imageAlt: "Grey nylon webbing roll",
    subtitle: 'Available sizes: 1", 1-1/4", 1-1/2"',
    description:
      "Grey nylon webbing with a standard woven finish. Available in 1\", 1-1/4\", and 1-1/2\" widths.",
    sortOrder: 2,
  },
  {
    id: "webbing-cotton-black",
    categorySlug: "webbing-material",
    name: "Cotton Webbing - Black",
    imageSrc: "/images/materials/webbing-material/cotton-webbing-black.jpg",
    imageAlt: "Black cotton webbing roll",
    subtitle: 'Available sizes: 1", 1-1/4", 1-1/2"',
    description:
      "Black cotton webbing with a softer matte texture than nylon. Available in 1\", 1-1/4\", and 1-1/2\" widths.",
    sortOrder: 3,
  },
 
// =========================
// WEBBING HARDWARE
// =========================

{
  id: "hardware-metal-triglides",
  categorySlug: "webbing-hardware",
  name: "Metal Triglides",
  imageSrc: "/images/materials/webbing-hardware/metal-triglide.jpg",
  imageAlt: "Metal triglides",
  subtitle: 'Available sizes: 1", 1-1/4", 1-1/2"',
  description:
    "Metal triglides used for securing and adjusting webbing. Compatible with 1\", 1-1/4\", and 1-1/2\" webbing.",
  sortOrder: 1,
},

{
  id: "hardware-polymer-triglides",
  categorySlug: "webbing-hardware",
  name: "Polymer Triglides",
  imageSrc: "/images/materials/webbing-hardware/plastic-triglide.jpg",
  imageAlt: "Polymer triglides",
  subtitle: 'Available sizes: 1", 1-1/4", 1-1/2"',
  description:
    "Lightweight polymer triglides for webbing adjustment. Compatible with 1\", 1-1/4\", and 1-1/2\" webbing.",
  sortOrder: 2,
},

{
  id: "hardware-ladder-locks",
  categorySlug: "webbing-hardware",
  name: "Ladder Locks",
  imageSrc: "/images/materials/webbing-hardware/metal-ladder-locks.jpg",
  imageAlt: "Ladder locks",
  subtitle: 'Available sizes: 1", 1-1/4", 1-1/2"',
  description:
    "Ladder lock adjusters used for length adjustment on webbing straps. Compatible with 1\", 1-1/4\", and 1-1/2\" webbing.",
  sortOrder: 3,
},

{
  id: "hardware-cobra-buckles",
  categorySlug: "webbing-hardware",
  name: "Quick-Release Buckles",
  imageSrc: "/images/materials/webbing-hardware/cobra-style-buckles.jpg",
  imageAlt: "Quick release buckles",
  subtitle: 'Available sizes: 1", 1-1/4", 1-1/2"',
  description:
    "Heavy-duty quick-release buckles for tactical slings. Compatible with 1\", 1-1/4\", and 1-1/2\" webbing.",
  sortOrder: 4,
},

  // =========================
  // RINGS & D-RINGS
  // =========================

 {
  id: "hardware-metal-o-rings",
  categorySlug: "rings-and-d-rings",
  name: "Metal O-Rings",
  imageSrc: "/images/materials/rings-and-d-rings/metal-o-rings.jpg",
  imageAlt: "Metal O rings",
  subtitle: 'Available sizes: 1", 1-1/4", 1-1/2"',
  description:
    "Heavy-duty metal O-rings for sling attachment points. Compatible with 1\", 1-1/4\", and 1-1/2\" webbing.",
  sortOrder: 1,
},

{
  id: "hardware-metal-d-rings",
  categorySlug: "rings-and-d-rings",
  name: "Metal D-Rings",
  imageSrc: "/images/materials/rings-and-d-rings/metal-d-rings.jpg",
  imageAlt: "Metal D rings",
  subtitle: 'Available sizes: 1", 1-1/4", 1-1/2"',
  description:
    "Steel D-rings used for sling mounting and adjustment. Compatible with 1\", 1-1/4\", and 1-1/2\" webbing.",
  sortOrder: 2,
},


 // =========================
// RIFLE ATTACHMENT POINTS
// =========================

{
  id: "attachment-qd-swivel-pair",
  categorySlug: "rifle-attachment-points",
  name: "QD Swivel",
  imageSrc: "/images/materials/attachment-points/qd-sling-swivel-1.jpg",
  imageAlt: "QD swivel",
  description: "Quick-detach sling swivel set.",
  sortOrder: 1,
},

{
  id: "attachment-qd-loop-mount",
  categorySlug: "rifle-attachment-points",
  name: "QD Loop Mount",
  imageSrc: "/images/materials/attachment-points/qd-sling-swivel.jpg",
  imageAlt: "QD loop mount",
  description: "QD mount with loop for sling attachment.",
  sortOrder: 2,
},

{
  id: "attachment-hk-clip",
  categorySlug: "rifle-attachment-points",
  name: "HK Clip",
  imageSrc: "/images/materials/attachment-points/hk-sling-clips.jpg",
  imageAlt: "HK sling clip",
  description: "HK-style metal sling clip.",
  sortOrder: 3,
},

{
  id: "attachment-snap-clip",
  categorySlug: "rifle-attachment-points",
  name: "Snap Clip",
  imageSrc: "/images/materials/attachment-points/clip.jpg",
  imageAlt: "Snap clip",
  description: "Spring-loaded sling clip attachment.",
  sortOrder: 4,
},

{
  id: "attachment-magpul-hook",
  categorySlug: "rifle-attachment-points",
  name: "Magpul Hook Adapter",
  imageSrc: "/images/materials/attachment-points/qd-clip.jpg",
  imageAlt: "Magpul sling hook",
  description: "Polymer hook adapter for lightweight sling setups.",
  sortOrder: 5,
},

  // =========================
// ADAPTERS
// =========================

{
  id: "adapter-loop-swivel",
  categorySlug: "adapters",
  name: "Loop / Swivel Adapter",
  imageSrc: "/images/materials/adapters/tactical-link-triglide-adapter.jpg",
  imageAlt: "Loop swivel adapter",
  subtitle: 'Fits 1-1/4" webbing',
  description:
    "Loop-style adapter with swivel attachment point for sling mounting. Compatible with 1-1/4\" webbing.",
  sortOrder: 1,
},

{
  id: "adapter-custom-sewn",
  categorySlug: "adapters",
  name: "Custom Sewn Adapter",
  imageSrc: "/images/materials/adapters/custom-adapter.jpg",
  imageAlt: "Custom sewn adapter",
  subtitle: 'Fits webbing sizes: 1", 1-1/4", 1-1/2"',
  description:
    "Custom sewn adapter with webbing, ring, and hook hardware for specialized sling configurations.",
  sortOrder: 2,
},

{
  id: "adapter-single-point-qd",
  categorySlug: "adapters",
  name: "Single Point / QD Adapter",
  imageSrc: "/images/materials/adapters/single-point-qd-adapter.jpg",
  imageAlt: "Single point QD adapter",
  subtitle: 'Fits webbing sizes: 1", 1-1/4", 1-1/2"',
  description:
    "Adapter for single-point sling setups using QD or clip attachment hardware.",
  sortOrder: 3,
},
];