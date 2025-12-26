"use client";

import React, { ComponentProps, ReactNode } from "react";
import { cn } from "@/utils";
import Image from "next/image";

interface ButtonProps extends ComponentProps<"button"> {
  withBackgoundImage?: boolean;
  withTextDecoration?: boolean;
  backgroundImageUrl?: string;
  title?: string;
  icon?: ReactNode;
  variant?: "default" | "primary" | "secondary";
}

export default function Button({
  withBackgoundImage = false,
  title = "",
  className = "",
  backgroundImageUrl = "",
  type = "button",
  variant,
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
        "font-cinzel relative flex min-h-12 w-full cursor-pointer items-center justify-center py-4 text-lg leading-[122%]! font-bold text-white disabled:cursor-default disabled:grayscale",
        variant === "secondary" &&
          `px-12! py-[13px]! before:absolute before:top-0 before:left-5 before:h-full before:w-[calc(100%-40px)] before:bg-[url(/components/secondary-button/top.svg)] before:bg-contain before:bg-top before:bg-repeat-x`,
        variant === "secondary" &&
          `after:absolute after:top-0 after:left-5 after:h-full after:w-[calc(100%-40px)] after:bg-[url(/components/secondary-button/bottom.svg)] after:bg-contain after:bg-bottom after:bg-repeat-x`,
        className,
        withBackgoundImage && "bg-cover bg-center! bg-no-repeat!",
        withTextDecoration && "text-shadow-[1px_2px_0_rgba(35,63,50,0.5)]",
      )}
      style={{
        background: withBackgoundImage
          ? `url(${backgroundImageUrl})`
          : undefined,
      }}
      {...props}
    >
      {typeof icon === "string" && (
        <Image
          src={icon as string}
          alt={icon as string}
          width={20}
          height={20}
          className="shrink-0 object-contain"
        />
      )}
      {React.isValidElement(icon) && icon}
      {title}

      {variant === "secondary" ? (
        <>
          <Image
            src="/components/secondary-button/right.svg"
            alt="btn"
            width={20}
            height={48}
            className="absolute top-0 right-0 h-full min-h-12! w-5 object-cover object-right"
          />
          <Image
            src="/components/secondary-button/left.svg"
            alt="btn"
            width={20}
            height={48}
            className="absolute top-0 left-0 h-full w-5 object-cover object-left"
          />
        </>
      ) : variant === "primary" ? (
        <>
          <Image
            src="/components/primary-btn-r-m.svg"
            alt="btn"
            width={34}
            height={54}
            className="absolute top-0 right-0 h-full w-[34px] object-cover object-right"
          />
          <Image
            src="/components/primary-btn-m.svg"
            alt="btn"
            width={34}
            height={54}
            className="absolute top-0 left-0 h-full min-h-[54px] w-[calc(100%-34px)] object-cover object-left"
          />
        </>
      ) : null}
    </button>
  );
}
