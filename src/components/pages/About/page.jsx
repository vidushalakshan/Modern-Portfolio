"use client";

import { motion } from "framer-motion";
import { MdVerified, MdTerminal, MdPublic } from "react-icons/md";

const About = () => {
  return (
    <section className="relative m-h-screen w-full bg-[#0a0a0a] py-24 px-6 sm:px-12 overflow-hidden">
      {/* Background HUD elements */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <span className="text-white font-mono text-[15vw] leading-none uppercase select-none italic font-black">
          About
        </span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT VIEW: PROFESSIONAL PROFILE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <MdVerified className="text-[#FF5F00] text-xl" />
            <span className="text-white/40 font-mono text-xs uppercase tracking-[0.4em]">
              Authorized_Personnel
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-[900] text-white italic uppercase tracking-tighter leading-[0.9] mb-10">
            ENGINEERED <br />
            <span className="text-transparent stroke-text">FOR SCALE</span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
            <p>
              I am a <span className="text-white">Computer Science Graduate</span> specializing in high-performance web and mobile ecosystems. 
              My expertise lies in architecting scalable solutions using <span className="text-[#FF5F00]">React, Next.js, and Spring Boot</span>.
            </p>
            <p>
              Beyond the code, I focus on the "Cinematic UX" ensuring that enterprise grade logic 
              meets polished, intuitive design. With a background in <span className="text-white">Full-Stack Development</span>, 
              I bridge the gap between complex backend systems and fluid frontend experiences.
            </p>
          </div>

          <div className="flex gap-8 mt-12">
            {/* <div className="flex flex-col">
              <span className="text-[#FF5F00] font-black text-3xl italic">0.5+</span>
              <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">Yrs_Experience</span>
            </div> */}
            <div className="flex flex-col">
              <span className="text-[#FF5F00] font-black text-3xl italic">BSc.</span>
              <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">Hons_Level</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#FF5F00] font-black text-3xl italic">24/7</span>
              <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">Global_Sync</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VIEW: ACADEMIC TERMINAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative perspective-1000"
        >
          <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 p-10 backdrop-blur-xl rounded-sm">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FF5F00] rounded-full" />
                <h3 className="text-white font-black italic uppercase tracking-widest">Education_Log</h3>
              </div>
              <MdTerminal className="text-white/20 text-3xl" />
            </div>

            {/* BSc Kingston */}
            <div className="mb-10 relative pl-6 border-l-2 border-[#FF5F00]">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#0a0a0a] border-2 border-[#FF5F00] rounded-full" />
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-white font-bold uppercase text-lg leading-tight">BSc (Hons) Computer Science</h4>
                <span className="text-[#FF5F00] font-mono text-xs font-bold">2025</span>
              </div>
              <p className="text-white/60 text-sm font-mono uppercase mb-3">Kingston University, UK</p>
              <div className="bg-white/5 p-3 rounded text-[11px] text-gray-500 font-mono uppercase">
                &gt; Class: 2nd Class Honours (Lower Division)
              </div>
            </div>

            {/* GDSE IJSE */}
            <div className="relative pl-6 border-l-2 border-white/10">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#0a0a0a] border-2 border-white/20 rounded-full" />
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-white font-bold uppercase text-lg leading-tight">Graduate Diploma (GDSE)</h4>
                <span className="text-white/20 font-mono text-xs">2021 - 2024</span>
              </div>
              <p className="text-white/60 text-sm font-mono uppercase mb-3">IJSE Sri Lanka</p>
              <div className="bg-white/5 p-3 rounded text-[11px] text-gray-500 font-mono uppercase">
                &gt; Status: Completed_Full_Stack_Training
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between opacity-20">
              <MdPublic className="text-xl" />
              <span className="font-mono text-[9px] uppercase">Record_ID: VK_99X_ED</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default About;