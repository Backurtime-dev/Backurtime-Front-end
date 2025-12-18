import React from "react";
import Badge from "@/components/common/Badge";
import { cn } from "@/utils";
import Image from "next/image";

type AmountStyle = {
  bg: string;
  icon: string;
  type: "gold" | "green" | "blue" | "silver" | "cuper";
};

const LiveDonateCard = ({
  donate,
  userImage,
  level,
}: {
  donate: number;
  userImage: string;
  level: number;
}) => {
  const { bg, icon, type } = getAmount(donate);

  return (
    <div
      className={cn(
        "border-primitives-white_20 shadow-sm-dark bg-dark-100 relative inline-flex min-h-[154px] w-[122px] overflow-hidden rounded-[20px] border p-1",
      )}
    >
      <div className={cn("absolute top-0 left-0 z-1 h-full w-full", bg)} />
      <Image
        src="/components/mask-bg.png"
        alt="bg mask"
        fill
        className="opacity-20"
      />

      <div className="bg-primitives-white_5 flex h-full w-full flex-col items-center justify-start gap-4 rounded-[20px] px-2 py-4">
        <Badge
          level={level}
          color={type}
          type="user"
          crown={type === "gold"}
          className="relative z-1 size-[74px]! *:[[id='user-avatar']]:size-[50px]!"
          mediaUrl={userImage}
        />
        <div className="relative z-1 flex items-center gap-0.5">
          <div className="drop-shadow-icon-md2 size-6">
            <Image
              src={icon}
              alt="gold bag"
              fill
              className={
                icon?.includes("silver")
                  ? "drop-shadow-icon-md"
                  : "drop-shadow-icon-gold"
              }
            />
          </div>
          <p className="font-inter text-sm leading-[140%]! font-semibold text-white">
            <span className="mr-1">€</span>
            {donate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveDonateCard;

function getAmount(amount?: string | number): AmountStyle {
  const value = Number(amount ?? 0);

  if (value < 5000) {
    return {
      bg: "bg-[linear-gradient(327deg,rgba(255,129,91,0)_2.9%,rgba(255,98,0,0.40)_95.34%)]",
      icon: "/icons/bag-cuper.svg",
      type: "cuper",
    };
  }

  if (value < 50000) {
    return {
      bg: "bg-[linear-gradient(326deg,rgba(255,255,255,0)_3.57%,rgba(255,255,255,0.40)_96.52%)]",
      icon: "/icons/bag-silver.svg",
      type: "silver",
    };
  }

  return {
    bg: "bg-[linear-gradient(326deg,rgba(255,176,66,0)_-0.95%,rgba(255,176,66,0.4)_94.75%)]",
    icon: "/icons/bag-gold.svg",
    type: "gold",
  };
}
