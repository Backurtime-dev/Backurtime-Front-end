import Image from "next/image";

const ClanStatus = ({
  icon,
  status,
}: {
  icon?: string;
  status?: number | string;
}) => {
  return (
    <div className="bg-primitives-black_50 flex h-auto w-max items-center justify-center gap-2 rounded-[48px] px-3 py-2.5">
      <Image
        src={icon || "/icons/clan-green.svg"}
        width={20}
        height={20}
        alt={`statistic image `}
        className="h-5 w-5 object-contain"
      />
      <p className="font-inter text-primitives-grey_200 text-base leading-[140%]! font-normal">
        Clan level:
        <span className="ml-2 font-semibold! text-white">{status}</span>
      </p>
    </div>
  );
};

export default ClanStatus;
