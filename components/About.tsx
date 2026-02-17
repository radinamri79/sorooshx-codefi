"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-20 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          .about
        </motion.span>

        {/* Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-[900px]"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: "-0.5px",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          my craft is building experiences that bring value to people and
          celebrate function over form. let&apos;s hide the ego and give some
          freedom to creativity and make the first small step changing the world
          to a better place
        </motion.h2>

        {/* Link */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 mt-10 group"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
          }
        >
          about me
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
