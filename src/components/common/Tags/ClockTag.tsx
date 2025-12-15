import Image from "next/image";

const ClockTag = ({
  icon,
  time,
}: {
  icon?: string;
  time?: number | string;
}) => {
  return (
    <div className="bg-primitives-black_50 flex h-auto w-max items-center justify-center gap-px rounded-[29px] px-2 py-1.5">
      <Image
        src={icon || "/icons/clock-3d.svg"}
        width={20}
        height={20}
        alt={`statistic image `}
        className="drop-shadow-icon-sm h-5 w-5 object-contain"
      />
      <span className="font-inter text-sm leading-[140%]! font-medium tracking-[1%] text-white">
        {time}
      </span>
    </div>
  );
};

export default ClockTag;
