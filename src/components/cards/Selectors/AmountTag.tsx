"use client";

import clsx from "clsx";

type SelectionType = "single" | "multiple";

interface AmountTagProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  selectionType?: SelectionType;
}

export const AmountTag = ({
  options,
  value,
  onChange,
  selectionType = "multiple",
}: AmountTagProps) => {
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
      className="flex flex-col gap-4"
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
              "font-inter w-fit min-w-12 rounded-[8px] px-3 py-1 text-base leading-[140%] font-normal tracking-[0.16px] text-white",

              !selected && "bg-primitives-black_50",

              selected && "bg-primitives-black_80 border-green-light border",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
