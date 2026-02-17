"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="contact" className="py-20 md:py-32">
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
          .say hello
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-[700px]"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(24px, 4vw, 40px)",
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: "-0.5px",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          i&apos;m open for freelance projects, feel free to{" "}
          <a
            href="mailto:hello@codefi.dev"
            style={{
              color: "#00FF77",
              textDecoration: "none",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            email me
          </a>{" "}
          to see how can we collaborate
        </motion.h2>

        {/* CTA button */}
        <motion.a
          href="mailto:hello@codefi.dev"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center justify-center mt-10"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "16px",
            fontWeight: 400,
            height: "52px",
            padding: "16px 36px",
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: "0",
            backgroundColor: "transparent",
            color: "#ffffff",
            textDecoration: "none",
            letterSpacing: "-0.4px",
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
        >
          contact me
        </motion.a>
      </div>
    </section>
  );
}
