"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "AI Agents & Automation",
    description:
      "Custom-built AI agents and autonomous workflows that integrate with your business to reduce costs and increase intelligence.",
  },
  {
    title: "Web3 Engineering",
    description:
      "Secure Smart Contracts (Solidity/Rust) and scalable DApp architectures built on industry-leading security standards.",
  },
  {
    title: "Digital Strategy & Growth",
    description:
      "Specialized marketing and GTM strategies for Web3 projects to build community and scale presence.",
  },
  {
    title: "MVP Development",
    description:
      "We turn complex ideas into functional prototypes in weeks, not months. Perfect for Canadian startups looking to raise seed funding.",
  },
  {
    title: "Mobile & Web Engineering",
    description:
      "Seamless user experiences across all devices. Whether it's a crypto wallet or a consumer tech app, we build pixel-perfect mobile solutions",
  },
  {
    title: "Full-Stack Enterprise",
    description:
      "From secure cloud backends to intuitive interfaces, we deliver enterprise-grade software that is ready for the demands of 2026 and beyond.",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-10 md:py-16">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="border-t border-white/10 pt-6 mb-12 text-center"
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 300,
              color: "rgba(255,255,255,1)",
            }}
          >
            services
          </span>
        </motion.div>

        {/* 2x3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
              className="bg-black p-10 md:p-12 flex flex-col items-center text-center"
            >
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#ffffff",
                  letterSpacing: "0px",
                  lineHeight: 1.4,
                  marginBottom: "16px",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,1)",
                  lineHeight: 1.5,
                  maxWidth: "360px",
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
