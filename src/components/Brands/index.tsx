"use client";

import { motion } from "framer-motion";

const loopItems = [
  "🚀 Build Your CV in Minutes",
  "💼 Stand Out to Employers",
  "🎨 Modern Resume Templates",
  "✅ ATS Friendly Layouts",
];

const Brands = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative">
          {/* Desktop / Tablet (Horizontal Scroll) */}
          <div className="hidden sm:flex overflow-hidden relative">
            {/* First Loop */}
            <motion.div
              className="flex whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 18,
              }}
            >
              {loopItems.map((text, index) => (
                <span
                  key={index}
                  className="mx-12 text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent tracking-wide"
                >
                  {text}
                </span>
              ))}
            </motion.div>

            {/* Second Loop */}
            <motion.div
              className="flex whitespace-nowrap absolute top-0 left-full"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 18,
              }}
            >
              {loopItems.map((text, index) => (
                <span
                  key={`second-${index}`}
                  className="mx-12 text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent tracking-wide"
                >
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Mobile (Stacked) */}
          <div className="flex flex-col items-center gap-3 sm:hidden">
            {loopItems.map((text, index) => (
              <span
                key={`stacked-${index}`}
                className="text-base font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent tracking-wide text-center"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
