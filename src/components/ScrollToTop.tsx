"use client";

import { useScroll } from "framer-motion";
import { useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [shown, setShown] = useState(false);
  const { scrollY } = useScroll();

  scrollY.on("change", (val) => {
    setShown(val > 96);
  });

  return (
    shown && (
      <button
        className="fixed bottom-12 right-12 w-12 h-12 grid place-items-center rounded-full bg-gray-600 opacity-60"
        onClick={handleScrollToTop}
      >
        <BsArrowUp className="text-white text-xl" />
      </button>
    )
  );
};

export default ScrollToTop;
