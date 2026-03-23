import "../styles/paracord.css";

export default function ParacordPage() {
  return (
    <div className="page paracord-page">
      <section className="paracord-hero">
        <div className="paracord-inner">
          <p className="paracord-eyebrow">Paracord Guide</p>
          <h1>The 411 on 550</h1>
          <p className="paracord-intro">
            550 paracord has a long history of practical use in military,
            survival, outdoor, and tactical applications. Its balance of
            strength, flexibility, and versatility is what made it valuable then
            and why it is still widely used now.
          </p>
        </div>
      </section>

      {/* ================= ORIGIN ================= */}

      <section id="origin-history" className="paracord-section">
        <div className="paracord-inner">
          <h2>Paracord Origin &amp; History</h2>

          <div className="paracord-copy">
            <p>
              550 paracord (also called Type III parachute cord) is a
              lightweight nylon kernmantle rope originally developed for U.S.
              military parachutes during World War II. The name “550” comes from
              its minimum breaking strength of 550 pounds (≈249 kg).
            </p>

            <h3>WWII</h3>
            <ul>
              <li>
                Developed for the U.S. Airborne divisions in the 1930s–1940s.
              </li>
              <li>Used as suspension lines in parachutes because it was:</li>
              <li>Strong for its weight</li>
              <li>Flexible</li>
              <li>Resistant to rot and mildew</li>
              <li>Easy to tie and cut</li>
            </ul>

            <p>
              Paratroopers quickly realized the cord had many other uses once on
              the ground.
            </p>

            <h3>Field improvisation</h3>
            <p>Soldiers began using parachute cord for:</p>
            <ul>
              <li>Shelter building</li>
              <li>Equipment repair</li>
              <li>Boot laces</li>
              <li>Weapon slings</li>
              <li>Medical uses</li>
              <li>Sewing thread</li>
            </ul>

            <h3>Standardization</h3>
            <p>
              After WWII, the U.S. military standardized parachute cord types
              under MIL-C-5040. Type III became the most common.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONSTRUCTION ================= */}

      <section id="construction" className="paracord-section">
        <div className="paracord-inner">
          <h2>Construction</h2>

          <div className="paracord-copy">
            <p>
              550 paracord is a kernmantle rope, meaning it has two parts:
            </p>

            <h3>Mantle</h3>
            <ul>
              <li>Woven nylon</li>
              <li>Protects the core</li>
              <li>Provides flexibility</li>
            </ul>

            <h3>Kern</h3>
            <ul>
              <li>Usually 7 inner strands</li>
              <li>Each strand has smaller fibers</li>
              <li>Can be removed for other uses</li>
            </ul>

            <h3>Typical specs</h3>
            <ul>
              <li>Diameter ≈ 4 mm</li>
              <li>Strength ≈ 550 lb</li>
              <li>Material: Nylon</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= MILITARY / SURVIVAL ================= */}

      <section id="military-survival-uses" className="paracord-section">
        <div className="paracord-inner">
          <h2>Military and Survival Uses</h2>

          <div className="paracord-copy">
            <h3>Military</h3>
            <ul>
              <li>Parachute lines</li>
              <li>Gear lashing</li>
              <li>Weapon slings</li>
              <li>Field repairs</li>
              <li>Tie-downs</li>
            </ul>

            <h3>Survival / bushcraft</h3>
            <ul>
              <li>Shelter building</li>
              <li>Fishing line</li>
              <li>Tourniquet ties</li>
              <li>Trap making</li>
              <li>Knife wraps</li>
            </ul>

            <h3>Civilian</h3>
            <ul>
              <li>Bracelets</li>
              <li>Lanyards</li>
              <li>Leashes</li>
              <li>Slings</li>
              <li>Camping gear</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CIVILIAN POPULARITY ================= */}

      <section id="civilian-popularity" className="paracord-section">
        <div className="paracord-inner">
          <h2>Why 550 Paracord Became Popular in Civilian Gear</h2>

          <div className="paracord-copy">
            <p>
              After Vietnam, surplus paracord entered the civilian market.
            </p>

            <ul>
              <li>Strong</li>
              <li>Cheap</li>
              <li>Lightweight</li>
              <li>Versatile</li>
              <li>Easy to work with</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= MODERN USAGE ================= */}

      <section id="modern-usage" className="paracord-section">
        <div className="paracord-inner">
          <h2>Modern Tactical / Handmade Gear Usage</h2>

          <div className="paracord-copy">
            <ul>
              <li>Tactical slings</li>
              <li>Rifle wraps</li>
              <li>Survival gear</li>
              <li>Camping gear</li>
              <li>Custom crafts</li>
              <li>Monkey fists</li>
              <li>Bracelets</li>
            </ul>

            <p>Still popular because it balances:</p>

            <ul>
              <li>Strength</li>
              <li>Flexibility</li>
              <li>Workability</li>
              <li>Availability</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}