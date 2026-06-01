"use client";

import { motion } from "framer-motion";
import { FadeUp, AnimatedWords } from "@/components/ui/AnimatedText";

const categories = [
  {
    name: "Frontend",
    items: [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#ffffff" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Tailwind", color: "#38bdf8" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", color: "#68a063" },
      { name: "Python", color: "#ffd43b" },
      { name: "Go", color: "#00add8" },
      { name: "GraphQL", color: "#e535ab" },
    ],
  },
  {
    name: "AI & Data",
    items: [
      { name: "OpenAI", color: "#10a37f" },
      { name: "LangChain", color: "#1c3c3c" },
      { name: "PyTorch", color: "#ee4c2c" },
      { name: "Spark", color: "#e25a1c" },
    ],
  },
  {
    name: "Infrastructure",
    items: [
      { name: "AWS", color: "#ff9900" },
      { name: "Kubernetes", color: "#326ce5" },
      { name: "Terraform", color: "#844fba" },
      { name: "Postgres", color: "#336791" },
    ],
  },
  {
    name: "Tableau",
    items: [
      { name: "Desktop", color: "#e97627" },
      { name: "Server", color: "#e97627" },
      { name: "Cloud", color: "#e97627" },
      { name: "Prep", color: "#e97627" },
      { name: "Public", color: "#e97627" },
      { name: "Pulse", color: "#e97627" },
      { name: "CRM Anlyt", color: "#e97627" },
      { name: "Hyper API", color: "#e97627" },
    ],
  },
];

function TechIcon({ name, color }: { name: string; color: string }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2.5 p-4 rounded-[20px] border border-white/7 bg-white/3 hover:bg-white/6 hover:border-white/14 transition-all duration-300 group cursor-default"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      data-hover
    >
      {/* Icon placeholder with initial letter */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
        style={{ background: `${color}18`, color }}
      >
        {name.slice(0, 2)}
      </div>
      <span className="text-[11px] text-white/50 group-hover:text-white/75 transition-colors font-medium">
        {name}
      </span>
    </motion.div>
  );
}

export default function TechStackSection() {
  return (
    <section id="tech" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-[20%] top-[30%] w-[600px] h-[300px] opacity-5 blur-[120px]"
          style={{ background: "linear-gradient(135deg, #4f7cff, #a78bfa)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <FadeUp>
            <span className="inline-block text-xs font-medium text-[#4f7cff] uppercase tracking-[4px] mb-6">
              Technology
            </span>
          </FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 max-w-4xl">
            <h2 className="text-[clamp(30px,3.8vw,54px)] font-bold tracking-tight leading-[1.05] flex-1">
              <AnimatedWords text="Built with the" delay={0.1} />
              {" "}
              <AnimatedWords text="Best Stack" delay={0.2} />
            </h2>
            <FadeUp delay={0.3}>
              <p className="text-white/50 max-w-sm leading-relaxed lg:pb-1">
                Battle-tested tools, developer-loved frameworks, and infrastructure built for scale.
              </p>
            </FadeUp>
          </div>
        </div>

        <div className="space-y-8">
          {categories.map((cat, ci) => {
            const isTableau = cat.name === "Tableau";
            return (
            <FadeUp key={cat.name} delay={ci * 0.1}>
              {isTableau && (
                <div className="h-px bg-gradient-to-r from-[#e97627]/30 via-[#e97627]/10 to-transparent mb-8" />
              )}
              <div className={`flex flex-col sm:flex-row gap-4 ${isTableau ? "p-5 rounded-[22px] border border-[#e97627]/15 bg-[#e97627]/3" : ""}`}>
                {/* Category label */}
                <div className="sm:w-28 flex-shrink-0 pt-4 sm:pt-5">
                  <span
                    className="text-[11px] font-medium uppercase tracking-[3px]"
                    style={{ color: isTableau ? "#e97627" : "rgba(255,255,255,0.25)" }}
                  >
                    {cat.name}
                  </span>
                  {isTableau && (
                    <p className="text-[10px] text-white/25 mt-1 normal-case tracking-normal">All products</p>
                  )}
                </div>

                {/* Tech grid */}
                <div className="flex-1 grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                  {cat.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.4,
                        delay: ci * 0.05 + i * 0.05,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                    >
                      <TechIcon name={item.name} color={item.color} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeUp>
            );
          })}
        </div>

        {/* Bottom callout */}
        <FadeUp delay={0.5}>
          <div className="mt-16 p-8 rounded-[28px] border border-white/8 bg-gradient-to-br from-[#4f7cff]/8 to-[#a78bfa]/5 flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div>
              <p className="font-semibold text-white mb-1">Need a custom tech stack?</p>
              <p className="text-white/45 text-sm">We evaluate and recommend the right tools for your specific requirements.</p>
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-shrink-0 px-6 py-3 bg-white/8 border border-white/12 rounded-xl text-sm font-medium hover:bg-white/14 transition-colors"
              data-hover
            >
              Talk to our engineers
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
