import { ReactNode, useEffect, useState } from "react";
import "../styles/hero.css";

type Props = {
  image?: string;
  children?: ReactNode;
};

const DEFAULT_HERO_IMAGE = "/hero.png";
const FADE_DURATION_MS = 450;

export default function HeroSection({ image, children }: Props) {
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
        <h1>Custom Paracord Rifle & Shotgun Slings</h1>

        <p className="hero-text">Handmade. Durable. Customizable.</p>

        <p className="hero-subtext">Online Storefront Coming Soon</p>
      </div>

      {children && <div className="hero-featured-slot">{children}</div>}
    </div>
  );
}