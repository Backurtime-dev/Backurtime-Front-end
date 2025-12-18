"use client";

import { cn } from "@/utils";
import { ReactNode } from "react";

interface ToggleProps {
  label: ReactNode;
  leftLabel?: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function Toggle({
  label,
  leftLabel,
  checked,
  onChange,
  className,
}: ToggleProps) {
  return (
    <label
      className={cn(
        "inline-flex w-fit cursor-pointer items-center gap-x-[18px]",
        className,
      )}
    >
      {leftLabel && (
        <span className={!checked ? "text-white" : "text-grey-light"}>
          {leftLabel}
        </span>
      )}

      <input
        type="checkbox"
        value=""
        className="peer sr-only shrink-0!"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <div className="peer after:bg-grey-light peer-checked:after:bg-green-normal peer-checked:border-green-normal relative h-6 w-[42px] shrink-0! rounded-full border border-white/20 bg-white/10 after:absolute after:start-[4px] after:top-[3px] after:h-4 after:w-4 after:rounded-full after:transition-all after:content-[''] peer-checked:after:translate-x-full" />
      <span className={checked ? "text-white" : "text-grey-light"}>
        {label}
      </span>
    </label>
  );
}
