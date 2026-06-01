"use client";

import { motion } from "framer-motion";
import { FadeUp, AnimatedWords } from "@/components/ui/AnimatedText";

const pillars = [
  {
    label: "Mission",
    text: "To democratize access to cutting-edge technology and empower businesses of all sizes to build exceptional digital products.",
  },
  {
    label: "Vision",
    text: "A world where every business can harness the full power of modern software to innovate, grow, and create meaningful impact.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-[-10%] top-[20%] w-[400px] h-[400px] rounded-full opacity-8 blur-[100px]"
          style={{ background: "radial-gradient(circle, #4f7cff 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <FadeUp delay={0}>
          <span className="inline-block text-xs font-medium text-[#4f7cff] uppercase tracking-[4px] mb-8">
            Our Story
          </span>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: headline */}
          <div>
            <h2 className="text-[clamp(30px,3.8vw,54px)] font-bold tracking-tight leading-[1.05] mb-8">
              <AnimatedWords text="Born from Passion," delay={0.1} />
              <br />
              <motion.span
                className="text-gradient-blue"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
              >
                Built for Scale
              </motion.span>
            </h2>

            <FadeUp delay={0.3}>
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                We started TechTurtle with a simple belief: great technology should be accessible to everyone.
                From a small team of developers passionate about building products, we&apos;ve grown into a
                full-service digital innovation studio helping companies of all sizes transform their
                digital presence.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-white/45 leading-relaxed">
                Every project we take on is driven by deep collaboration, relentless craft, and an obsession
                with quality. We don&apos;t just ship code — we ship experiences that stand out.
              </p>
            </FadeUp>
          </div>

          {/* Right: pillars */}
          <div className="space-y-5">
            {pillars.map((p, i) => (
              <FadeUp key={p.label} delay={0.2 + i * 0.15}>
                <div className="p-7 rounded-[24px] border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/14 transition-all duration-300 group">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-[3px] text-[#4f7cff] mb-3">
                    {p.label}
                  </span>
                  <p className="text-white/65 leading-relaxed text-[15px] group-hover:text-white/80 transition-colors">
                    {p.text}
                  </p>
                </div>
              </FadeUp>
            ))}

            {/* Visual accent */}
            <FadeUp delay={0.5}>
              <div className="relative p-7 rounded-[24px] border border-[#4f7cff]/20 bg-[#4f7cff]/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4f7cff]/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex gap-4 mb-4">
                    {["2019", "2021", "2023", "Now"].map((year, i) => (
                      <div key={year} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: i === 3 ? "#4f7cff" : "rgba(255,255,255,0.2)" }}
                        />
                        <span className="text-[11px] text-white/40">{year}</span>
                        {i < 3 && <div className="w-6 h-px bg-white/15" />}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-white/50">
                    From a 2-person team to a <span className="text-white/80 font-medium">global studio</span> — our journey continues.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
