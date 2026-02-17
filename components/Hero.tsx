"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroWords = ["interactive experiences", "no-code websites"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-[83px]">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 py-20 md:py-32">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-[#00FF77] animate-pulse" />
            available for new projects
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            color: "#ffffff",
          }}
          className="max-w-[900px]"
        >
          a product design
          <br />
          partner with focus on
        </motion.h1>

        {/* Animated words */}
        <div
          className="mt-2 overflow-hidden"
          style={{ height: "clamp(44px, 7vw, 80px)" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                color: "#00FF77",
                display: "block",
              }}
            >
              {heroWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
