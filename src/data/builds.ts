export type BuildDetailItem = {
  label: string;
  value: string;
};

export type Build = {
  id: string;
  name: string;
  featured: boolean;
  available: boolean;
  hero: string;
  thumb: string;
  galleryCount: number;

  description?: string;
  details?: BuildDetailItem[];
};

export const builds: Build[] = [
  {
    id: "sanctified-phantom",
    name: "Sanctified Phantom",
    featured: true,
    available: true,
    hero: "/images/builds/sanctified-phantom/hero.jpg",
    thumb: "/images/builds/sanctified-phantom/thumb.jpg",
    galleryCount: 3,

    description:
      "Eye-catching neon green, black, and titanium camo paracord. Designed for strength, flexibility, and compatibility with a Magpul connectors and single-point sling adapter.",

    details: [
      { label: "Weave", value: "Sanctified Covenant" },
      { label: "Colors", value: "Neon Green / Black / Titanium Camo" },
      { label: "Webbing", value: '1-1/4" Black Nylon Webbing.'},
      { label: "Type", value: "Two-point with with Magpul Single-point adapter." },
      { label: "Status", value: "Delivered to Customer" },
    ],
  },

  {
    id: "shade-double-cobra",
    name: "The Shade",
    featured: true,
    available: true,
    hero: "/images/builds/shade-double-cobra/hero.jpg",
    thumb: "/images/builds/shade-double-cobra/thumb.jpg",
    galleryCount: 3,

    description:
      "Low-profile tactical sling using dark tones and a double cobra weave for durability and comfort.",

    details: [
      { label: "Weave", value: "Double Cobra" },
      { label: "Colors", value: "Black / Titanium Camo" },
      { label: "Webbing", value: '1-1/4" Black Nylon Webbing.' },
      { label: "Type", value: "Two-point with convertible single-pointadapter" },
      { label: "Status", value: "Delivered to Customer" },
    ],
  },

  {
    id: "america-double-cobra",
    name: "America F*** Yeah!",
    featured: true,
    available: true,
    hero: "/images/builds/america-double-cobra/hero.jpg",
    thumb: "/images/builds/america-double-cobra/thumb.jpg",
    galleryCount: 3,

    description:
      "Red, white, and blue double cobra build with heavy-duty, custom sewn, convertible hardware configuration.",

    details: [
      { label: "Weave", value: "Double Cobra" },
      { label: "Colors", value: "Red / White / Blue" },
      { label: "Webbing", value: '1-1/4" Nylon Webbing.' },
      { label: "Type", value: "custom convertible" },
      { label: "Status", value: "Delivered to Customer" },
    ],
  },

  {
    id: "hunter-double-cobra",
    name: "The Hunter",
    featured: true,
    available: true,
    hero: "/images/builds/hunter-double-cobra/hero.jpg",
    thumb: "/images/builds/hunter-double-cobra/thumb.jpg",
    galleryCount: 3,

    description:
      "High-vis reinforced double cobra weave built with hunter orange and black/brown. Great for hunting season.",

    details: [
      { label: "Weave", value: "Double Cobra" },
      { label: "Colors", value: "Hunter Orange / Black/Brown" },
      { label: "Webbing", value: '1-1/4" Grey Cotton Webbing.' },
      { label: "Type", value: "2 to 1 point convertible QD Swivels" },
      { label: "Status", value: "Delivered to Customer" },
    ],
  },

  {
    id: "sultan-mated-snake",
    name: "The Sultan",
    featured: true,
    available: true,
    hero: "/images/builds/sultan-mated-snake/hero.jpg",
    thumb: "/images/builds/sultan-mated-snake/thumb.jpg",
    galleryCount: 2,

    description:
      "A beautifully crafted and fully functional sling using a double mated snake weave pattern for a unique look.",

    details: [
      { label: "Weave", value: "Mated Snake" },
      { label: "Colors", value: "White / Black / Gold" },
      { label: "Webbing", value: '1-1/4" Desert-Tan Nylon Webbing.' },
      { label: "Type", value: "2 to 1 point convertible QD Swivels" },
      { label: "Status", value: "Delivered to Customer" },
    ],
  },

  {
    id: "reaper-banes-cuff",
    name: "The Reaper",
    featured: true,
    available: true,
    hero: "/images/builds/reaper-banes-cuff/hero.jpg",
    thumb: "/images/builds/reaper-banes-cuff/thumb.jpg",
    galleryCount: 4,

    description:
      "Heavy-duty decorative, yet fully-functional sling with reinforced Bane's Cuff weave and skull hardware accents.",

    details: [
      { label: "Weave", value: "Bane's Cuff" },
      { label: "Colors", value: "Red / Orange / black-silver" },
      { label: "Webbing", value: '1" Black Nylon Webbing.' },
      { label: "Type", value: "convertible sling that utilizes cobra style buckles allowing the user to switch the rifle attachment points at will" },
      { label: "Status", value: "Delivered to Customer" },
    ],
  },
];