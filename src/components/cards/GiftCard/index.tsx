import Image from "next/image";
import { cn } from "@/utils";

type GiftCardVariant = "green" | "silver" | "gold" | "blue";

interface GiftCardProps {
  iconSrc: string;
  name: string;
  variant?: GiftCardVariant;
  price?: number | string;
  className?: string;
  billingPeriod?: string;
  cardVariant?: "default" | "small";
}

const glowGradientMap: Record<GiftCardVariant, string> = {
  gold: "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]",
  green:
    "bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)]",
  silver:
    "bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#909090_31.2%,#DDD_75.92%,#E3E3E3_100.02%)]",
  blue: "bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
};

const overlayGradientMap: Record<GiftCardVariant, string> = {
  gold: "bg-[linear-gradient(326deg,rgba(255,176,66,0.00)_-0.95%,rgba(255,176,66,0.40)_94.75%)]",
  green:
    "bg-[linear-gradient(326deg,rgba(179,230,239,0.00)_-0.95%,rgba(29,149,97,0.40)_94.75%)]",
  silver:
    "bg-[linear-gradient(326deg,rgba(179,230,239,0.00)_-0.95%,rgba(255,255,255,0.40)_94.75%)]",
  blue: "bg-[linear-gradient(326deg,rgba(179,230,239,0.00)_-0.95%,rgba(54,255,255,0.40)_94.75%)]",
};

const GiftCard = ({
  iconSrc,
  name,
  variant = "green",
  className,
  cardVariant = "default",
  price,
}: GiftCardProps) => {
  return (
    <div
      className={cn(
        "bg-primitives-white_5 relative flex flex-col justify-between overflow-hidden rounded-[42px]",
        cardVariant === "small" ? "w-full p-2 sm:p-1" : "p-2",
        className,
      )}
    >
      <div
        className={cn(
          "absolute left-1/2 h-[137px] w-[276px] -translate-x-1/2 rounded-[276px] opacity-[0.5] blur-[68.05000305175781px]",
          cardVariant === "small" ? "-top-11" : "top-[85px]",
          glowGradientMap[variant],
        )}
      />

      {cardVariant === "small" ? (
        <div className="border-primitives-white_30 shadow-dark-sm relative h-[120px] w-full overflow-hidden rounded-[38px] border backdrop-blur-[10px] sm:h-40">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <Image
              src={iconSrc}
              width={64}
              height={64}
              alt="subscription-logo"
              className="h-auto! w-auto! object-contain"
            />
          </div>

          <div
            className={cn(
              "absolute top-0 left-0 h-full w-full",
              overlayGradientMap[variant],
            )}
          />

          <Image
            src="/pages/profile/layer.png"
            fill
            alt="texture"
            className="object-cover opacity-3"
          />
        </div>
      ) : (
        <div className={cn("relative aspect-13/8 w-full overflow-hidden")}>
          <div className="relative z-1 flex h-full w-full flex-col items-center justify-center gap-6">
            <Image
              src={iconSrc}
              width={64}
              height={64}
              alt="subscription-logo"
              className="h-auto! w-auto! object-contain"
            />
            <span className="font-inter text-2xl leading-[135%] font-semibold text-white sm:text-[32px]">
              {price}
            </span>
          </div>

          <Image
            src={`/components/gift-card/${variant}-card.svg`}
            fill
            alt="texture"
            className="object-fill"
          />
        </div>
      )}
      <div className="px-5 pt-3 pb-4 sm:px-4 sm:pb-3">
        <p className="font-inter text-[18px] leading-[140%] font-semibold tracking-[0.18px]">
          {name}
        </p>
      </div>
    </div>
  );
};

export default GiftCard;
