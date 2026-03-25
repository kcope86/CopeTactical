import { ReactNode, useEffect, useRef, useState } from "react";
import "../styles/hero.css";

type Props = {
  image?: string;
  children?: ReactNode;
  onSwipeNext?: () => void;
  onSwipePrev?: () => void;
};

const DEFAULT_HERO_IMAGE = "/hero.png";
const FADE_DURATION_MS = 450;
const MOBILE_BREAKPOINT_PX = 480;
const SWIPE_THRESHOLD_PX = 50;

export default function HeroSection({
  image,
  children,
  onSwipeNext,
  onSwipePrev,
}: Props) {
  const nextImage = image ?? DEFAULT_HERO_IMAGE;

  const [baseImage, setBaseImage] = useState<string>(nextImage);
  const [overlayImage, setOverlayImage] = useState<string | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const touchCurrentXRef = useRef<number | null>(null);

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

  function isMobileWidth() {
    return typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT_PX;
  }

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    if (!isMobileWidth()) {
      return;
    }

    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchCurrentXRef.current = touch.clientX;
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (!isMobileWidth()) {
      return;
    }

    const touch = e.touches[0];
    touchCurrentXRef.current = touch.clientX;
  }

  function handleTouchEnd() {
    if (!isMobileWidth()) {
      touchStartXRef.current = null;
      touchCurrentXRef.current = null;
      return;
    }

    const startX = touchStartXRef.current;
    const endX = touchCurrentXRef.current;

    touchStartXRef.current = null;
    touchCurrentXRef.current = null;

    if (startX === null || endX === null) {
      return;
    }

    const deltaX = endX - startX;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) {
      return;
    }

    if (deltaX < 0) {
      onSwipeNext?.();
      return;
    }

    onSwipePrev?.();
  }

  return (
    <div
      className="hero"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
        <h1>Custom Handmade Paracord Rifle Slings.</h1>

        <p className="hero-text">
          Built by hand, one at a time. No Factory. No Shortcuts. No Shit.
        </p>
        <p className="hero-subtext">
          Check out some of my completed builds, and current/upcoming projects on the
          Builds page
        </p>
        <p className="hero-subtext">
          Learn more about Cope Tactical - what makes our slings stand-out, and why
          they are outstanding.
        </p>
        <p className="hero-subtext">
          Quality you'll notice the moment you see it.
        </p>
        <p className="hero-subtext">
          Comfort you'll feel the moment you wear it.
        </p>
        <p className="hero-subtext">
          Dependability you'll trust - every time you run it.
        </p>

        <p className="hero-subtext"></p>
      </div>

      {children && <div className="hero-featured-slot">{children}</div>}
    </div>
  );
}