import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_SCROLL_OFFSET = 96;

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const id = location.hash.replace("#", "");

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (!element) {
        return false;
      }

      const elementTop =
        element.getBoundingClientRect().top + window.scrollY - DEFAULT_SCROLL_OFFSET;

      window.scrollTo({
        top: Math.max(elementTop, 0),
        behavior: "smooth",
      });

      return true;
    };

    const didScrollImmediately = scrollToElement();

    if (didScrollImmediately) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      scrollToElement();
    }, 120);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, location.hash]);

  return null;
}