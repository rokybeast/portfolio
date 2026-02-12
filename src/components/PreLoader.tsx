"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Space_Mono, Playfair_Display, Syne, Bungee,
  DotGothic16, Zilla_Slab, Michroma, JetBrains_Mono,
  Unbounded, Fraunces, Goldman, Nabla, Silkscreen,
  Bodoni_Moda, Montserrat, Russo_One, Special_Elite,
  Bebas_Neue, Amatic_SC, Cormorant_Garamond,
  Inter
} from 'next/font/google';

const sans = { className: "font-sans" };
const mono = Space_Mono({ weight: '400', subsets: ['latin'] });
const serif = Playfair_Display({ subsets: ['latin'] });
const tech = Michroma({ weight: '400', subsets: ['latin'] });
const brutalist = Unbounded({ subsets: ['latin'] });
const editorial = Fraunces({ subsets: ['latin'], style: 'italic' });
const gaming = Goldman({ weight: '400', subsets: ['latin'] });
const retro = DotGothic16({ weight: '400', subsets: ['latin'] });
const pixel = Silkscreen({ weight: '400', subsets: ['latin'] });
const highEnd = Bodoni_Moda({ subsets: ['latin'] });
const wide = Russo_One({ weight: '400', subsets: ['latin'] });
const typewriter = Special_Elite({ weight: '400', subsets: ['latin'] });
const condensed = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const handwritten = Amatic_SC({ weight: '400', subsets: ['latin'] });
const classic = Cormorant_Garamond({ subsets: ['latin'], style: 'italic' });

const languages = [
  // european
  { text: "Bonjour", className: serif.className },
  { text: "Hola", className: brutalist.className },
  { text: "Ciao", className: editorial.className },
  { text: "Hallo", className: mono.className },
  { text: "Olá", className: tech.className },
  { text: "Salut", className: highEnd.className },
  { text: "Hej", className: condensed.className },
  { text: "Ahoj", className: classic.className },
  { text: "Zdravo", className: wide.className },
  { text: "Sveiki", className: sans.className },
  { text: "Goddag", className: typewriter.className },
  { text: "Yiasas", className: brutalist.className },
  { text: "Privet", className: gaming.className },
  { text: "Terve", className: mono.className },
  { text: "Tere", className: tech.className },

  // asian And pacific
  { text: "こんにちは", className: retro.className },
  { text: "नमस्ते", className: serif.className },
  { text: "Ni Hao", className: wide.className },
  { text: "Anyoung", className: pixel.className },
  { text: "Xin Chào", className: sans.className },
  { text: "Sawubona", className: tech.className },
  { text: "Sabaidee", className: classic.className },
  { text: "Mingalaba", className: highEnd.className },
  { text: "Kamusta", className: condensed.className },
  { text: "Szia", className: brutalist.className },
  { text: "Merhaba", className: wide.className },
  { text: "Selam", className: typewriter.className },

  // middleEastern and African
  { text: "مرحباً", className: tech.className },
  { text: "Shalom", className: retro.className },
  { text: "Jambo", className: gaming.className },
  { text: "Habari", className: editorial.className },
  { text: "Salam", className: sans.className },
  { text: "Molo", className: brutalist.className },
  { text: "Dumela", className: classic.className },

  // others
  { text: "Hello", className: brutalist.className },
  { text: "01001000", className: pixel.className },
  { text: "System.out.print", className: mono.className },
  { text: "Console.log", className: gaming.className },
  { text: "Namaste", className: highEnd.className },
  { text: "Aloha", className: handwritten.className },
  { text: "Kia Ora", className: brutalist.className },
  { text: "Bula", className: wide.className },
  { text: "Pryvit", className: serif.className },
  { text: "Kaixo", className: tech.className },
  { text: "Moïen", className: editorial.className },
  { text: "Dia Duit", className: classic.className },
  { text: "Grüezi", className: typewriter.className },
  { text: "Hujambo", className: condensed.className },
];

const statusMessages = [
  "Initializing React...", "Loading Assets...", "Compiling Styles...",
  "Fetching Data...", "Hydrating...", "Ready!"
];

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [currentLang, setCurrentLang] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(0);
  const [rowsComplete, setRowsComplete] = useState<number[]>([]);
  const [isEnded, setIsEnded] = useState(false);

  const rowCount = 10;
  const gridRows = Array.from({ length: rowCount });

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentLang((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * languages.length);
        } while (next === prev);
        return next;
      });
    }, 200);
    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setCurrentStatus((prev) => {
        if (prev < statusMessages.length - 1) return prev + 1;
        return prev;
      });
    }, 800);
    return () => clearInterval(statusInterval);
  }, []);

  useEffect(() => {
    const totalTime = 4000;
    const timePerRow = totalTime / rowCount;

    const rowInterval = setInterval(() => {
      setRowsComplete((prev) => {
        if (prev.length < rowCount) {
          return [...prev, prev.length];
        } else {
          clearInterval(rowInterval);
          setIsEnded(true);
          setTimeout(() => onComplete?.(), 1000);
          return prev;
        }
      });
    }, timePerRow);

    return () => clearInterval(rowInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#000000] font-sans text-white overflow-hidden cursor-wait">
      <div className="absolute inset-0 grid grid-cols-1 grid-rows-10 pointer-events-none">
        {gridRows.map((_, i) => (
          <motion.div
            key={i}
            className="relative border-b border-[#3a3a3a] w-full h-full"
            animate={{
              backgroundColor: rowsComplete.includes(i) ? "#2e2e2e" : "#000000",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 w-full h-full border-r border-[#3a3a3a] left-1/4 w-[1px]" />
            <div className="absolute inset-0 w-full h-full border-r border-[#3a3a3a] left-2/4 w-[1px]" />
            <div className="absolute inset-0 w-full h-full border-r border-[#3a3a3a] left-3/4 w-[1px]" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col justify-between w-full h-full p-8 md:p-12">
        <div className="flex justify-between text-xs font-mono text-gray-400 uppercase tracking-widest">
          <span>[rokybeast]</span>
          <span>{Math.round((rowsComplete.length / rowCount) * 100)}%</span>
        </div>

        <div className="flex items-center justify-center flex-1">
          <div className="relative h-20 w-full flex items-center justify-center overflow-hidden">
            {isEnded ? (
              <motion.h1
                initial={{ opacity: 0, scale: 0.9, filter: "blur(0px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                className="text-6xl md:text-8xl font-bold tracking-tighter text-white font-sans"
              >
                [rokybeast]
              </motion.h1>
            ) : (
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentLang}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`text-6xl md:text-8xl font-bold tracking-tighter text-white ${languages[currentLang].className}`}
                >
                  {languages[currentLang].text}
                </motion.h1>
              </AnimatePresence>
            )}
          </div>
        </div>

        <div className="flex justify-between items-end text-xs font-mono text-gray-400 uppercase tracking-widest">
          <div className="flex flex-col gap-1">
            <span className="opacity-50">System Status:</span>
            <span className="text-white animate-pulse">
              {">"} {statusMessages[currentStatus]}
            </span>
          </div>
          <div className="hidden md:block">
            © {new Date().getFullYear()} Rokybeast
          </div>
        </div>
      </div>
    </div>
  );
}
