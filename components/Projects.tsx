"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  year: string;
  category: string;
  title: string;
  href: string;
  mainBg: string;
  imageBg: string;
  darkText: boolean;
  image?: string;
}

const projects: Project[] = [
  {
    year: "2022",
    category: "Web3 & SocialFi",
    title: "sorooshx",
    href: "#",
    mainBg: "#FF6200",
    imageBg: "#F05400",
    darkText: true,
    image: "/iMockup - iPhone 15 Pro Max.png",
  },
  {
    year: "2025",
    category: "AI Agent",
    title: "doyo",
    href: "#",
    mainBg: "#FFDD00",
    imageBg: "#FFC300",
    darkText: true,
    image: "/Doyo.png",
  },
  {
    year: "2020",
    category: "Decentralized VPN",
    title: "bitvpn",
    href: "#",
    mainBg: "#1F00FF",
    imageBg: "#FFFFFF",
    darkText: false,
  },
  {
    year: "2026",
    category: "Smart Financial AI",
    title: "coco ai",
    href: "#",
    mainBg: "#FF003B",
    imageBg: "#FFFFFF",
    darkText: false,
  },
];

const HEADER_HEIGHT = 83;
const CARD_GAP = 10;

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

  // Arrow: starts right (→) at 0°, rotates to upper-right (↗) at -45°
  const arrowRotate = useTransform(scrollYProgress, [0.5, 1], [0, -45]);

  const stickyTop = HEADER_HEIGHT + index * CARD_GAP;
  const textColor = project.darkText ? "#000000" : "#ffffff";
  const metaColor = project.darkText
    ? "rgba(0,0,0,0.5)"
    : "rgba(255,255,255,0.5)";
  const arrowColor = project.darkText ? "#000000" : "#ffffff";

  return (
    <div
      ref={cardRef}
      className="relative"
      style={{
        height: "100vh",
        zIndex: index + 1,
      }}
    >
      <div
        className="sticky w-full"
        style={{ top: `${stickyTop}px` }}
      >
        <a
          href={project.href}
          className="block w-full no-underline group"
        >
          <div
            className="rounded-2xl p-5 sm:p-8 md:p-12 flex flex-col overflow-hidden"
            style={{
              backgroundColor: project.mainBg,
              height: `calc(100vh - ${stickyTop + 16}px)`,
              minHeight: "360px",
            }}
          >
            {/* Meta row */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span
                className="text-[11px] sm:text-xs font-light"
                style={{
                  fontFamily: "var(--font-body)",
                  color: metaColor,
                }}
              >
                {project.year}
              </span>
              <span
                className="text-[11px] sm:text-xs font-light"
                style={{
                  fontFamily: "var(--font-body)",
                  color: metaColor,
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Title + arrow */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight leading-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: textColor,
                }}
              >
                {project.title}
              </h3>

              <motion.div
                className="shrink-0 ml-3 sm:ml-4"
                style={{ rotate: arrowRotate }}
              >
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={arrowColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>

            {/* Image area */}
            <div
              className="flex-1 w-full rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: project.imageBg,
                minHeight: 0,
              }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full max-h-full max-w-full object-contain"
                />
              ) : (
                <span
                  className="text-sm opacity-15"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#000000",
                  }}
                >
                  {project.title}
                </span>
              )}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-4 md:py-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
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
