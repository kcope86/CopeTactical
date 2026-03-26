import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

type Props = {
  image?: string;
  header: string;
  body: string;
  sub: string;
  subTo: string;
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
  header,
  body,
  sub,
  subTo,
  children,
  onSwipeNext,
  onSwipePrev,
}: Props) {
  const nextImage = image ?? DEFAULT_HERO_IMAGE;

  const [baseImage, setBaseImage] = useState<string>(nextImage);
  const [overlayImage, setOverlayImage] = useState<string | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const [displayHeader, setDisplayHeader] = useState(header);
  const [displayBody, setDisplayBody] = useState(body);
  const [displaySub, setDisplaySub] = useState(sub);
  const [displaySubTo, setDisplaySubTo] = useState(subTo);
  const [textVisible, setTextVisible] = useState(true);

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

  useEffect(() => {
    const contentChanged =
      header !== displayHeader ||
      body !== displayBody ||
      sub !== displaySub ||
      subTo !== displaySubTo;

    if (!contentChanged) {
      return;
    }

    setTextVisible(false);

    const swapTimer = window.setTimeout(() => {
      setDisplayHeader(header);
      setDisplayBody(body);
      setDisplaySub(sub);
      setDisplaySubTo(subTo);
      setTextVisible(true);
    }, FADE_DURATION_MS / 2);

    return () => {
      window.clearTimeout(swapTimer);
    };
  }, [header, body, sub, subTo, displayHeader, displayBody, displaySub, displaySubTo]);

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

      <div className={`hero-content${textVisible ? " visible" : " hidden"}`}>
        <h1>{displayHeader}</h1>
        <p className="hero-text">{displayBody}</p>
        <p className="hero-subtext">
          <Link to={displaySubTo} className="hero-subtext-link">
            {displaySub}
          </Link>
        </p>
      </div>

      {children && <div className="hero-featured-slot">{children}</div>}
    </div>
  );
}