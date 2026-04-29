"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState("INITIALIZING_BOOT_SEQUENCE");

  const statusMessages = [
    "LOADING_CORE_MODULES...",
    "ESTABLISHING_ENCRYPTED_LINK...",
    "BYPASSING_LOCAL_FIREWALL...",
    "SYNCING_VIDUSHA_DATABASE...",
    "RENDER_ENGINE_OPTIMIZED",
    "ACCESS_GRANTED_WELCOME_USER"
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 1000);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 2;
        setStatus(statusMessages[Math.floor((next / 100) * statusMessages.length)]);
        return next > 100 ? 100 : next;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [finishLoading]);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "brightness(2) blur(20px)",
        transition: { duration: 0.8, ease: "circIn" } 
      }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-mono"
    >
      {/* 1. DYNAMIC GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* 2. SCANLINE & NOISE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-30 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-pulse" />

      {/* 3. PERIPHERAL HUD ELEMENTS (Top Left/Right) */}
      <div className="absolute top-10 left-10 text-[9px] text-white/20 uppercase tracking-[0.5em] leading-loose">
        Terminal_v2.06<br />
        Vidusha_Lakshan_OS<br />
        Secure_Connection: True
      </div>
      <div className="absolute top-10 right-10 text-right text-[9px] text-[#FF5F00] uppercase tracking-[0.3em] font-black italic">
        [ SYSTEM_OVERRIDE_ACTIVE ]
      </div>

      {/* 4. MAIN LOADING CORE */}
      <div className="relative flex flex-col items-center">
        {/* Animated Circle HUD */}
        <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-white/10 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-4 border-2 border-t-[#FF5F00] border-transparent rounded-full shadow-[0_0_20px_#FF5F0033]"
          />
          <div className="text-4xl font-[1000] italic text-white tracking-tighter">
            {progress}%
          </div>
        </div>

        {/* 5. DATA FEEDER (Bottom HUD) */}
        <div className="w-80 text-center">
          <motion.div 
            key={status}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#FF5F00] text-[11px] font-bold tracking-[0.4em] uppercase mb-6 h-4"
          >
            {status}
          </motion.div>

          {/* Glitch-style Progress Bar */}
          <div className="relative h-[2px] w-full bg-white/5 overflow-hidden">
            <motion.div 
              className="absolute h-full bg-white"
              initial={{ x: "-100%" }}
              animate={{ x: `${progress - 100}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-1 h-1">
             {Array.from({ length: 3 }).map((_, i) => (
               <div key={i} className={`h-full border border-white/10 ${progress > (i+1)*30 ? 'bg-[#FF5F00]/20' : ''}`} />
             ))}
          </div>
        </div>
      </div>

      {/* 6. CORNER DECORATIONS */}
      <div className="absolute bottom-10 left-10 flex gap-4">
        <div className="w-1 h-1 bg-white/20" />
        <div className="w-1 h-1 bg-[#FF5F00] animate-ping" />
        <div className="w-1 h-1 bg-white/20" />
      </div>
      <div className="absolute bottom-10 right-10 text-[8px] text-white/10 uppercase tracking-widest">
        Sri_Lanka_Node_6.7112
      </div>

    </motion.div>
  );
};

export default Preloader;