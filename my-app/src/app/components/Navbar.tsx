
"use client";
import LoginModal from "./LoginModal";
import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./Navbar.css";

const AUTH_CHANGE_EVENT = "auth-state-change";

function subscribeToAuthChanges(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(AUTH_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(AUTH_CHANGE_EVENT, callback);
  };
}

function getAuthSnapshot() {
  return Boolean(window.localStorage.getItem("token"));
}

function getServerAuthSnapshot() {
  return false;
}

function notifyAuthChanged() {
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const isLoggedIn = useSyncExternalStore(
    subscribeToAuthChanges,
    getAuthSnapshot,
    getServerAuthSnapshot
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    notifyAuthChanged();
    setMenuOpen(false);
    router.push("/");
  };

  const navLinks = [
    { name: "Projects", path: "/Projects" },
    { name: "New Launches", path: "/NewLaunches" },
    { name: "How it's different", path: "/Different" },
    { name: "A clearer view", path: "/View" },
    
  ];

  return (
    <>
      {/* Upper Navbar */}
      <div className="top-navbar">
        <div className="top-navbar-content">
          <span>No phone number on this site</span>
          <Link href="/propertySearch" className="top-get-app">
            Get App
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
            href="/propertySearch"
            className="mobile-get-app"
            onClick={() => setMenuOpen(false)}
          >
            Get App
          </Link>
        </div>

        {/* Desktop Get App Button */}
        <Link href="/propertySearch" className="get-app-btn">
          Get App
        </Link>

        <button
          className="auth-btn"
          type="button"
          onClick={() => {
            if (isLoggedIn) {
              handleLogout();
            } else {
              setMenuOpen(false);
              setShowLogin(true);
            }
          }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>

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

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={() => {
          notifyAuthChanged();
          setShowLogin(false);
          setMenuOpen(false);
          router.push("/");
        }}
      />
    </>
  );
};

export default Navbar;
