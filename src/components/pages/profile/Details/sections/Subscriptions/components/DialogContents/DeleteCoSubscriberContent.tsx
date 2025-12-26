import React, { ReactEventHandler } from "react";
import { Button } from "@/components/common";
import Image from "next/image";
import { cn } from "@/utils";

interface TypesProps {
  variant:
    | "delete-co-subscriber"
    | "remove-netflix-premium"
    | "public-subscription";
  onClick?: ReactEventHandler;
  onDelete?: ReactEventHandler;
}

const DeleteCoSubscriberContent = ({
  variant,
  onClick,
  onDelete,
}: TypesProps) => {
  const dialogFinder = (dialogType: string) => {
    switch (dialogType) {
      case "delete-co-subscriber":
        return {
          heading: "Delete co-subscriber",
          text: "Are you sure you want to delete Username forever?",
          subText: "",
          btn1: "Remain",
          btn2: "Delete Forever",
        };
      case "remove-netflix-premium":
        return {
          heading: "Remove Netflix Premium",
          text: "Are you sure you want to remove your sharing?",
          subText: "You'll lose all co-subscribers forever.",
          btn1: "Cancel",
          btn2: "Remove",
        };
      case "public-subscription":
        return {
          heading: "Public subscription",
          text: "Are you sure you want to make Netflix subscription public?",
          subText: "All the users could have the ability to subscribe.",
          btn1: "Make Public",
          btn2: "Cancel",
        };
      default:
        return {
          heading: "Delete co-subscriber",
          text: "Are you sure you want to delete Username forever?",
          subText: "",
          btn1: "Remain",
          btn2: "Delete Forever",
        };
    }
  };

  const { heading, text, subText, btn1, btn2 } = dialogFinder(variant);

  return (
    <div
      className={cn(
        "relative h-auto max-w-[343px] p-4 sm:max-w-[687px] sm:p-8",
        "bg-cover bg-center bg-no-repeat",
      )}
    >
      <Image
        src={"/pages/profile/dialog-borders/delete-subscriber-bg.png"}
        alt="left border"
        fill
        className="object-fill object-center max-sm:hidden!"
        priority
      />
      <Image
        src={"/pages/profile/dialog-borders/mobile-sm.png"}
        alt="left border"
        fill
        className="object-fill object-center sm:hidden!"
        priority
      />
      <div className="relative h-full w-full pt-8 sm:pt-[42px]">
        <div
          className={cn(
            "absolute top-0 left-1/2 flex h-12 w-max -translate-x-1/2 items-center justify-center bg-contain bg-center bg-no-repeat px-4 sm:h-16",
            variant === "delete-co-subscriber" &&
              "bg-[url(/components/title-border-241.svg)] sm:bg-[url(/components/title-border-293.svg)]",
            variant === "remove-netflix-premium" &&
              "bg-[url(/components/title-border-270.svg)] sm:bg-[url(/components/title-border-329.svg)]",
            variant === "public-subscription" &&
              "bg-[url(/components/title-border-229.svg)] sm:bg-[url(/components/title-border-278.svg)]",
          )}
        >
          <p
            className={cn(
              "font-cinzel text-white-gradient relative text-base leading-[120%] font-bold tracking-[1%] sm:text-[20px]",
            )}
          >
            {heading}
            <span className="text-shadow-dark-small absolute top-0 left-0 -z-1">
              {heading}
            </span>
          </p>
        </div>
        <div className="bg-primitives-black_80 border-primitives-white_10 flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl border px-4 py-8 sm:gap-[30px] sm:rounded-[34px] sm:p-11">
          <Image
            src={
              variant === "public-subscription"
                ? "/pages/profile/public-badge.svg"
                : "/icons/delete-badge.svg"
            }
            alt="delete"
            width={120}
            height={120}
            className="object-contain max-sm:size-[72px]!"
          />
          <div className="flex w-full flex-col gap-2">
            <h4 className="font-inter text-center text-[20px] leading-[135%] font-semibold text-white sm:text-2xl">
              {text}
            </h4>
            {subText && (
              <p className="font-inter text-grey-light sn:leading-[150%] text-center text-sm leading-[140%] font-normal sm:text-base">
                {subText}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 max-sm:flex-col sm:gap-6">
            <Button
              onClick={onClick}
              title={btn1}
              withBackgoundImage
              backgroundImageUrl="/components/button_bg_168_54.svg"
              className="font-cinzel min-w-[167px] text-[18px] leading-[122%] font-bold text-white"
            />
            <Button
              onClick={onDelete}
              title={btn2}
              className="font-inter min-h-auto! p-0! text-base! leading-[140%] font-semibold text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCoSubscriberContent;
