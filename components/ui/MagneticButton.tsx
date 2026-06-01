"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const base = cn(
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-medium text-sm tracking-wide transition-colors duration-200 overflow-hidden select-none",
    variant === "primary" &&
      "bg-[#4f7cff] text-white hover:bg-[#6b92ff]",
    variant === "secondary" &&
      "bg-white/8 text-white border border-white/12 hover:bg-white/14 hover:border-white/20",
    variant === "ghost" &&
      "text-white/70 hover:text-white",
    className
  );

  const inner = (
    <motion.div
      ref={ref}
      className={base}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-hover
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      )}
      {children}
    </motion.div>
  );

  if (href) {
    return <a href={href}>{inner}</a>;
  }

  return inner;
}
