import "../styles/home.css";
import { useMemo, useState } from "react";

import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import AboutPreviewSection from "../components/AboutPreviewSection";
import { getFeaturedBuilds } from "../data/buildHelpers";

const heroSlides = [
  {
    header: "Custom Handmade Paracord Rifle Slings",
    body: "Hand-made. No factory. No shortcuts. No Shit.",
    sub: "Veteran owned and operated. Learn more about who we are →",
    subTo: "/about#who-we-are",
  },
  {
    header: "Better methods. Better builds.",
    body: "U.S. paracord, pre-shrunk before weaving, built for long-term use.",
    sub: "How we do it better →",
    subTo: "/about#how-we-do-it-better",
  },
  {
    header: "550 Paracord - Born with the airborne.",
    body: "Developed in the early 30s, still in service.",
    sub: "Learn more about 550 →",
    subTo: "/paracord",
  },
  {
    header: "Form and function, done right.",
    body: "See finished builds featuring Cope Tactical slings.",
    sub: "View gallery →",
    subTo: "/gallery",
  },
  {
    header: "Your rifle. Your sling.",
    body: "We accommodate most special requests.",
    sub: "See some custom options →",
    subTo: "/gallery",
  },
  {
    header: "Your build starts here.",
    body: "Tell me what you want and I’ll make it happen.",
    sub: "Start here →",
    subTo: "/contact",
  },
] as const;

export default function HomePage() {
  const featuredBuilds = useMemo(() => getFeaturedBuilds(), []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [interactionKey, setInteractionKey] = useState(0);

  const heroImage = featuredBuilds[selectedIndex]?.hero;
  const currentSlide = heroSlides[selectedIndex] ?? heroSlides[0];

  function registerManualInteraction() {
    setInteractionKey((current) => current + 1);
  }

  function handleSelectIndex(index: number) {
    if (!featuredBuilds.length) {
      return;
    }

    const normalizedIndex =
      ((index % featuredBuilds.length) + featuredBuilds.length) %
      featuredBuilds.length;

    setSelectedIndex(normalizedIndex);
    registerManualInteraction();
  }

  function handleSwipeNext() {
    handleSelectIndex(selectedIndex + 1);
  }

  function handleSwipePrev() {
    handleSelectIndex(selectedIndex - 1);
  }

  return (
    <>
      <HeroSection
        image={heroImage}
        header={currentSlide.header}
        body={currentSlide.body}
        sub={currentSlide.sub}
        subTo={currentSlide.subTo}
        onSwipeNext={handleSwipeNext}
        onSwipePrev={handleSwipePrev}
      >
        <FeaturedSection
          selectedIndex={selectedIndex}
          onSelectIndex={handleSelectIndex}
          interactionKey={interactionKey}
        />
      </HeroSection>

      <AboutPreviewSection />
    </>
  );
}