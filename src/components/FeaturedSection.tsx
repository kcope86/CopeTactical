import { useEffect, useMemo, useRef, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { builds } from "../data/builds";

type Props = {
  onSelectImage: (src: string) => void;
};

const AUTO_SCROLL_MS = 5000;
const SWIPE_THRESHOLD_PX = 50;

function getVisibleCount(width: number): number {
  if (width <= 480) {
    return 3;
  }

  if (width <= 1100) {
    return 2;
  }

  return 4;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export default function FeaturedSection({ onSelectImage }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState<number>(() =>
    typeof window === "undefined" ? 4 : getVisibleCount(window.innerWidth)
  );
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState<boolean>(() =>
    typeof document === "undefined" ? true : !document.hidden
  );

  const touchStartXRef = useRef<number | null>(null);
  const touchCurrentXRef = useRef<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount(window.innerWidth));
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const selectedBuild = builds[selectedIndex];

    if (!selectedBuild) {
      return;
    }

    onSelectImage(selectedBuild.images[0].src);
  }, [selectedIndex, onSelectImage]);

  useEffect(() => {
    function handleVisibilityChange() {
      setIsTabVisible(!document.hidden);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const shouldPause = isHoveredOrFocused || !isTabVisible;

    if (shouldPause || builds.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setSelectedIndex((current) => (current + 1) % builds.length);
    }, AUTO_SCROLL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isHoveredOrFocused, isTabVisible]);

  const maxStartIndex = Math.max(0, builds.length - visibleCount);

  const startIndex = useMemo(() => {
    const centeredIndex = selectedIndex - Math.floor(visibleCount / 2);
    return clamp(centeredIndex, 0, maxStartIndex);
  }, [selectedIndex, visibleCount, maxStartIndex]);

  function handlePrev() {
    setSelectedIndex((current) =>
      current === 0 ? builds.length - 1 : current - 1
    );
  }

  function handleNext() {
    setSelectedIndex((current) => (current + 1) % builds.length);
  }

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchCurrentXRef.current = touch.clientX;
    setIsHoveredOrFocused(true);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    const touch = e.touches[0];
    touchCurrentXRef.current = touch.clientX;
  }

  function handleTouchEnd() {
    const startX = touchStartXRef.current;
    const endX = touchCurrentXRef.current;

    touchStartXRef.current = null;
    touchCurrentXRef.current = null;
    setIsHoveredOrFocused(false);

    if (startX === null || endX === null) {
      return;
    }

    const deltaX = endX - startX;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) {
      return;
    }

    if (deltaX < 0) {
      handleNext();
      return;
    }

    handlePrev();
  }

  return (
    <section className="featured">
      <div className="featured-inner">
        <h2>Featured Builds</h2>

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
            aria-label="Previous featured builds"
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
              {builds.map((build, index) => (
                <FeaturedCard
                  key={build.id}
                  imageSrc={build.images[0].src}
                  imageAlt={build.images[0].alt}
                  title={build.name}
                  isActive={index === selectedIndex}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="featured-arrow"
            onClick={handleNext}
            aria-label="Next featured builds"
          >
            ›
          </button>
        </div>

        <div className="featured-dots" aria-label="Featured build positions">
          {builds.map((build, index) => (
            <button
              key={build.id}
              type="button"
              className={`featured-dot${index === selectedIndex ? " active" : ""}`}
              aria-label={`Go to featured build ${index + 1}`}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}