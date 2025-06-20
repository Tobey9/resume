"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.navbar} ref={dropdownRef}>
      <div className={styles.left}>
        <h2>
          <Link href="/">Toby</Link>
        </h2>
        <p>Fullstack Developer</p>
      </div>

      {/* Mobile menu button (shown on small screens) */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setOpen(!open)}
      >
        <FaBars />
      </button>

      <div className={styles.right}>
        <p>
          <Link href="/resume">Resume</Link>
        </p>
        <p>
          <Link href="/projects">Projects</Link>
        </p>
        <p>
          <Link href="/contact">Contact</Link>
        </p>
      </div>

      {open && (
        <div className={styles.mobileDropdown}>
          <p>
            <Link href="/resume">Resume</Link>
          </p>
          <p>
            <Link href="/projects">Projects</Link>
          </p>
          <p>
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      )}
    </div>
  );
}
