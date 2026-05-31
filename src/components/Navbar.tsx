"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div
      className="navbar-wrapper w-nav"
      data-collapse="all"
    >
      <div className="nav-container">
        <Link
          href="/"
          aria-current="page"
          className="nav-logo-wrapper w-nav-brand w--current"
          onClick={() => setIsOpen(false)}
        >
          <h1 className="nav-logo-text">Paper boi</h1>
        </Link>
        
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
              role="navigation"
              className="nav-menu-wrapper w-nav-menu w--nav-menu-open"
              style={{
                display: "block",
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                zIndex: 9999,
              }}
            >
              <div className="nav-menu-inner">
                <div className="nav-menu-sidebar">
                  <div className="menu-sidebar-image-wrapper"></div>
                </div>
                <div className="nav-links">
                  <Link
                    href="/"
                    aria-current="page"
                    className="nav-link w-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/music" 
                    className="nav-link w-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Music
                  </Link>
                  <Link 
                    href="/about" 
                    className="nav-link w-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="nav-link w-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                <div className="nav-menu-sidebar right">
                  <div className="menu-sidebar-image-wrapper right"></div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        <div
          className={`menu-button w-nav-button ${isOpen ? "w--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Inject the icon that Webflow.js normally injects dynamically */}
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
}
