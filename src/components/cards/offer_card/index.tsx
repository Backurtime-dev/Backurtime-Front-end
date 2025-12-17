import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Status } from "@/components/common";
import { cn } from "@/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Apple, Clock, Document } from "@/components/icons";

const OfferCard = ({
  image,
  title,
  progress,
  stats1,
  stats2,
}: {
  progress: number;
  image: string;
  title: string;
  stats1: number;
  stats2: number;
  stats3: string;
}) => {
  const platform = [
    {
      title: "",
      icon: <Apple size={16} />,
      content: "iOS system",
    },
    {
      title: "",
      icon: <Document size={16} />,
      content: "Complete survey",
    },
    {
      title: "20s",
      icon: <Clock size={16} />,
      content: "Estimated time",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-3 rounded-4xl bg-gray-600 p-2 text-white">
      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden rounded-4xl bg-cover! bg-no-repeat! p-[18px]",
        )}
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${image}) lightgray`,
        }}
      >
        <div className="flex h-auto w-full items-center justify-end gap-1.5">
          {platform.map((item, i) => (
            <Tooltip key={i}>
              <TooltipTrigger className="bg-primitives-black_50 hover:text-green-normal hover:[&>svg_path]:stroke-green-normal flex h-8 min-w-8 items-center gap-1 rounded-full px-2 py-1.5 text-white">
                {item.icon}
                {item.title && (
                  <span className="font-inter text-base leading-[140%]! font-normal tracking-[16.px]">
                    {item.title}
                  </span>
                )}
              </TooltipTrigger>
              <TooltipContent
                sideOffset={12}
                direction="top"
                className="w-max rounded-[12px]! px-3 py-1.5"
              >
                <span className="font-inter text-black-normal text-base leading-[140%]! font-normal tracking-[.16px]">
                  {item.content}
                </span>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="px-4 pt-2 pb-3">
        <h2 className="font-cinzel motion-safe mb-2 text-[20px] leading-[120%] font-bold tracking-[.2px] uppercase">
          {title}
        </h2>

        <div className="mb-3 flex w-full flex-col gap-2">
          <div className="font-inter text-grey-light flex justify-between text-base leading-[140%]! font-normal tracking-[.16px]">
            {progress < 100 ? "Progress" : "Received reward"}
            {progress < 100 && (
              <span className="text-[14px]! font-medium! tracking-[.14px]! text-white">
                {progress}%
              </span>
            )}
          </div>
          {progress < 100 && <Progress value={progress} />}
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/pages/offers/spores-gold-badge.svg"
                width={40}
                height={40}
                alt="Picture of the author"
              />
              <span className="font-cinzel text-base leading-[120%]! font-bold text-white">
                {stats1}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/pages/offers/spores-gray-badge.svg"
                width={40}
                height={40}
                alt="Picture of the author"
              />
              <span className="font-cinzel text-base leading-[120%]! font-bold text-white">
                {stats2}
              </span>
            </div>
          </div>

          {progress < 100 ? null : (
            <Status
              text="Your content"
              status={"completed"}
              className="ml-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
