"use client";
import React, { Fragment } from "react";
import { cn } from "@/utils";
import Image from "next/image";

type Items = {
  value: string | number;
  active: boolean;
};

interface TypesProps {
  progressValues: Items[];
}

const PersonalProgress = ({ progressValues }: TypesProps) => {
  const lastItem = progressValues[progressValues.length - 1];
  const activeIndex = progressValues?.filter((i) => i.active)?.length;
  const activeMobileIndex = progressValues?.filter((i) => i.active)?.length - 1;

  const segmentWidth = 180;
  const progressBarWidth = activeIndex * segmentWidth;
  const segmentMobileWidth = 67;

  const progressBarMobileWidth = activeMobileIndex * segmentMobileWidth;

  return (
    <Fragment>
      <div
        className={cn(
          "max-sm:hidden",
          "h-max p-[34px] pr-0!",
          "no-scrollbar overflow-x-auto rounded-3xl bg-cover bg-center bg-no-repeat",
          "bg-[url(/components/progress-items/personal-web.png)]",
        )}
      >
        <div className="w-[1669px]">
          {/* First Row of Progress Items */}
          <div className="mb-[26.69px] flex w-full items-center justify-between">
            {progressValues.map((item: Items, index: number) => {
              const isActive = item.active;
              return index % 2 === 0 ? (
                <div
                  className="flex h-auto w-44 shrink-0 items-center justify-center"
                  key={index}
                >
                  <div
                    className={cn(
                      "relative flex size-[60px]! shrink-0 items-center justify-center",
                    )}
                    style={{
                      WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Image
                      src={
                        isActive
                          ? "/components/progress-items/wood-red.svg"
                          : "/components/progress-items/wood-grey-small.svg"
                      }
                      alt="number"
                      fill
                      className="object-contain"
                    />
                    <span className="font-inter relative text-[12px] font-medium tracking-[1%] text-white sm:text-sm">
                      {isActive ? `${item.value}%` : "?"}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-[180px] shrink-0" key={index}></div>
              );
            })}
          </div>
          {/* Progress Bar */}
          <div className="bg-primitives-white_5 rounded-br-0! rounded-tr-0! flex w-full items-center overflow-hidden rounded-tl-full rounded-bl-full px-4">
            <div className="h-2.5 w-[58.5px] shrink-0 rounded-tl-full rounded-bl-full bg-[#ECAA2F]" />
            <div className="relative flex h-[42px] w-max items-center">
              {/* Render progress segments */}
              {progressValues.map((points, index) => {
                return (
                  <Fragment key={index}>
                    <div
                      className={cn(
                        "relative z-10 size-5 shrink-0 rounded-full",
                        points.active
                          ? "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]"
                          : "border-primitives-white_30 bg-primitives-white_30 border-2",
                      )}
                    />
                    <div
                      id="segmentWidth"
                      className={cn("h-2.5 shrink-0 rounded-full", "bg-none")}
                      style={{ width: `160px` }}
                    />
                  </Fragment>
                );
              })}
              {/* Active Progress Indicator */}
              {
                <div
                  className={cn(
                    "absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full",
                    "left-0",
                    "bg-[linear-gradient(90deg,#ECAA2F_-0.05%,#A13114_31.2%,#FFA060_75.92%,#D9A930_100.02%)]",
                  )}
                  style={{
                    width: lastItem?.active
                      ? `${progressBarWidth - 160}px`
                      : `${progressBarWidth}px`,
                  }}
                />
              }
            </div>
          </div>

          {/* Second Row of Progress Items */}
          <div className="mt-[26.69px] flex w-full shrink-0 items-center justify-between">
            {progressValues.map((item: Items, index: number) => {
              const isActive = item.active;
              return index % 2 !== 0 ? (
                <div
                  className="flex h-auto w-44 shrink-0 items-center justify-center"
                  key={index}
                >
                  <div
                    className={cn(
                      "relative flex size-[60px]! shrink-0 items-center justify-center",
                    )}
                    style={{
                      WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Image
                      src={
                        isActive
                          ? "/components/progress-items/wood-red.svg"
                          : "/components/progress-items/wood-grey-small.svg"
                      }
                      alt="number"
                      fill
                      className="object-contain"
                    />
                    <span className="font-inter relative text-[12px] font-medium tracking-[1%] text-white sm:text-sm">
                      {isActive ? `${item.value}%` : "?"}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-[180px] shrink-0" key={index}></div>
              );
            })}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div
        className={cn(
          "sm:hidden",
          "flex items-center",
          "h-max w-max rounded-3xl p-4",
          "bg-cover bg-center bg-no-repeat",
          "bg-[url(/components/progress-items/personal-mobile.png)]",
        )}
      >
        <div className="mr-3 flex w-full flex-col items-end justify-between">
          {progressValues.map((points, index) => {
            const isActive = points.active;
            return index % 2 === 0 ? (
              <div className="flex h-auto w-[120.5px] shrink-0 items-center justify-end">
                <div
                  className={cn(
                    "relative flex h-[60px]! shrink-0 items-center justify-center gap-1.5",
                    "w-[60px]!",
                  )}
                  style={{
                    WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Image
                    src={
                      isActive
                        ? "/components/progress-items/wood-red.svg"
                        : "/components/progress-items/wood-grey-small.svg"
                    }
                    alt="number"
                    fill
                    className="object-contain"
                  />

                  <span
                    className={cn(
                      "font-inter relative font-medium tracking-[1%] text-white",
                      "text-base leading-[135%]",
                    )}
                  >
                    {isActive ? `${points.value}%` : "?"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="h-[72px] w-max shrink-0"></div>
            );
          })}
        </div>
        <div className="bg-primitives-white_5 rounded-full px-[5px] py-[7px]">
          <div
            className={cn(
              "flex w-10 flex-col items-center",
              "relative h-max w-full",
            )}
          >
            {progressValues.map((points, index) => {
              return (
                <Fragment key={index}>
                  <div
                    className={cn(
                      "relative z-10 size-5 shrink-0 rounded-full",
                      points.active
                        ? "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]"
                        : "border-primitives-white_30 bg-primitives-white_30 border-2",
                    )}
                  />
                  {index !== progressValues.length - 1 && (
                    <div
                      id="segmentWidth"
                      className={cn(
                        "h-[46px] w-2 shrink-0 rounded-full",
                        "bg-none",
                      )}
                    />
                  )}
                </Fragment>
              );
            })}

            {
              <div
                className={cn(
                  "absolute left-1/2 h-2.5 w-2 -translate-x-1/2 rounded-full",
                  "top-0",
                  "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]",
                )}
                style={{
                  height: `${progressBarMobileWidth}px`,
                }}
              />
            }
          </div>
        </div>
        <div className="ml-3 flex w-full flex-col items-start justify-between">
          {progressValues.map((points, index) => {
            const isActive = points.active;
            return index % 2 !== 0 ? (
              <div className="flex h-auto w-[120.5px] shrink-0 items-center justify-start">
                <div
                  className={cn(
                    "relative flex h-[60px]! shrink-0 items-center justify-center gap-1.5",
                    "w-[60px]!",
                  )}
                  style={{
                    WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Image
                    src={
                      isActive
                        ? "/components/progress-items/wood-red.svg"
                        : "/components/progress-items/wood-grey-small.svg"
                    }
                    alt="number"
                    fill
                    className="object-contain"
                  />

                  <span
                    className={cn(
                      "font-inter relative font-medium tracking-[1%] text-white",
                      "text-base leading-[135%]",
                    )}
                  >
                    {isActive ? `${points.value}%` : "?"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="h-[72px] w-max shrink-0"></div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default PersonalProgress;
