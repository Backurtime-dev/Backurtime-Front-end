import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Status } from "@/components/common";
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
  return (
    <div className="flex w-full flex-col gap-3 rounded-4xl bg-gray-600 p-2 text-white">
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt="Background"
          fill
          className="rounded-4xl object-cover object-center"
        />
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
        <div className="flex w-full items-center justify-between gap-4">
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
            <Status text="Your content" status={"completed"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
