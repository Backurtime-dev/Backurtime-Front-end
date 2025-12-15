"use client";

import { cn } from "@/utils";
import Image from "next/image";
import { ComponentProps } from "react";

interface RadioProps extends ComponentProps<"input"> {
  label?: string;
  done?: boolean;
}

export default function Radio({
  label,
  done,
  className,
  id,
  ...props
}: RadioProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "group inline-flex w-fit cursor-pointer items-center gap-x-3.5",
        className,
      )}
    >
      <input id={id} type="radio" className="peer sr-only" {...props} />
      <div
        className={cn(
          "relative size-6 overflow-hidden rounded-full p-px",
          "bg-white/20",
          !done &&
            "peer-checked:bg-[linear-gradient(97.44deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
          !done &&
            "peer-checked:before:bg-green-normal peer-checked:before:absolute peer-checked:before:top-1/2 peer-checked:before:left-1/2 peer-checked:before:h-1.5 peer-checked:before:w-1.5 peer-checked:before:-translate-x-1/2 peer-checked:before:-translate-y-1/2 peer-checked:before:rounded-full",
        )}
      >
        <div className="bg-dark-60 flex h-full w-full items-center justify-center rounded-full">
          {done && (
            <Image
              src="/icons/tick-green.svg"
              alt="tick green"
              width={12}
              height={12}
            />
          )}
        </div>
      </div>
      {label && (
        <span className="font-inter text-sm leading-[140%] font-medium tracking-[0.01em] text-white">
          {label}
        </span>
      )}
    </label>
  );
}
