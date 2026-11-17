
import Link from "next/link";
import styles from "./Last.module.css";

const features = [
  {
    title: "Curated",
    subtitle: "Thoughtfully selected homes",
  },
  {
    title: "Clear",
    subtitle: "Useful property information",
  },
  {
    title: "Personal",
    subtitle: "Guidance at every step",
  },
  {
    title: "Connected",
    subtitle: "Support from enquiry to visit",
  },
];

const benefits = [
  "Carefully presented listings",
  "Clear property details",
  "Helpful human support",
  "Easy enquiry process",
];

export default function AboutSection() {
  return (
    <main className={styles.page}>

      {/* FEATURE STRIP */}
      <section className={styles.featureSection}>
        <div className={styles.featureContainer}>
          {features.map((feature) => (
            <div className={styles.featureItem} key={feature.title}>
              <h2>{feature.title}</h2>
              <p>{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.aboutSection}>

        {/* LEFT IMAGE */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageBorder}></div>

          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
            alt="Modern luxury property interior"
            className={styles.aboutImage}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.aboutContent}>

          <span className={styles.eyebrow}>
            THE PROPSTOXX APPROACH
          </span>

          <h1>
            More than a property.
            <br />
            A place for your next
            <br />
            chapter.
          </h1>

          <p className={styles.description}>
            Finding the right property is a meaningful decision.
            PropStoxx brings selected opportunities, helpful
            information and a more personal discovery experience
            together in one place.
          </p>

          <p className={styles.description}>
            Whether you are exploring a first home, a family
            residence or a new development, our aim is to make
            every step clearer and more considered.
          </p>

          {/* BENEFITS */}
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div className={styles.benefitItem} key={benefit}>
                <span className={styles.checkIcon}>✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <Link href="/Different" className={styles.aboutButton}>
            Get to know us
            <span>↗</span>
          </Link>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className={styles.ctaSection}>

        <div className={styles.ctaContent}>
          <span className={styles.ctaEyebrow}>
            YOUR NEXT MOVE STARTS HERE
          </span>

          <h2>
            Let&apos;s find the right place for you.
          </h2>

          <p>
            Tell us what you&apos;re looking for.
            We would be glad to help you explore.
          </p>
        </div>

        <Link href="/propertySearch" className={styles.ctaButton}>
          Talk to our team
          <span>↗</span>
        </Link>

      </section>

    </main>
  );
}
