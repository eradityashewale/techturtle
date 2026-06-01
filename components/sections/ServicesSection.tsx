"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp, AnimatedWords } from "@/components/ui/AnimatedText";

const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Custom web and mobile applications crafted with modern frameworks. From MVPs to enterprise platforms, we build software that scales.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI & Automation",
    description:
      "Intelligent systems that learn and adapt. We integrate cutting-edge AI to automate workflows, reduce costs, and unlock new capabilities.",
    tags: ["LLMs", "ML Pipelines", "Agents", "APIs"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
        <path d="M8 8H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-3"/>
        <circle cx="12" cy="16" r="1"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Cloud Infrastructure",
    description:
      "Resilient, secure, and cost-optimized cloud environments. We architect infrastructure that handles millions of users without breaking a sweat.",
    tags: ["AWS", "GCP", "Kubernetes", "Terraform"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Product Design",
    description:
      "Beautiful interfaces that don't just look stunning — they convert. We design with purpose, combining aesthetics with usability at every touch point.",
    tags: ["UI/UX", "Design Systems", "Prototyping", "Branding"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <FadeUp>
            <span className="inline-block text-xs font-medium text-[#4f7cff] uppercase tracking-[4px] mb-6">
              What We Do
            </span>
          </FadeUp>
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-[clamp(32px,4vw,56px)] font-bold tracking-tight leading-[1.05]">
              <AnimatedWords text="Services Built" delay={0.1} />
              <br />
              <AnimatedWords text="for Growth" delay={0.2} />
            </h2>
            <FadeUp delay={0.3}>
              <p className="text-white/50 text-lg leading-relaxed">
                From concept to launch, we cover every layer of the modern technology stack.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="relative p-7 rounded-[24px] border transition-all duration-400 cursor-default group overflow-hidden"
              style={{
                borderColor: hoveredIndex === i ? "rgba(79,124,255,0.3)" : "rgba(255,255,255,0.07)",
                background:
                  hoveredIndex === i
                    ? "rgba(79,124,255,0.06)"
                    : "rgba(255,255,255,0.03)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow on hover */}
              <motion.div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                animate={{
                  opacity: hoveredIndex === i ? 0.12 : 0,
                  scale: hoveredIndex === i ? 1 : 0.7,
                }}
                transition={{ duration: 0.4 }}
                style={{ background: "#4f7cff" }}
              />

              {/* Number */}
              <span className="text-[11px] text-white/20 font-mono mb-6 block">{service.number}</span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: hoveredIndex === i ? "rgba(79,124,255,0.2)" : "rgba(255,255,255,0.06)",
                  color: hoveredIndex === i ? "#4f7cff" : "rgba(255,255,255,0.6)",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/45 text-[15px] leading-relaxed mb-6 group-hover:text-white/60 transition-colors">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-medium rounded-lg border border-white/8 text-white/40 group-hover:border-white/14 group-hover:text-white/60 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
