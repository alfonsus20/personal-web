import cn from "@/utils/classnames";
import Link from "next/link";
import React, { useMemo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
