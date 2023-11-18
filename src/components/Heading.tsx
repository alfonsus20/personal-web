import { getAnimationProps } from "@/utils/animation";
import cn from "@/utils/classnames";
import { motion } from "framer-motion";

interface HeadingProps {
  title: string;
  subtitle: string;
  position?: "left" | "center" | "right";
  id?: string;
}

const animationProps = getAnimationProps({
  variants: {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  },
  inView: true,
});

const Heading = ({
  title,
  subtitle,
  position = "center",
  id,
}: HeadingProps) => {
  return (
    <motion.div
      className={cn("mb-10 px-4 sm:px-6 2xl:px-0", {
        "text-center": position === "center",
        "text-left": position === "left",
        "text-right": position === "right",
      })}
      id={id}
      {...animationProps}
    >
      <h4 className="uppercase mb-4 text-lg font-light tracking-[0.4rem] text-gray-500">
        {title}
      </h4>
      <h1 className="font-bold text-5xl">{subtitle}</h1>
    </motion.div>
  );
};

export default Heading;
