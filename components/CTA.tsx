"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="contact" className="py-16 md:py-28">
      <div
        ref={ref}
        className="mx-auto max-w-[1200px] px-6 md:px-10 flex flex-col items-center text-center"
      >
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#00FF77",
          }}
        >
          have a project in mind?
        </motion.h2>

        {/* CTA button */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center mt-10"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            fontWeight: 400,
            height: "52px",
            padding: "16px 36px",
            border: "1px solid #00FF77",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "#00FF77",
            textDecoration: "none",
            letterSpacing: "0px",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#00FF77";
            e.currentTarget.style.color = "#000000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#00FF77";
          }}
        >
          book an appointment
        </motion.a>
      </div>
    </section>
  );
}
