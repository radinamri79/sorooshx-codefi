"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "What makes CODEFI different from a traditional dev agency?",
    answer:
      "We specialize at the intersection of Web3, AI, and enterprise software. Our team combines deep technical expertise with startup agility to deliver production-grade solutions faster than traditional agencies.",
  },
  {
    question: "How do you ensure the security of Smart Contracts?",
    answer:
      "Every smart contract undergoes rigorous internal audits, formal verification where applicable, and third-party security reviews before deployment. We follow industry best practices including OpenZeppelin standards.",
  },
  {
    question: "Can you integrate AI into our existing legacy systems?",
    answer:
      "Absolutely. We specialize in building AI agents and automation layers that integrate seamlessly with your existing infrastructure, enabling intelligent workflows without requiring a complete system overhaul.",
  },
  {
    question: "What is your typical project timeline for an MVP?",
    answer:
      "Most MVPs are delivered within 6-12 weeks depending on complexity. We follow agile sprints with weekly demos so you can see progress and provide feedback throughout the development cycle.",
  },
  {
    question: "Does CODEFI offer ongoing support after launch?",
    answer:
      "Yes. We offer dedicated maintenance and support packages including monitoring, bug fixes, feature updates, and scaling assistance to ensure your product continues to perform at its best.",
  },
  {
    question: "How do we start a project with CODEFI?",
    answer:
      "Simply reach out through our contact form or book an appointment. We'll schedule a discovery call to understand your vision, then provide a detailed proposal with timeline and investment breakdown.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="faq" className="py-10 md:py-16">
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              fontWeight: 300,
              color: "rgba(255,255,255,1)",
            }}
          >
            faq
          </span>
        </motion.div>

        {/* FAQ items */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-t border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-7 md:py-8 border-none bg-transparent cursor-pointer text-left"
              >
                <span
                  className="text-sm sm:text-base md:text-lg"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    color: "rgba(255,255,255,1)",
                    letterSpacing: "0px",
                    lineHeight: 1.6,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}. {faq.question}
                </span>
                <span
                  className="flex-shrink-0 ml-6 transition-transform duration-300"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "28px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,1)",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className="pb-8 pr-12"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.8,
                        maxWidth: "700px",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
