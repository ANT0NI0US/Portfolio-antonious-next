"use client";

import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

const sizeStyles = {
  small: "px-2 py-1 text-xs sm:text-sm",
  medium: "px-3 py-2 text-sm sm:text-base",
  large: "px-4 py-3 text-lg sm:text-xl",
  actions: "px-[5px] !text-xs sm:!text-sm !w-fit !border !min-h-[30px]",
};

const styles = {
  primary: "bg-primary text-secondary border-primary border",
  secondary: "bg-transparent text-light border-primary border",
  delete: "bg-error text-light",
  danger: "bg-light text-error",
};

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variation?: keyof typeof styles;
  font?: string;
  disabled?: boolean;
  loading?: boolean;
  aria_label?: string;
  target?: string;
  size?: keyof typeof sizeStyles;
  replace?: boolean;
  href?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  variation = "primary",
  font,
  disabled,
  loading,
  aria_label,
  target = "",
  size = "medium",
  replace = false,
  href,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const base = `focus:outline-hidden w-full flexCenter gap-1 rounded-md relative
   transition-all duration-300 font-bold cursor-pointer text-center
  ${(disabled || loading) && "cursor-not-allowed! border-main! bg-light/35! text-main!"}`;

  const variationStyles = {
    primary: `${styles.primary} ${!disabled && !loading && "hover:bg-primary/95 active:bg-primary/95"}`,
    secondary: `${styles.secondary} ${!disabled && !loading && "hover:bg-primary hover:text-secondary hover:border-primary"}`,
    delete: `${styles.delete} ${!disabled && !loading && "hover:bg-error/90"}`,
    danger: `${styles.danger} ${!disabled && !loading && "hover:bg-error hover:text-light"}`,
  };

  const combinedClassName = `${sizeStyles[size]} ${base} ${variationStyles[variation]} ${font || ""}`;

  if (href)
    return (
      <div className="w-full">
        <Link
          href={href}
          className={combinedClassName}
          title={aria_label}
          aria-label={aria_label}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          replace={replace}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : undefined}
        >
          {children}
        </Link>
      </div>
    );

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className={combinedClassName}
      aria-label={aria_label}
      title={aria_label}
    >
      {loading ? (
        <div className="flexCenter gap-1">
          <div className="bg-secondary size-3 animate-bounce rounded-full [animation-delay:-0.3s]" />
          <div className="bg-secondary size-3 animate-bounce rounded-full [animation-delay:-0.15s]" />
          <div className="bg-secondary size-3 animate-bounce rounded-full" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
