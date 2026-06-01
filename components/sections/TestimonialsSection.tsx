"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, AnimatedWords } from "@/components/ui/AnimatedText";

const testimonials = [
  {
    quote:
      "TechTurtle didn't just build our platform — they became a genuine technology partner. The quality of the code, the speed of delivery, and the attention to detail were unlike anything we'd experienced before.",
    name: "Sarah Mitchell",
    title: "CTO, Luminary Health",
    initials: "SM",
    rating: 5,
    color: "#4f7cff",
  },
  {
    quote:
      "We went from a broken legacy system to a world-class SaaS platform in under 6 months. TechTurtle's engineering team is exceptional. Our user engagement tripled within the first quarter post-launch.",
    name: "James Okonkwo",
    title: "Founder & CEO, Stackline",
    initials: "JO",
    rating: 5,
    color: "#a78bfa",
  },
  {
    quote:
      "The AI automation suite they built us handles thousands of workflows daily with zero downtime. We've reduced operational costs by 40% and our team can now focus entirely on growth.",
    name: "Priya Varma",
    title: "Head of Operations, Meridian Finance",
    initials: "PV",
    rating: 5,
    color: "#34d399",
  },
  {
    quote:
      "From the first discovery call to final delivery, the process was seamless. They challenged our assumptions in the best way, and the result was a product we're genuinely proud to ship.",
    name: "Lucas Berger",
    title: "VP Engineering, Arcflow",
    initials: "LB",
    rating: 5,
    color: "#f59e0b",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] right-[-5%] w-[450px] h-[450px] rounded-full opacity-6 blur-[120px]"
          style={{ background: "radial-gradient(circle, #4f7cff 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <FadeUp>
            <span className="inline-block text-xs font-medium text-[#4f7cff] uppercase tracking-[4px] mb-6">
              Testimonials
            </span>
          </FadeUp>
          <h2 className="text-[clamp(30px,3.8vw,54px)] font-bold tracking-tight leading-[1.05]">
            <AnimatedWords text="Trusted by" delay={0.1} />
            {" "}
            <AnimatedWords text="Industry Leaders" delay={0.2} />
          </h2>
          <FadeUp delay={0.25}>
            <p className="text-white/50 text-lg leading-relaxed mt-4">
              Don't just take our word for it — hear from the teams we've worked with.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main testimonial */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="relative p-10 lg:p-14 rounded-[32px] border border-white/8 bg-white/3 overflow-hidden min-h-[300px]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              >
                {/* Quote mark */}
                <div
                  className="absolute top-8 right-10 text-[120px] font-serif leading-none select-none"
                  style={{ color: `${testimonials[active].color}12` }}
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={testimonials[active].color}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[clamp(16px,2.2vw,21px)] text-white/80 leading-relaxed mb-10 font-light">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                    style={{ background: `${testimonials[active].color}30`, color: testimonials[active].color }}
                  >
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonials[active].name}</p>
                    <p className="text-sm text-white/40">{testimonials[active].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 mt-5 pl-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  data-hover
                >
                  <div
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: active === i ? "24px" : "8px",
                      background: active === i ? "#4f7cff" : "rgba(255,255,255,0.2)",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Side list */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className="text-left p-4 rounded-[20px] border transition-all duration-300"
                style={{
                  borderColor: active === i ? `${t.color}30` : "rgba(255,255,255,0.06)",
                  background: active === i ? `${t.color}08` : "transparent",
                }}
                data-hover
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-semibold flex-shrink-0"
                    style={{
                      background: active === i ? `${t.color}25` : "rgba(255,255,255,0.06)",
                      color: active === i ? t.color : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-white/80">{t.name}</p>
                    <p className="text-[11px] text-white/30">{t.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
