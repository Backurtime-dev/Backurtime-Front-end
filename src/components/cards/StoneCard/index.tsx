import React, { ReactNode } from "react";
import Image from "next/image";
import { Status } from "@/components/common";
import { cn } from "@/utils";

interface TypesProps {
  image?: string | undefined;
  value?: string | number;
  title?: string;
  status?: string | number;
  icons?: ReactNode;
}

const StoneCard = ({ image, value, title, status, icons }: TypesProps) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[41px] w-full items-center gap-2.5 bg-[url(/pages/profile/profile_statistic_border.webp)] bg-size-[99%_100%] bg-no-repeat sm:min-h-[77px] sm:gap-5",
        "py-3 pr-4 pl-4 sm:py-3 sm:pr-6",
        status && "flex-wrap",
      )}
    >
      <Image
        src="/pages/profile/profile_statistic_border_right.svg"
        width={48}
        height={48}
        alt={`statistic image `}
        className="absolute top-0 right-0 z-1 h-full w-[22px] object-cover"
      />
      <Image
        src={image || ""}
        width={48}
        height={48}
        alt={`statistic image ${title}`}
        className="drop-shadow-icon-sm size-10! object-contain sm:size-12!"
      />
      <div className="gap-y-.5 relative z-2 flex flex-col">
        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          <span className="font-cinzel text-[20px] leading-[120%]! font-bold tracking-[.2px] text-white text-shadow-[1px_6px_10.2px_rgba(0,255,234,0.3)] sm:text-2xl sm:tracking-[0.24px]">
            {value}
          </span>
          {status && (
            <Status
              small
              text={status}
              status={"in-completed"}
              rounded
              type="silver"
            />
          )}
        </div>
        <span className="font-inter flex items-center gap-1 text-[12px] leading-[140%]! font-normal tracking-[.12px] text-white sm:text-base sm:tracking-[0.16px] [&>svg]:w-4! sm:[&>svg]:w-5!">
          {icons} {title}
        </span>
      </div>
    </div>
  );
};

export default StoneCard;
