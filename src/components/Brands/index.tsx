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
    <section className="overflow-hidden bg-gradient-to-r from-indigo-50 to-purple-50 py-10 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="relative">
          <div className="relative hidden overflow-hidden sm:flex">
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
                  className="mx-12 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-lg font-semibold tracking-wide text-transparent"
                >
                  {text}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="absolute top-0 left-full flex whitespace-nowrap"
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
                  className="mx-12 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-xl font-semibold tracking-wide text-transparent"
                >
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

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
      </div>
    </section>
  );
};

export default Brands;
