"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          top: isScrolled ? "0" : "0.5cm",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-[0.5cm] right-[0.5cm] z-50 bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between h-16"
      >
        <div className="text-white font-medium text-lg tracking-tight px-6 h-full flex items-center">
          [rokybeast]
        </div>

        <div className="hidden md:flex items-stretch h-full absolute left-1/2 -translate-x-1/2">
          {links.map(([name, route]) => (
            <Link
              key={name}
              href={route}
              className="px-8 h-full flex items-center justify-center text-white/70 hover:text-black hover:bg-white transition-all duration-300 text-sm font-light tracking-wide"
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex h-full">
          <Link
            href="/contact"
            className="bg-white text-black px-8 h-full flex items-center justify-center text-sm font-medium hover:bg-white/90 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white px-6 h-full flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-60 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 transition-colors"
            >
              <X size={32} />
            </button>

            {links.map(([name, route]) => (
              <Link
                key={name}
                href={route}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-white/80 hover:text-white font-light"
              >
                {name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 bg-white text-black font-medium"
            >
              Contact Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
