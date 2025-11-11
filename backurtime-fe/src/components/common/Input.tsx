"use client";

import { cn } from "@/utils";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  withLabel?: boolean;
  withError?: boolean;
  labelTitle?: string;
  errorTitle?: string;
}

export default function Input({
  id,
  withLabel = false,
  withError = false,
  labelTitle = "",
  className = "",
  errorTitle = "",
  ...props
}: InputProps) {
  return (
    <div className={cn("flex w-full flex-col", withLabel && "gap-y-[6px]")}>
      {withLabel && (
        <label
          htmlFor={id}
          className="font-inter text-xs font-normal text-white"
        >
          {labelTitle}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "bg-black-normal font-inter text-grey-light placeholder:text-grey-input focus:border-green-normal w-full rounded-full border border-white/20 px-[18px] py-3 text-base focus:outline-none",
          withError && "border-red-error",
          className,
        )}
        {...props}
      />
      {withError && (
        <span className="font-inter text-red-error text-base font-normal">
          {errorTitle}
        </span>
      )}
    </div>
  );
}
