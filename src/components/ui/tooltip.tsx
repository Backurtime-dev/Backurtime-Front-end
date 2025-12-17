"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";
import { TooltipArrow } from "../icons";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  variant = "default",
  direction = "top",
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
  variant?: "default" | "small" | "large";
  direction?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        side={direction}
        sideOffset={sideOffset}
        data-slot="tooltip-content"
        className={cn(
          "relative z-50 w-fit",
          "bg-foreground text-background",
          variant === "small"
            ? "rounded-full px-2 py-0.5 text-[10px]"
            : "rounded-md px-3 py-1.5 text-xs",
          "bg-[linear-gradient(0deg,#FFFFFF,#FFFFFF),linear-gradient(180deg,rgba(0,0,0,0.2)_19.23%,rgba(0,0,0,0)_50%)]",
          className,
        )}
        {...props}
      >
        {children}

        <span
          className={cn(
            "text-foreground absolute",
            direction === "top" &&
              "-bottom-1.5 left-1/2 -translate-x-1/2 rotate-180",
            direction === "bottom" && "-top-1.5 left-1/2 -translate-x-1/2",
            direction === "left" &&
              "top-1/2 -right-1.5 -translate-y-1/2 -rotate-30",
            direction === "right" &&
              "top-1/2 -left-1.5 -translate-y-1/2 rotate-30",
          )}
        >
          <TooltipArrow />
        </span>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
