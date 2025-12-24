import Image from "next/image";
import { cn } from "@/utils";

type SubscriptionCardVariant = "green" | "silver" | "gold" | "blue";

interface SubscriptionCardProps {
  logo: string;
  name: string;
  variant?: SubscriptionCardVariant;
  price?: number;
  className?: string;
  billingPeriod?: string;
}

const glowGradientMap: Record<SubscriptionCardVariant, string> = {
  gold: "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]",
  green: "bg-[rgba(72,188,130,0.20)]",
  silver:
    "bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#909090_31.2%,#DDD_75.92%,#E3E3E3_100.02%)]",
  blue: "bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
};

const overlayGradientMap: Record<SubscriptionCardVariant, string> = {
  gold: "bg-[linear-gradient(326deg,rgba(255,176,66,0.00)_-0.95%,rgba(255,176,66,0.40)_94.75%)]",
  green:
    "bg-[linear-gradient(326deg,rgba(179,230,239,0.00)_-0.95%,rgba(29,149,97,0.40)_94.75%)]",
  silver:
    "bg-[linear-gradient(326deg,rgba(179,230,239,0.00)_-0.95%,rgba(255,255,255,0.40)_94.75%)]",
  blue: "bg-[linear-gradient(326deg,rgba(179,230,239,0.00)_-0.95%,rgba(54,255,255,0.40)_94.75%)]",
};

const SubscriptionCard = ({
  logo,
  name,
  variant = "gold",
  className,
  price,
  billingPeriod = "/month",
}: SubscriptionCardProps) => {
  return (
    <div
      className={cn(
        "bg-primitives-white_5 relative flex w-full flex-col gap-4 overflow-hidden rounded-[42px] p-2 sm:gap-5",
        className,
      )}
    >
      <div
        className={cn(
          "absolute top-14 left-1/2 h-[137px] w-[276px] -translate-x-1/2 rounded-[276px] opacity-[0.3] blur-[68px]",
          glowGradientMap[variant],
        )}
      />

      <div className="border-primitives-white_30 shadow-dark-sm relative h-[120px] w-full overflow-hidden rounded-[38px] border backdrop-blur-[10px] sm:h-40">
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={logo}
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

      <div className="relative flex w-full flex-col gap-3 px-3 pb-4">
        <p className="font-inter text-[18px] leading-[140%] font-semibold tracking-[.18%] text-white">
          {name}
        </p>

        <p className="font-inter text-grey-light flex items-center gap-[5px] text-xs leading-[140%] font-normal tracking-[.12px] sm:text-base sm:tracking-[.16px]">
          From
          <span className="text-[20px] leading-[135%] font-semibold text-white sm:text-2xl">
            €{price}
          </span>
          {billingPeriod}
        </p>
      </div>
    </div>
  );
};

export default SubscriptionCard;
