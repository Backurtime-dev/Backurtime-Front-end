import React from "react";
import Badge from "@/components/common/Badge";
import Image from "next/image";
import { cn } from "@/utils";

interface TypesProps {
  clanname?: string;
  username?: string;
  level?: number | string;
  rank?: "gold" | "green" | "blue" | "silver" | "cuper";
  points?: number | string;
  className?: string;
}

const RankCard = ({
  clanname,
  username,
  level,
  rank = "silver",
  points,
  className,
}: TypesProps) => {
  return (
    <div
      className={cn(
        "bg-primitives-white_10 flex items-center gap-4 rounded-3xl p-4",
        className,
      )}
    >
      <Badge
        level={level}
        color={rank}
        type="user"
        className="h-10! w-10! sm:h-[62px]! sm:w-[62px]! *:[[id='user-avatar']]:h-[26px]! *:[[id='user-avatar']]:w-[26px]!"
        mediaUrl="/icons/badge/user-placeholder.svg"
      />
      <div className="font-inter flex flex-col gap-2 text-white">
        <div className="w-full text-base leading-[150%]! font-medium">
          <span className="flex items-center gap-1">
            <p>{clanname}</p>
            <Image
              src="/icons/clan-lable.svg"
              alt="app logo"
              width={25}
              height={19}
              className="object-contain"
            />
          </span>
          <p className="text-grey-light! mt-0.5 leading-[140%]! font-normal! tracking-[.12px]!">
            {username}
          </p>
        </div>
        <div className="flex items-center">
          <Image
            src="/icons/clock-3d.svg"
            alt="app logo"
            width={20}
            height={20}
            className="drop-shadow-icon-sm h-5! w-5! shrink-0 object-contain"
          />
          <span className="text-[12px]! leading-[140%]! font-medium! tracking-[.12px]!">
            {points}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
