"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  navItems,
  modalNavItems,
  subNavItems,
} from "../../../public/data/menu";
import { Button } from "../common/Button";
import HamburgerButton from "./HamburgerButton";

// Animation Variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.6 },
  exit: { opacity: 0 },
};

const leftPanelVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

const rightPanelVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

const contentFadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Navbar = ({ isOpen, setIsOpen }) => {
  const [shouldShowNav, setShouldShowNav] = useState(true);
  const [showModalContent, setShowModalContent] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const observerRef = useRef(null);
  const lastY = useRef(0);

  useEffect(() => {
    const observerTarget = observerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = entry.boundingClientRect.y;
        const scrollingDown = currentY < lastY.current;
        const scrollingUp = currentY > lastY.current;

        if (scrollingDown) setShouldShowNav(false);
        if (scrollingUp || currentY >= 0) setShouldShowNav(true);

        lastY.current = currentY;
      },
      { threshold: [0], rootMargin: "0px 0px -100% 0px" }
    );

    if (observerTarget) observer.observe(observerTarget);
    return () => {
      if (observerTarget) observer.unobserve(observerTarget);
    };
  }, []);

  const handleToggle = () => {
    if (!isOpen) {
      setContentVisible(false);
      setShowModalContent(true);
      setIsOpen(true);
    } else {
      setContentVisible(false);
      setTimeout(() => {
        setShowModalContent(false);
        setIsOpen(false);
      }, 600);
    }
  };

  return (
    <>
      <div ref={observerRef} className="h-[1px] w-full" />
      <div className="fixed left-0 w-full z-[200] md:px-9 max-md:px-6 max-md:py-6 py-4 md:py-8 bg-transparent">
        <div className="relative mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            animate={{ opacity: shouldShowNav ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="md:text-xl text-md font-bold text-black flex"
            >
              Vidusha
            </Link>
          </motion.div>

          {/* Center Nav */}
          <motion.div
            animate={{
              y: shouldShowNav && !isOpen ? 0 : -100,
              opacity: shouldShowNav && !isOpen ? 1 : 0,
              transition: { duration: 0.3 },
            }}
            className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            <nav className="rounded-full shadow-sm glassy-navbar">
              <div className="px-[56px] py-[14px]">
                <div className="flex gap-[40px]">
                  {navItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      className="group relative h-[24px] overflow-hidden text-[#2a2d34] font-semibold text-[16px]"
                    >
                      <span className="whitespace-nowrap block transition-all duration-300 group-hover:-translate-y-full">
                        {(item.label)}
                      </span>
                      <span className="absolute left-0 top-full block transition-all duration-300 group-hover:top-0">
                        {(item.label)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>

          {/* Right Controls */}
          <div className="flex items-center ml-auto transition">
            {/* Hamburger Button */}
            <div className="flex items-center rounded-full">
              <HamburgerButton toggle={handleToggle} isOpen={isOpen} />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[90] bg-black"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
              onClick={handleToggle}
            />

            {/* Panels */}
            <div className="fixed inset-0 z-[100] flex flex-col md:flex-row">
              {/* Left Panel */}
              <motion.div
                className="hidden lg:block md:w-[21%] h-[200px] md:h-full bg-[#2722df] relative"
                variants={leftPanelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 1 }}
              >
                <span className="nav-title absolute bottom-10 text-[#FFFFFFB2] text-xs 2xl:text-base text-start px-9 w-full">
                  Navigation
                </span>
              </motion.div>

              {/* Right Panel */}
              <motion.div
                className="relative w-full lg:w-[79%] max-lg:w-full h-full bg-[#4541f1] max-sm:bg-black shadow-xl overflow-y-auto"
                variants={rightPanelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 1 }}
                onAnimationComplete={() => setContentVisible(true)}
              >
                <AnimatePresence>
                  {contentVisible && showModalContent && (
                    <motion.div
                      className="2xl:px-12 px-6 py-6 md:px-7 md:py-12 flex flex-col gap-6 h-full justify-between max-lg:justify-center"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={contentFadeVariants}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="2xl:text-[1.125rem] text-[#FFFFFF9d] text-sm md:text-base max-lg:hidden">
                        Navigation
                      </span>

                      <nav className="2xl:gap-12 flex flex-col gap-2 max-md:gap-10 max-md:mt-35">
                        {modalNavItems.map(
                          (item) => (
                            console.log(modalNavItems),
                            (
                              <Link
                                key={item.key}
                                href={item.href}
                                onClick={handleToggle}
                                className="2xl:text-[7rem] group relative text-[#F1F1F1] w-fit text-lg max-sm:text-5xl max-md:text-6xl md:text-7xl font-medium leading-6 md:leading-[5rem] transition-all duration-500 ease-out"
                              >
                                <span className="whitespace-nowrap inline-flex items-center transition-transform duration-500 ease-out tracking-wide">
                                  <span className="w-0 opacity-0 overflow-hidden group-hover:w-5 md:group-hover:w-17 group-hover:opacity-100 group-hover:mr-2 md:group-hover:mr-3 transition-all duration-450 ease-out">
                                    —
                                  </span>
                                  {item.label}
                                </span>
                                <span className="2xl:text-[1rem] absolute px-1 top-0 text-xs text-[#FFFFFF9d] max-sm:text-[#ffffff54]">
                                  {item.id}
                                </span>
                              </Link>
                            )
                          )
                        )}
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
