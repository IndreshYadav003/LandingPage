
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Projects", path: "/Projects" },
    { name: "New Launches", path: "/NewLaunches" },
    { name: "How it's different", path: "/Different" },
    { name: "A clearer view", path: "/View" },
    { name: "Professional", path: "/Propessional" },
  ];

  return (
    <>
      {/* Upper Navbar */}
      <div className="top-navbar">
        <div className="top-navbar-content">
          <Link href="/privacy">Privacy</Link>
          <span>No phone number on this site</span>
          <Link href="/app" className="top-get-app">
            Get the app
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">

        {/* Logo */}
        <Link href="/" className="logo">
          <span className="logo-icon">🏠</span>
          <span className="logo-text">PropStoxx</span>
        </Link>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={
                pathname === link.path ? "active-link" : ""
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Get App Button */}
          <Link
            href="/app"
            className="mobile-get-app"
            onClick={() => setMenuOpen(false)}
          >
            Get the app
          </Link>
        </div>

        {/* Desktop Get App Button */}
        <Link href="/app" className="get-app-btn">
          Get the app
        </Link>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
