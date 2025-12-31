"use client";

import clsx from "clsx";

type SelectionType = "single" | "multiple";

interface OfferTagProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  selectionType?: SelectionType;
}

export const OfferTag = ({
  options,
  value,
  onChange,
  selectionType = "multiple",
}: OfferTagProps) => {
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
              "font-inter w-fit min-w-[261px] rounded-[48px] px-3 py-3 text-base leading-[140%] font-normal text-white hover:cursor-pointer",
              selected
                ? "border-green-light bg-primitives-black_80 border"
                : "bg-primitives-black_50",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
