"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/AnimatedText";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-white/8 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <FadeUp delay={0}>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#4f7cff] flex items-center justify-center shadow-lg shadow-[#4f7cff]/30">
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                    <path d="M11 3C6.58 3 3 6.58 3 11C3 15.42 6.58 19 11 19C15.42 19 19 15.42 19 11C19 6.58 15.42 3 11 3Z" fill="white" opacity="0.25"/>
                    <path d="M11 6C8.24 6 6 8.24 6 11C6 13.76 8.24 16 11 16C13.76 16 16 13.76 16 11C16 8.24 13.76 6 11 6Z" fill="white"/>
                    <circle cx="11" cy="11" r="2.5" fill="#4f7cff"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold tracking-tight">TechTurtle</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed max-w-xs">
                Building the next generation of digital experiences. Fast, scalable, and beautiful.
              </p>
            </FadeUp>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <FadeUp delay={0.1}>
              <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-5">Navigation</p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                      data-hover
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <FadeUp delay={0.2}>
              <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-5">Stay Updated</p>
              <p className="text-sm text-white/45 mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              {subscribed ? (
                <motion.p
                  className="text-sm text-[#4f7cff]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thanks for subscribing!
                </motion.p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2.5 bg-white/6 border border-white/10 rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#4f7cff]/50 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#4f7cff] text-white rounded-xl text-sm font-medium hover:bg-[#6b92ff] transition-colors"
                    data-hover
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} TechTurtle. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-white/35 hover:text-white transition-colors duration-200 p-1"
                data-hover
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
