
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

          <Link href="/properties" className="footer-cta">
            Explore Properties <span>↗</span>
          </Link>
        </div>

        {/* Explore Links */}
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/properties">All Properties</Link>
          <Link href="/properties">Buy Property</Link>
      
          <Link href="/dashboard">Property Reports</Link>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h3>Company</h3>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/projects">Our Projects</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>

        {/* Support Links */}
        <div className="footer-column">
          <h3>Support</h3>
          <Link href="/contact">Help Center</Link>
          <Link href="/contact">Get In Touch</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
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
