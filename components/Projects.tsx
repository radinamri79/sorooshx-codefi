"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  year: string;
  category: string;
  title: string;
  href: string;
  color: string;
  image?: string;
}

const projects: Project[] = [
  {
    year: "2022",
    category: "Web3 & SocialFi",
    title: "sorooshx",
    href: "#",
    color: "#FF6200",
  },
  {
    year: "2025",
    category: "AI Agent",
    title: "doyo",
    href: "#",
    color: "#6366F1",
  },
  {
    year: "2020",
    category: "Decentralized VPN",
    title: "bitvpn",
    href: "#",
    color: "#00FF77",
  },
  {
    year: "2026",
    category: "Smart Financial AI",
    title: "coco ai",
    href: "#",
    color: "#FACC15",
  },
];

function StickyCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const arrowRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Each card sticks a bit lower so they visibly stack
  const stickyTop = 83 + index * 12;

  return (
    <div
      ref={cardRef}
      className="h-[90vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.a
        href={project.href}
        className="sticky block w-full cursor-pointer group"
        style={{
          top: `${stickyTop}px`,
          textDecoration: "none",
        }}
      >
        <div
          className="rounded-2xl p-8 md:p-12 overflow-hidden"
          style={{
            backgroundColor: project.color + "0D",
            border: `1px solid ${project.color}20`,
            minHeight: "70vh",
          }}
        >
          {/* Meta row */}
          <div className="flex items-center justify-between mb-4">
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

          {/* Title + arrow */}
          <div className="flex items-center justify-between mb-8">
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "-0.5px",
                lineHeight: 1.1,
              }}
            >
              {project.title}
            </h3>

            <motion.div
              className="flex-shrink-0 ml-4"
              style={{ rotate: arrowRotate }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-white transition-colors duration-300"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </motion.div>
          </div>

          {/* Image area */}
          <div
            className="w-full aspect-[16/9] rounded-xl overflow-hidden relative"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
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
          </div>
        </div>
      </motion.a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-4 md:py-8">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {projects.map((project, i) => (
          <StickyCard
            key={project.title}
            project={project}
            index={i}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
