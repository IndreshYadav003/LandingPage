
"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  const year = useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => 0,
  );

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Prop<span>Stoxx</span>.
          </Link>

          <p>
            Discover properties with clarity and confidence.
            PropStoxx helps you explore smarter real estate
            opportunities and make better property decisions.
          </p>

          <Link href="/propertySearch" className="footer-cta">
            Explore Properties <span>↗</span>
          </Link>
        </div>

        {/* Explore Links */}
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/propertySearch">All Properties</Link>
          <Link href="/propertySearch">Buy Property</Link>
          <Link href="/NewLaunches">New Launches</Link>
          <Link href="/Projects">Projects</Link>
        </div>

        {/* More to explore */}
        <div className="footer-column">
          <h3>Discover</h3>
          <Link href="/Different">How it&apos;s different</Link>
          <Link href="/View">A clearer view</Link>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © {year || ""} PropStoxx.
          All rights reserved.
        </p>

        <p className="footer-made">
          Designed for smarter property decisions.
        </p>

      </div>

    </footer>
  );
}
