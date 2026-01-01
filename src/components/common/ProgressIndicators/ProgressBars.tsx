import React, { Fragment } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import Badge from "../Badge";
import { cn } from "@/utils";

type ProgressBarVariant =
  | "wooden-silver"
  | "wooden-gold"
  | "stone"
  | "winProgress"
  | "stepProgress";

interface ProgressBarsProps {
  variant?: ProgressBarVariant;
  label?: string | number;
  value: number;
  counter?: number;
  stage?: number;
}

type ProgressStatus = "notStarted" | "inProgress" | "completed";

const ProgressBars: React.FC<ProgressBarsProps> = ({
  variant,
  value,
  label,
  counter,
  stage,
}) => {
  const getProgressStatus = (value: number): ProgressStatus => {
    if (value === 0) return "notStarted";
    if (value < 100) return "inProgress";
    return "completed";
  };

  const status = getProgressStatus(value);

  const renderProgressBar = () => {
    switch (variant) {
      case "wooden-silver":
        return (
          <div className="relative h-8 w-full">
            <div className="absolute top-0 left-0 h-full w-full bg-[url(/components/progress-items/p-silver-1.png)] bg-contain bg-left bg-no-repeat" />
            <div className="absolute top-0 left-1/2 h-full w-[calc(100%-40px)] -translate-x-1/2 bg-[url(/components/progress-items/p-silver-2.png)] bg-contain bg-left bg-repeat-x" />
            <div className="absolute top-0 right-0 h-full w-full bg-[url(/components/progress-items/p-silver-3.png)] bg-contain bg-right bg-no-repeat" />
            <div className="absolute top-[46%] left-1/2 h-[17.27px] w-[calc(100%-12.34px)] -translate-1/2 rounded-full bg-[radial-gradient(79.69%_60.47%_at_50%_50.53%,#AE6E4A_0%,#703416_100%)]" />
            <div className="absolute top-[46%] left-1/2 w-[calc(100%-12.34px)] -translate-1/2">
              <div
                className="rounded-full bg-[linear-gradient(180deg,#AE6E4A_-1.22%,#703416_91.01%)] px-0.5"
                style={{
                  width: `${value}%`,
                }}
              >
                <div className="shadow-black-wood h-[17.27px] rounded-full bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#919191_31.2%,#DDDDDD_75.92%,#E3E3E3_100.02%)]" />
              </div>
            </div>
          </div>
        );
      case "wooden-gold":
        return (
          <div className="relative h-8 w-full">
            <div className="absolute top-0 left-0 h-full w-full bg-[url(/components/progress-items/p-gold-1.png)] bg-contain bg-left bg-no-repeat" />
            <div className="absolute top-0 left-1/2 h-full w-[calc(100%-40px)] -translate-x-1/2 bg-[url(/components/progress-items/p-gold-2.png)] bg-contain bg-left bg-repeat-x" />
            <div className="absolute top-0 right-0 h-full w-full bg-[url(/components/progress-items/p-gold-3.png)] bg-contain bg-right bg-no-repeat" />
            <div className="absolute top-[46%] left-1/2 h-[17.27px] w-[calc(100%-12.34px)] -translate-1/2 rounded-full bg-[radial-gradient(79.69%_60.47%_at_50%_50.53%,#AE6E4A_0%,#703416_100%)]" />
            <div className="absolute top-[46%] left-1/2 w-[calc(100%-12.34px)] -translate-1/2">
              <div
                className="rounded-full bg-[linear-gradient(180deg,#AE6E4A_-1.22%,#703416_91.01%)] px-0.5"
                style={{
                  width: `${value}%`,
                }}
              >
                <div className="shadow-black-wood h-[17.27px] rounded-full bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]" />
              </div>
            </div>
          </div>
        );
      case "stone":
        return (
          <div className="relative h-8 w-full">
            <div className="absolute top-0 left-0 h-full w-full bg-[url(/components/progress-items/p-stone-1.png)] bg-contain bg-left bg-no-repeat" />
            <div className="absolute top-0 left-1/2 h-full w-[calc(100%-32px)] -translate-x-1/2 bg-[url(/components/progress-items/p-stone-2.png)] bg-contain bg-left bg-repeat-x" />
            <div className="absolute top-0 right-0 h-full w-full bg-[url(/components/progress-items/p-stone-3.png)] bg-contain bg-right bg-no-repeat" />
            <div className="absolute top-[46%] left-1/2 w-[calc(100%-12.34px)] -translate-1/2">
              <div
                className="rounded-full bg-[linear-gradient(180deg,#AE6E4A_-1.22%,#703416_91.01%)] px-0.5"
                style={{
                  width: `${value}%`,
                }}
              >
                <div className="shadow-black-wood h-[17.27px] rounded-full bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]" />
              </div>
            </div>
          </div>
        );
      case "winProgress":
        return (
          <div className="relative flex h-9 w-auto items-center justify-start">
            <Progress
              value={value}
              className={"bg-primitives-white_20! h-2.5!"}
              IndicatorColor="bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)]!"
            />
            <div
              className="absolute top-1/2 left-0 flex -translate-y-1/2 items-center justify-end"
              style={{
                width: `${value}%`,
              }}
            >
              <Badge
                color="green"
                type="icon"
                className="drop-shadow-light-white -mr-1 size-9! overflow-hidden!"
                imageClassName="p-0! top-[49%]! size-[70%]! [&>img]:p-1!"
                mediaUrl="/icons/cup-gold.png"
              />
            </div>
          </div>
        );
      case "stepProgress":
        return (
          <div className="bg-primitives-black_50 relative flex h-[38px] w-auto items-center gap-2 rounded-full p-1 backdrop-blur-[300px]">
            <div
              className="bg-primitives-white_20 flex min-w-[174px] items-center justify-start gap-2 rounded-full p-0.5"
              style={{
                width: `${value}%`,
              }}
            >
              <div className="bg-primitives-white_10 border-primitives-white_20 size-7 shrink-0 rounded-full border-[3.65px]">
                <span
                  className={cn(
                    "flex size-full items-center justify-center rounded-full",
                    "font-inter text-sm leading-[140%] font-medium tracking-[1%]",
                    status === "notStarted"
                      ? "text-white"
                      : "text-black-normal",
                    status === "notStarted"
                      ? "bg-primitives-grey_900"
                      : "bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#919191_31.2%,#DDDDDD_75.92%,#E3E3E3_100.02%)]",
                  )}
                >
                  {counter || 1}
                </span>
              </div>
              <span className="font-inter text-sm leading-[140%] font-medium tracking-[1%] text-white">
                {label}
              </span>
            </div>
            <div className="absolute top-1/2 right-[59.12px] z-1 flex -translate-y-1/2 items-center">
              <div className="relative h-full w-[30.88px] shrink-0">
                <Image
                  src="/icons/star-plus-gold.svg"
                  alt="star-plus-gold"
                  width={20}
                  height={20}
                  className="absolute top-1/2 left-0 z-1 -translate-y-1/2 object-contain"
                />
                <Image
                  src="/icons/clock-3d.svg"
                  alt="star-plus-gold"
                  width={22}
                  height={22}
                  className="drop-shadow-light-blue ml-auto size-[22.88px]! object-contain"
                />
              </div>
              <span className="font-inter text-[12px] leading-[140%] font-medium tracking-[1%] text-white">
                {stage || 10}
              </span>
            </div>
            <Image
              src={
                status === "completed"
                  ? "/icons/medallions-gold.svg"
                  : status === "inProgress"
                    ? "/icons/medallions-progress.svg"
                    : "/icons/medallions-grey.svg"
              }
              alt="star-plus-gold"
              width={32}
              height={32}
              className={cn(
                "ml-auto size-8! object-contain",

                status === "completed" ? "drop-shadow-medallions-gold" : "",
                status === "inProgress" ? "drop-shadow-medallions-green" : "",
              )}
            />
          </div>
        );
      default:
        return (
          <div className="relative h-auto w-auto pr-[18px]">
            <span className="text-black-normal font-inter absolute top-1/2 left-3 z-1 -translate-y-1/2 text-sm leading-[140%] font-medium tracking-[1%]">
              {label}
            </span>
            <Progress
              value={value}
              className={"bg-primitives-white_5! h-8"}
              IndicatorColor="bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)]!"
            />
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
              <Badge
                color="green"
                type="icon"
                className="drop-shadow-light-white size-[50px]! overflow-hidden!"
                imageClassName="p-0! top-[49%]! size-[70%]! [&>img]:p-1!"
                mediaUrl="/components/lamp.svg"
              />
            </div>
          </div>
        );
    }
  };

  return <Fragment>{renderProgressBar()}</Fragment>;
};

export default ProgressBars;
