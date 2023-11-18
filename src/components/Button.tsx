import cn from "@/utils/classnames";
import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import React, { useMemo } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
  rounded?: boolean;
  href?: string;
  target?: string;
}

const Button = ({
  leftIcon,
  rightIcon,
  children,
  variant = "primary",
  rounded = true,
  className,
  href,
  target,
  ...props
}: ButtonProps) => {
  const classAttr = useMemo(
    () =>
      cn(
        {
          "border-2 border-gray-950 bg-gray-950 hover:opacity-90 text-white":
            variant === "primary",
          "border-2 border-gray-950 hover:bg-gray-950 hover:text-white":
            variant === "secondary",
          rounded: rounded,
        },
        "px-5 py-2.5 flex items-center gap-2 font-medium justify-center",
        className
      ),
    [className, variant, rounded]
  );

  const content = (
    <>
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </>
  );

  if (href)
    return (
      <motion.button {...props}>
        <Link href={href} passHref target={target} className={classAttr}>
          {content}
        </Link>
      </motion.button>
    );

  return (
    <motion.button {...props} className={classAttr}>
      {content}
    </motion.button>
  );
};

export default Button;
