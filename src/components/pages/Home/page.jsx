"use client";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import Images from "../../../constants/images";
import { Button } from "@/components/common/Button";
import videos from "@/constants/video";

const Page = () => {

  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] flex items-center justify-start overflow-hidden px-6 sm:px-12">
      {/* BACKGROUND LAYER: GTA VI uses deep vignettes and saturated imagery */}
      {/* BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={videos.home}
          className="h-full w-full object-cover  brightness-[0.4] contrast-100"
        ></video>

        <div className="absolute inset-0 bg-gradient-to-r  to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

        {/* Subtle Scanline Overlay for the whole screen */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] ,linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full flex flex-col max-sm:items-center">
        {/* Top Tagline */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-orange-600 font-black tracking-[0.4em] uppercase text-sm mb-2"
        >
          Software Engineer // 2026
        </motion.span>

        {/* Heading: Bold, Italic, Massive (Rockstar Style) */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,12vw,10rem)] font-[900] italic leading-[0.85] text-white uppercase tracking-tighter"
          >
            VIDUSHA <br />
            <span className="text-transparent stroke-text">LAKSHAN</span>
          </motion.h1>
        </div>

        {/* Description: High contrast and tight */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl max-sm:text-center leading-relaxed font-medium"
        >
          Open to job opportunities worldwide. Building polished, intuitive
          digital experiences with a cinematic touch.
        </motion.p>

        {/* Action Button: Glowing & Heavy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10"
        >
          <a href="mailto:contact@vidusha.me" className="group">
            <Button 
            variant="primary"
            className="relative flex items-center gap-4  hover:text-white transition-all duration-500 py-6 px-10 overflow-hidden">
              <span className="uppercase font-black italic tracking-widest text-lg">
                Inquire Now
              </span>
              <MdArrowOutward
                size={24}
                className="group-hover:rotate-45 transition-transform duration-300"
              />

              {/* Subtle Scanline Effect on Button */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_50%,transparent_50%)] bg-[length:100%_4px]" />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-10 right-10 flex flex-col items-end opacity-20 max-md:hidden">
        <span className="text-white font-mono text-xs">LAT: 6.7112° N</span>
        <span className="text-white font-mono text-xs">LON: 79.9044° E</span>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px white;
        }
      `}</style>
    </section>
  );
};

export default Page;
