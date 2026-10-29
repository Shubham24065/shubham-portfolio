"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          SHUBHAM SHARMA
        </Link>

        <div className="navbar-right">
          <div className={`nav-links${menuOpen ? " nav-links-open" : ""}`} id="mobile-navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={pathname === "/" ? item.href.slice(1) : item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a className="resume-button" href="/resume.pdf" download>
            <span>Resume</span>
            <span className="resume-icon" aria-hidden="true">↓</span>
          </a>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
