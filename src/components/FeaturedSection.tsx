import { useEffect, useMemo, useRef, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { getFeaturedBuilds } from "../data/buildHelpers";

type Props = {
  onSelectImage: (src: string) => void;
};

const AUTO_SCROLL_MS = 5000;
const SWIPE_THRESHOLD_PX = 50;
const FAST_SWIPE_MS = 220;
const VERY_FAST_SWIPE_MS = 120;

function getVisibleCount(width: number): number {
  if (width <= 480) return 3;
  if (width <= 1100) return 2;
  return 4;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function FeaturedSection({ onSelectImage }: Props) {
  const featuredBuilds = useMemo(() => getFeaturedBuilds(), []);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState<number>(() =>
    typeof window === "undefined" ? 4 : getVisibleCount(window.innerWidth)
  );
  const [startIndex, setStartIndex] = useState(0);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState<boolean>(() =>
    typeof document === "undefined" ? true : !document.hidden
  );

  const touchStartXRef = useRef<number | null>(null);
  const touchCurrentXRef = useRef<number | null>(null);
  const touchStartTimeRef = useRef<number | null>(null);

  const maxStartIndex = Math.max(0, featuredBuilds.length - visibleCount);

  const endIndex = Math.min(
    featuredBuilds.length - 1,
    startIndex + visibleCount - 1
  );

  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount(window.innerWidth));
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!featuredBuilds.length) return;

    const build = featuredBuilds[selectedIndex];
    if (!build) return;

    onSelectImage(build.hero);
  }, [selectedIndex, featuredBuilds, onSelectImage]);

  useEffect(() => {
    function handleVisibilityChange() {
      setIsTabVisible(!document.hidden);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const shouldPause = isHoveredOrFocused || !isTabVisible;

    if (shouldPause || featuredBuilds.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setSelectedIndex((current) => (current + 1) % featuredBuilds.length);
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(intervalId);
  }, [featuredBuilds.length, isHoveredOrFocused, isTabVisible]);

  useEffect(() => {
    if (!featuredBuilds.length) return;

    setSelectedIndex((current) => clamp(current, 0, featuredBuilds.length - 1));
  }, [featuredBuilds.length]);

  useEffect(() => {
    setStartIndex((current) => clamp(current, 0, maxStartIndex));
  }, [maxStartIndex]);

  function moveViewportBy(stepDelta: number) {
    setStartIndex((current) =>
      clamp(current + stepDelta, 0, maxStartIndex)
    );
  }

  function handlePrev() {
    moveViewportBy(-1);
  }

  function handleNext() {
    moveViewportBy(1);
  }

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchCurrentXRef.current = touch.clientX;
    touchStartTimeRef.current = Date.now();
    setIsHoveredOrFocused(true);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    const touch = e.touches[0];
    touchCurrentXRef.current = touch.clientX;
  }

  function handleTouchEnd() {
    const startX = touchStartXRef.current;
    const endX = touchCurrentXRef.current;
    const startTime = touchStartTimeRef.current;

    touchStartXRef.current = null;
    touchCurrentXRef.current = null;
    touchStartTimeRef.current = null;
    setIsHoveredOrFocused(false);

    if (startX === null || endX === null || startTime === null) {
      return;
    }

    const deltaX = endX - startX;
    const absDeltaX = Math.abs(deltaX);
    const elapsedMs = Date.now() - startTime;

    if (absDeltaX < SWIPE_THRESHOLD_PX) {
      return;
    }

    let steps = 1;

    if (absDeltaX >= 180 || elapsedMs <= VERY_FAST_SWIPE_MS) {
      steps = 3;
    } else if (absDeltaX >= 110 || elapsedMs <= FAST_SWIPE_MS) {
      steps = 2;
    }

    if (deltaX < 0) {
      moveViewportBy(steps);
      return;
    }

    moveViewportBy(-steps);
  }

  if (!featuredBuilds.length) return null;

  return (
    <section className="featured">
      <div className="featured-inner">
        <div
          className="featured-carousel"
          onMouseEnter={() => setIsHoveredOrFocused(true)}
          onMouseLeave={() => setIsHoveredOrFocused(false)}
          onFocus={() => setIsHoveredOrFocused(true)}
          onBlur={() => setIsHoveredOrFocused(false)}
        >
          <button
            type="button"
            className="featured-arrow"
            onClick={handlePrev}
            aria-label="Previous visible featured builds"
          >
            ‹
          </button>

          <div
            className="featured-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="featured-track"
              style={{
                transform: `translateX(calc(${startIndex} * -1 * ((100% + var(--featured-gap)) / var(--featured-visible-count))))`,
              }}
            >
              {featuredBuilds.map((build, index) => (
                <FeaturedCard
                  key={build.id}
                  imageSrc={build.thumb}
                  imageAlt={build.name}
                  title={build.name}
                  isActive={index === selectedIndex}
                  isEdgeLeft={index === startIndex}
                  isEdgeRight={index === endIndex}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="featured-arrow"
            onClick={handleNext}
            aria-label="Next visible featured builds"
          >
            ›
          </button>
        </div>

        <div className="featured-dots" aria-label="Featured build positions">
          {featuredBuilds.map((build, index) => (
            <button
              key={build.id}
              type="button"
              className={`featured-dot${index === selectedIndex ? " active" : ""}`}
              aria-label={`Select featured build ${index + 1}`}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}