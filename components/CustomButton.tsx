import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "default" | "outline" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  variant = "default",
  size = "md",
  className,
  leftIcon,
  children,
  onClick,
}: ButtonProps) => {
  const baseClasses = cn(
    "inline-flex items-center cursor-pointer justify-center text-sm rounded-sm font-medium transition-colors",
    {
      // Default variant
      "bg-[#287C3E] text-white hover:bg-[#349D52]": variant === "default",
      // Outline variant
      "border border-[#FA9500] bg-white text-[#FA9500] focus:ring-none":
        variant === "outline",
      // Destructive variant
      "bg-red-500 text-white hover:bg-red-600": variant === "destructive",
    },
    {
      // Size classes
      "px-4 py-2 text-sm": size === "sm",
      "px-5 py-3 text-base": size === "md",
      "px-6 py-4 text-lg": size === "lg",
    },
    className
  );

  return (
    <button className={baseClasses} onClick={onClick}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
    </button>
  );
};

export default Button;
