import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type NavItem = {
  to: string;
  label: string;
  isActive: boolean;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function getNavClass(isActive: boolean) {
    return `nav-link${isActive ? " active" : ""}`;
  }

  const centerNavItems: NavItem[] = [
    {
      to: "/",
      label: "Home",
      isActive: location.pathname === "/",
    },
    {
      to: "/gallery",
      label: "Gallery",
      isActive: location.pathname.startsWith("/gallery") || location.pathname.startsWith("/build/"),
    },
  ];

  const rightNavItems: NavItem[] = [
    {
      to: "/about",
      label: "About",
      isActive: location.pathname.startsWith("/about") || location.pathname.startsWith("/paracord"),
    },
    {
      to: "/contact",
      label: "Contact",
      isActive: location.pathname.startsWith("/contact"),
    },
  ];

  const mobileNavItems = [...centerNavItems, ...rightNavItems];

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

        <div className="header-desktop-nav">
          <nav className="header-center" aria-label="Primary">
            {centerNavItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${getNavClass(item.isActive)}${index === centerNavItems.length - 1 ? " last-in-group" : ""}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="header-right" aria-label="Secondary">
            {rightNavItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${getNavClass(item.isActive)}${index === rightNavItems.length - 1 ? " last-in-group" : ""}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
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

        <nav className={`header-mobile-nav${isMenuOpen ? " open" : ""}`} aria-label="Mobile navigation">
          {mobileNavItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={getNavClass(item.isActive)}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}