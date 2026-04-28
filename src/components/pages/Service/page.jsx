"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Service = () => {
  const containerRef = useRef(null);

  // Height determines how long the user stays "locked" in the transition
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // GTA Effect: The "Curtain" slide and background dimming
  const overlayOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const contentScale = useTransform(smoothProgress, [0.1, 0.3], [0.8, 1]);
  const contentBlur = useTransform(smoothProgress, [0.1, 0.3], ["10px", "0px"]);

  const sectionData = [
    {
      id: "design",
      title: "FULL-STACK",
      items: ["NEXT.JS", "SPRING BOOT", "REST APIs"],
      range: [0.2, 0.45],
    },
    {
      id: "development",
      title: "CLOUD",
      items: ["AWS SERVICES", "SERVERLESS", "SCALING"],
      range: [0.5, 0.75],
    },
    {
      id: "security",
      title: "OPTIMIZE",
      items: ["DBMS", "ALGORITHMS", "PIPELINES"],
      range: [0.8, 1.0],
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      {/* The Background Darkener - Dims the Home section as you scroll */}
      <motion.div 
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 bg-black pointer-events-none z-0"
      />

      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        
        {/* Animated Service Layers */}
        <div className="relative w-full max-w-7xl px-6">
          {sectionData.map((section, idx) => {
            // "Coming November" Entrance style: Scale up + Opacity
            const opacity = useTransform(
              smoothProgress,
              [section.range[0], section.range[0] + 0.05, section.range[1] - 0.05, section.range[1]],
              [0, 1, 1, 0]
            );
            
            const scale = useTransform(
              smoothProgress,
              [section.range[0], section.range[1]],
              [0.9, 1.1]
            );

            return (
              <motion.div
                key={section.id}
                style={{ opacity, scale, filter: contentBlur }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <motion.span className="text-orange-600 font-black tracking-[0.5em] mb-4 text-xl">
                  SERVICES // 0{idx + 1}
                </motion.span>
                
                <h2 className="text-[12vw] font-black italic uppercase leading-none text-white tracking-tighter">
                  {section.title}
                </h2>

                <div className="flex gap-6 mt-8">
                  {section.items.map((item, i) => (
                    <span key={i} className="text-gray-400 font-bold text-sm md:text-xl border-x border-white/20 px-4">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cinematic Progress Bar */}
        <div className="absolute bottom-20 w-1/3 h-[2px] bg-white/10">
          <motion.div 
            style={{ scaleX: smoothProgress }}
            className="h-full bg-orange-600 origin-left shadow-[0_0_15px_rgba(234,88,12,0.8)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;