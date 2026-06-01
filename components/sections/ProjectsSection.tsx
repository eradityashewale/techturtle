"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, AnimatedWords } from "@/components/ui/AnimatedText";

const projects = [
  {
    title: "Phyzio",
    category: "Healthcare Platform",
    description:
      "A modern physiotherapy clinic website for Dr. Tanvi More featuring service showcases, appointment booking, rehabilitation programs, and advanced treatment technology like shockwave therapy.",
    year: "2025",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    gradient: "from-[#0a1e14] to-[#052e16]",
    accent: "#22c55e",
    stat: "Healthcare",
    url: "https://phyzio-ebon.vercel.app/",
    mockType: "health",
  },
  {
    title: "Astacon",
    category: "Pharmaceutical Company",
    description:
      "Corporate website for a pharmaceutical company committed to good health. Clean, trust-focused design communicating the brand's mission, product portfolio, and commitment to quality healthcare.",
    year: "2025",
    tags: ["React", "Tailwind CSS", "Vercel"],
    gradient: "from-[#0a1628] to-[#0c2340]",
    accent: "#3b82f6",
    stat: "Pharma",
    url: "https://astacon-web.vercel.app",
    mockType: "pharma",
  },
  {
    title: "Portfolio",
    category: "Personal Portfolio",
    description:
      "A sleek personal portfolio website showcasing projects, skills, and professional experience with a modern design and smooth interactions.",
    year: "2025",
    tags: ["React", "Tailwind CSS", "Vercel"],
    gradient: "from-[#1a0e2e] to-[#2d1654]",
    accent: "#a855f7",
    stat: "Portfolio",
    url: "https://portfolio-weld-gamma-6xd8xavkz7.vercel.app/",
    mockType: "portfolio",
  },
  {
    title: "Nexus Commerce",
    category: "E-Commerce Platform",
    description:
      "A headless commerce platform serving 200K+ daily transactions. Custom storefront, real-time inventory, and AI-powered recommendations.",
    year: "2024",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "from-[#1a1a2e] to-[#16213e]",
    accent: "#4f7cff",
    stat: "200K+ daily txns",
    url: null,
    mockType: "default",
  },
  {
    title: "Orbit Analytics",
    category: "SaaS Dashboard",
    description:
      "Enterprise-grade business intelligence suite with real-time data pipelines, custom report builder, and team collaboration.",
    year: "2024",
    tags: ["React", "Python", "ClickHouse"],
    gradient: "from-[#1a0a2e] to-[#2d1b69]",
    accent: "#a78bfa",
    stat: "50M+ data pts/day",
    url: null,
    mockType: "default",
  },
  {
    title: "Wavefront",
    category: "Mobile Application",
    description:
      "Cross-platform mobile app with offline-first architecture, end-to-end encryption, and sub-100ms sync times.",
    year: "2023",
    tags: ["React Native", "Expo", "GraphQL"],
    gradient: "from-[#0a1a2e] to-[#0f3460]",
    accent: "#38bdf8",
    stat: "4.8★ App Store",
    url: null,
    mockType: "default",
  },
  {
    title: "Catalyst API",
    category: "Developer Platform",
    description:
      "Public API infrastructure handling 1B+ monthly requests with 99.99% uptime, automatic rate limiting, and global edge distribution.",
    year: "2023",
    tags: ["Node.js", "Redis", "Cloudflare"],
    gradient: "from-[#0a2e1a] to-[#064e3b]",
    accent: "#34d399",
    stat: "1B+ monthly reqs",
    url: null,
    mockType: "default",
  },
];

