"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/common";
import { cn } from "@/utils";
import Image from "next/image";

interface TypesProps {
  variant: "large" | "medium" | "small";
  isButton?: boolean;
}

const StreakFreezeCard = ({ variant, isButton = true }: TypesProps) => {
  let initalWindow = 0;

  if (typeof window !== "undefined") {
    initalWindow = window.innerWidth;
  }
  const [screenWidth, setScreenWidth] = useState<number>(initalWindow);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getImageSrc = () => {
    if (variant === "medium") {
      return screenWidth >= 640
        ? "/components/streak-freeze-card/m-bg.png"
        : "/components/streak-freeze-card/mobile-bg.png";
    }

    if (screenWidth >= 768) {
      return "/components/streak-freeze-card/l-bg.png";
    }

    if (screenWidth >= 640 && screenWidth < 768) {
      return "/components/streak-freeze-card/m-bg.png";
    }

    return "/components/streak-freeze-card/mobile-bg.png";
  };

  const imageSrc = getImageSrc();

  return (
    <div
      className={cn(
        "flex h-auto w-full flex-col items-center justify-start",
        variant === "large" ? "max-w-[343px] sm:max-w-[800px]" : "",
        variant === "medium" ? "max-w-[343px] sm:max-w-[500px]" : "",
        variant === "small" ? "max-w-[343px]" : "",
      )}
    >
      <Image
        src="/components/streak-freeze-card/badge.png"
        alt="bg image"
        width={96}
        height={96}
        className="drop-shadow-white-lg size-[72px]! object-contain object-top sm:size-24!"
      />

      <div
        className={cn(
          "relative flex h-auto w-full flex-col items-center justify-start gap-2 overflow-hidden rounded-[38px] text-center sm:gap-4",
          "px-6 pt-[58px] pb-6 sm:px-11 sm:pt-[109px] sm:pb-11",
          "-mt-10",
          "min-h-[300px]",
        )}
      >
        <Image
          src={imageSrc}
          alt="bg image"
          fill
          className="drop-shadow-gift-card object-top"
        />
        <h1 className="font-cinzel relative z-1 text-[20px] leading-[120%] font-bold tracking-[1%] text-white uppercase sm:text-2xl">
          What is a Streak Freeze?
        </h1>
        <p className="font-inter text-grey-light relative z-1 text-[14px] leading-[140%] font-normal sm:text-base sm:leading-[150%]">
          A Streak Freeze is your safety net for a broken streak.
          <span className="leading-[140%] font-medium max-sm:text-base sm:leading-[150%]! sm:font-semibold!">
            One snowflake equals one day you've missed.
          </span>
          If you accidentally miss a day of logging in, a Freeze allows you to
          instantly save your progress and prevent your hard-earned streak from
          resetting to zero.
        </p>
        {isButton && (
          <Button
            title="buy now"
            variant="secondary"
            className="mt-2.5 w-max"
          />
        )}
      </div>
    </div>
  );
};

export default StreakFreezeCard;
