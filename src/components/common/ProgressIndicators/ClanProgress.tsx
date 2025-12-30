import { cn } from "@/utils";
import Image from "next/image";
import React, { Fragment } from "react";

type Items = {
  value: string | number;
  earn: boolean;
};

interface TypesProps {
  activePoints: number;
  totalPoints: number;
  earningValues: Items[];
}

const ClanProgress = ({
  activePoints,
  totalPoints,
  earningValues,
}: TypesProps) => {
  const pointsToShow = Array.from(
    { length: totalPoints - 1 },
    (_, index) => index + 2,
  );
  const segmentWidth = 147;
  const segmentWidthMobile = 8;

  const segmentsCovered = activePoints - 2;

  return (
    <Fragment>
      <div
        className={cn(
          "max-sm:hidden",
          "h-max overflow-x-auto p-[34px] pr-0!",
          "no-scrollbar rounded-3xl bg-cover bg-center bg-no-repeat",
          "bg-[url(/components/progress-items/clan-web.png)]",
        )}
      >
        <div className="w-[1669px]">
          <div className="mb-[26.69px] flex w-full items-center justify-between">
            {earningValues.map((item: Items, index: number) => {
              const isActive = index <= segmentsCovered;
              return index % 2 === 0 ? (
                <div className="flex h-auto w-44 shrink-0 items-center justify-center">
                  <div
                    className={cn(
                      "relative flex h-[60px]! shrink-0 items-center justify-center gap-2",
                      item.earn ? "w-[212px]!" : "w-[60px]!",
                    )}
                    style={{
                      WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Image
                      src={
                        isActive
                          ? item.earn
                            ? "/components/progress-items/wood-web.svg"
                            : "/components/progress-items/wood-small.svg"
                          : "/components/progress-items/wood-grey-small.svg"
                      }
                      alt="number"
                      fill
                      className="object-contain"
                    />
                    {isActive && item.earn && (
                      <Image
                        src="/icons/gold-star.svg"
                        alt="number"
                        width={20}
                        height={20}
                        className="drop-shadow-icon-sm size-5! object-contain"
                      />
                    )}
                    <span className="font-inter relative text-[12px] font-medium tracking-[1%] text-white sm:text-sm">
                      {isActive
                        ? item.earn
                          ? `+ ${item.value}% earnings boost`
                          : `${item.value}%`
                        : "?"}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-44 shrink-0"></div>
              );
            })}
          </div>
          <div className="bg-primitives-white_5 rounded-br-0! rounded-tr-0! w-full rounded-tl-full rounded-bl-full px-4">
            <div
              className={cn(
                "flex w-full items-center",
                "relative h-[42px] w-full",
              )}
            >
              <div className="h-2.5 w-[51.5px] rounded-tl-full rounded-bl-full bg-[#FFFCA8]" />

              {pointsToShow.map((pointNumber, index) => {
                return (
                  <React.Fragment key={pointNumber}>
                    {/* Point circle */}
                    <div
                      className={cn(
                        "relative z-10 size-[34px] shrink-0 rounded-full border-2",
                        "bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#919191_31.2%,#DDDDDD_75.92%,#E3E3E3_100.02%)]",
                        "border-transparent",
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-full w-full items-center justify-center rounded-full",
                          "font-inter text-sm leading-[140%] font-medium tracking-[1%]",
                          "bg-[linear-gradient(180deg,#020D1A_0%,#08151D_100%),linear-gradient(180deg,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_77.6%)] text-white",
                        )}
                      >
                        {pointNumber}
                      </div>
                    </div>
                    {index < pointsToShow.length - 1 && (
                      <div
                        id="segmentWidth"
                        className={cn(
                          "h-2.5 shrink-0",
                          index < segmentsCovered
                            ? "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]"
                            : "bg-none",
                        )}
                        style={{ width: `${segmentWidth}px` }}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="mt-[26.69px] flex w-full shrink-0 items-center justify-between">
            {earningValues.map((item: Items, index: number) => {
              const isActive = index <= segmentsCovered;
              return index % 2 !== 0 ? (
                <div className="flex h-auto w-44 shrink-0 items-center justify-center">
                  <div
                    className={cn(
                      "relative flex h-[60px]! shrink-0 items-center justify-center gap-2",
                      item.earn ? "w-[212px]!" : "w-[60px]!",
                    )}
                    style={{
                      WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Image
                      src={
                        isActive
                          ? item.earn
                            ? "/components/progress-items/wood-web.svg"
                            : "/components/progress-items/wood-small.svg"
                          : "/components/progress-items/wood-grey-small.svg"
                      }
                      alt="number"
                      fill
                      className="object-contain"
                    />
                    {isActive && item.earn && (
                      <Image
                        src="/icons/gold-star.svg"
                        alt="number"
                        width={20}
                        height={20}
                        className="drop-shadow-icon-sm size-5! object-contain"
                      />
                    )}
                    <span className="font-inter relative text-[12px] font-medium tracking-[1%] text-white sm:text-sm">
                      {isActive
                        ? item.earn
                          ? `+ ${item.value}% earnings boost`
                          : `${item.value}%`
                        : "?"}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-44 shrink-0"></div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "sm:hidden",
          "flex items-center",
          "h-max w-max rounded-3xl p-4",
          "bg-cover bg-center bg-no-repeat",
          "bg-[url(/components/progress-items/clan-web.png)]",
        )}
      >
        <div className="mr-3 flex w-full flex-col items-end justify-between">
          {earningValues.map((item: Items, index: number) => {
            const isActive = index <= segmentsCovered;
            return index % 2 === 0 ? (
              <div className="flex h-auto w-[120.5px] shrink-0 items-center justify-end">
                <div
                  className={cn(
                    "relative flex h-[60px]! shrink-0 items-center justify-center gap-1.5",
                    item.earn ? "w-[120px]!" : "w-[60px]!",
                  )}
                  style={{
                    WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Image
                    src={
                      isActive
                        ? item.earn
                          ? "/components/progress-items/wood-mobile.svg"
                          : "/components/progress-items/wood-small.svg"
                        : "/components/progress-items/wood-grey-small.svg"
                    }
                    alt="number"
                    fill
                    className="object-contain"
                  />
                  {isActive && item.earn && (
                    <Image
                      src="/icons/gold-star.svg"
                      alt="number"
                      width={12}
                      height={12}
                      className="drop-shadow-icon-sm size-3! object-contain"
                    />
                  )}
                  <span
                    className={cn(
                      "font-inter relative font-medium tracking-[1%] text-white",
                      isActive && item.earn
                        ? "w-[70px] text-[10px] leading-[140%]"
                        : "text-base leading-[135%]",
                    )}
                  >
                    {isActive
                      ? item.earn
                        ? `+ ${item.value}% earnings boost`
                        : `${item.value}%`
                      : "?"}
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
            {pointsToShow.map((pointNumber, index) => {
              return (
                <React.Fragment key={pointNumber}>
                  {/* Point circle */}
                  <div
                    className={cn(
                      "relative z-10 size-[30px] shrink-0 rounded-full border-2",
                      "bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#919191_31.2%,#DDDDDD_75.92%,#E3E3E3_100.02%)]",
                      "border-transparent",
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-full w-full items-center justify-center rounded-full",
                        "font-inter text-[12px] leading-normal font-medium tracking-[1%]",
                        "bg-[linear-gradient(180deg,#020D1A_0%,#08151D_100%),linear-gradient(180deg,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_77.6%)] text-white",
                      )}
                    >
                      {pointNumber}
                    </div>
                  </div>
                  {index < pointsToShow.length - 1 && (
                    <div
                      id="segmentWidth"
                      className={cn(
                        "min-h-9 shrink-0",
                        index < segmentsCovered
                          ? "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]"
                          : "bg-none",
                      )}
                      style={{ width: `${segmentWidthMobile}px` }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="ml-3 flex w-full flex-col items-start justify-between">
          {earningValues.map((item: Items, index: number) => {
            const isActive = index <= segmentsCovered;
            return index % 2 !== 0 ? (
              <div className="flex h-auto w-[120.5px] shrink-0 items-center justify-start">
                <div
                  className={cn(
                    "relative flex h-[60px]! shrink-0 items-center justify-center gap-1.5",
                    item.earn ? "w-[120px]!" : "w-[60px]!",
                  )}
                  style={{
                    WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Image
                    src={
                      isActive
                        ? item.earn
                          ? "/components/progress-items/wood-mobile.svg"
                          : "/components/progress-items/wood-small.svg"
                        : "/components/progress-items/wood-grey-small.svg"
                    }
                    alt="number"
                    fill
                    className="object-contain"
                  />
                  {isActive && item.earn && (
                    <Image
                      src="/icons/gold-star.svg"
                      alt="number"
                      width={12}
                      height={12}
                      className="drop-shadow-icon-sm size-3! object-contain"
                    />
                  )}
                  <span
                    className={cn(
                      "font-inter relative font-medium tracking-[1%] text-white",
                      isActive && item.earn
                        ? "w-[70px] text-[10px] leading-[140%]"
                        : "text-base leading-[135%]",
                    )}
                  >
                    {isActive
                      ? item.earn
                        ? `+ ${item.value}% earnings boost`
                        : `${item.value}%`
                      : "?"}
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

export default ClanProgress;
