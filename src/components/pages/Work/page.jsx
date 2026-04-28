"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {
  const targetRef = useRef(null);

  // Horizontal scroll logic
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // This moves the wrapper horizontally based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const experiences = [
    {
      company: "XQUIRREL",
      role: "CEO & Co-Founder",
      period: "2025 - PRESENT",
      color: "#ffffff",
      status: "ACTIVE_STARTUP",
      url: "https://www.xquirrel.com/en",
      points: [
        "Architecting the technical vision and business strategy for a modern software firm.",
        "Directing the development of high-fidelity digital platforms and scalable web solutions.",
        "Managing cross-functional teams to deliver enterprise-grade performance and UI/UX.",
      ],
    },
    {
      company: "LIYANAGE GROUP",
      role: "Associate Software Engineer",
      period: "2025 MAR - PRESENT",
      color: "#00ff41",
      status: "PROMOTED",
      points: [
        "Advancing enterprise system capabilities post-internship in a full-stack capacity.",
        "Developing mission-critical features using Spring Boot and the React ecosystem.",
        "Ensuring 99.9% system reliability through optimized database schemas and code reviews.",
      ],
    },
    {
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
    },
    {
      company: "SIMILATER",
      role: "Frontend Developer Intern",
      period: "OCT 2023 - FEB 2024",
      color: "#94a3b8",
      status: "COMPLETED",
      points: [
        "Developed responsive user interfaces using React, Tailwind CSS, and Bootstrap.",
        "Maintained and optimized production websites for maximum speed and scalability.",
        "Collaborated on translating UI/UX wireframes into functional, reusable components.",
      ],
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Decorative Text */}
        <div className="absolute top-10 left-10 overflow-hidden pointer-events-none">
          <h2 className="text-white/[0.03] text-[15vw] font-black uppercase italic leading-none">
            TIMELINE_
          </h2>
        </div>

        {/* The Scanning Line */}
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-10" />

        {/* --- THE CORRECTED MAP LOOP STARTS HERE --- */}
        <motion.div style={{ x }} className="flex gap-8 px-[10vw]">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative min-h-[600px] w-[450px] md:w-[550px] flex-shrink-0 bg-white/[0.02] border p-6 md:p-8 flex flex-col justify-between group rounded-sm transition-all duration-500 z-20 ${
                exp.role.includes("CEO") ? "border-white/20" : "border-white/5"
              }`}
            >
              {/* Glow Effect */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-700"
                style={{ backgroundColor: exp.color }}
              />

              <div className="flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                      Deployment_Period
                    </span>
                    <span className="font-mono text-xs text-white/80">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                      Status
                    </span>
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 bg-white/5 rounded border border-white/10"
                      style={{ color: exp.color }}
                    >
                      {exp.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none mb-1">
                  {exp.company}
                </h3>
                <p
                  className="text-lg md:text-xl font-bold mb-6 italic tracking-tight"
                  style={{ color: exp.color }}
                >
                  {exp.role}
                </p>

                <ul className="space-y-3 pb-4">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-xs md:text-sm flex gap-3 leading-relaxed group-hover:text-gray-200 transition-colors"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: exp.color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer section */}
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[8px] font-mono text-gray-600 uppercase">
                    Archive_Ref
                  </span>
                  <span className="text-[9px] font-mono text-white/40">
                    00{index + 1} // SYS_REC
                  </span>
                </div>

                {exp.url && (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black text-[9px] font-black uppercase tracking-tighter hover:bg-orange-600 hover:text-white transition-all italic"
                  >
                    Launch_Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* --- THE CORRECTED MAP LOOP ENDS HERE --- */}

      </div>

      {/* Progress Indicator for the Timeline */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[20vw] h-[2px] bg-white/5 overflow-hidden">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-full bg-white origin-left opacity-50"
        />
      </div>
    </section>
  );
};

export default Experience;