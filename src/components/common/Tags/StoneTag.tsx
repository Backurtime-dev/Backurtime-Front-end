import { ReactEventHandler, ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/utils";

const StoneTag = ({
  label = "label",
  active,
  icon,
  onClick,
}: {
  label: string;
  active?: boolean;
  icon?: ReactNode;
  onClick?: ReactEventHandler;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative flex h-full min-h-12 w-max shrink-0 items-center justify-center gap-[9px] px-5 py-[13.5px] sm:min-h-16 sm:px-6 sm:py-4"
    >
      <span
        className={cn(
          "relative z-1 [&>svg]:max-sm:size-5!",
          active
            ? "[&>svg_path]:stroke-white"
            : "[&>svg_path]:stroke-grey-light",
        )}
      >
        {icon}
      </span>
      <span
        className={cn(
          "font-inter relative z-1 text-sm leading-[150%]! font-medium sm:text-base",
          active ? "text-white" : "text-grey-light",
        )}
      >
        {label}
      </span>
      <Image
        src={
          active
            ? "/components/stone-left-active.png"
            : "/components/stone-btn-right.svg"
        }
        alt="btn"
        width={16}
        height={64}
        className="absolute top-0 right-0 hidden h-full min-h-16 w-4 object-cover object-right sm:block"
      />
      <Image
        src={
          active
            ? "/components/ston-active.svg"
            : "/components/stone-btn-bg.svg"
        }
        alt="btn"
        width={20}
        height={64}
        className={cn(
          "absolute top-0 left-0 hidden h-full min-h-16 w-[calc(100%-16px)] object-cover object-left sm:block",
        )}
      />
      {/* mobile */}
      <Image
        src={
          active
            ? "/components/mobile-stone-active-right.png"
            : "/components/mobile-stone-right.svg"
        }
        alt="btn"
        width={16}
        height={64}
        className="absolute top-0 right-0 block h-full min-h-12 w-3 object-cover object-right sm:hidden"
      />
      <Image
        src={
          active
            ? "/components/mobile-stone-active.svg"
            : "/components/mobile-stone.svg"
        }
        alt="btn"
        width={20}
        height={64}
        className={cn(
          "absolute top-0 left-0 block h-full min-h-12 w-[calc(100%-12px)] object-cover object-left sm:hidden",
        )}
      />
    </button>
  );
};
export default StoneTag;
