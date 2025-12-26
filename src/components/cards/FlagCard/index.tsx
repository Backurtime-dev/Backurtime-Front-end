import Image from "next/image";
import { cn } from "@/lib/utils";

type FlagType = "red" | "brown";

const FLAG_VARIANTS: Record<
  FlagType,
  {
    backgroundSrc: string;
    shadowClass: string;
  }
> = {
  red: {
    backgroundSrc: "/components/red-flag-image.png",
    shadowClass: "drop-shadow-flag-card-red",
  },
  brown: {
    backgroundSrc: "/components/brown-flag-image.png",
    shadowClass: "drop-shadow-flag-card-brown",
  },
};

type FlagCardProps = {
  title: string;
  className?: string;
  labelSrc: string;
  progressText?: string | number;
  variant?: FlagType;
};

function FlagCard({
  title,
  className,
  progressText,
  labelSrc,
  variant = "red",
}: FlagCardProps) {
  const { backgroundSrc, shadowClass } = FLAG_VARIANTS[variant];
  return (
    <div
      className={cn(
        "relative flex h-auto min-h-[290px] max-w-[343px] items-center justify-center sm:min-h-[373px] sm:max-w-[540px]",
        className,
      )}
    >
      {/* Background Image */}
      <Image
        src={backgroundSrc}
        alt={`${variant} flag background`}
        fill
        priority
        className={cn("object-contain", shadowClass)}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Clan Label */}
        <Image
          src={labelSrc}
          alt="Clan label"
          width={133}
          height={100}
          className="h-[51px] w-[68px] sm:h-[120px] sm:w-[100px]"
        />

        {/* Title */}
        <h3 className="font-cinzel my-3 text-2xl leading-[122%] font-bold text-white sm:my-[18px] sm:text-[32px]">
          {title}
        </h3>

        {/* Progress Bar */}
        <div className="relative h-full w-full">
          <Image
            src="/components/wooden-progress-bar.png"
            alt="Wooden progress bar"
            width={412}
            height={30}
            className="h-auto max-w-[231px] object-contain sm:min-h-[30px] sm:max-w-[412px]"
          />
        </div>

        {/* Progress Text */}
        <p className="font-inter mt-2 text-xs leading-[140%] text-white sm:text-base sm:tracking-[0.12px]">
          {progressText}% completed
        </p>
      </div>
    </div>
  );
}

export default FlagCard;
