"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import menus from "@/data/menu";
import cn from "@/utils/classnames";
import { MotionProps, useScroll, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const mobileNavAnim: MotionProps = {
  variants: {
    visible: {
      top: 0,
      bottom: 0,
      transition: {},
    },
    hidden: {
      bottom: "100%",
      top: "-100%",
    },
  },
};

const menuItemAnim: MotionProps = {
  variants: {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
};

const menuItemWrapper: MotionProps = {
  variants: {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.75,
      },
    },
  },
};

const Navigation = () => {
  const [shadowed, setShadowed] = useState(false);

  const { activeSection } = useActiveSectionContext();

  const { scrollY } = useScroll();

  scrollY.on("change", (val) => {
    setShadowed(val > 96);
  });

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((prev) => !prev);

  return (
    <>
      <nav
        className={cn("sticky top-0 bg-white z-10", { "shadow-lg": shadowed })}
      >
        <div className="flex justify-between items-center max-w-screen-xl mx-auto py-6 px-4 sm:px-6 2xl:px-0">
          <div className="flex justify-between items-center gap-x-3">
            <div className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center font-semibold text-xl">
              A
            </div>
            <div>
              <p className="font-semibold">Alfonsus Avianto</p>
              <p className="text-xs">Frontend Engineer</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-x-4">
            {menus.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn({ "font-semibold": activeSection === link.name })}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div
            className="space-y-1 cursor-pointer md:hidden"
            onClick={toggleVisibility}
          >
            <span className="w-6 h-[0.15rem] bg-black block"></span>
            <span className="w-6 h-[0.15rem] bg-black block"></span>
            <span className="w-6 h-[0.15rem] bg-black block"></span>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <motion.div
        className={cn(
          "z-20 fixed left-0 right-0 bg-gray-900 flex flex-col text-gray-300 p-6 transition-all duration-300 ease-in-out"
        )}
        {...mobileNavAnim}
        animate={visible ? "visible" : "hidden"}
        initial="hidden"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <div className="border-2 border-gray-300 rounded-full w-12 h-12 flex items-center justify-center font-semibold text-xl">
              A
            </div>
            <div>
              <p className="font-semibold">Alfonsus Avianto</p>
              <p className="text-xs">Frontend Engineer</p>
            </div>
          </div>
          <div
            className="relative cursor-pointer w-6 h-6"
            onClick={toggleVisibility}
          >
            <span className="w-6 h-[0.15rem] bg-gray-300 block absolute top-1/2 -translate-y-1/2 right-0 left-0 bottom-0 rotate-45"></span>
            <span className="w-6 h-[0.15rem] bg-gray-300 block absolute top-1/2 -translate-y-1/2 right-0 left-0 bottom-0 -rotate-45"></span>
          </div>
        </div>

        <motion.div
          {...menuItemWrapper}
          animate={visible ? "visible" : "hidden"}
          className="flex-auto flex flex-col items-center justify-center gap-y-6"
        >
          {menus.map((link, index) => (
            <motion.span {...menuItemAnim} key={index}>
              <Link
                key={index}
                href={link.href}
                className={cn("text-3xl font-semibold", {
                  "text-white": activeSection === link.name,
                  "text-gray-500": activeSection !== link.name,
                })}
                onClick={toggleVisibility}
              >
                {link.name}
              </Link>
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navigation;
