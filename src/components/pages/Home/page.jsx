"use client";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { Button } from "@/components/common/Button";
import videos from "@/constants/video";

const Page = () => {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] flex items-center justify-start overflow-hidden px-6 sm:px-12">
      {/* BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={videos.home}
          className="h-full w-full object-cover grayscale brightness-[0.4] scale-110"
        />

        {/* THE VIGNETTE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />

        {/* SCANLINES */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full flex flex-col max-sm:items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
          </span>
          <span className="text-white/60 font-mono text-[10px] uppercase tracking-[0.3em]">
            Status: Available for Global Remote Work
          </span>
        </motion.div>

        {/* Top Tagline */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-orange-600 font-black tracking-[0.4em] uppercase text-sm mb-2"
        >
          Full-Stack Software Engineer // 2026
        </motion.span>

        {/* Heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,8.5rem)] font-[900] italic leading-[0.85] text-white uppercase tracking-tighter"
          >
            VIDUSHA <br />
            <span className="text-transparent stroke-text">LAKSHAN</span>
          </motion.h1>
        </div>

        {/* Updated Professional Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl max-sm:text-center leading-relaxed font-medium"
        >
          Architecting high-performance web systems with a focus on immersive UX. 
          Currently building <span className="text-white">LankaVibe</span> and 
          available for worldwide engineering collaborations.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10"
        >
          <a href="mailto:contact@vidusha.me" className="group">
            <Button
              variant="primary"
              className="relative flex items-center gap-6 hover:bg-orange-600 transition-all duration-500 py-6 px-12 rounded-none bg-transparent border border-white/20"
            >
              <span className="uppercase font-black italic tracking-widest text-lg text-white">
                Start a Project
              </span>
              <MdArrowOutward
                size={24}
                className="text-orange-600 group-hover:text-white group-hover:rotate-45 transition-transform duration-300"
              />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end space-y-2 opacity-30 max-md:hidden font-mono text-[10px] text-white uppercase tracking-tighter">
        <div className="flex gap-4">
          <span>Deployment: stable_0.4</span>
          <span className="text-orange-600">Enc: SSL_256</span>
        </div>
        <div className="flex flex-col items-end">
          <span>LAT: 6.7112° N</span>
          <span>LON: 79.9044° E</span>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Page;