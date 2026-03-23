import { useEffect, useState } from "react";
import "../styles/hero.css";

type Props = {
  image?: string;
};

const DEFAULT_HERO_IMAGE = "/hero.png";
const FADE_DURATION_MS = 450;

export default function HeroSection({ image }: Props) {
  const nextImage = image ?? DEFAULT_HERO_IMAGE;

  const [baseImage, setBaseImage] = useState<string>(nextImage);
  const [overlayImage, setOverlayImage] = useState<string | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    if (nextImage === baseImage) {
      return;
    }

    setOverlayImage(nextImage);

    const showTimer = window.setTimeout(() => {
      setOverlayVisible(true);
    }, 20);

    const finishTimer = window.setTimeout(() => {
      setBaseImage(nextImage);
      setOverlayImage(null);
      setOverlayVisible(false);
    }, FADE_DURATION_MS);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(finishTimer);
    };
  }, [nextImage, baseImage]);

  return (
    <div className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${baseImage})`,
        }}
      ></div>

      {overlayImage && (
        <div
          className={`hero-bg hero-bg-overlay${overlayVisible ? " visible" : ""}`}
          style={{
            backgroundImage: `url(${overlayImage})`,
          }}
        ></div>
      )}

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Custom Paracord Rifle Slings</h1>

        <p className="hero-text">Handmade. Durable. Built for real use.</p>

        <p className="hero-subtext">Built one at a time. No shortcuts.</p>
      </div>
    </div>
  );
}