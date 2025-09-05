"use client";

import { useTranslations } from "next-intl";
// import { Link, useRouter, usePathname } from "../../i18n/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, modalNavItems } from "../../../public/data/menu";
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

const languages = [
  { code: "en", name: "English" },
  { code: "it", name: "Italian" },
];

const Navbar = ({ isOpen, setIsOpen }) => {
  const t = useTranslations("Navbar");

  const [shouldShowNav, setShouldShowNav] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [projectContentVisible, setProjectContentVisible] = useState(false);

  const observerRef = useRef(null);
  const lastY = useRef(0);
  const langRef = useRef(null);

  const currentLocale = router?.locale || "en";

  const [displayLocale, setDisplayLocale] = useState(currentLocale);

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

  useEffect(() => {
    const newLocale = window.location.pathname.split("/")[1] || currentLocale;
    if (languages.some((lang) => lang.code === newLocale)) {
      setDisplayLocale(newLocale);
    }
  }, [pathname, currentLocale]);

  const handleLanguageSelect = (locale) => {
    router.push(pathname, { locale });
    setIsLanguageOpen(false);
  };

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
            <Link
              href="/"
              className="md:text-xl text-md font-bold text-[#F1F1F1] flex"
            >
              {/* <Image src={images.logo} alt="founders" className="w-[40px]" /> */}
              Xquirrel
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
                        {t(item.key)}
                      </span>
                      <span className="absolute left-0 top-full block transition-all duration-300 group-hover:top-0">
                        {t(item.key)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>

          {/* Right Controls */}
          <div className="flex items-center ml-auto transition">
            {/* <div className="hidden xl:flex items-center z-[200]">
              <Button variant="primary" size="small">
                <span>+ </span>
                <span>{t("start_project")}</span>
              </Button>
            </div> */}

            {/* Language Selector */}
            <div className="relative px-6" ref={langRef}>
              <div
                className="w-[85px] border-2 border-[#ffffff49] py-[11px] px-[20px] rounded-2xl hover:bg-white/10 transition cursor-pointer text-center"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <div className="text-[#F1F1F1] text-[15px] flex items-center justify-center gap-2">
                  {displayLocale.toUpperCase()}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isLanguageOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {isLanguageOpen && (
                <div className="absolute mt-2 w-[85px] bg-[#ffffff49] rounded-lg shadow-lg z-30 overflow-hidden">
                  {languages
                    .filter((lang) => lang.code !== displayLocale)
                    .map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className="w-full px-4 py-2.5 text-center text-sm text-[#F1F1F1] hover:bg-[#ffffff49] transition"
                      >
                        {lang.name}
                      </button>
                    ))}
                </div>
              )}
            </div>

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
              {/* Left Panel (Hidden on mobile) */}
              <motion.div
                className="hidden lg:block md:w-[21%] h-[200px] md:h-full bg-[#2722df] relative"
                variants={leftPanelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 1 }}
              >
                <span className="nav-title absolute bottom-10 text-[#FFFFFFB2] text-xs 2xl:text-base text-start px-9 w-full">
                  {t("title")}
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
                        {modalNavItems.map((item) => (
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
                              {t(item.key)}
                            </span>
                            <span className="2xl:text-[1rem] absolute px-1 top-0 text-xs text-[#FFFFFF9d] max-sm:text-[#ffffff54]">
                              {item.id}
                            </span>
                          </Link>
                        ))}
                      </nav>

                      {/* Contact / Footer Section */}
                      <div className="2xl:px-12 mt-10 md:mt-0 md:absolute bottom-12 max-sm:bottom-0 right-0 px-2 md:px-7 flex flex-col gap-2">
                        <a
                       
                        >
                          <a
                            href="https://wa.me/94776811456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="plausible-event-name=Nav-Whatsapp text-2xl text-[#F1F1F1] 2xl:text-[2.5rem]"
                          >
                            WhatsApp
                          </a>
                        </a>
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <a
                            href="https://t.me/xquirrelofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="plausible-event-name=Nav-Telegram text-2xl text-[#F1F1F1] 2xl:text-[2.5rem]"
                          >
                            Telegram
                          </a>
                        </a>
                        <a
                          className="plausible-event-name=Nav-Info"
                          href="mailto:info@Xquirrel.com"
                        >
                          <span className="2xl:text-[1.25rem] text-lg text-[#f1f1f183] underline">
                            info@Xquirrel.com
                          </span>
                        </a>
                        <Link
                          href="/privacy-cookies-policy"
                          className="2xl:text-[1.25rem] text-lg md:mt-8 text-white max-md:hidden"
                        >
                          {t("subtitle")}
                        </Link>
                        <span className="2xl:text-[1.1rem] text-[#f1f1f183] text-md max-md:hidden">
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
