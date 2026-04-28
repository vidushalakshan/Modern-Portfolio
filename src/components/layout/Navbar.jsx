"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, modalNavItems } from "../../../public/data/menu";
import HamburgerButton from "./HamburgerButton";

const Navbar = ({ isOpen: propsIsOpen, setIsOpen: propsSetIsOpen }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = propsIsOpen !== undefined ? propsIsOpen : internalIsOpen;
  const setIsOpen = propsSetIsOpen !== undefined ? propsSetIsOpen : setInternalIsOpen;

  const [shouldShowNav, setShouldShowNav] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY.current && currentY > 100) setShouldShowNav(false);
      else setShouldShowNav(true);
      lastY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  // Modern Slide Variants
  const panelSlide = {
    initial: { y: "-100%" },
    animate: { y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <>
      <div className="fixed left-0 w-full z-[200] px-12 py-8 pointer-events-none">
        <div className="relative mx-auto max-w-[1800px] flex items-center justify-between pointer-events-auto">
          
          {/* LOGO: Black/White/Orange */}
          <motion.div 
            animate={{ opacity: shouldShowNav ? 1 : 0 }}
            className="flex flex-col cursor-pointer"
          >
            <Link href="/" className="text-white font-black text-2xl tracking-tighter uppercase italic">
              Vidusha<span className="text-[#FF5F00]">.</span>
            </Link>
            <span className="text-[10px] text-white/40 font-mono tracking-[0.2em] uppercase">
              Engine_v2.0
            </span>
          </motion.div>

          {/* PILL NAV: Black & White with Orange Hover */}
          <motion.div
            animate={{
              y: shouldShowNav && !isOpen ? 0 : -100,
              opacity: shouldShowNav && !isOpen ? 1 : 0,
            }}
            className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            <nav className="bg-white rounded-full px-8 py-4 shadow-2xl">
              <div className="flex gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="group relative overflow-hidden text-black font-bold text-xs uppercase tracking-widest"
                  >
                    <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                      {item.label}
                    </span>
                    <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full text-[#FF5F00]">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>

          {/* TOGGLE */}
          <div className="flex items-center">
            <HamburgerButton toggle={handleToggle} isOpen={isOpen} />
          </div>
        </div>
      </div>

      {/* FULL SCREEN MODERN TOGGLE VIEW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-[150] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* The Main Menu Panel */}
            <motion.div 
              variants={panelSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 bg-black flex flex-col justify-center px-[8vw] border-b border-[#FF5F00]/20"
            >
              {/* Background Watermark */}
              <div className="absolute bottom-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                <h2 className="text-white text-[25vw] font-black italic uppercase leading-none">Creative</h2>
              </div>

              <nav className="relative z-10 flex flex-col items-start gap-2">
                {modalNavItems.map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleToggle}
                      className="group flex items-center gap-8"
                    >
                      <span className="text-[#FF5F00] font-mono text-xl font-bold italic">
                        0{i + 1}
                      </span>
                      <h2 className="text-white text-[7vw] font-black uppercase italic tracking-tighter transition-all duration-300 group-hover:text-[#FF5F00] group-hover:translate-x-4">
                        {item.label}
                      </h2>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* FOOTER AREA */}
              <div className="absolute bottom-12 left-[8vw] right-[8vw] flex justify-between items-end">
                <div className="flex gap-12">
                   <div className="flex flex-col gap-2">
                      <span className="text-white/30 text-[10px] uppercase tracking-widest font-mono">Inquiries</span>
                      <a href="mailto:info@vidusha.me" className="text-white font-bold hover:text-[#FF5F00] transition-colors uppercase italic">Contact_Me</a>
                   </div>
                   <div className="flex flex-col gap-2">
                      <span className="text-white/30 text-[10px] uppercase tracking-widest font-mono">Projects</span>
                      <p className="text-white font-bold uppercase italic">LankaVibe_v2</p>
                   </div>
                </div>
                <div className="text-right">
                  <p className="text-white/20 font-mono text-xs uppercase tracking-widest leading-loose">
                    Software Engineer Portfolio<br/>
                    © 2026 Vidusha Lakshan
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;