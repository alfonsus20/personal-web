"use client";

import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="fixed bottom-12 right-12 rounded-full p-4 bg-gray-600 opacity-60"
      onClick={handleScrollToTop}
    >
      <FaArrowUp className="text-white text-lg" />
    </button>
  );
};

export default ScrollToTop;
