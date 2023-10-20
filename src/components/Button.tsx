import cn from "@/utils/classnames";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
  rounded?: boolean;
}

const Button = ({
  leftIcon,
  rightIcon,
  children,
  variant = "primary",
  rounded = true,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        {
          "border-2 border-gray-950 bg-gray-950 hover:opacity-90 text-white":
            variant === "primary",
          "border-2 border-gray-950 hover:bg-gray-950 hover:text-white":
            variant === "secondary",
          rounded: rounded,
        },
        "px-5 py-2.5 flex items-center gap-2 font-medium justify-center",
        className
      )}
      {...props}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
