"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp, AnimatedWords } from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";

const contactInfo = [
  {
    label: "Email",
    value: "hello@techturtle.io",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "Schedule",
    value: "Book a 30-min call",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    label: "Response time",
    value: "Within 24 hours",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-[-10%] left-[30%] w-[600px] h-[400px] opacity-8 blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #4f7cff 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <FadeUp>
            <span className="inline-block text-xs font-medium text-[#4f7cff] uppercase tracking-[4px] mb-6">
              Get in Touch
            </span>
          </FadeUp>
          <h2 className="text-[clamp(30px,3.8vw,54px)] font-bold tracking-tight leading-[1.05]">
            <AnimatedWords text="Let's Build" delay={0.1} />
            {" "}
            <AnimatedWords text="Something Great" delay={0.2} />
          </h2>
          <FadeUp delay={0.25}>
            <p className="text-white/50 text-lg leading-relaxed mt-4">
              Have a project in mind? We'd love to hear about it. Fill in the form or send us an email.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left info */}
          <div className="lg:col-span-4 space-y-5">
            {contactInfo.map((info, i) => (
              <FadeUp key={info.label} delay={i * 0.1}>
                <div className="flex items-center gap-4 p-5 rounded-[22px] border border-white/8 bg-white/3 hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#4f7cff]/15 text-[#4f7cff] flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[11px] text-white/30 uppercase tracking-[2px] mb-0.5">{info.label}</p>
                    <p className="text-[14px] text-white/80 font-medium">{info.value}</p>
                  </div>
                </div>
              </FadeUp>
            ))}

            <FadeUp delay={0.4}>
              <div className="p-6 rounded-[22px] border border-[#4f7cff]/20 bg-[#4f7cff]/6">
                <p className="text-sm font-medium text-white mb-2">Ready to start?</p>
                <p className="text-[13px] text-white/50 mb-4 leading-relaxed">
                  Tell us about your project. We&apos;ll get back to you with a proposal within 24 hours.
                </p>
                <div className="flex gap-3">
                  {[
                    { label: "GitHub", href: "#" },
                    { label: "Twitter", href: "#" },
                    { label: "LinkedIn", href: "#" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="text-[11px] text-white/40 hover:text-white transition-colors"
                      data-hover
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <FadeUp delay={0.2}>
              <div className="p-10 rounded-[32px] border border-white/8 bg-white/3">
                {sent ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#4f7cff]/20 text-[#4f7cff] flex items-center justify-center mb-6">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-white/50">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-medium text-white/35 uppercase tracking-[2px] mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                          required
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-[#4f7cff]/50 focus:bg-white/8 transition-all text-[14px]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-white/35 uppercase tracking-[2px] mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@company.com"
                          required
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-[#4f7cff]/50 focus:bg-white/8 transition-all text-[14px]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-white/35 uppercase tracking-[2px] mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Your Company"
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-[#4f7cff]/50 focus:bg-white/8 transition-all text-[14px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-white/35 uppercase tracking-[2px] mb-2">
                        Message
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your project, goals, and timeline..."
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-[#4f7cff]/50 focus:bg-white/8 transition-all resize-none text-[14px]"
                      />
                    </div>
                    <div className="flex justify-end pt-2">
                      <MagneticButton variant="primary" onClick={() => {}}>
                        {sending ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                              <path d="M12 2a10 10 0 0 1 10 10"/>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </span>
                        )}
                      </MagneticButton>
                    </div>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
