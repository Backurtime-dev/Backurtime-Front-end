"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TimeUnit {
  value: number;
  label: string;
}

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export default function WoodenTimer({
  targetDate,
  className,
}: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeUnit[] => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return [
        { value: 0, label: "days" },
        { value: 0, label: "hours" },
        { value: 0, label: "minutes" },
        { value: 0, label: "seconds" },
      ];
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return [
      { value: days, label: "days" },
      { value: hours, label: "hours" },
      { value: minutes, label: "minutes" },
      { value: seconds, label: "seconds" },
    ];
  };

  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatValue = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className={cn("relative w-[292px] sm:w-[488px]", className)}>
      <div className="flex gap-3">
        {timeLeft.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative mb-1 flex size-16 items-center justify-center sm:size-[113px]">
              <Image
                src="/components/timer-element.svg"
                alt="wooden-timer-background"
                fill
                className="h-full w-full object-contain"
              />

              <span className="font-cinzel text-black-normal z-1 text-2xl leading-[122%] font-bold sm:text-[32px]">
                {formatValue(unit.value)}
              </span>
            </div>
            <span className="font-inter text-base leading-[140%] font-normal text-white">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
