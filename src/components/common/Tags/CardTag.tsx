import { ReactNode } from "react";
import SvgClock from "@/components/icons/Clock";
import { cn } from "@/utils";

const CardTag = ({
  icon,
  text,
  className,
}: {
  icon?: ReactNode;
  text?: number | string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        className,
        "bg-primitives-black_50 group hover:[&>svg>path]:stroke-green-normal flex h-auto w-max items-center justify-center gap-1 rounded-[29px]",
        text ? "px-2 py-[5px]" : "p-2",
      )}
    >
      {icon || <SvgClock size={16} />}
      {text && (
        <span className="font-inter group-hover:text-green-normal text-sm leading-[140%]! font-medium tracking-[1%] text-white">
          {text}
        </span>
      )}
    </div>
  );
};

export default CardTag;
