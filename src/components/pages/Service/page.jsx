"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import classNames from "classnames";

const Service = () => {
  const [activeSection, setActiveSection] = useState("design");
  const [itemRevealProgress, setItemRevealProgress] = useState(0);

  const containerRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const sectionId = useTransform(scrollYProgress, (val) => {
    if (val <= 0.2) return "design";
    else if (val <= 0.4) return "development";
    else return "security";
  });

  const sectionProgress = useTransform(scrollYProgress, (val) => {
    if (val <= 0.2) return val / 0.2;
    else if (val <= 0.4) return (val - 0.2) / 0.2;
    else return (val - 0.4) / 0.2;
  });

  useEffect(() => {
    const unsubscribe1 = sectionId.on("change", (id) => {
      setActiveSection(id);
    });
    const unsubscribe2 = sectionProgress.on("change", (progress) => {
      setItemRevealProgress(progress);
    });

    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, []);

  // Static data instead of translations
  const sectionData = [
    {
      id: "design",
      title: "Full-Stack ",
      items: [
        "Frontend & Backend integration for scalable apps.",
        "Spring Boot, Next.js, React, Node.js, Express.js",
        "REST APIs, Authentication, Tailwind CSS",
        "GitHub, Postman for testing & collaboration",
      ],
    },
    {
      id: "development",
      title: "Cloud",
      items: [
        "Design and manage scalable cloud infrastructures.",
        "AWS Services: EC2, S3, RDS, Lambda, IAM",
        "Cloud storage, databases, and serverless apps",
        "Monitoring & scaling with CloudWatch and Auto Scaling",
      ],
    },
    {
      id: "security",
      title: "Optimization",
      items: [
        "Design efficient systems for scale & performance.",
        "Data Structures & Algorithms, DBMS, OOP",
        "OS Fundamentals, ETL & Data Pipelines",
      ],
    },
  ];

  return (
    <section className="mt-20 px-6 sm:px-12 relative">
      {/* Left side heading */}
      <h1 className="uppercase text-[clamp(3rem,10vw,8rem)] font-bold text-[#e8e8e3] leading-tight">
        What I Do /
      </h1>

      {/* Right side content */}
      <div className="mt-20 max-sm:mt-10 flex sm:absolute sm:right-42 sm:top-24 max-w-[700px] mb-[300px] gap-6 relative">
        <span className="uppercase text-[16px] mt-2 text-gray-400 max-sm:text-[12px]">
          (Services)
        </span>
        <p className="text-[#e8e8e3] text-[23px] leading-relaxed max-sm:text-[12px]">
          I specialize in building full-stack web applications that are fast,
          reliable, and user-friendly. With a solid foundation in both frontend
          and backend technologies, I help bring ideas to life whether it’s for
          a business, a startup, or a product team.
        </p>
      </div>

      <div className="w-full flex justify-center items-center mt-30">
        <section
          id="services"
          ref={containerRef}
          className="w-full mx-auto snap-y snap-mandatory h-[400vh] relative 3xl:px-0 "
        >
          {/* Sticky Content */}
          <div className="sticky max-md:py-10 max-sm:pb-0 px-3 top-0 h-screen flex flex-col justify-between items-center md:flex-row max-md:items-start gap-12 max-md:gap-4">
            {/* Left Section Titles */}
            <div className="w-1/2 flex flex-col justify-center">
              {sectionData.map((section) => (
                <motion.h1
                  key={section.id}
                  className={classNames(
                    "max-sm:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl px-4 font-bold max-md:font-light leading-tight transition-colors duration-500",
                    activeSection === section.id
                      ? "text-[#EFEAE3]"
                      : "text-[#504A45]"
                  )}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: activeSection === section.id ? 1 : 0.3,
                    x: activeSection === section.id ? 0 : -20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {section.title}
                </motion.h1>
              ))}
            </div>

            {/* Right Content Items */}
            <div className="flex max-sm:flex-col w-full h-full justify-between max-sm:justify-center items-center max-sm:pb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  className="w-full bg-gradient-to-br shadow-xl flex justify-center items-center max-md:justify-start max-md:items-start max-md:px-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <RightItems
                    items={
                      sectionData.find((sec) => sec.id === activeSection)
                        ?.items || []
                    }
                    revealProgress={itemRevealProgress}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="w-full max-sm:block hidden text-[#636363] text-xs text-center mb-10">
              Explore what I do
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

const RightItems = ({ items, revealProgress }) => {
  const totalItems = items.length;

  return (
    <div className="flex flex-col justify-center w-full lg:ml-20">
      {items.map((item, index) => {
        const itemThreshold = (index + 1) / totalItems;
        const isVisible = revealProgress >= itemThreshold - 1 / totalItems / 2;

        return (
          <motion.div
            key={index}
            className="p-3"
            initial={false}
            animate={{ opacity: isVisible ? 1 : 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex items-center gap-3"
              animate={{ paddingLeft: isVisible ? "3.75rem" : "1rem" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-[1rem] left-0 text-white/50 max-sm:font-light max-md:text-base 2xl:text-xl">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[1rem] pl-5 max-lg:pl-3 text-[#F4F4F4] whitespace-nowrap max-md:font-light 2xl:text-xl max-sm:text-base">
                {item}
              </h3>
            </motion.div>

            {index !== items.length - 1 && (
              <hr className="mt-8 border-[#ffffff1c] max-sm:mt-6 w-full relative 2xl:left-15" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Service;
