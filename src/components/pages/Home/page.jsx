"use client";

import Image from "next/image";
import { LuArrowDownRight } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Images from "../../../constants/images";
import { Button } from "@/components/common/Button";

const Page = () => {
  return (
    <section className="relative min-h-screen bg-[#e8e8e3] flex items-center justify-center overflow-hidden px-6 sm:px-12">
      {/* Background Image */}
      <Image
        src={Images.homeImg}
        alt="Background"
        priority
        className="absolute right-0 bottom-0 object-cover max-md:hidden md:w-[450px] lg:w-[550px] max-sm:hidden md:block"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col max-sm:items-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" max-sm:text-6xl max-sm:pt-0 md:text-7xl lg:text-8xl xl:text-[150px] mt-5 font-bold leading-tight text-black lg:pt-13 max-sm:text-center"
        >
          VIDUSHA <br className="sm:hidden lg:block" /> <span className="relative bottom-8 max-sm:top-[1px] md:top-[1px]">LAKSHAN</span>
        </motion.h1>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <LuArrowDownRight size={50} className="text-[#b6b6b0] relative bottom-10 max-sm:hidden md:hidden lg:block" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-base sm:text-lg md:text-[18px] lg:text-2xl text-gray-700 max-w-lg sm:max-w-1/3 max-sm:text-center relative max-sm:mt-10 md:mt-10 bottom-6"
        >
          Open to job opportunities worldwide. Passionate about building
          polished, intuitive, and thoughtful digital experiences that leave a
          mark.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="md:mt-5"
        >
          <a href="mailto:yourmail@example.com" target="_blank" rel="noopener noreferrer">
            <Button variant="bgBlack" size="large" className="flex items-center gap-2">
              <span className="uppercase">Contact</span>
              <span></span>
              <MdArrowOutward size={24} className="max-sm:hidden lg:block"/>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
