"use client";

import { cn } from "@/utils";
import clsx from "clsx";

type SelectionType = "single" | "multiple";

interface PriceTagProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  selectionType?: SelectionType;
}

export const PriceTag = ({
  options,
  value,
  onChange,
  selectionType = "multiple",
}: PriceTagProps) => {
  const handleSelect = (option: string) => {
    if (selectionType === "single") {
      onChange(value.includes(option) ? [] : [option]);
    } else {
      onChange(
        value.includes(option)
          ? value.filter((v) => v !== option)
          : [...value, option],
      );
    }
  };

  return (
    <div
      role={selectionType === "single" ? "radiogroup" : "group"}
      className="flex flex-wrap gap-4"
    >
      {options.map((option) => {
        const selected = value.includes(option);

        return (
          <button
            key={option}
            type="button"
            role={selectionType === "single" ? "radio" : "checkbox"}
            aria-checked={selected}
            onClick={() => handleSelect(option)}
            className={clsx(
              "font-inter group w-fit min-w-[94px] rounded-[52px] text-base leading-[150%] font-medium text-white transition-all",
              "flex items-center justify-center",

              // !selected &&
              "border border-transparent",
              selected
                ? "bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]"
                : "bg-primitives-white_5 hover:bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
            )}
          >
            <span
              className={cn(
                "h-full w-full rounded-full px-2.5 py-2.5",
                selected
                  ? "bg-transparent"
                  : "bg-transparent group-hover:bg-[rgb(36,41,51,1)]",
              )}
            >
              {option}
            </span>
          </button>
        );
      })}
    </div>
  );
};
