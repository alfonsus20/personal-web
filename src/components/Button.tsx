import cn from "@/utils/classnames";
import Link from "next/link";
import React, { useMemo } from "react";
import { CommonSize } from "../types/design";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
  rounded?: boolean;
  href?: string;
  target?: string;
  size?: CommonSize;
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
  size = "md",
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
        "flex items-center gap-2 font-medium justify-center w-fit",
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-5 py-2.5 text-md": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        className
      ),
    [className, variant, rounded, size]
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
      <Link href={href} target={target} className={classAttr}>
        {content}
      </Link>
    );

  return (
    <button {...props} className={classAttr}>
      {content}
    </button>
  );
};

export default Button;
