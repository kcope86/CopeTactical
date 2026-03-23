import "../styles/about.css";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <div className="about-inner">
          <img
            src="/images/icons/logo-mono.png"
            alt="Cope Tactical logo"
            className="about-image"
          />


         <p className="about-intro">
  <span className="about-goal-title">
    MY GOAL IS SIMPLE.
  </span>
  <br />

  <span className="about-goal-subtitle">
    MY METHODS ARE PROVEN.<br />
    THE RESULTS ARE OUTSTANDING...
  </span>



  To deliver customized, purpose-built gear,
  <br />
  That looks how you want & provides the comfort you need,<br />
  Holds up with use & lasts like it should,<br />
  Premium gear that outperforms your expectations.
</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-inner">
          <p className="about-section-label">Who We Are</p>

          <div className="about-copy">
            <p>
              Cope Tactical is veteran owned and operated, built from a passion for reliable equipment, practical gear, and quality craftsmanship.<br />
              The brand is shaped by an 11B mindset that values gear that works, gear that lasts, and gear built with purpose.<br />
              Form follows function. Reliability comes first. Everything is designed with real use in mind.<br /><br />
              This is gear made for people who expect more from what they carry.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
  <div className="about-inner">
    <p className="about-section-label">Where We Come From</p>

    <div className="about-copy">

      <p>
        Located in the St. Louis area, Cope Tactical started as a personal project - built around the need for gear that is durable, dependable, and designed for real use.
      </p>

      <p>
        Before starting this company, I served as an Airborne Infantryman in the U.S. Army, working as an M4A1 Rifleman, M249-SAW Gunner,
        and M240B Machine Gunner with Alpha Company, 1st Battalion, 29th Infantry Regiment — one of the Army's very few premier Experimentation Forces.
      </p>

      <p>
        Referred to as "EXFOR", our unit was responsible for testing new and emerging equipment, weapons, gear, technologies and tactics, in simulated real-world 
        force-on-force combat scenarios.
      </p>

      <p>
        In the four years that I was with EXFOR, I participated in numerous cutting-edge technology experimentation and evaluation events where we would take new and emerging
        technologies through their paces and stress test them past their limits<br/>
        This was done as part of the effort to modernize legacy systems and gear, and fill gaps between situational and battlefield awareness, lethality, mobility, and sustainability.
      </p>

      <p>
        My role in EXFOR during this iterative experimentation process was to identify potential issues and vulnerabilities early in the R&D
        and prototyping phases and to deliver candid feedback regarding the performance, practicality, and reliability of the equipment to its
        creators and providers, as well as Army Scientists and Engineers with the Maneuver Battle Lab.
      </p>

      <p>
        If the gear didn't perform as advertised, we said so, and backed it up with real-world evidence.<br/>
        If the intended use made no practical sense when compared with or integrated into Infantry SOPs, we said so, and explained why.<br/>
        We were not there to be nice (and we rarely were). We were not there to mince words (and we rarely did)<br/>
        We were there to determine whether a piece of equipment if fielded as is, would help us win battles or lose them.<br/><br/>
        Could a new technology or piece of equipment save the lives of our soldiers, or would it cost them.
      </p>
      
      <p>
        The experience I gained while serving in EXFOR shaped how I prototype, build, test, and refine the gear I produce by hand today.<br/>
        Reliability, usability, and durability are not optional, but should be expected out of the box.<br/>
        I bring that same mindset into every custom build at Cope Tactical.<br/>
       </p>

    </div>
  </div>
</section>

      <section className="about-section">
  <div className="about-inner">
    <p className="about-section-label">What We Do</p>

    <div className="about-copy">
      <p>
        Cope Tactical builds custom rifle slings and related gear with an emphasis on strength, usability, and clean, functional design.
        Each build is hand-made to order rather than mass produced.
      </p>

      <p>
        Every sling can be configured with a wide range of hardware, adjusters, webbing materials, lengths, and widths to match the rifle
        and the intended use. Multiple attachment options are available, including QD mounts, clips, single-point, two-point, and
        convertible setups, with premium hardware and components available.
      </p>

      <p>
        Styles range from solid colors to camouflage patterns and more complex designs, with additional accents and accessories available
        to create a sling that fits both the rifle and the marksman.<br/>
        {" "} <Link to="/contact?to=sales@copetactical.com">Send me a message and we can begin customizing your build, your way, today!</Link>.
      </p>
    </div>
  </div>
</section>

      <section className="about-section">
        <div className="about-inner">
          <p className="about-section-label">How We Do It Better</p>

         <div className="about-copy">

  <p>
    Every sling is made by hand with close attention to materials, construction, and real-world use. Unlike mass-produced slings that are built on machines in large batches, each build at Cope Tactical is assembled one at a time, allowing for better fit, better customization, and a finished product built for function instead of production speed.
  </p>

  <p>
    Material quality is just as important as the build itself. All paracord used in Cope Tactical slings is manufactured and sold in the United States, with consistent standards for strength, durability, and reliability. Lower quality cord often found in imported slings can vary in thickness, strength, and internal construction, which directly affects performance over time.
  </p>

  <p>
    Every strand of paracord is pre-boiled before use. This process removes excess dye, tightens the outer sheath, and allows the cord to shrink and settle before it is woven into the sling. Pre-shrinking the cord helps prevent loosening, stretching, or deformation later, resulting in a tighter, cleaner, and more durable finished build.
  </p>

  <p>
    Because each sling is made individually, adjustments can be made during the build to ensure proper tension, alignment, and overall feel. This level of control is not possible with machine-made slings, and it is one of the main reasons a hand-built sling holds its shape and performs better over time.
  </p>

  <p>
    If there is ever a problem with your sling, I will work with you to make it right. Depending on the situation, that may mean repair, a discounted rebuild, or replacement (at my discretion). Every build quite literally carries my name on it, and I am not satisfied unless you are.
  </p>

  <p>
    {" "} <Link to="/paracord"> Learn More about 550 Paracord
    </Link>{" "}, 
    {" "}
    <Link
      to="/paracord#construction"
    >
      how it is made
    </Link>
     ,
    and{" "}
    <Link to="/paracord#modern-usage">
      how it is used in modern gear
    </Link>.
  </p>

</div>
        </div>
      </section>
    </div>
  );
}