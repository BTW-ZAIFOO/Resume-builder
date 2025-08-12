"use client";

import { FiMail } from "react-icons/fi";

const NewsLatterBox = () => {

  return (
    <div className="relative z-10 rounded-md bg-white dark:bg-gray-800 shadow-lg p-8 flex flex-col items-center max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <span className="bg-primary/10 text-primary p-3 rounded-full mr-3">
          <FiMail size={28} />
        </span>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Stay Updated on Resume Tips
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
        Get the latest CV templates, job search tips, and career resources
        delivered straight to your inbox.
      </p>
      <form className="w-full flex flex-col gap-4">
        <input
          name="email"
          placeholder="Your email address"
          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white font-medium rounded-md py-3 transition"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsLatterBox;
            