"use client";

import { Done } from "@/components/icons";
import Image from "next/image";
import React from "react";
import { cn } from "@/utils";

interface HeaderMenuItemProps {
  label: string | number;
  iconSrc: string;
  selected?: boolean;
  onClick?: () => void;
}

const HeaderMenuItem = ({
  label,
  iconSrc,
  selected = true,
  onClick,
}: HeaderMenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex w-max items-center rounded-[100px] px-2 py-2 sm:min-w-[140px] sm:px-3",
        "hover:bg-primitives-white_20 cursor-pointer transition-colors duration-200",
        selected ? "bg-primitives-white_20" : "bg-primitives-white_10",
      )}
    >
      <div className="flex w-full items-center gap-2.5 sm:justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={iconSrc}
            alt="icon"
            width={32}
            height={32}
            className="drop-shadow-icon-sm h-6 w-6 shrink-0 object-contain sm:h-8 sm:w-8"
          />
          <span className="font-inter text-xs leading-[140%] font-semibold text-white sm:text-[14px]">
            {label}
          </span>
        </div>
        {selected && <Done size={12} color="white" className="shrink-0" />}
      </div>
    </div>
  );
};

export default HeaderMenuItem;
