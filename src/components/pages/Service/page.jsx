"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

const ServiceIndicator = ({ progress, range }) => {
  const opacity = useTransform(
    progress,
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    [0.2, 1, 1, 0.2]
  );

  const scaleX = useTransform(
    progress,
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    [0.8, 1.2, 1.2, 0.8]
  );

  return (
    <motion.div
      style={{ opacity, scaleX }}
      className="w-12 h-1 bg-orange-600 rounded-full "
    />
  );
};

const GlobalCounter = ({ progress }) => {
  const [count, setCount] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    setCount(Math.round(latest * 100));
  });

  return (
    <span className="text-4xl font-black text-white italic tabular-nums">
      {count}%
    </span>
  );
};

const Service = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  const sectionData = [
    {
      id: "fullstack",
      number: "01",
      title: "Full-Stack",
      subtitle: "Scalable Architecture",
      desc: "Building production-ready applications with high-performance backends and interactive frontends.",
      items: [
        "Frontend & Backend integration for scalable apps.",
        "Spring Boot, Next.js, React, Node.js, Express.js",
        "REST APIs, Authentication, Tailwind CSS",
        "GitHub, Postman for testing & collaboration",
      ],
      range: [0, 0.33],
    },
    {
      id: "cloud",
      number: "02",
      title: "Cloud Ops",
      subtitle: "Deployment & Scaling",
      desc: "Architecting serverless solutions and managing automated pipelines for global availability.",
      items: [
        "Design and manage scalable cloud infrastructures.",
        "AWS Services: EC2, S3, RDS, Lambda, IAM",
        "Cloud storage, databases, and serverless apps",
        "Monitoring & scaling with CloudWatch and Auto Scaling",
      ],
      range: [0.33, 0.66],
    },
    {
      id: "optimize",
      number: "03",
      title: "Optimization",
      subtitle: "Performance & Security",
      desc: "Deep-level system optimization, database indexing, and secure data handling.",
      items: [
        "Design efficient systems for scale & performance.",
        "Data Structures & Algorithms, DBMS, OOP",
        "OS Fundamentals, ETL & Data Pipelines",
      ],
      range: [0.66, 1.0],
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#050505]">
      {/* Background Decor - Parallax Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: useTransform(smoothProgress, [0, 1], ["0%", "-20%"]) }}
          className="absolute top-1/4 left-1/4 w-full text-center"
        >
          <h1 className="text-[30vw] font-black text-white/[0.01] uppercase select-none">
            Engine
          </h1>
        </motion.div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-sm:px-3  px-12 z-10 h-full flex items-center">
          
          {sectionData.map((section) => {
            const opacity = useTransform(
              smoothProgress,
              [section.range[0], section.range[0] + 0.08, section.range[1] - 0.08, section.range[1]],
              [0, 1, 1, 0]
            );

            const translateY = useTransform(
              smoothProgress,
              [section.range[0], section.range[1]],
              ["8vh", "-8vh"]
            );

            return (
              <motion.div
                key={section.id}
                style={{ opacity, y: translateY }}
                className="absolute w-full flex flex-col pointer-events-none"
              >
                {/* Meta Header */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-[1px] bg-orange-600" />
                  <span className="text-orange-500 font-mono text-xs tracking-[0.4em] uppercase">
                    Phase {section.number}
                  </span>
                </div>

                {/* Masked Title Reveal */}
                <div className="overflow-hidden">
                  <h2 className="text-[10vw] md:text-[8.5vw] font-black uppercase leading-none text-white tracking-tighter italic">
                    {section.title}
                  </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 pointer-events-auto">
                  
                  {/* Left: Description */}
                  <div className="lg:col-span-5 border-l border-orange-600/50 pl-8 max-sm:pl-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 italic leading-tight">
                      {section.subtitle}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                      {section.desc}
                    </p>
                  </div>

                  {/* Right: Technical Breakdown */}
                  <div className="lg:col-span-7 flex flex-col gap-3">
                    {section.items.map((item, i) => (
                      <motion.div
                        key={i}
                        className="group flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 p-4 rounded-sm transition-all duration-300"
                      >
                        <span className="text-orange-500 font-mono text-xs">{(i+1).toString().padStart(2, '0')}</span>
                        <p className="text-gray-300 text-sm md:text-base font-medium tracking-tight group-hover:text-white transition-colors">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 1. Bottom Left: Navigation State */}
        <div className="absolute left-10 bottom-10 flex flex-col gap-3">
          <span className="text-gray-500 text-[9px] uppercase font-bold tracking-[0.3em]">
            System_Status
          </span>
          <div className="flex gap-2">
            {sectionData.map((s, i) => (
              <ServiceIndicator key={i} progress={smoothProgress} range={s.range} />
            ))}
          </div>
        </div>

        {/* 2. Bottom Right: Global Progress */}
        <div className="absolute right-12 max-sm:right-3 bottom-10 flex items-baseline gap-3">
          <GlobalCounter progress={smoothProgress} />
          <div className="flex flex-col">
             <span className="text-orange-600 font-mono text-[10px] leading-none uppercase tracking-tighter max-sm:hidden">Load_Engine</span>
             <span className="text-gray-600 font-mono text-[9px] leading-none uppercase mt-1 max-sm:hidden">v2.0.26</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;