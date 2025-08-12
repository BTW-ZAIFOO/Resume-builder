"use client";

import { FiMail } from "react-icons/fi";

const NewsLatterBox = () => {
  return (
    <div className="relative z-10 mx-auto flex max-w-md flex-col items-center rounded-md bg-white p-8 shadow-lg dark:bg-gray-800">
      <div className="mb-4 flex items-center">
        <span className="bg-primary/10 text-primary mr-3 rounded-full p-3">
          <FiMail size={28} />
        </span>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Stay Updated on Resume Tips
        </h3>
      </div>
      <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
        Get the latest CV templates, job search tips, and career resources
        delivered straight to your inbox.
      </p>
      <form className="flex w-full flex-col gap-4">
        <input
          name="email"
          placeholder="Your email address"
          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 rounded-md py-3 font-medium text-white transition"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsLatterBox;
