"use client";

import { useScroll } from "framer-motion";
import { useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [shown, setShown] = useState(false);
  const { scrollY } = useScroll();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  scrollY.on("change", (val) => {
    setShown(val > 20);
  });

  const handleScrollToTop = () => {
    if (isButtonDisabled) {
      return;
    }

    setButtonDisabled(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setButtonDisabled(false);
    }, 1000);
  };

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
