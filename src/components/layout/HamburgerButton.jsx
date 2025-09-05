"use client";

import { motion } from "framer-motion";
import images from "../../constants/images";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const HamburgerButton = ({ toggle, isOpen, bg = "bg-[#ffffff49]" }) => (
  <div className="flex items-center gap-2">
    {!isOpen && (
      <button
        onClick={toggle}
        className={`focus:outline-none w-13 h-13 flex justify-center items-center md:px-4 md:py-4.5 ${bg} rounded-full`}
      >
        <Image
          src={images.toggle}
          alt="menu"
          width={23}
          height={23}
          className="object-contain"
        />
      </button>
    )}

    {isOpen && (
      <button
        onClick={toggle}
        className={`focus:outline-none w-13 h-13 text-3xl flex justify-center items-center md:px-4 md:py-4.5 ${bg} text-white rounded-full`}
      >
        <IoMdClose />
      </button>
    )}
  </div>
);

export default HamburgerButton;
