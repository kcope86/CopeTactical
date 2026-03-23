import "../styles/about.css";

export default function AboutPage() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <div className="about-inner">
          <h1>About Cope Tactical</h1>

          <img
            src="/about.jpg"
            alt="About Cope Tactical"
            className="about-image"
          />

          <p className="subtitle about-subtitle">Veteran Owned and Operated.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-inner about-stack">
          <div className="about-copy">
            <p>
              Cope Tactical was built from a passion for firearms, gear, and
              craftsmanship. Every sling is hand-woven and designed for real
              use.
            </p>
          </div>

          <div className="about-copy">
            <p>
              U.S. Army Infantry – EXFOR
              <br />
              Programmer by trade
              <br />
              Marksman by training
              <br />
              Veteran family
              <br />
              Proud fiancé and pet father
            </p>
          </div>

          <div className="about-copy">
            <p>
              This site will eventually host a full storefront for custom
              slings, hardware, and tactical accessories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}