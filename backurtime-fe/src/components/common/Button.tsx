"use client";

import { cn } from "@/utils";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  withBackgoundImage?: boolean;
  withTextDecoration?: boolean;
  backgroundImageUrl?: string;
  title?: string;
}

export default function Button({
  withBackgoundImage = false,
  title = "",
  className = "",
  backgroundImageUrl = "",
  withTextDecoration = false,
  onClick = () => {},
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full cursor-pointer items-center justify-center py-4",
        className,
        withBackgoundImage && "bg-cover bg-center",
        withTextDecoration && "text-shadow-[1px_2px_0_rgba(35,63,50,0.5)]",
      )}
      style={{
        backgroundImage: withBackgoundImage
          ? `url(${backgroundImageUrl})`
          : undefined,
      }}
      {...props}
    >
      {title}
    </button>
  );
}
