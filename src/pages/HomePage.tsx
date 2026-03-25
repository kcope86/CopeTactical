import "../styles/home.css";
import { useMemo, useState } from "react";

import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import AboutPreviewSection from "../components/AboutPreviewSection";
import { getFeaturedBuilds } from "../data/buildHelpers";

export default function HomePage() {
  const featuredBuilds = useMemo(() => getFeaturedBuilds(), []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [interactionKey, setInteractionKey] = useState(0);

  const heroImage = featuredBuilds[selectedIndex]?.hero;

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