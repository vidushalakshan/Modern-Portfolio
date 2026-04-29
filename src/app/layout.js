"use client"; // <--- Add this at the very first line

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/common/Preloader";
import { useState, useEffect } from "react";
import { AnimatePresence,  motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Note: In Next.js, metadata cannot be exported from a Client Component.
// If you need SEO metadata, it is best to move it to a separate 
// non-client component or a different file, but for now, 
// let's focus on fixing your error.

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  // We use useEffect to handle the initial load 
  useEffect(() => {
    // This ensures the loader is shown on initial mount
    setIsLoading(true);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a]`}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="loader" finishLoading={() => setIsLoading(false)} />
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}