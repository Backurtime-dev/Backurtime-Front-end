"use client";

import clsx from "clsx";
import { StarBadge } from "@/components/common";
import { Game } from "@/components/icons";

type SelectionType = "single" | "multiple";

interface IconOption {
  id: string;
  label: string;
}

interface IconTagProps {
  options: IconOption[];
  value: string[];
  onChange: (value: string[]) => void;
  selectionType?: SelectionType;
}

export const IconTag = ({
  options,
  value,
  onChange,
  selectionType = "multiple",
}: IconTagProps) => {
  const handleSelect = (id: string) => {
    if (selectionType === "single") {
      onChange(value.includes(id) ? [] : [id]);
    } else {
      onChange(
        value.includes(id) ? value.filter((v) => v !== id) : [...value, id],
      );
    }
  };

  return (
    <div
      role={selectionType === "single" ? "radiogroup" : "group"}
      className="flex flex-col gap-3"
    >
      {options.map(({ id, label }) => {
        const selected = value.includes(id);

        return (
          <button
            key={id}
            type="button"
            role={selectionType === "single" ? "radio" : "checkbox"}
            aria-checked={selected}
            onClick={() => handleSelect(id)}
            className={clsx(
              "flex w-fit items-center gap-2 rounded-[48px] py-[5px] pr-4 pl-[5px]",

              !selected && "bg-primitives-black_50",

              selected &&
                "bg-primitives-black_80 border-green-light shadow-green-lg border",
            )}
          >
            <StarBadge
              size="medium"
              color="green"
              mediaIcon={<Game width={19} height={19} />}
              className="drop-shadow-lock-icon"
            />

            <span className="font-inter text-base leading-[140%] font-normal text-white">
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
