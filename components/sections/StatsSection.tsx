"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FadeUp } from "@/components/ui/AnimatedText";

const stats = [
  { value: 500, suffix: "+", label: "Clients Worldwide", description: "Businesses trust us with their tech" },
  { value: 20, suffix: "+", label: "Countries Served", description: "Global reach, local expertise" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", description: "Reliability you can count on" },
  { value: 1, suffix: "B+", label: "Transactions Processed", description: "Scale tested, battle hardened" },
];

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const isDecimal = value % 1 !== 0;

    const raf = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = eased * value;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) requestAnimationFrame(raf);
      else setCount(value);
    };
    requestAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="py-32 relative overflow-hidden">
      {/* Background line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #4f7cff 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <span className="text-xs font-medium text-[#4f7cff] uppercase tracking-[4px]">
            By the Numbers
          </span>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-[32px] overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative p-10 bg-[#050505] flex flex-col items-center text-center group hover:bg-[#0a0a0a] transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className="absolute inset-0 opacity-5 rounded-none"
                  style={{ background: "radial-gradient(circle at 50% 0%, #4f7cff, transparent 70%)" }}
                />
              </div>

              <span className="text-[clamp(36px,4.5vw,60px)] font-bold tracking-tight text-white mb-2 tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} duration={2.5} />
              </span>
              <p className="text-sm font-medium text-white/70 mb-2">{stat.label}</p>
              <p className="text-[12px] text-white/30">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
