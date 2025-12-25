import { cn } from "@/lib/utils";
import Image from "next/image";

type IconType = "tick" | "cross" | "lock";

interface MysteryCardItemProps {
  type: IconType;
  count: number;
  iconSrc: string;
}

const MysteryCard = ({ type, count, iconSrc }: MysteryCardItemProps) => {
  const isTick = type === "tick";
  const isLock = type === "lock";

  return (
    <div
      className={cn(
        `h-20 w-20 rounded-[20px] ${isLock ? "bg-primitives-white_10" : "bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%),linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_100%)]"} sm:h-[105px] sm:w-[146px]`,
      )}
    >
      <div className="relative flex h-full w-full">
        {!isLock && (
          <div
            className={cn(
              `sm:filter-[blur(15px) ] absolute top-1/2 left-1/2 h-9 w-9 -translate-1/2 rounded-full ${isTick ? "bg-[linear-gradient(180deg,#A0DBF0_0%,#00FFEA_100%)]" : "bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#909090_31.2%,#DDD_75.92%,#E3E3E3_100.02%)]"} ${isTick ? "opacity-[0.4]" : "opacity-[0.2]"} filter-[blur(8.44262981414795px)] sm:h-16 sm:w-16`,
            )}
          />
        )}
        <Image
          src={iconSrc}
          alt="mystery-grid-tick-icon"
          width={56}
          height={56}
          className="absolute top-1/2 left-1/2 size-8! -translate-x-1/2 -translate-y-1/2 object-contain sm:size-14!"
        />
        <span className="font-inter absolute top-[15px] left-[13px] text-[14px] leading-[150%] font-medium text-white sm:top-[13px] sm:text-base">
          {count}
        </span>
      </div>
    </div>
  );
};

export default MysteryCard;
