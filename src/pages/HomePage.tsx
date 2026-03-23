import "../styles/home.css";
import { useState } from "react";

import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import AboutPreviewSection from "../components/AboutPreviewSection";

export default function HomePage() {
  const [heroImage, setHeroImage] = useState<string | undefined>(undefined);

  return (
    <>
      <HeroSection image={heroImage} />
      <FeaturedSection onSelectImage={setHeroImage} />
      <AboutPreviewSection />
    </>
  );
}