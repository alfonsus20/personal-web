"use client";

import cn from "@/utils/classnames";
import { useScroll } from "framer-motion";
import { useState } from "react";

const Navigation = () => {
  const [shadowed, setShadowed] = useState(false);

  const { scrollY } = useScroll();

  scrollY.on("change", (val) => {
    setShadowed(val > 96);
  });

  return (
    <nav
      className={cn("sticky top-0 bg-white z-20", { "shadow-lg": shadowed })}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-6 px-6 2xl:px-0">
        <div className="flex justify-between items-center gap-x-3">
          <div className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center font-semibold text-xl">
            A
          </div>
          <div>
            <p className="font-semibold">Alfonsus Avianto</p>
            <p className="text-xs">Frontend Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <span>Menu</span>
          <div className="space-y-1 cursor-pointer">
            <span className="w-6 h-[0.15rem] bg-black block"></span>
            <span className="w-6 h-[0.15rem] bg-black block"></span>
            <span className="w-6 h-[0.15rem] bg-black block"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
