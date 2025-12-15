"use client";

import React, { useState } from "react";
import { cn } from "@/utils";
import Image from "next/image";

interface ChipsProps {
  text?: string;
  icon?: boolean;
  dropdown?: boolean;
  className?: string;
  onClick?: (e?: unknown) => void;
}

const FilterChips = ({
  text,
  icon,
  dropdown,
  onClick,
  className,
}: ChipsProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        setOpenDropdown(!openDropdown);
      }}
      className={cn(
        className,
        "group h-auto w-max cursor-pointer rounded-full p-px transition-all duration-300 ease-in-out",
        "bg-dark-60 hover:bg-[linear-gradient(97.44deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
      )}
    >
      <span className="bg-dark-60 flex w-full items-center justify-between gap-4 rounded-full px-[15px] py-[13px]">
        {icon && (
          <span className="relative block h-5 w-5 shrink-0!">
            <Image
              src="/icons/filter-green.svg"
              alt="filter"
              fill
              className="object-contain object-center opacity-100 group-hover:opacity-0"
            />
            <Image
              src="/icons/filter-green-hover.svg"
              alt="filter"
              fill
              className="object-contain object-center opacity-0 group-hover:opacity-100"
            />
          </span>
        )}
        <span className="font-inter text-[14px] leading-[140%] font-medium tracking-[.14px] text-white">
          {text}
        </span>
        {dropdown && (
          <Image
            src="/icons/arrow-down.svg"
            alt="arrow down"
            width={16}
            height={16}
            className={cn(
              "shrink-0 transition-all duration-300 ease-in-out",
              openDropdown ? "rotate-180" : "rotate-0",
            )}
          />
        )}
      </span>
    </button>
  );
};

export default FilterChips;
