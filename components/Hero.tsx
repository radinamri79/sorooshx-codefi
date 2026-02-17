"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroWords = ["software development", "web3 dapps,mobile apps"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-end pt-[83px] pb-4">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 py-12 md:py-20">
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 400,
            lineHeight: 1.3,
            letterSpacing: "-0.5px",
            color: "#ffffff",
          }}
          className="max-w-[900px]"
        >
          a product design
          <br />
          partner with focus on
        </motion.h1>

        {/* Animated words - orange */}
        <div
          className="mt-1 overflow-hidden"
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
                fontFamily: "var(--font-body)",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
                color: "#FF6200",
                display: "block",
              }}
            >
              {heroWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Book an appointment button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center justify-center mt-12"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            fontWeight: 400,
            height: "52px",
            padding: "16px 36px",
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "#ffffff",
            textDecoration: "none",
            letterSpacing: "0px",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff";
            e.currentTarget.style.color = "#000000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#ffffff";
          }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          book an appointment
        </motion.a>
      </div>
    </section>
  );
}
