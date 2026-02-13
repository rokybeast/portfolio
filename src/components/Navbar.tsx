"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Magnet from "./Magnet";
import DecryptedText from "./DecryptedText";
import ShinyText from "./ShinyText";

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
        }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 h-24 transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
          }`}
      >
        <div className="z-50">
          <Link href="/">
            <div className="text-2xl font-bold tracking-tighter text-white">
              <DecryptedText
                text="[rokybeast]"
                animateOn="view"
                revealDirection="center"

              />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {links.map(([name, route]) => (
            <Magnet key={name} padding={20} disabled={false} magnetStrength={3}>
              <Link
                href={route}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase relative group"
              >
                {name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </Magnet>
          ))}
        </div>

        <div className="hidden md:block z-50">
          <Link href="/contact">
            <div className="px-6 py-3 bg-white hover:bg-white/90 transition-colors text-black font-bold uppercase tracking-wide text-xs">
              <ShinyText text="Contact Me" disabled={false} speed={3} className="text-black" />
            </div>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white z-50 p-2 hover:bg-white/10 transition-colors"
        >
          <Menu size={32} strokeWidth={1.5} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white p-4 hover:bg-white/10 transition-colors"
            >
              <X size={40} strokeWidth={1} />
            </button>

            <div className="flex flex-col items-center gap-12">
              {links.map(([name, route]) => (
                <Link
                  key={name}
                  href={route}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl text-white font-black tracking-tighter hover:text-white/50 transition-colors uppercase"
                >
                  <DecryptedText text={name} animateOn="view" speed={100} />
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
