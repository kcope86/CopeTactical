import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        <div className="header-left">
          <Link to="/" className="logo-link">
            <img
              src="/logo-header.png"
              alt="Cope Tactical"
              className="header-logo"
            />
          </Link>
        </div>

        <nav className="header-nav">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}