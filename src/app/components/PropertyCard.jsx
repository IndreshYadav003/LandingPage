
"use client";

import { useState, useRef } from "react";
import "./PropertyCard.css";

/* -------------------- Helper functions -------------------- */

export function formatPrice(value) {
  if (value === null || value === undefined || value === "") {
    return "Price on request";
  }

  const number = Number(value);

  if (Number.isNaN(number)) return "Price on request";

  if (number >= 10000000) {
    return `₹${(number / 10000000).toFixed(2).replace(/\.?0+$/, "")} Cr`;
  }

  if (number >= 100000) {
    return `₹${(number / 100000).toFixed(2).replace(/\.?0+$/, "")} L`;
  }

  return `₹${number.toLocaleString("en-IN")}`;
}

function formatNumber(value) {
  if (value === null || value === undefined || value === "") return "—";

  const number = Number(value);

  return Number.isNaN(number)
    ? String(value)
    : number.toLocaleString("en-IN");
}

function displayValue(value) {
  if (value === null || value === undefined || value === "") {
    return "Not available";
  }

  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "Not available";
  }

  if (typeof value === "object") {
    return (
      value.name ||
      value.label ||
      value.type ||
      JSON.stringify(value)
    );
  }

  return String(value);
}

function getLandArea(value) {
  if (!value) return "Not available";

  return `${formatNumber(value)} sq.ft`;
}

function getProjectImages(assets = []) {
  if (!Array.isArray(assets)) return [];

  return assets
    .filter(
      (asset) =>
        asset &&
        asset.url &&
        (asset.type === "project" ||
          asset.type === "image" ||
          asset.type === "project_image")
    )
    .map((asset) => asset.url);
}

function getLocation(property) {
  return [
    property.subLocality,
    property.locality,
    property.city,
  ]
    .filter(Boolean)
    .join(", ");
}

function getBuilderValue(builder, primary, fallback) {
  return builder?.[primary] ?? builder?.[fallback];
}

function getMapUrl(location) {
  if (!location || typeof location !== "object") return null;

  const lat = location.lat ?? location.latitude;
  const lng = location.lng ?? location.longitude;

  if (lat === undefined || lng === undefined) return null;

  return `https://www.google.com/maps?q=${lat},${lng}`;
}

/* -------------------- Icons -------------------- */

function PinIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function Chevron({ direction }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path
        d={
          direction === "left"
            ? "M15 18l-6-6 6-6"
            : "M9 18l6-6-6-6"
        }
      />
    </svg>
  );
}

/* -------------------- Reusable Image Slider -------------------- */

