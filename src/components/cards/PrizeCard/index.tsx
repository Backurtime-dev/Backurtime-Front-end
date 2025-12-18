import { Status } from "@/components/common";
import Image from "next/image";

type PrizeCardProps = {
  campaignName: string;
  productName: string;
  rarity: "Ultra Rare" | "Rare" | "Common";
  imageUrl: string;
};

const rarityGlowMap = {
  "Ultra Rare":
    "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]",
  Rare: "bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#909090_31.2%,#DDD_75.92%,#E3E3E3_100.02%)]",
  Common:
    "bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)]",
} as const;

const rarityStatusTypeMap = {
  "Ultra Rare": "gold",
  Rare: "silver",
  Common: "green",
} as const;

const PrizeCard = ({
  campaignName,
  productName,
  rarity,
  imageUrl,
}: PrizeCardProps) => {
  return (
    <div className="bg-primitives-white_10 relative w-full rounded-[42px]">
      <div className="relative px-2 pt-2 sm:px-1 sm:pt-1">
        <div
          className={`absolute top-1/2 left-1/2 h-[137px] w-[276px] -translate-x-1/2 -translate-y-1/2 rounded-[276px] ${rarityGlowMap[rarity]} opacity-[.5] filter-[blur(68.05000305175781px)]`}
        />

        <div className="relative h-[180px] w-full overflow-hidden rounded-[38px] p-4 sm:h-[203px]">
          <div
            className="absolute top-0 left-0 z-1 h-full w-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)",
            }}
          />

          <Image
            src={imageUrl}
            alt={productName}
            className="object-cover"
            fill
          />

          <div className="relative z-1 flex w-full justify-end">
            <Status
              text={rarity}
              status="in-completed"
              rounded
              type={rarityStatusTypeMap[rarity]}
              small
            />
          </div>
        </div>
      </div>
      <div className="px-5 py-5 sm:px-4 sm:py-4">
        <p className="font-Inter text-grey-light mb-2 text-xs leading-[140%]! font-normal tracking-[.16px] sm:text-base">
          {campaignName}
        </p>
        <p className="font-inter text-base leading-[140%] font-semibold tracking-[.18px] sm:text-[18px]">
          {productName}
        </p>
      </div>
    </div>
  );
};

export default PrizeCard;
