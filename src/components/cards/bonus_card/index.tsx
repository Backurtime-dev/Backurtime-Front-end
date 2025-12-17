import Image from "next/image";

type BonusCardProps = {
  title: string;
  icon: string;
};

const BonusCard = ({ title, icon }: BonusCardProps) => {
  return (
    <div className="bg-primitives-black_50 relative w-max min-w-40 rounded-3xl px-12 py-4">
      <Image
        src={icon}
        alt="Bonus Card"
        width={64}
        height={64}
        className="drop-shadow-icon-md mx-auto mb-3 items-center justify-center"
      />
      <h5 className="font-cinzel text-center text-xl leading-[120%]! font-bold tracking-[.2px] text-white">
        {title}
      </h5>
    </div>
  );
};
export default BonusCard;
