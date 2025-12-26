import { Button } from "@/components/common";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Drawings } from "@/components/icons";

type AwardCardProps = {
  prizeName?: string;
  lockPrizeName?: string;
  lockPrizeTicket?: number | string;
  referralsText?: string;
  imageUrl?: string;
  selected?: boolean;
  isLock?: boolean;
};

const AwardCard = ({
  prizeName,
  imageUrl,
  selected = false,
  isLock = false,
  referralsText,
  lockPrizeTicket,
  lockPrizeName,
}: AwardCardProps) => {
  return (
    <div
      className={cn(
        "relative w-full rounded-[42px]",
        selected
          ? "bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)] p-[1px]"
          : "border-primitives-white_10 bg-primitives-white_10 border",
      )}
    >
      {/* Inner Card */}
      <div className="bg-dark-60 h-full rounded-[41px]">
        {/* Image */}
        <div className="relative px-2 pt-2 sm:px-1 sm:pt-1">
          <div className="relative h-[180px] w-full overflow-hidden rounded-[38px]">
            <Image
              src={imageUrl || "/components/award-card-image.png"}
              alt="award-card"
              className="object-cover"
              fill
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-2 mb-5 px-5 sm:px-4">
          <p className="text-grey-light mb-2 text-xs leading-[140%] font-normal tracking-[.16px] sm:text-base">
            {referralsText} refreels
          </p>
          <p className="text-[18px] leading-[140%] font-semibold tracking-[.18px] text-white">
            {prizeName}
          </p>

          <div className={cn("mt-3.5", isLock && "opacity-0")}>
            {selected ? (
              <Button
                icon="/icons/tick-green.svg"
                title="Selected"
                className="items-center gap-2.5"
              />
            ) : (
              <Button variant="secondary" title="Select" />
            )}
          </div>
        </div>
      </div>

      {isLock && (
        <div className="bg-primitives-black_80 absolute top-0 left-0 z-1 h-full w-full rounded-[42px] px-6 pt-11 pb-6 backdrop-blur-[7.4px]">
          <div className="flex h-full flex-col items-center">
            <Image
              src="/components/lock-badge.svg"
              width={72}
              height={72}
              alt="prize-card"
              className="drop-shadow-lock-icon object-contain"
            />
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col items-center gap-2">
                <h5 className="font-inter text-base leading-[140%] font-semibold tracking-[0.16px] text-white sm:text-[18px] sm:tracking-[0.18px]">
                  {lockPrizeName}
                </h5>
                <span className="font-inter text-grey-light text-base leading-[140%] font-medium tracking-[0.12px] sm:text-[14px] sm:tracking-[0.14px]">
                  {referralsText} referrals
                </span>
              </div>
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-center gap-1">
                  <span className="font-inter text-base leading-[140%] font-semibold text-white sm:text-[14px]">
                    {lockPrizeTicket}
                  </span>
                  <Drawings size={20} />
                </div>
                <Button variant="secondary" title="UNLOCK" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardCard;
