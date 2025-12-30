"use client";

import Image from "next/image";
import React, { Fragment } from "react";
import { cn } from "@/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const getDaysDifference = (startDate: Date) => {
  const today = new Date();
  const diffTime = today.getTime() - startDate.getTime();
  return Math.floor(diffTime / (1000 * 3600 * 24));
};

const RewardsProgress = ({
  startDate,
  dayRewardValues,
  onClaim,
}: {
  startDate: string;
  dayRewardValues: number[];
  onClaim: (day: number, reward: number) => void;
}) => {
  const calculateCurrentDay = () => {
    const dayDiff = getDaysDifference(new Date(startDate));
    return dayDiff >= 0 ? dayDiff : 0;
  };

  const currentDay = calculateCurrentDay();
  const stepIndex = Math.min(currentDay, 6);
  const rewardForDay = dayRewardValues[stepIndex];

  const handleClaim = () => {
    onClaim(stepIndex + 1, rewardForDay);
  };

  return (
    <Fragment>
      <div className="no-scrollbar w-full overflow-x-auto max-sm:hidden">
        <div className="flex h-[120px] min-w-[1200px] shrink-0 flex-col items-end justify-between gap-[18.25px] pt-[26px]">
          <div className="w-full px-4">
            <div className="relative z-1 grid w-full grid-cols-20 rounded-full bg-transparent">
              {dayRewardValues.map((reward, index) => (
                <div
                  key={index}
                  className={`flex h-2.5 items-center justify-end ${index === 0 && "bg-transparent"} ${index === 1 && "col-span-3 bg-transparent"} ${index === 2 && "col-span-3 bg-transparent"} ${index === 3 && "col-span-3 bg-transparent"} ${index === 4 && "col-span-3 bg-transparent"} ${index === 5 && "col-span-3 bg-transparent"} ${index === 6 && "col-span-3 bg-transparent"}`}
                >
                  <div
                    className="relative -mr-[68.5px] flex h-[60px]! w-[137px]! shrink-0 items-center justify-center gap-1"
                    style={{
                      WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Image
                      src="/components/progress-items/wood-grey-on.svg"
                      alt="number"
                      fill
                      className="object-contain"
                    />
                    <span className="font-inter relative text-sm font-medium tracking-[1%] text-white">{`Day ${index + 1}:`}</span>
                    <div className="flex items-center">
                      <Image
                        src="/components/lamp.svg"
                        alt="number"
                        width={20}
                        height={20}
                        className="drop-shadow-icon-sm size-5! object-contain"
                      />
                      <span className="font-inter relative text-sm font-medium tracking-[1%] text-white">{`${reward}`}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="h-2.5" />
            </div>
          </div>
          {/* Progress bar with custom gradient */}
          <div className="bg-primitives-white_10 relative flex h-[42px] w-full items-center justify-center rounded-full px-4">
            <div className="relative h-auto w-full">
              <div className="bg-primitives-white_5 relative z-1 grid w-full grid-cols-20 rounded-full">
                {dayRewardValues.map((reward, index) => (
                  <div
                    key={index}
                    className={`flex h-2.5 items-center justify-end ${index === 0 && "bg-transparent"} ${index === 1 && "col-span-3 bg-transparent"} ${index === 2 && "col-span-3 bg-transparent"} ${index === 3 && "col-span-3 bg-transparent"} ${index === 4 && "col-span-3 bg-transparent"} ${index === 5 && "col-span-3 bg-transparent"} ${index === 6 && "col-span-3 bg-transparent"}`}
                  >
                    {index === stepIndex ? (
                      <Tooltip key={index}>
                        <TooltipTrigger
                          onClick={handleClaim}
                          className={cn(
                            "-mr-[17px] size-[34px]! cursor-pointer rounded-full border-2 border-transparent",
                            "overflow-hidden bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#919191_31.2%,#DDDDDD_75.92%,#E3E3E3_100.02%)]",
                          )}
                        >
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#020D1A_0%,#08151D_100%),linear-gradient(180deg,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_77.6%)]">
                            <Image
                              src="/components/fire.svg"
                              alt="number"
                              width={26}
                              height={26}
                              className="drop-shadow-icon-sm object-contain"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          sideOffset={12}
                          direction="bottom"
                          className="w-max rounded-[12px]! px-3 py-1.5"
                        >
                          <span className="font-inter text-black-normal text-base leading-[140%]! font-normal tracking-[1%]">
                            Claim
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Image
                        src="/components/progress-items/progress-number-grey.svg"
                        alt="number"
                        width={16}
                        height={16}
                        className="-mr-2"
                      />
                    )}
                  </div>
                ))}
                <div className="h-2.5" />
              </div>
              <div className="absolute top-0 left-0 grid h-2.5 w-full grid-cols-20 rounded-full">
                <div
                  className={cn(
                    "h-full w-full rounded-full",
                    stepIndex === 0 && "col-span-1",
                    stepIndex === 1 && "col-span-4",
                    stepIndex === 2 && "col-span-7",
                    stepIndex === 3 && "col-span-10",
                    stepIndex === 4 && "col-span-13",
                    stepIndex === 5 && "col-span-16",
                    stepIndex === 6 && "col-span-20",
                    "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]",
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-start justify-center gap-2 sm:hidden">
        <div className="relative z-1 grid h-full w-max grid-cols-1 grid-rows-6 rounded-full bg-transparent">
          {dayRewardValues.map((reward, index) => {
            return index % 2 === 0 ? (
              <div
                key={index}
                className={`mb-1.5 flex h-auto items-center justify-end`}
              >
                <div
                  className="relative flex h-[60px]! w-[119px]! shrink-0 items-center justify-center gap-1"
                  style={{
                    WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Image
                    src="/components/progress-items/wood-grey-mobile.svg"
                    alt="number"
                    fill
                    className="object-contain"
                  />
                  <span className="font-inter relative text-[12px] font-medium tracking-[1%] text-white sm:text-sm">{`Day ${index + 1}:`}</span>
                  <div className="flex items-center">
                    <Image
                      src="/components/lamp.svg"
                      alt="number"
                      width={20}
                      height={20}
                      className="drop-shadow-icon-sm size-5! object-contain"
                    />
                    <span className="font-inter relative text-[12px] font-medium tracking-[1%] text-white sm:text-sm">{`${reward}`}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full w-full" />
            );
          })}
        </div>
        {/* center */}
        <div className="h-max py-3">
          <div className="bg-primitives-white_10 relative mx-auto grid h-[432px] w-10 grid-cols-1 grid-rows-25 rounded-full py-2.5">
            {dayRewardValues.map((reward, index) => (
              <div
                key={index}
                className={cn(
                  "relative z-1 mx-auto flex h-full w-4 flex-col items-center justify-end rounded-full",
                  // index === 0 ? "h-max" : "",
                  // stepIndex === 0 ? (index === 1 ? "h-[31px]!" : "") : "",
                  index === 0 && "row-span-1",
                  index === 1 && "row-span-4",
                  index === 2 && "row-span-4",
                  index === 3 && "row-span-4",
                  index === 4 && "row-span-4",
                  index === 5 && "row-span-4",
                  index === 6 && "row-span-4",
                )}
              >
                {index === stepIndex ? (
                  <Tooltip key={index}>
                    <TooltipTrigger
                      onClick={handleClaim}
                      className={cn(
                        "size-[34px]! shrink-0 cursor-pointer rounded-full border-2 border-transparent",
                        "overflow-hidden bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#919191_31.2%,#DDDDDD_75.92%,#E3E3E3_100.02%)]",
                        stepIndex === 6 ? "" : "-mb-[17px]",
                      )}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#020D1A_0%,#08151D_100%),linear-gradient(180deg,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_77.6%)]">
                        <Image
                          src="/components/fire.svg"
                          alt="number"
                          width={26}
                          height={26}
                          className="drop-shadow-icon-sm object-contain"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      sideOffset={12}
                      direction="bottom"
                      className="w-max rounded-[12px]! px-3 py-1.5"
                    >
                      <span className="font-inter text-black-normal text-base leading-[140%]! font-normal tracking-[1%]">
                        Claim
                      </span>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Image
                    src="/components/progress-items/progress-number-grey.svg"
                    alt="number"
                    width={16}
                    height={16}
                    className={cn(
                      "size-4! shrink-0",
                      index === 0 || index === 6 ? "" : "-mb-2",
                    )}
                  />
                )}
              </div>
            ))}

            <div className="absolute top-4 left-1/2 h-full w-[7.66px] -translate-x-1/2 rounded-full">
              <div
                className={cn(
                  "w-full rounded-full",
                  stepIndex === 0 && "h-4!",

                  "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]",
                )}
                style={{
                  height: stepIndex >= 0 ? `${65 * stepIndex}px` : "",
                }}
              />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="relative z-1 grid h-max w-max grid-cols-1 grid-rows-6 rounded-full bg-transparent">
          {dayRewardValues.map((reward, index) => {
            return index % 2 !== 0 ? (
              <div
                key={index}
                className={`mb-2 flex h-auto items-center justify-end`}
              >
                <div
                  className="relative flex h-[60px]! w-[119px]! shrink-0 items-center justify-center gap-1"
                  style={{
                    WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Image
                    src="/components/progress-items/wood-grey-mobile.svg"
                    alt="number"
                    fill
                    className="object-contain"
                  />
                  <span className="font-inter relative text-[12px] font-medium tracking-[1%] text-white sm:text-sm">{`Day ${index + 1}:`}</span>
                  <div className="flex items-center">
                    <Image
                      src="/components/lamp.svg"
                      alt="number"
                      width={20}
                      height={20}
                      className="drop-shadow-icon-sm size-5! object-contain"
                    />
                    <span className="font-inter relative text-[12px] font-medium tracking-[1%] text-white sm:text-sm">{`${reward}`}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-1.5" />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default RewardsProgress;
