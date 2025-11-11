"use client";

import { cn } from "@/utils";

interface NeonTextProps {
  text: string;
  className?: string;
}

export default function NeonText({ text, className = "" }: NeonTextProps) {
  return (
    <span
      className={cn(
        "font-cinzel text-white text-shadow-[1px_6px_10.2px_rgba(0,255,234,0.6),0px_2px_2px_rgba(0,153,255,0.3)]",
        className,
      )}
    >
      {text}
    </span>
  );
}
