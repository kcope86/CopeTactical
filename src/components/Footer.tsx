export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; 2026 Cope Tactical. All rights reserved.
        </p>

        <nav className="footer-nav" aria-label="Footer">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact?to=sales@copetactical.com">Sales</a>
          <a href="/contact?to=support@copetactical.com">Support</a>
        </nav>
      </div>
    </footer>
  );
}