"use client";

const socialLinks = [
  { label: "x(twitter)", href: "https://twitter.com/", color: "#ffffff" },
  { label: "linkedin", href: "https://linkedin.com/", color: "#0A66C2" },
  { label: "playstore", href: "#", color: "#ffffff" },
  { label: "appstore", href: "#", color: "#ffffff" },
  { label: "youtube", href: "https://youtube.com/", color: "#FF0000" },
  { label: "instagram", href: "https://instagram.com/", color: "#E1306C" },
  { label: "telegram", href: "https://telegram.org/", color: "#00FF77" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left text */}
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            2026 &copy; based in canada. serving global innovators.
          </span>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: link.color === "#ffffff"
                    ? "rgba(255,255,255,0.5)"
                    : link.color,
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
