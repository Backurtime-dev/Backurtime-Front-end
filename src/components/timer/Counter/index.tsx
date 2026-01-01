"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type TimerVariant = "box" | "flat";

interface CountdownTimerProps {
  targetDate: Date;
  variant?: TimerVariant;
  isMobile?: boolean;
  className?: string;
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountdownTimer({
  targetDate,
  variant = "box",
  isMobile = false,
  className,
}: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const diff = targetDate.getTime() - Date.now();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const format = (value: number) => value.toString().padStart(2, "0");

  const containerClass = useMemo(
    () =>
      cn(
        "gap-6 rounded-[12px] px-3 py-2 w-max",
        !isMobile && "sm:rounded-2xl sm:px-6",
        !isMobile && "max-sm:opacity-[0.8]",
        variant === "box" ? "bg-primitives-white_5" : "bg-transparent",
        className,
      ),
    [variant, className, isMobile],
  );

  const renderBlock = (value: number, label: string) => (
    <div
      className={cn(
        "flex items-center gap-1",
        !isMobile && "sm:block sm:text-center",
      )}
    >
      <div
        className={cn(
          "font-inter font-semibold text-white",
          isMobile
            ? "text-base leading-[140%]"
            : "text-base leading-[140%] sm:text-2xl",
        )}
      >
        {format(value)}
      </div>

      {/* Mobile label (first letter) */}
      <div
        className={cn(
          "font-inter text-base leading-[140%] text-white",
          !isMobile && "sm:hidden",
        )}
      >
        {label.charAt(0)}
      </div>

      {/* Desktop label */}
      {!isMobile && (
        <div className="font-inter mt-1 hidden text-base leading-[140%] tracking-[0.16px] text-white sm:block">
          {label}
        </div>
      )}
    </div>
  );

  const colon = (
    <span
      className={cn(
        "font-inter text-white",
        isMobile
          ? "text-base leading-[135%]"
          : "text-base leading-[135%] sm:text-2xl sm:font-semibold",
      )}
    >
      :
    </span>
  );

  return (
    <div className="w-full">
      <div className={containerClass}>
        <div className="flex gap-2 sm:gap-3.5">
          {renderBlock(timeLeft.days, "days")}
          {colon}
          {renderBlock(timeLeft.hours, "hours")}
          {colon}
          {renderBlock(timeLeft.minutes, "minutes")}
          {colon}
          {renderBlock(timeLeft.seconds, "seconds")}
        </div>
      </div>
    </div>
  );
}
