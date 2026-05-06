"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdTerminal } from "react-icons/md";

const Footer = () => {
  const currentYear = 2026;

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/vidushalakshan", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vidusha-lakshan-37351a225/", label: "LinkedIn" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/vidusha_lakshan_/", label: "Instagram" },
  ];

  // Animation variants for Cyber-reveal
  const textVariant = {
    hidden: { opacity: 0, skewX: -20, x: -20 },
    visible: { 
      opacity: 1, 
      skewX: 0, 
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <footer className="relative w-full bg-[#050505] pt-32 pb-10 px-6 sm:px-12 border-t border-white/5 overflow-hidden font-sans" id="contact">
      
      {/* CYBER BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF5F00]/50 to-transparent animate-pulse" />
      
      {/* Massive Background Watermark with Glitch Feel */}
      <div className="absolute bottom-[-10%] left-[-5%] opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[35vw] font-black uppercase italic leading-none text-white tracking-tighter">
          V_LAKSHAN
        </h2>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          
          {/* LEFT: MISSION DIRECTIVE (CTA) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
          >
            <div className="flex items-center gap-3 mb-6">
              <MdTerminal className="text-[#FF5F00] animate-pulse" />
              <span className="text-[#FF5F00] font-mono text-[10px] tracking-[0.8em] uppercase">
                Termination_Sequence_Initiated
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-[950] text-white italic uppercase tracking-tighter leading-[0.85] mb-12">
              INITIATE <br />
              <span className="text-transparent stroke-text">CONTACT_</span>
            </h2>

            <motion.a 
              href="mailto:vidushalakshan7890@gmail.com" 
              whileHover={{ x: 10 }}
              className="group flex items-center gap-6 text-white/40 hover:text-[#FF5F00] transition-all duration-500"
            >
              <div className="h-[2px] w-20 bg-white/10 group-hover:bg-[#FF5F00] transition-all" />
              <span className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">
                vidushalakshan7890@gmail.com
              </span>
            </motion.a>
          </motion.div>

          {/* RIGHT: SYSTEM DATA NODES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-white font-black italic uppercase text-xs tracking-[0.4em] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF5F00] rotate-45" /> Main_Menu
              </h4>
              <ul className="space-y-4 font-mono text-[11px] text-white/30 uppercase tracking-widest">
                {['Services', 'Works', 'About', 'Contact'].map((item, i) => (
                  <li key={item} className="group cursor-pointer flex items-center gap-2 hover:text-[#FF5F00] transition-colors">
                    <span className="text-[#FF5F00] opacity-0 group-hover:opacity-100 transition-opacity">[{i + 1}]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-black italic uppercase text-xs tracking-[0.4em] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF5F00] rotate-45" /> Social_Grid
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a 
                    key={i} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="relative w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#FF5F00] transition-all overflow-hidden group/link"
                  >
                    {/* Interior Scanline Effect on Hover */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,95,0,0.1)_50%)] bg-[length:100%_4px] opacity-0 group-hover/link:opacity-100" />
                    <span className="relative z-10 text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
              
              <div className="pt-4 space-y-3 font-mono text-[10px] text-white/20 uppercase tracking-tighter italic">
                 <div className="flex items-center gap-3 group cursor-crosshair">
                   <MdLocationOn className="text-[#FF5F00] group-hover:animate-bounce" /> 
                   <span>LAT: 6.7112° N / LON: 79.9044° E</span>
                 </div>
                 <div className="text-[9px] text-[#FF5F00]/40 tracking-[0.2em]">
                    Region: Western_Province_SL
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER STRIP: STATUS BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-black italic uppercase text-2xl tracking-tighter">
              Vidusha Lakshan
            </h3>
            <div className="flex items-center gap-4 text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">
              <span>© {currentYear}</span>
              <span className="w-1 h-1 bg-white/10 rounded-full" />
              <span>Dev_Identity: Verified</span>
            </div>
          </div>

          {/* System Diagnostic Display */}
          <div className="flex items-center gap-8 border border-white/5 p-4 bg-white/5 backdrop-blur-md">
            <div className="flex flex-col font-mono text-[8px] uppercase tracking-tighter text-white/40">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> 
                Kernel: Optimal
              </span>
              <span>Uptime: 99.99%</span>
              <span className="text-[#FF5F00]">Build: 2.06_FINAL</span>
            </div>
            
            <div className="relative w-12 h-12 flex items-center justify-center border-2 border-[#FF5F00] rounded-none rotate-45 group hover:rotate-180 transition-transform duration-700">
               <span className="text-[10px] font-black text-white italic -rotate-45">2.6</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;