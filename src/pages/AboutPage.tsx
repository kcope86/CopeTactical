import "../styles/about.css";

export default function AboutPage() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <div className="about-inner">
          <h1>About Cope Tactical</h1>

          <img
            src="/images/icons/logo-mono.png"
            alt="Cope Tactical logo"
            className="about-image"
          />

          <p className="subtitle about-subtitle">
            Handmade slings built for real use.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-inner about-stack">
          <div className="about-copy">
            <p>
              Cope Tactical was built from a passion for firearms, gear, and
              craftsmanship.
            </p>

            <p>
              Every sling is hand-woven one at a time using high-quality
              paracord, hardware, and materials chosen for durability and
              real-world use. These are not mass-produced accessories — each
              build is made by hand with attention to strength, function, and
              clean design.
            </p>

            <p>
              The goal is simple: make gear that looks good, lasts, and performs
              the way it should.
            </p>
          </div>

          <div className="about-copy">
            <p>Cope Tactical is veteran owned and operated.</p>

            <p>
              The designs are influenced by real use, not trends. Strength,
              reliability, and practicality come first, whether the sling is
              built for range use, hunting, or duty gear.
            </p>
          </div>

          <div className="about-copy">
            <p>Most builds are custom made.</p>

            <p>
              Colors, weave styles, and hardware can be configured to fit
              exactly what the customer wants. No two builds have to be the
              same.
            </p>
          </div>

          <div className="about-copy">
            <p>
              This site will continue to grow into a full storefront for custom
              slings, hardware, and tactical gear.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}