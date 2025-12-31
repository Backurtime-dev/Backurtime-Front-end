"use client";
import React, { Fragment, useState } from "react";
import { Button } from "@/components/common";
import { ChevronDown, Info } from "@/components/icons";
import { cn } from "@/utils";
import Image from "next/image";

interface TypeProps {
  variant: "gold" | "green" | "silver";
  isDetail?: boolean;
  isButton?: boolean;
  subscriptionBenefits?: {
    id: number;
    label: string;
  }[];
}
const PerkCard = ({
  variant = "green",
  subscriptionBenefits = [],
  isDetail = true,
  isButton = true,
}: TypeProps) => {
  const [inDetail, setIsDetail] = useState<boolean>(true);
  return (
    <div
      className={cn(
        "h-max w-full max-w-[540px] overflow-hidden",
        "border-primitives-white_30 drop-shadow-gift-card rounded-[42px] border backdrop-blur-[50px]",
      )}
    >
      {isDetail ? (
        <Fragment>
          <div className="relative flex w-full flex-col items-center justify-start px-3.5 pt-1 pb-5">
            <Image
              src="/components/streak-freeze-card/badge.png"
              alt="bg image"
              width={80}
              height={80}
              className={cn(
                "size-20! object-contain object-top",
                variant === "green" ? `drop-shadow-light-green` : "",
                variant === "gold" ? `drop-shadow-light-gold` : "",
                variant === "silver" ? `drop-shadow-light-silver` : "",
              )}
            />
            <div className="relative -mt-10 flex h-auto w-full flex-col items-center justify-start gap-[26px] px-[30px] pt-[93px] pb-[30px]">
              <Image
                src={`/components/perk-card/${variant}-bg-dp.png`}
                alt="bg image"
                fill
                className="drop-shadow-gift-card object-top"
              />
              <div className="relative z-1 flex w-full flex-col items-center justify-start gap-3 text-center">
                <h3 className="sm:font-cinzel font-inter text-2xl leading-[135%] font-semibold text-white sm:text-[32px] sm:leading-[122%] sm:font-bold">
                  Burt
                </h3>
                <p className="font-inter text-sm leading-[140%] text-white sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>
              <p className="font-inter relative z-1 text-2xl leading-[135%] font-semibold text-white sm:text-[32px] sm:font-bold">
                €&nbsp;20&nbsp;
                <span className="text-grey-light text-sm! leading-[140%]! font-normal! sm:text-base!">
                  /year
                </span>
              </p>

              <Button
                title="Buy Now"
                withBackgoundImage
                backgroundImageUrl="/components/btn-452.svg"
                className={cn(
                  "font-cinzel text-shadow-green-sm! min-h-auto! max-w-[452px] bg-contain! p-4! text-[18px] leading-[122%] font-bold!",
                )}
              />
            </div>
          </div>
          <div
            className={cn(
              "border-primitives-white_10 w-full border-t px-6 py-6 sm:py-8",
              "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.025)_100%)]",
            )}
          >
            <Button
              onClick={() => {
                setIsDetail(!inDetail);
              }}
              title="More details"
              icon={
                <ChevronDown
                  size={16}
                  className={inDetail ? "rotate-0" : "rotate-180"}
                />
              }
              className="font-inter! flex min-h-auto! w-max! flex-row-reverse! gap-3! p-0! text-base! leading-[150%]! font-medium! sm:hidden!"
            />
            <div
              className={cn(
                "flex h-auto w-full flex-col gap-4 overflow-hidden sm:gap-6",
                inDetail ? "mt-4 h-auto" : "h-0",
              )}
            >
              <h5 className="font-inter text-base leading-[135%] font-medium text-white sm:text-[20px]">
                Premium Backurtime subscription unlocks:
              </h5>

              <ul className="space-y-4 text-white">
                {subscriptionBenefits.map((item) => (
                  <li
                    key={item.id}
                    className="font-inter text-grey-light flex items-center gap-3.5 text-sm leading-[140%] font-normal sm:text-base"
                  >
                    <div className="relative flex size-6! shrink-0 items-center justify-center">
                      <Image
                        src={
                          variant === "green"
                            ? "/icons/tick-icon.svg"
                            : variant === "gold"
                              ? "/icons/gold-rgb-tick.svg"
                              : variant === "silver"
                                ? "/icons/silver-rgb-tick.svg"
                                : ""
                        }
                        alt="bg image"
                        width={24}
                        height={24}
                        className={cn(
                          "object-contain",
                          variant === "green" ? "size-[18px]!" : "size-6!",
                        )}
                      />
                    </div>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="bg-primitives-white_10 relative flex w-full flex-col items-center justify-start p-6">
          <div className="relative z-1 flex w-full items-center justify-center gap-3 text-center">
            <Image
              src="/components/streak-freeze-card/badge.png"
              alt="bg image"
              width={80}
              height={80}
              className={cn(
                "size-[46px]! object-contain object-top sm:size-20!",
                variant === "green" ? `drop-shadow-light-green` : "",
                variant === "gold" ? `drop-shadow-light-gold` : "",
                variant === "silver" ? `drop-shadow-light-silver` : "",
              )}
            />
            <h3 className="sm:font-cinzel font-inter text-2xl leading-[135%] font-semibold text-white sm:text-[32px] sm:leading-[122%] sm:font-bold">
              Burt
            </h3>
          </div>

          <p className="font-inter text-grey-light mt-2 text-center text-sm leading-[140%] sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
          <div className="mt-3 mb-2.5 flex w-full items-end justify-center gap-4">
            <p className="font-inter relative z-1 text-2xl leading-[135%] font-semibold text-white sm:text-[32px] sm:font-bold">
              €&nbsp;20&nbsp;
              <span className="text-grey-light text-sm! leading-[140%]! font-normal! sm:text-base!">
                /year
              </span>
            </p>

            {!isButton && (
              <Button
                title="More details"
                icon={<Info size={20} color={"#FFFFFF"} />}
                className="font-inter! flex min-h-auto! w-max! gap-1.5! p-0! text-base! leading-[150%]! font-medium!"
              />
            )}
          </div>

          {isButton && (
            <div className="flex w-full items-center gap-3">
              <Button title="Buy Now" variant="secondary" />
              <Button
                className="border-primitives-white_10 bg-primitives-white_10 w-12 shrink-0 rounded-full! border p-0!"
                icon={<Info color={"#FFFFFF"} />}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerkCard;