function MockUI({ type, accent }: { type: string; accent: string }) {
  if (type === "health") {
    return (
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Actual Phyzio logo */}
        <div className="relative w-56 h-28 drop-shadow-2xl">
          <Image
            src="/phyzio-logo.png"
            alt="Phoenix — The Physiotherapy Clinic"
            fill
            className="object-contain"
            sizes="224px"
          />
        </div>
        {/* Service pills below logo */}
        <div className="flex flex-wrap justify-center gap-2">
          {["Sports Rehab", "Back Pain", "Laser Therapy", "Shockwave"].map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded-full text-[9px] font-medium backdrop-blur-sm"
              style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (type === "portfolio") {
    return (
      <div className="relative z-10 w-64">
        {/* Browser chrome */}
        <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-400/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
            <span className="w-2 h-2 rounded-full bg-green-400/70" />
            <span className="mx-auto text-[8px] text-white/30 font-mono truncate px-2">portfolio.vercel.app</span>
          </div>
          <div className="relative w-full h-36">
            <Image
              src="/portfolio-preview.png"
              alt="Portfolio website preview"
              fill
              className="object-cover object-top"
              sizes="256px"
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === "pharma") {
    return (
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Actual Astacon logo */}
        <div className="relative w-64 h-16 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/astacon-logo.png"
            alt="Astacon Pharmaceutical Pvt. Ltd."
            fill
            className="object-contain object-center"
            sizes="256px"
          />
        </div>
        {/* Tagline pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {["Good Health", "Quality Mfg.", "R&D", "Consort for Wellbeing"].map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded-full text-[9px] font-medium backdrop-blur-sm"
              style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 w-48">
      <div className="rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
        <div className="flex gap-1.5 mb-3">
          {[40, 65, 50].map((w, j) => (
            <div key={j} className="h-1.5 rounded-full bg-white/20" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="h-10 rounded-lg mb-2" style={{ background: `${accent}25` }} />
        <div className="grid grid-cols-2 gap-1.5">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="h-6 rounded-lg bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <FadeUp>
            <span className="inline-block text-xs font-medium text-[#4f7cff] uppercase tracking-[4px] mb-6">
              Case Studies
            </span>
          </FadeUp>
          <h2 className="text-[clamp(32px,4vw,56px)] font-bold tracking-tight leading-[1.05]">
            <AnimatedWords text="Selected" delay={0.1} />
            {" "}
            <AnimatedWords text="Work" delay={0.2} />
          </h2>
          <FadeUp delay={0.3}>
            <p className="text-white/50 text-lg leading-relaxed mt-4">
              Real projects, real results — from healthcare platforms to developer infrastructure.
            </p>
          </FadeUp>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="relative rounded-[28px] overflow-hidden border border-white/6 group"
              style={{ cursor: project.url ? "pointer" : "default" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => project.url && window.open(project.url, "_blank")}
              data-hover
            >
              {/* Live badge for real projects */}
              {project.url && (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-white/70 font-medium">Live</span>
                </div>
              )}

              {/* Visual area */}
              <div
                className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}
              >
                <div className="absolute inset-0">
                  <div
                    className="absolute top-8 right-8 w-40 h-40 rounded-full blur-2xl opacity-25"
                    style={{ background: project.accent }}
                  />
                  <div
                    className="absolute bottom-4 left-4 w-24 h-24 rounded-full blur-xl opacity-15"
                    style={{ background: project.accent }}
                  />
                </div>

                <MockUI type={project.mockType} accent={project.accent} />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: `${project.accent}15` }}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: project.accent, boxShadow: `0 8px 24px ${project.accent}50` }}
                  >
                    {project.url ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                      </svg>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-7 bg-white/3">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] text-white/35 uppercase tracking-[3px] font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-1 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-[11px] text-white/25 font-mono mt-1 flex-shrink-0 ml-2">
                    {project.year}
                  </span>
                </div>
                <p className="text-white/45 text-[14px] leading-relaxed mb-5">{project.description}</p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-medium rounded-lg border border-white/8 text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                      className="text-[11px] font-medium px-3 py-1.5 rounded-xl"
                      style={{ background: `${project.accent}15`, color: project.accent }}
                    >
                      {project.stat}
                    </span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-all"
                        data-hover
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
