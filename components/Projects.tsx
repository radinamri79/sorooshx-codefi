"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
  year: string;
  category: string;
  title: string;
  href: string;
  image?: string;
}

const projects: Project[] = [
  {
    year: "2022",
    category: "Web3 & SocialFi",
    title: "sorooshx",
    href: "#",
  },
  {
    year: "2025",
    category: "AI Agent",
    title: "doyo",
    href: "#",
  },
  {
    year: "2020",
    category: "Decentralized VPN",
    title: "bitvpn",
    href: "#",
  },
  {
    year: "2026",
    category: "Smart Financial AI",
    title: "coco ai",
    href: "#",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <motion.a
      ref={ref}
      href={project.href}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group block w-full cursor-pointer"
      style={{ textDecoration: "none" }}
    >
      <div className="border-t border-white/10 py-6 md:py-8">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {project.year}
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title row */}
        <div className="flex items-center justify-between">
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
              transition: "color 0.3s",
            }}
            className="group-hover:text-[#00FF77]"
          >
            {project.title}
          </h3>

          {/* Arrow */}
          <motion.div
            className="flex-shrink-0 ml-4"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-[#00FF77] transition-colors duration-300"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </motion.div>
        </div>

        {/* Image area — placeholder */}
        <motion.div
          className="mt-6 md:mt-8 w-full aspect-[16/9] rounded-xl bg-white/[0.03] border border-white/5 overflow-hidden relative"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.15)",
                }}
              >
                {project.title}
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div
        ref={containerRef}
        className="mx-auto max-w-[1200px] px-6 md:px-10"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
