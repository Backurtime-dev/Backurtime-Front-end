"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type TimerVariant = "box" | "flat";

interface CountdownTimerProps {
  targetDate: Date;
  variant?: TimerVariant;
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
        "gap-6 sm:rounded-2xl sm:px-6 px-3 py-2 w-max rounded-[12px] max-sm:opacity-[0.8",
        variant === "box" ? "bg-primitives-white_10 ]" : "bg-transparent",
        className,
      ),
    [variant, className],
  );

  const renderBlock = (value: number, label: string) => (
    <div className="max-sm:flex max-sm:items-center max-sm:gap-1 sm:text-center">
      <div className="font-inter text-base leading-[140%] font-semibold text-white sm:text-2xl">
        {format(value)}
      </div>

      {/* Mobile: first letter */}
      <div className="font-inter text-base leading-[140%] text-white sm:hidden">
        {label.charAt(0)}
      </div>

      {/* Desktop: full label */}
      <div className="font-inter mt-1 hidden text-base leading-[140%] tracking-[0.16px] text-white sm:block">
        {label}
      </div>
    </div>
  );

  const colon = (
    <span className="font-inter text-base leading-[135%] font-normal text-white sm:text-2xl sm:font-semibold">
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
