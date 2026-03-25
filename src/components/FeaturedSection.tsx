import { useEffect, useMemo, useRef, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { getFeaturedBuilds } from "../data/buildHelpers";

type Props = {
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
  interactionKey: number;
};

const AUTO_SCROLL_MS = 5000;
const WHEEL_HORIZONTAL_THRESHOLD = 12;
const WHEEL_COOLDOWN_MS = 180;

function getVisibleCount(width: number): number {
  if (width <= 480) return 3;
  if (width <= 1100) return 2;
  return 4;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function FeaturedSection({
  selectedIndex,
  onSelectIndex,
  interactionKey,
}: Props) {
  const featuredBuilds = useMemo(() => getFeaturedBuilds(), []);

  const [visibleCount, setVisibleCount] = useState<number>(() =>
    typeof window === "undefined" ? 4 : getVisibleCount(window.innerWidth)
  );
  const [startIndex, setStartIndex] = useState(0);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState<boolean>(() =>
    typeof document === "undefined" ? true : !document.hidden
  );

  const lastWheelTimeRef = useRef(0);

  const safeSelectedIndex = featuredBuilds.length
    ? clamp(selectedIndex, 0, featuredBuilds.length - 1)
    : 0;

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
      onSelectIndex((safeSelectedIndex + 1) % featuredBuilds.length);
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(intervalId);
  }, [
    featuredBuilds.length,
    interactionKey,
    isHoveredOrFocused,
    isTabVisible,
    onSelectIndex,
    safeSelectedIndex,
  ]);

  useEffect(() => {
    if (!featuredBuilds.length) {
      return;
    }

    if (selectedIndex !== safeSelectedIndex) {
      onSelectIndex(safeSelectedIndex);
    }
  }, [featuredBuilds.length, onSelectIndex, safeSelectedIndex, selectedIndex]);

  useEffect(() => {
    setStartIndex((current) => clamp(current, 0, maxStartIndex));
  }, [maxStartIndex]);

  useEffect(() => {
    if (safeSelectedIndex < startIndex) {
      setStartIndex(safeSelectedIndex);
      return;
    }

    if (safeSelectedIndex > endIndex) {
      setStartIndex(clamp(safeSelectedIndex - visibleCount + 1, 0, maxStartIndex));
    }
  }, [endIndex, maxStartIndex, safeSelectedIndex, startIndex, visibleCount]);

  function moveViewportBy(stepDelta: number) {
    setStartIndex((current) => clamp(current + stepDelta, 0, maxStartIndex));
  }

  function handlePrev() {
    moveViewportBy(-1);
  }

  function handleNext() {
    moveViewportBy(1);
  }

  function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
    const absX = Math.abs(e.deltaX);
    const absY = Math.abs(e.deltaY);

    if (absX < WHEEL_HORIZONTAL_THRESHOLD || absX <= absY) {
      return;
    }

    e.preventDefault();

    const now = Date.now();
    if (now - lastWheelTimeRef.current < WHEEL_COOLDOWN_MS) {
      return;
    }

    lastWheelTimeRef.current = now;

    if (e.deltaX > 0) {
      handleNext();
      return;
    }

    handlePrev();
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

          <div className="featured-viewport" onWheel={handleWheel}>
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
                  isActive={index === safeSelectedIndex}
                  isEdgeLeft={index === startIndex}
                  isEdgeRight={index === endIndex}
                  onClick={() => onSelectIndex(index)}
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
              className={`featured-dot${index === safeSelectedIndex ? " active" : ""}`}
              aria-label={`Select featured build ${index + 1}`}
              onClick={() => onSelectIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}