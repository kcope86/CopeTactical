export type Build = {
  id: string;
  name: string;
  featured: boolean;
  available: boolean;
  hero: string;
  thumb: string;
  galleryCount: number;
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
  },
  {
    id: "shade-double-cobra",
    name: "The Shade",
    featured: true,
    available: true,
    hero: "/images/builds/shade-double-cobra/hero.jpg",
    thumb: "/images/builds/shade-double-cobra/thumb.jpg",
    galleryCount: 3,
  },
  {
    id: "america-double-cobra",
    name: "America F*** Yeah!",
    featured: true,
    available: true,
    hero: "/images/builds/america-double-cobra/hero.jpg",
    thumb: "/images/builds/america-double-cobra/thumb.jpg",
    galleryCount: 3,
  },
  {
    id: "hunter-double-cobra",
    name: "The Hunter",
    featured: true,
    available: true,
    hero: "/images/builds/hunter-double-cobra/hero.jpg",
    thumb: "/images/builds/hunter-double-cobra/thumb.jpg",
    galleryCount: 3,
  },
  {
    id: "sultan-mated-snake",
    name: "The Sultan",
    featured: true,
    available: true,
    hero: "/images/builds/sultan-mated-snake/hero.jpg",
    thumb: "/images/builds/sultan-mated-snake/thumb.jpg",
    galleryCount: 2,
  },
  {
    id: "reaper-banes-cuff",
    name: "The Reaper",
    featured: true,
    available: true,
    hero: "/images/builds/reaper-banes-cuff/hero.jpg",
    thumb: "/images/builds/reaper-banes-cuff/thumb.jpg",
    galleryCount: 4,
  },
];