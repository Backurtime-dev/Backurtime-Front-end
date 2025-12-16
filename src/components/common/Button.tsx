"use client";

import { cn } from "@/utils";
import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  withBackgoundImage?: boolean;
  withTextDecoration?: boolean;
  backgroundImageUrl?: string;
  title?: string;
  icon?: ReactNode;
}

export default function Button({
  withBackgoundImage = false,
  title = "",
  className = "",
  backgroundImageUrl = "",
  type = "button",
  withTextDecoration = false,
  disabled = false,
  onClick = () => {},
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex w-full cursor-pointer items-center justify-center py-4 disabled:cursor-default disabled:grayscale",
        className,
        withBackgoundImage && "bg-cover! bg-center! bg-no-repeat!",
        withTextDecoration && "text-shadow-[1px_2px_0_rgba(35,63,50,0.5)]",
      )}
      style={{
        background: withBackgoundImage
          ? `url(${backgroundImageUrl})`
          : undefined,
      }}
      {...props}
    >
      {icon}
      {title}
    </button>
  );
}
