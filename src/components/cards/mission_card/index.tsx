import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/utils";
import { Status } from "@/components/common";

interface MissionCardProps {
  icon: string;
  title?: string;
  progress: number;
  isCompleted: boolean;
  description?: string;
}

const MissionCard = ({
  icon,
  title,
  progress,
  isCompleted,
  description,
}: MissionCardProps) => {
  const isClaimable = progress === 1 && !isCompleted;

  return (
    <div
      className={cn(
        "bg-primitives-white_10 border-primitives-white_20 relative flex w-full flex-col items-start gap-2 overflow-hidden rounded-4xl border",
        "before:absolute before:top-1/2 before:left-1/2 before:z-2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[url(/components/mission-card-backdrop-shadow.svg)] before:bg-cover before:bg-center before:bg-no-repeat",
      )}
    >
      <div className="relative z-1 w-full px-6 pt-6 pb-4 md:px-[34px] md:pt-[34px] md:pb-6">
        <h5 className="font-inter mb-3 text-base leading-[135%]! font-medium sm:text-xl">
          {title}
        </h5>

        <p className="text-grey-light font-inter mb-6 text-sm leading-[140%]! font-normal sm:text-base">
          {description}
        </p>

        <div className="mb-6 w-full">
          <div className="mb-2 flex justify-between">
            <p className="font-inter text-grey-light text-sm leading-[140%]! font-normal sm:text-base">
              Progress
            </p>
            <span className="font-inter text-sm leading-[150%]! font-medium text-white sm:text-base">
              {progress}/1
            </span>
          </div>

          <Progress
            value={progress * 100}
            IndicatorColor="bg-[linear-gradient(90deg,_#FFFCA8_-0.05%,_#FDB836_31.2%,_#FDC966_75.92%,_#F1DC83_100.02%)]"
          />
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={icon}
              alt="reward"
              width={40}
              height={40}
              className="drop-shadow-icon-sm"
            />
            <span className="font-cinzel text-[14px] leading-[120%]! font-bold text-white sm:text-base">
              125
            </span>
          </div>

          <div className="flex flex-col items-end gap-2">
            {isClaimable && (
              <button className="relative flex min-h-12 w-full items-center justify-center px-12 py-[13px]">
                <span className="font-cinzel text-lg leading-[122%]! font-bold text-white">
                  Claim
                </span>

                <Image
                  src="/components/frame-left-btn.svg"
                  alt=""
                  width={20}
                  height={48}
                  className="absolute top-0 right-0 h-full w-5 object-cover object-right"
                />
                <Image
                  src="/components/frame-btn.svg"
                  alt=""
                  width={20}
                  height={48}
                  className="absolute top-0 left-0 h-full min-h-12 w-[calc(100%-20px)] object-cover object-left"
                />
              </button>
            )}

            {isCompleted && (
              <Status
                text="Completed"
                status="completed"
                rounded
                type="green"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
