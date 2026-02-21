"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "projects", href: "/#projects" },
  { label: "services", href: "/#services" },
  { label: "blog", href: "/blog" },
  { label: "about", href: "/#about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        window.location.href = href;
      } else {
        const el = document.querySelector(href.slice(1));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/10 backdrop-blur-xs"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[83px] max-w-[1200px] 2xl:max-w-[1600px] items-center justify-between px-6 md:px-[40px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-0 no-underline"
        >
          <span
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-white text-[30px] font-semibold tracking-tight"
          >
            codefi
          </span>
          <span className="text-[#00FF77] text-[18px] font-semibold">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="border-none bg-transparent p-0 cursor-pointer"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "-0.4px",
                  lineHeight: "28px",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ffffff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                }
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="no-underline"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "-0.4px",
                  lineHeight: "28px",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ffffff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                }
              >
                {link.label}
              </Link>
            )
          )}

          {/* Contact CTA */}
          <button
            onClick={() => scrollTo("/#contact")}
            className="border-none bg-transparent p-0 cursor-pointer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 400,
              color: "#00FF77",
              letterSpacing: "-0.4px",
              lineHeight: "28px",
              transition: "text-decoration 0.3s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            contact
          </button>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-16">
          {/* Shared text container */}
          <div className="h-[18px] flex items-center">
            {/* Menu text (when closed) */}
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 0.7 }}
              transition={{ duration: 0.3 }}
              className="text-[20px] font-medium text-white top-6"
              style={{ fontFamily: "var(--font-heading)", position: "absolute" }}
            >
              {menuOpen ? "" : "menu"}
            </motion.span>

            {/* Close text (when open) */}
            <motion.span
              animate={{ opacity: menuOpen ? 0.7 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[20px] font-medium text-white top-6"
              style={{ fontFamily: "var(--font-heading)", position: "absolute" }}
            >
              {menuOpen ? "close" : ""}
            </motion.span>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="border-none bg-transparent p-0 cursor-pointer flex items-center transition-all duration-300"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon wrapper */}
            <div className="relative w-5 h-[18px] flex flex-col justify-center gap-2">
            {/* Two lines hamburger icon */}
            <motion.span
              className="block h-[2px] w-5 bg-white"
              animate={menuOpen ? { rotate: 45, y: 5.5, opacity: 0 } : { rotate: 0, y: 0, opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[2px] w-5 bg-white"
              animate={menuOpen ? { rotate: -45, y: -5.5, opacity: 0 } : { rotate: 0, y: 0, opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            />

            {/* X icon (centered) */}
            <motion.div
              animate={{ opacity: menuOpen ? 0.7 : 0, rotate: menuOpen ? 0 : -90 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="2" y1="2" x2="18" y2="18" />
                <line x1="18" y1="2" x2="2" y2="18" />
              </svg>
            </motion.div>
          </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Full screen blur overlay - starts below header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 right-0 z-40 backdrop-blur-xs"
              style={{
                top: "83px",
                bottom: 0,
                background: "rgba(0,0,0,0.4)",
              }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/10 backdrop-blur-xs border-b border-white/5 overflow-hidden relative z-50"
            >
              <div className="flex flex-col gap-6 px-8 py-8 text-right">
                {navLinks.map((link) =>
                  link.href.startsWith("/#") ? (
                    <button
                      key={link.label}
                      onClick={() => scrollTo(link.href)}
                      className="border-none bg-transparent p-0 cursor-pointer text-right"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "24px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.7)",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="no-underline"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "24px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.7)",
                        letterSpacing: "-0.4px",
                      }}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <button
                  onClick={() => scrollTo("/#contact")}
                  className="border-none bg-transparent p-0 cursor-pointer text-right"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#FF6200",
                    letterSpacing: "-0.4px",
                  }}
                >
                  contact
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="absolute bottom-0 left-6 md:left-40 right-6 md:right-40 h-[1px] bg-white"
      />
    </header>
  );
}