export function ImageSlider({
  images = [],
  alt = "Property",
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);

  const safeImages = Array.isArray(images) ? images : [];
  const totalImages = safeImages.length;

  function previousImage() {
    if (totalImages < 2) return;

    setActiveIndex((current) =>
      current === 0 ? totalImages - 1 : current - 1
    );
  }

  function nextImage() {
    if (totalImages < 2) return;

    setActiveIndex((current) =>
      current === totalImages - 1 ? 0 : current + 1
    );
  }

  function handleTouchStart(event) {
    touchStart.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStart.current === null) return;

    const difference =
      event.changedTouches[0].clientX - touchStart.current;

    touchStart.current = null;

    if (Math.abs(difference) > 45) {
      difference < 0 ? nextImage() : previousImage();
    }
  }

  return (
    <div
      className={`pc-slider ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {totalImages > 0 ? (
        <div
          className="pc-slider-track"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {safeImages.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`${alt} image ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              draggable="false"
            />
          ))}
        </div>
      ) : (
        <div className="pc-no-image">
          <span>No property images available</span>
        </div>
      )}

      {totalImages > 1 && (
        <>
          <button
            type="button"
            className="pc-arrow pc-prev"
            onClick={previousImage}
            aria-label="Previous image"
          >
            <Chevron direction="left" />
          </button>

          <button
            type="button"
            className="pc-arrow pc-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            <Chevron direction="right" />
          </button>

          <div className="pc-slider-dots">
            {safeImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`pc-dot ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>

          <span className="pc-image-count">
            {activeIndex + 1}/{totalImages}
          </span>
        </>
      )}
    </div>
  );
}

/* -------------------- Reusable Fact Component -------------------- */

function Fact({ label, value, wide = false }) {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return null;
  }

  return (
    <div className={`pc-fact ${wide ? "pc-wide" : ""}`}>
      <span className="pc-fact-label">{label}</span>
      <span className="pc-fact-value">
        {displayValue(value)}
      </span>
    </div>
  );
}

/* -------------------- Page 1: Overview -------------------- */

export function PropertyOverview({ property }) {
  const {
    name,
    status,
    projectStatus,
    minPrice,
    maxPrice,
    segment,
    landAreaSqft,
    projectType,
    assets,
  } = property;

  const images = getProjectImages(assets);
  const location = getLocation(property);

  return (
    <section className="pc-page">
      <div className="pc-image-wrapper">
        <ImageSlider images={images} alt={name} />

        <div className="pc-status-row">
          {status && (
            <span className="pc-status">
              {displayValue(status)}
            </span>
          )}

          {projectStatus && (
            <span className="pc-status pc-status-red">
              {displayValue(projectStatus)}
            </span>
          )}
        </div>
      </div>

      <div className="pc-overview-body">
        <h2 className="pc-name">
          {name || "Property name not available"}
        </h2>

        {location && (
          <div className="pc-location">
            <PinIcon />
            <span>{location}</span>
          </div>
        )}

        <div className="pc-overview-grid">
          <div className="pc-info-box">
            <span>Segment</span>
            <strong>{displayValue(segment)}</strong>
          </div>

          <div className="pc-info-box">
            <span>Land Area</span>
            <strong>{getLandArea(landAreaSqft)}</strong>
          </div>

          <div className="pc-info-box pc-info-wide">
            <span>Project Type</span>
            <strong>{displayValue(projectType)}</strong>
          </div>
        </div>

        <div className="pc-price">
          <span>Price Range</span>

          <strong>
            {formatPrice(minPrice)}
            {maxPrice !== null &&
              maxPrice !== undefined &&
              maxPrice !== "" &&
              ` - ${formatPrice(maxPrice)}`}
          </strong>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Page 2: Project Details -------------------- */

export function PropertyDetails({ property }) {
  const {
    name,
    description,
    projectType,
    segment,
    totalFloors,
    numberOfUnits,
    landAreaSqft,
    constructionType,
    developerCategory,
    address,
    location,
    rtbEnabled,
    assets = [],
  } = property;

  const images = getProjectImages(assets);

  const brochure = Array.isArray(assets)
    ? assets.find(
        (asset) =>
          asset?.type === "documents" ||
          asset?.type === "brochure"
      )
    : null;

  const mapUrl = getMapUrl(location);

  return (
    <section className="pc-page">
      <ImageSlider
        images={images}
        alt={name}
        className="pc-detail-slider"
      />

      <div className="pc-details-body">
        <h2 className="pc-section-title">
          Project Information
        </h2>

        {description && (
          <p className="pc-description">{description}</p>
        )}

        <div className="pc-details-grid">
          <Fact label="Project Type" value={projectType} />
          <Fact label="Segment" value={segment} />

          <Fact
            label="Total Floors"
            value={formatNumber(totalFloors)}
          />

          <Fact
            label="Total Units"
            value={formatNumber(numberOfUnits)}
          />

          <Fact
            label="Land Area"
            value={getLandArea(landAreaSqft)}
          />

          <Fact
            label="Construction Type"
            value={constructionType}
          />

          <Fact
            label="Developer Category"
            value={developerCategory}
            wide
          />

          <Fact label="Address" value={address} wide />

          <Fact
            label="Ready to Buy"
            value={
              rtbEnabled === undefined
                ? null
                : rtbEnabled
                ? "Enabled"
                : "Not enabled"
            }
          />
        </div>

        <div className="pc-extra-links">
          {brochure?.url && (
            <a
              href={brochure.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-outline-button"
            >
              View Brochure
            </a>
          )}

          {mapUrl && (
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-outline-button"
            >
              View Location
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Page 3: Builder Information -------------------- */

export function BuilderDetails({ property }) {
  const builder = property?.builder;

  if (!builder) {
    return (
      <section className="pc-page pc-builder-page">
        <div className="pc-builder-empty">
          <h2>Builder information</h2>
          <p>Builder details are not available.</p>
        </div>
      </section>
    );
  }

  const completed = getBuilderValue(
    builder,
    "completedProjects",
    "completed"
  );

  const ongoing = getBuilderValue(
    builder,
    "ongoingProjects",
    "ongoing"
  );

  const phone = builder.phone;
  const email = builder.email;

  const cities = Array.isArray(builder.citiesAvailable)
    ? builder.citiesAvailable.join(", ")
    : builder.citiesAvailable;

  return (
    <section className="pc-page pc-builder-page">
      <div className="pc-builder-banner">
        <div className="pc-builder-avatar">
          {(builder.name || "B").charAt(0).toUpperCase()}
        </div>

        <div>
          <span className="pc-builder-label">
            PROPERTY DEVELOPER
          </span>

          <h2>{builder.name || "Builder Name"}</h2>

          <p>
            {builder.status || "Builder information"}
          </p>
        </div>
      </div>

      <div className="pc-builder-body">
        <h3>Builder Overview</h3>

        {builder.description && (
          <p className="pc-description">
            {builder.description}
          </p>
        )}

        <div className="pc-builder-stats">
          <div className="pc-stat-box">
            <strong>{formatNumber(completed)}</strong>
            <span>Completed</span>
          </div>

          <div className="pc-stat-box">
            <strong>{formatNumber(ongoing)}</strong>
            <span>Ongoing</span>
          </div>

          <div className="pc-stat-box">
            <strong>
              {formatNumber(builder.totalProjects)}
            </strong>
            <span>Total Projects</span>
          </div>
        </div>

        <div className="pc-details-grid pc-builder-grid">
          <Fact label="Email" value={email} wide />
          <Fact label="Phone" value={phone} />
          <Fact label="Cities Available" value={cities} wide />
          <Fact
            label="Corporate Address"
            value={builder.corporateAddress}
            wide
          />
        </div>

        <div className="pc-contact-actions">
          {phone && (
            <a
              href={`tel:${phone}`}
              className="pc-contact-button"
            >
              Call Builder
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="pc-contact-button pc-email-button"
            >
              Email Builder
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Main Reusable Property Card -------------------- */

const CARD_TABS = [
  { id: "overview", label: "Overview" },
  { id: "details", label: "Details" },
  { id: "builder", label: "Builder" },
];

export default function PropertyCard({
  property,
  className = "",
  defaultPage = "overview",
}) {
  const [activePage, setActivePage] = useState(defaultPage);

  if (!property) return null;

  return (
    <article className={`property-card ${className}`}>
      <div className="pc-content">
        {activePage === "overview" && (
          <PropertyOverview property={property} />
        )}

        {activePage === "details" && (
          <PropertyDetails property={property} />
        )}

        {activePage === "builder" && (
          <BuilderDetails property={property} />
        )}
      </div>

      <nav className="pc-tabs" aria-label="Property information">
        {CARD_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`pc-tab ${
              activePage === tab.id ? "active" : ""
            }`}
            onClick={() => setActivePage(tab.id)}
            aria-current={
              activePage === tab.id ? "page" : undefined
            }
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </article>
  );
}
