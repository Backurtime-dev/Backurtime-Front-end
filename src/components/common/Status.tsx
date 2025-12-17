import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

interface TypeProps {
  icon?: boolean;
  text?: string;
  rounded?: boolean;
  status?: "completed" | "in-completed";
  type?: "silver" | "gold" | "green" | "blue";
  className?: string;
}

const Status = ({
  icon,
  text,
  type,
  rounded,
  status,
  className,
}: TypeProps) => {
  function getColorType(type?: string) {
    switch (type) {
      case "silver":
        return "bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#919191_31.2%,#DDDDDD_75.92%,#E3E3E3_100.02%)]";

      case "gold":
        return "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]";

      case "green":
        return "bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)]";

      case "blue":
        return "bg-[linear-gradient(90deg,#41B8FD_-0.05%,#3B4EF8_31.2%,#589EE0_75.92%,#ABE0FF_100.02%)]";

      default:
        return "bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)]";
    }
  }

  return (
    <div
      className={cn(
        className,
        "flex w-max items-center justify-center p-[1.5px] pl-[1.8px]!",
        rounded ? "rounded-full" : "rounded-[12px]",
        getColorType(type),
      )}
    >
      <div
        className={cn(
          "bg-gray-10 flex items-center gap-1.5 border border-transparent",
          rounded ? "rounded-full" : "rounded-[11px]",
          status === "completed"
            ? "px-[7px] py-1 sm:px-[11px] sm:py-[5px]"
            : "px-[11px] py-[3px] sm:px-[15px] sm:py-[7px]",
        )}
      >
        {(icon || status === "completed") && (
          <Image
            src="/icons/tick.svg"
            alt="tick"
            width={18}
            height={18}
            className="h-3.5 w-3.5 shrink object-contain sm:h-[18px] sm:w-[18px]"
          />
        )}
        <span
          className={cn(
            "font-inter text-white",
            status === "completed"
              ? "text-[10px] leading-[120%]! font-semibold tracking-[1%] sm:text-[12px]"
              : "text-[12px] leading-[140%]! font-normal sm:text-base",
          )}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Status;
