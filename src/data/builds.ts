export type BuildImage = {
  src: string;
  alt: string;
};

export type Build = {
  id: string;
  name: string;
  images: BuildImage[];
};

export const builds: Build[] = [
  {
    id: "phantom-sling",
    name: "Phantom Sling",
    images: [
      {
        src: "/images/builds/Sanctified/PhantomSling1.png",
        alt: "Phantom sling",
      },
    ],
  },

  {
    id: "double-cobra-rifle",
    name: "Double Cobra",
    images: [
      {
        src: "/images/builds/DoubleCobra/double-cobra-on-rifle.png",
        alt: "Double cobra on rifle",
      },
    ],
  },

  {
    id: "double-mated-snake",
    name: "Double Mated Snake",
    images: [
      {
        src: "/images/builds/MatedSnake/double-mated-snake-weave.png",
        alt: "Double mated snake",
      },
    ],
  },

  {
    id: "carbon-fiber-spinal",
    name: "Carbon Fiber Spinal",
    images: [
      {
        src: "/images/builds/BanesCuff/carbon-fiber-spinal-main.png",
        alt: "Carbon fiber spinal",
      },
    ],
  },

  {
    id: "tan-double-cobra",
    name: "Tan Double Cobra",
    images: [
      {
        src: "/images/builds/DoubleCobra/tan-magpul-double-cobra.png",
        alt: "Tan double cobra sling",
      },
    ],
  },

  {
    id: "black-double-cobra",
    name: "Black Double Cobra",
    images: [
      {
        src: "/images/builds/DoubleCobra/black-magpul-double-cobra.png",
        alt: "Black double cobra sling",
      },
    ],
  },
];