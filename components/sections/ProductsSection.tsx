"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, AnimatedWords } from "@/components/ui/AnimatedText";

const features = [
  {
    id: "dashboard",
    label: "Analytics Dashboard",
    headline: "Insights at a Glance",
    description:
      "Real-time analytics with beautiful visualizations. Track every metric that matters — from user engagement to revenue — in a single, intuitive interface.",
    visual: (
      <div className="w-full h-full flex flex-col gap-3 p-6">
        {/* Mock chart bars */}
        <div className="flex items-end gap-2 h-28">
          {[60, 80, 45, 90, 70, 85, 55, 95, 75, 88, 65, 92].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-md"
              style={{
                background: i === 8 || i === 11
                  ? "linear-gradient(180deg, #4f7cff, #6b92ff)"
                  : "rgba(255,255,255,0.08)",
                height: `${h}%`,
              }}
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
            />
          ))}
        </div>
        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Revenue", value: "$124K", up: true },
            { label: "Users", value: "8,492", up: true },
            { label: "Churn", value: "1.2%", up: false },
          ].map((m) => (
            <div key={m.label} className="p-3 rounded-xl bg-white/5 border border-white/8">
              <p className="text-[10px] text-white/35 mb-1">{m.label}</p>
              <p className="text-sm font-semibold text-white">{m.value}</p>
              <p className={`text-[10px] ${m.up ? "text-green-400" : "text-red-400"}`}>
                {m.up ? "↑ 12.4%" : "↓ 0.3%"}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "api",
    label: "API Platform",
    headline: "Power to Developers",
    description:
      "A fully documented, RESTful and GraphQL API platform with SDKs in every major language. Integrate once, build anything on top.",
    visual: (
      <div className="w-full h-full p-6 font-mono text-xs">
        <div className="mb-2 flex gap-1.5">
          {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c) => (
            <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
          ))}
        </div>
        <div className="space-y-1 text-white/60 leading-5">
          <p><span className="text-[#a78bfa]">POST</span> /api/v2/users</p>
          <p className="pl-4 text-white/35">{"{"}</p>
          <p className="pl-8"><span className="text-[#4f7cff]">&quot;name&quot;</span>: <span className="text-green-400">&quot;Ava Chen&quot;</span>,</p>
          <p className="pl-8"><span className="text-[#4f7cff]">&quot;email&quot;</span>: <span className="text-green-400">&quot;ava@corp.io&quot;</span>,</p>
          <p className="pl-8"><span className="text-[#4f7cff]">&quot;plan&quot;</span>: <span className="text-green-400">&quot;enterprise&quot;</span></p>
          <p className="pl-4 text-white/35">{"}"}</p>
          <p className="mt-3 text-green-400">✓ 200 OK · 28ms</p>
          <p className="pl-4 text-white/35">{"{"}</p>
          <p className="pl-8"><span className="text-[#4f7cff]">&quot;id&quot;</span>: <span className="text-[#f59e0b]">&quot;usr_xK9mP2&quot;</span>,</p>
          <p className="pl-8"><span className="text-[#4f7cff]">&quot;status&quot;</span>: <span className="text-green-400">&quot;active&quot;</span></p>
          <p className="pl-4 text-white/35">{"}"}</p>
        </div>
      </div>
    ),
  },
  {
    id: "ai",
    label: "AI Engine",
    headline: "Intelligence Built In",
    description:
      "A modular AI engine that connects to any data source. Extract insights, automate decisions, and deliver personalized experiences at scale.",
    visual: (
      <div className="w-full h-full p-6 flex flex-col gap-4">
        {/* AI chat mock */}
        <div className="space-y-3">
          {[
            { from: "user", text: "Analyze last month's user retention data" },
            { from: "ai", text: "Retention improved 14% YoY. Key driver: onboarding flow optimization on day 3 reduced churn by 8.2%." },
            { from: "user", text: "Recommend next actions" },
          ].map((msg, i) => (
            <motion.div
              key={i}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div
                className="max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed"
                style={{
                  background: msg.from === "user" ? "rgba(79,124,255,0.25)" : "rgba(255,255,255,0.07)",
                  borderRadius: msg.from === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                }}
              >
                {msg.from === "ai" && (
                  <span className="block text-[9px] text-[#4f7cff] mb-1 font-medium">TechTurtle AI</span>
                )}
                <span className="text-white/75">{msg.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="products" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-[-15%] bottom-[10%] w-[500px] h-[500px] rounded-full opacity-8 blur-[120px]"
          style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <FadeUp>
            <span className="inline-block text-xs font-medium text-[#4f7cff] uppercase tracking-[4px] mb-6">
              Our Products
            </span>
          </FadeUp>
          <h2 className="text-[clamp(30px,3.8vw,54px)] font-bold tracking-tight leading-[1.05]">
            <AnimatedWords text="Powerful Tools," delay={0.1} />
            {" "}
            <AnimatedWords text="Simple to Use" delay={0.2} />
          </h2>
          <FadeUp delay={0.25}>
            <p className="text-white/50 text-lg leading-relaxed mt-4">
              Everything your team needs — from analytics to automation — in one cohesive platform.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tab list */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {features.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setActive(i)}
                className="relative flex-shrink-0 lg:flex-shrink text-left p-5 rounded-[22px] border transition-all duration-300 min-w-[200px] lg:min-w-0"
                style={{
                  borderColor: active === i ? "rgba(79,124,255,0.35)" : "rgba(255,255,255,0.07)",
                  background: active === i ? "rgba(79,124,255,0.08)" : "rgba(255,255,255,0.03)",
                }}
                data-hover
              >
                {active === i && (
                  <motion.div
                    className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#4f7cff] rounded-full hidden lg:block"
                    layoutId="activeTab"
                  />
                )}
                <p className="text-[13px] font-medium text-white/80 mb-1 pl-2">{f.label}</p>
                <p className="text-[12px] text-white/35 pl-2 line-clamp-2">{f.headline}</p>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="rounded-[28px] border border-white/8 bg-white/3 overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
              >
                {/* Mock window chrome */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/8">
                  {["bg-red-500/60", "bg-yellow-500/60", "bg-green-500/60"].map((c) => (
                    <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                  ))}
                  <div className="flex-1 mx-4">
                    <div className="w-40 h-4 bg-white/8 rounded-md" />
                  </div>
                </div>

                {/* Feature visual */}
                <div className="h-72">{features[active].visual}</div>

                {/* Feature info */}
                <div className="p-8 border-t border-white/8">
                  <h3 className="text-xl font-semibold mb-3">{features[active].headline}</h3>
                  <p className="text-white/50 leading-relaxed">{features[active].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
