import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf", download: true },
    { name: "GitHub", href: "https://github.com/VijayKumarKalla", external: true },
    { name: "LinkedIn", href: "https://linkedin.com/in/vijay-kalla", external: true },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--bg)",
        borderBottom: "1px solid var(--muted)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}
      >
        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Vijay Kalla
        </motion.h2>

        {/* Desktop links */}
        <div
          className="desktop-links"
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          {links.map((link) =>
            link.download ? (
              <a key={link.name} href={link.href} download>
                {link.name}
              </a>
            ) : link.external ? (
              <a key={link.name} href={link.href} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            ) : (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            )
          )}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu"
          style={{
            background: "transparent",
            border: "none",
            fontSize: "24px",
            display: "none",
            cursor: "pointer",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "15px 20px",
            borderTop: "1px solid var(--muted)",
          }}
        >
          {links.map((link) =>
            link.download ? (
              <a key={link.name} href={link.href} download onClick={() => setOpen(false)}>
                {link.name}
              </a>
            ) : link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <a key={link.name} href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            )
          )}
          <ThemeToggle />
        </motion.div>
      )}
    </nav>
  );
}
