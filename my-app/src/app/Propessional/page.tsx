
"use client";

import { useEffect, useState } from "react";
import "./page.css";
import Page from "../propertySearch/page";

const slides = [
  {
    number: "01",
    label: "LOOK",
    heading: "Explore with",
    highlight: "private ID.",
    description:
      "Explore projects and connect with developers securely using your private ID, not your phone number.",
  },
  {
    number: "02",
    label: "COMPARE WITH AI",
    heading: "Put them",
    highlight: "side by side.",
    description:
      "Get a clear picture before you invest. Compare projects, understand costs and risks, and make smarter decisions with a report.",
  },
  {
    number: "03",
    label: "LOCK",
    heading: "Hold the price",
    highlight: "you saw.",
    description:
      "Lock today's price in the app and decide later, without sharing your phone number.",
  },
];

const projects = [
  { name: "Vibranium", location: "Whitefield", price: "₹24L+" },
  { name: "Trifecta Veranza", location: "Bengaluru", price: "₹1.1Cr+" },
  { name: "Sarjapur Greenline", location: "Sarjapur Road", price: "₹72L+" },
  { name: "Hennur Courtyard", location: "Hennur", price: "₹58L+" },
  { name: "Budigere Rise", location: "Budigere", price: "₹46L+" },
];

export default function ProfessionalPage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <main className="professional-page">

      {/* HERO SECTION */}
      <section className="carousel-section">

        {/* LEFT CONTENT */}
        <div className="carousel-left">
          <p className="carousel-label">
            {slide.number} · {slide.label}
          </p>

          <h1>
            {slide.heading}{" "}
            <span>{slide.highlight}</span>
          </h1>

          <p className="carousel-description">
            {slide.description}
          </p>
    <Page/>
          {/* SLIDER INDICATORS */}
          <div className="carousel-indicators">
            {slides.map((item, index) => (
              <button
                key={item.number}
                onClick={() => setActive(index)}
                className={active === index ? "active" : ""}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
        {/* RIGHT PHONE MOCKUP */}
        <div className="carousel-right">
          <div className="phone">
            <div className="phone-screen">
              <div className="phone-notch" />

              {active === 0 && (
                <div className="phone-content">
                  <h3>Open projects</h3>
                  <p className="phone-subtitle">
                    Bengaluru · 6 open, no sign-up
                  </p>

                  {projects.map((project, index) => (
                    <div className="project-card" key={project.name}>
                      <div className={`project-image image-${index}`}>
                        <span>{index + 1}</span>
                      </div>

                      <div className="project-info">
                        <strong>{project.name}</strong>
                        <p>{project.location}</p>
                      </div>

                      <b>{project.price}</b>
                    </div>
                  ))}
                </div>
              )}

              {active === 1 && (
                <div className="phone-content">
                  <h3>Compare</h3>
                  <p className="phone-subtitle">
                    On your phone only
                  </p>

                  <div className="compare-table">
                    <div className="compare-row">
                      <span />
                      <strong>Vibranium</strong>
                      <strong>Hennur</strong>
                    </div>

                    {[
                      ["Area", "Whitefield", "Hennur"],
                      ["Price", "₹24L – 36L", "₹58L – 81L"],
                      ["Stage", "Upcoming", "Ready"],
                      ["Type", "Apartment", "Apartment"],
                    ].map((row) => (
                      <div className="compare-row" key={row[0]}>
                        {row.map((value, i) => (
                          <span key={i}>{value}</span>
                        ))}
                      </div>
                    ))}
                  </div>

                  <p className="phone-note">
                    Hennur Courtyard is a design sample.
                  </p>
                </div>
              )}

              {active === 2 && (
                <div className="phone-content">
                  <h3>Lock the price</h3>
                  <p className="phone-subtitle">
                    Vibranium Realty
                  </p>

                  <div className="price-card">
                    <span>Price you saw</span>
                    <h2>₹24,00,000</h2>

                    <div className="price-row">
                      <span>Phone required</span>
                      <strong>No</strong>
                    </div>

                    <div className="price-row">
                      <span>Shared with builder</span>
                      <strong>Nothing</strong>
                    </div>
                  </div>

                  <p className="phone-note">
                    Illustrative amount.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
