import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const aboutGroupRef = useRef<HTMLDivElement | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleDocumentClick(e: MouseEvent) {
      if (!aboutGroupRef.current) {
        return;
      }

      if (!aboutGroupRef.current.contains(e.target as Node)) {
        setIsAboutOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
  }, [location.pathname, location.hash]);

  function closeMenu() {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
  }

  function handleAboutActivate(e: React.MouseEvent<HTMLButtonElement>) {
    if (window.innerWidth > 768) {
      navigate("/about");
      return;
    }

    if (!isAboutOpen) {
      e.preventDefault();
      setIsAboutOpen(true);
      return;
    }

    navigate("/about");
  }

  function handleAboutCaretToggle(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsAboutOpen((current) => !current);
  }

  function handleAboutMouseEnter() {
    if (window.innerWidth > 768) {
      setIsAboutOpen(true);
    }
  }

  function handleAboutMouseLeave() {
    if (window.innerWidth > 768) {
      setIsAboutOpen(false);
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img
              src="/images/icons/logo-header.png"
              alt="Cope Tactical"
              className="header-logo"
            />
          </Link>
        </div>

        <button
          type="button"
          className={`menu-toggle${isMenuOpen ? " open" : ""}`}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header-nav${isMenuOpen ? " open" : ""}`}>
          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <div
            className={`header-nav-dropdown${isAboutOpen ? " open" : ""}`}
            ref={aboutGroupRef}
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <div className="header-nav-dropdown-trigger">
              <button
                type="button"
                className="header-nav-link-button"
                onClick={handleAboutActivate}
                aria-expanded={isAboutOpen}
                aria-haspopup="true"
              >
                About
              </button>

              <button
                type="button"
                className={`header-nav-caret${isAboutOpen ? " open" : ""}`}
                aria-label={isAboutOpen ? "Collapse About menu" : "Expand About menu"}
                aria-expanded={isAboutOpen}
                aria-haspopup="true"
                onClick={handleAboutCaretToggle}
              >
                <span />
              </button>
            </div>

            <div className="header-nav-dropdown-menu">
              <Link to="/paracord" className="header-nav-dropdown-item" onClick={closeMenu}>
                550 Facts
              </Link>
            </div>
          </div>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}