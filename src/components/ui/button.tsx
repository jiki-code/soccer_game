// components/Button.tsx
"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  variant?: "solid" | "outline";
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "solid",
  onClick,
  className = "",
}) => {
  const baseStyles =
    "px-6 py-2 rounded-md font-semibold transition focus:outline-none cursor-pointer  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110";
  const solidStyles = "bg-[var(--button-green)] text-black hover:opacity-60";
  const outlineStyles =
    "border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--button-green)] hover:text-black";

  return (
    <button
      onClick={onClick}
      className={clsx(
        baseStyles,
        variant === "solid" ? solidStyles : outlineStyles,
        className
      )}
    >
      {label}
    </button>
  );
};

export { Button };
