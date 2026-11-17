"use client";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Pause,
  Play,
} from "lucide-react";
import { useRouter } from "next/navigation";
import "./page.css";

const slides = [
  {
    number: "01",
    label: "LOOK",
    heading: "Explore with",
    highlight: "private ID.",
    description:
      "Explore projects and connect with developers securely using your private ID, not your phone number.",
    tag: "PRIVATE PROPERTY DISCOVERY",
    phoneTitle: "Discover properties",
    phoneDescription: "Find projects that match your lifestyle.",
  },
  {
    number: "02",
    label: "COMPARE WITH AI",
    heading: "Compare smarter.",
    highlight: "Choose better.",
    description:
      "Compare properties side by side. Understand pricing, location, amenities and important project details.",
    tag: "SMART PROPERTY COMPARISON",
    phoneTitle: "Compare projects",
    phoneDescription: "See the important differences clearly.",
  },
  {
    number: "03",
    label: "LOCK",
    heading: "Hold the price",
    highlight: "you saw.",
    description:
      "Keep track of the price you viewed while you take your time to make a confident property decision.",
    tag: "PRICE TRANSPARENCY",
    phoneTitle: "Your price is saved",
    phoneDescription: "Review your selected property with confidence.",
  },
];

const projects = [
  {
    name: "Vibranium",
    location: "Whitefield, Bengaluru",
    price: "₹85 L onwards",
    image: "🏙️",
  },
  {
    name: "Trifecta Veranza",
    location: "Sarjapur Road, Bengaluru",
    price: "₹1.2 Cr onwards",
    image: "🏢",
  },
];

export default function ProfessionalPage() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(true);
const router = useRouter();

  const handleOrder = () => {
    router.push('/NewLaunches');
  };
  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActive(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const currentSlide = slides[active];

  return (
    <main className="professional-page">
      {/* HERO / CAROUSEL */}
      <section
        className="carousel-section"
        onMouseEnter={() => setPaused(false)}
        onMouseLeave={() => setPaused(true)}
      >
        <div className="hero-background-circle circle-one" />
        <div className="hero-background-circle circle-two" />

        <div className="hero-inner">
          {/* LEFT CONTENT */}
          <div className="carousel-left" key={currentSlide.number}>
            <div className="trust-label">
              <ShieldCheck size={17} />
              <span>PROPERTY DISCOVERY, REIMAGINED</span>
            </div>

            <p className="slide-label">
              {currentSlide.number} / 03
              <span />
              {currentSlide.label}
            </p>

            <h1>
              {currentSlide.heading}
              <br />
              <span>{currentSlide.highlight}</span>
            </h1>

            <p className="hero-description">
              {currentSlide.description}
            </p>

            <div className="hero-benefit">
              <ShieldCheck size={18} />
              <span>No unwanted calls. More clarity. Better decisions.</span>
            </div>

            {/* SLIDE CONTROLS */}
            <div className="carousel-bottom">
              <div className="carousel-indicators">
                {slides.map((slide, index) => (
                  <button
                    key={slide.number}
                    type="button"
                    className={`indicator ${
                      active === index ? "active" : ""
                    }`}
                    onClick={() => setActive(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={active === index ? "true" : undefined}
                  />
                ))}
              </div>
            <button className="viewButton"
  onClick={handleOrder}
  >
  <span >
    Explore Property
    <span >
      →
    </span>
  </span>
</button>
              <div className="carousel-buttons">
                <button
                  type="button"
                  className="carousel-control"
                  onClick={previousSlide}
                  aria-label="Previous slide"
                >
                  <ArrowLeft size={19} />
                </button>

                <button
                  type="button"
                  className="carousel-control"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <ArrowRight size={19} />
                </button>

                <button
                  type="button"
                  className="carousel-control pause-control"
                  onClick={() => setPaused((value) => !value)}
                  aria-label={paused ? "Play slides" : "Pause slides"}
                >
                  {paused ? <Play size={17} /> : <Pause size={17} />}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PHONE MOCKUP */}
          <div className="carousel-right">
            <div className="phone-glow" />

            <div className="floating-tag">
              <ShieldCheck size={16} />
              <span>Smart property discovery</span>
            </div>

            <div className="phone">
              <div className="phone-top">
                <span className="phone-time">9:41</span>
                <span className="phone-camera" />
                <span className="phone-status">● ● ▰</span>
              </div>

              <div className="phone-content">
                <div className="phone-header">
                  <div>
                    <p className="phone-small">WELCOME TO PROPSTOXX</p>
                    <h3>{currentSlide.phoneTitle}</h3>
                    <p>{currentSlide.phoneDescription}</p>
                  </div>
                  <div className="phone-avatar">P</div>
                </div>

                {active === 0 && (
                  <div className="phone-project-list">
                    {projects.map((project) => (
                      <div className="phone-project" key={project.name}>
                        <div className="project-image">
                          {project.image}
                        </div>

                        <div className="project-info">
                          <h4>{project.name}</h4>
                          <p>{project.location}</p>
                          <strong>{project.price}</strong>
                        </div>
                      </div>
                    ))}

                    <div className="phone-bottom-note">
                      Explore projects with confidence.
                    </div>
                  </div>
                )}

                {active === 1 && (
                  <div className="compare-content">
                    <div className="compare-heading">
                      <span>PROJECT A</span>
                      <span>PROJECT B</span>
                    </div>

                    {[
                      ["₹85 L", "₹1.2 Cr"],
                      ["Whitefield", "Sarjapur"],
                      ["2 BHK", "3 BHK"],
                      ["Ready", "Upcoming"],
                    ].map((item, index) => (
                      <div className="compare-row" key={index}>
                        <span>{item[0]}</span>
                        <span>{item[1]}</span>
                      </div>
                    ))}

                    <div className="compare-footer">
                      Compare what matters to you.
                    </div>
                  </div>
                )}

                {active === 2 && (
                  <div className="price-lock-content">
                    <div className="lock-icon">
                      <ShieldCheck size={32} />
                    </div>

                    <p className="lock-small">YOUR SELECTED PRICE</p>
                    <h2>₹85,00,000</h2>
                    <p className="lock-success">
                      <ShieldCheck size={15} />
                      Price saved for your review
                    </p>

                    <div className="lock-details">
                      <span>Property</span>
                      <strong>Vibranium</strong>
                      <span>Location</span>
                      <strong>Whitefield, Bengaluru</strong>
                    </div>

                    <div className="lock-button">
                      View saved details
                    </div>
                  </div>
                )}
              </div>

              <div className="phone-home-indicator" />
            </div>

            <div className="floating-caption">
              <span className="caption-dot" />
              {currentSlide.tag}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}