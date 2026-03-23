import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
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
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/paracord" onClick={closeMenu}>Paracord</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}