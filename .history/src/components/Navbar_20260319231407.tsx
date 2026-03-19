"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

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
          <Image
            src="/edgeshift-logo.png"
            alt="Edgeshift Inc."
            width={44}
            height={44}
          />
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Edgeshift Inc.</span>
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
