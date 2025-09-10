"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { subNavItems, modalNavItems } from "../../../public/data/menu";
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
          <motion.div
            animate={{ opacity: shouldShowNav ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="md:text-xl text-md font-bold text-black">
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
            className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <nav className="rounded-full">
              <div className="px-[56px] py-[14px]">
                <div className="flex gap-[40px]">
                  {subNavItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="group relative h-[24px] overflow-hidden text-[#2a2d34] text-[15px]"
                    >
                      <span className="whitespace-nowrap block transition-all duration-300 group-hover:-translate-y-full">
                        {item.label}
                      </span>
                      <span className="absolute left-0 top-full block transition-all duration-300 group-hover:top-0">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>

          {/* Right Controls */}
          <div className="flex items-center ml-auto transition">
            {/* Hamburger Button */}
            <div className="flex items-center rounded-full max-md:block hidden">
              <HamburgerButton
                toggle={handleToggle}
                isOpen={isOpen}
                bg="bg-black"
              />
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
                className="hidden lg:block md:w-[21%] h-[200px] md:h-full bg-[#4b4b4b] relative"
                variants={leftPanelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 1 }}
              >
                <span className="absolute bottom-10 text-[#FFFFFFB2] text-xs text-start px-9 w-full">
                  Navigation
                </span>
              </motion.div>

              {/* Right Panel */}
              <motion.div
                className="relative w-full lg:w-[79%] max-lg:w-full h-full bg-black max-sm:bg-black shadow-xl overflow-y-auto"
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
                      className="px-6 py-6 md:px-7 md:py-12 flex flex-col gap-6 h-full justify-between max-lg:justify-center"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={contentFadeVariants}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-[#FFFFFF9d] text-sm md:text-base max-lg:hidden">
                        Navigation
                      </span>

                      <nav className="flex flex-col gap-2 max-md:gap-10 max-md:mt-35">
                        {modalNavItems.map((item) => (
                          <Link
                            key={item.key}
                            href={item.href}
                            onClick={handleToggle}
                            className="group relative text-[#F1F1F1] w-fit text-lg max-sm:text-5xl max-md:text-6xl md:text-7xl 2xl:text-8xl font-medium leading-6 md:leading-[5rem] transition-all duration-500 ease-out"
                          >
                            <span className="whitespace-nowrap inline-flex items-center transition-transform duration-500 ease-out tracking-wide">
                              <span className="w-0 opacity-0 overflow-hidden group-hover:w-5 md:group-hover:w-17 group-hover:opacity-100 group-hover:mr-2 md:group-hover:mr-3 transition-all duration-450 ease-out">
                                —
                              </span>
                              {item.label}
                            </span>
                            <span className="absolute px-1 top-0 text-xs text-[#FFFFFF9d] max-sm:text-[#ffffff54]">
                              {item.id}
                            </span>
                          </Link>
                        ))}
                      </nav>

                      {/* Contact / Footer Section */}
                      <div className="mt-10 md:mt-0 md:absolute bottom-12 max-sm:bottom-0 right-0 px-2 md:px-7 flex flex-col gap-2">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                          <span className="text-2xl text-[#F1F1F1]">Whatsapp</span>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                          <span className="text-2xl text-[#F1F1F1]">Telegram</span>
                        </a>
                        <a href="mailto:info@Xquirrel.com">
                          <span className="text-lg text-[#f1f1f183] underline">
                            info@Xquirrel.com
                          </span>
                        </a>
                        <Link
                          href="/privacy-cookies-policy"
                          className="text-md md:mt-8 text-white max-md:hidden"
                        >
                          Privacy & Cookies
                        </Link>
                        <span className="text-[#f1f1f183] text-md max-sm:text-sm max-md:hidden max-sm:block">
                          © Xquirrel 2025
                        </span>
                      </div>
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
