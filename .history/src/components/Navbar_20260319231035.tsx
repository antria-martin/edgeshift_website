"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#1a56db" />
              <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontFamily="Jost"
                fontWeight="700"
              >
                H
              </text>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Edgeshift Inc.</span>
            /*<span className={styles.logoSub}>TechWorks</span>
          </div>
        </Link>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ""}`}>
          <li>
            <Link href="/services" className={styles.navLink}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
