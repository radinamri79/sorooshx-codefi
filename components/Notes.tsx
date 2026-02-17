"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Note {
  title: string;
  date: string;
  href: string;
}

const notes: Note[] = [
  {
    title: "Starting and Growing a Career in Web Design",
    date: "Apr 8, 2022",
    href: "#",
  },
  {
    title: "Create a Landing Page That Performs Great",
    date: "Mar 15, 2022",
    href: "#",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    date: "Feb 28, 2022",
    href: "#",
  },
];

export default function Notes() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="notes" className="py-20 md:py-32">
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
          .three latest notes
        </motion.span>

        {/* Notes list */}
        <div className="mt-10 flex flex-col">
          {notes.map((note, i) => (
            <motion.a
              key={note.title}
              href={note.href}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
              }}
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 border-t border-white/10 py-6 md:py-8"
              style={{ textDecoration: "none" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  fontWeight: 500,
                  color: "#ffffff",
                  letterSpacing: "-0.3px",
                  lineHeight: 1.4,
                  transition: "color 0.3s",
                }}
                className="group-hover:text-[#00FF77]"
              >
                {note.title}
              </h3>
              <span
                className="flex-shrink-0"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.5)",
                  whiteSpace: "nowrap",
                }}
              >
                {note.date}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Visit blog link */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-flex items-center gap-2 mt-6 group"
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
          visit blog
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
