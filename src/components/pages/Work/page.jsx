"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SingleExperience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax offsets for different layers
  const textY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const experience = {
    company: "TACT COMPUTER SYSTEMS",
    role: "Software Engineer Intern",
    period: "MAR 2024 - SEP 2024",
    color: "#00d2ff",
    status: "CERTIFIED",
    points: [
      "Engineered full-stack modules using React (Frontend) and Spring Boot (Backend).",
      "Conducted rigorous API testing via Postman to ensure zero-bug deployment cycles.",
      "Resolved complex system bugs, enhancing overall application reliability and functionality.",
      "Successfully completed R&D tasks for new feature integration under Liyanage Group.",
    ],
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[120vh] flex items-center justify-center bg-[#020202] py-20 overflow-hidden " id="works"
    >
      {/* Background Decorative Layer (Moves slowly) */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none"
      >
        <h2 className="text-[25vw] font-black text-white/[0.02] leading-none uppercase">
          TACT_
        </h2>
        <h2 className="text-[20vw] font-black text-white/[0.01] leading-none uppercase italic ml-20">
          SYSTEMS
        </h2>
      </motion.div>

      {/* Floating Grid Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Main Content Card */}
      <motion.div
        style={{ y: cardY, opacity, scale }}
        className="relative z-20 w-[90%] max-w-4xl"
      >
        {/* Top Accent Line */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="font-mono text-[10px] text-white/40 tracking-[0.4em] uppercase">
            Internal_Report_v.01
          </span>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="relative bg-[#080808]/80 backdrop-blur-xl border border-white/10 p-8 md:p-16 overflow-hidden">
          {/* Subtle Glow corner */}
          <div 
            className="absolute -top-24 -right-24 w-64 h-64 blur-[120px] opacity-20 transition-opacity duration-700"
            style={{ backgroundColor: experience.color }}
          />

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-2">Primary_Affiliation</p>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                {experience.company}
              </h3>
            </div>
            <div className="md:text-right">
              <p className="font-mono text-xs text-white/70 mb-1">{experience.period}</p>
              <span 
                className="inline-block font-mono text-[10px] px-3 py-1 border rounded-full"
                style={{ borderColor: `${experience.color}44`, color: experience.color }}
              >
                {experience.status}
              </span>
            </div>
          </div>

          {/* Role Description */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="space-y-4">
              <div className="h-[2px] w-12" style={{ backgroundColor: experience.color }} />
              <h4 className="text-xl font-bold text-white uppercase italic tracking-wide">
                {experience.role}
              </h4>
              <p className="text-sm text-white/40 leading-relaxed font-mono">
                Full-stack focus utilizing enterprise-grade technologies to deliver scalable modules.
              </p>
            </div>

            <ul className="space-y-6">
              {experience.points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-4 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="text-xs font-mono text-white/20 mt-1">0{i + 1}</span>
                  <p className="text-sm md:text-base leading-relaxed tracking-tight">
                    {point}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Footer Metadata */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-between items-center">
             <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="font-mono text-[9px] uppercase leading-tight text-white/30">
                    Connection_Secure <br />
                    Location: Colombo_HQ
                </div>
             </div>
             
             <div className="flex gap-1">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1 h-4 bg-white/5 group-hover:bg-white/20 transition-all" />
                ))}
             </div>
          </div>
        </div>

        {/* Outer Corner Accents */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white/30" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white/30" />
      </motion.div>
    </section>
  );
};

export default SingleExperience;