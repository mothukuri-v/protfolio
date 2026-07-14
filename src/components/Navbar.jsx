import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${sticky ? " sticky" : ""}`}>
      <div className="max-width">
        <div className="logo">
          <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
            Portfo<span>lio.</span>
          </a>
        </div>

        <ul className={`menu${menuOpen ? " active" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="menu-btn" onClick={() => setMenuOpen((v) => !v)}>
          <i className={`fas ${menuOpen ? "fa-times active" : "fa-bars"}`}></i>
        </div>
      </div>
    </nav>
  );
}
