"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "../image/page.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: " Browse with No number .",
    description: "Open any of the six projcts.Price band ,stages and area are right there.No from appears bedore the faces do.",
    image: `${basePath}/images/property1.png`,
  },
  {
    id: 2,
    title: "Put two or there .Price ,stage and type line up on your screen.Nothing is sent to a builder.",
    description: "Six Bengaluru,with the price on the card .Compare them here.No phone number,No call back and nothing passed to a builder.",
    image: `${basePath}/images/property2.png`,
  },
  {
    id: 3,
    title: "Find a home before you share a number ",
    description: "Six Bengaluru , with the price on the card .Compare them here. No phone number, no call back and nothing passed to a builder.",
    image: `${basePath}/images/property3.png`,
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(nextSlide, 3000);
    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured properties"
      aria-roledescription="carousel"
    >
      <div className="carousel-track">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${current === index ? "active" : ""}`}
            aria-hidden={current !== index}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="carousel-image"
            />

            <div className="carousel-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button type="button">Explore Properties</button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel-arrow prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      <button
        type="button"
        className="carousel-arrow next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      <div className="carousel-dots">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index ? "true" : undefined}
          />
        ))}
      </div>

      <div className="carousel-counter">
        {current + 1} / {slides.length}
      </div>
    </section>
  );
}
