"use client";

import { cn } from "@/utils";
import { ComponentProps } from "react";

interface CheckboxProps extends ComponentProps<"input"> {
  withLabel?: boolean;
  labelTitle?: string;
}

export default function Checkbox({
  withLabel = false,
  labelTitle = "",
  className = "",
  id,
  ...props
}: CheckboxProps) {
  return (
    <div className={cn("flex items-center", withLabel && "gap-x-[10px]")}>
      <input
        type="checkbox"
        id={id}
        className={cn(
          "peer relative size-6 cursor-pointer appearance-none rounded-md border border-white/20 bg-white/10",
          "before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-transparent",
          "checked:bg-[url('/components/checkbox_tick.svg')] checked:bg-size-[12px_12px] checked:bg-center checked:bg-no-repeat",
          className,
        )}
        {...props}
      />
      {withLabel && (
        <label
          htmlFor={id}
          className="font-inter text-grey-light cursor-pointer text-base font-normal"
        >
          {labelTitle}
        </label>
      )}
    </div>
  );
}
