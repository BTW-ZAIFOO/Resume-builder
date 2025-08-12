"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const loopItems = [
  "🚀 Build Your CV in Minutes",
  "💼 Stand Out to Employers",
  "🎨 Modern Resume Templates",
  "✅ ATS Friendly Layouts",
];

const Brands: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [distance, setDistance] = useState<number>(0);

  // px per second — adjust to make the ticker faster/slower
  const speedPxPerSec = 120;

  useEffect(() => {
    const calculate = () => {
      if (contentRef.current) {
        // total width includes the duplicated items, so distance should be half
        const totalWidth = contentRef.current.scrollWidth;
        setDistance(totalWidth / 2);
      }
    };

    calculate();

    // Recalculate on resize / layout changes
    const ro = new ResizeObserver(calculate);
    if (containerRef.current) ro.observe(containerRef.current);

    window.addEventListener("load", calculate);
    window.addEventListener("resize", calculate);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", calculate);
      window.removeEventListener("resize", calculate);
    };
  }, []);

  // duration in seconds: distance / speed
  const duration = distance > 0 ? distance / speedPxPerSec : 10;

  return (
    <section className="overflow-hidden bg-gradient-to-r from-indigo-50 to-purple-50 py-10 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="relative hidden overflow-hidden sm:flex" ref={containerRef}>
          {/* contentRef measures the full duplicated row */}
          <motion.div
            ref={contentRef}
            className="flex whitespace-nowrap items-center"
            initial={{ x: 0 }}
            animate={{ x: distance ? -distance : 0 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration,
            }}
            style={{ willChange: "transform" }}
          >
            {/* Duplicate the list for a smooth seamless loop */}
            {[...loopItems, ...loopItems].map((text, idx) => (
              <span
                key={idx}
                className="mx-12 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-lg font-semibold tracking-wide text-transparent"
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Mobile stacked version */}
        <div className="flex flex-col items-center gap-3 sm:hidden">
          {loopItems.map((text, index) => (
            <span
              key={`stacked-${index}`}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-center text-base font-semibold tracking-wide text-transparent"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
