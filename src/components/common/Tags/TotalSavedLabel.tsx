import { cn } from "@/utils";
import Image from "next/image";

const TotalSavedLabel = ({
  label,
  amount,
}: {
  label?: string;
  amount?: number | string;
}) => {
  return (
    <div
      className={cn(
        "shadow-button h-auto w-max shrink-0 rounded-[20px] p-px",
        "bg-[linear-gradient(97.44deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
      )}
    >
      <div className="bg-dark-50 flex h-auto w-full items-center justify-center gap-1.5 rounded-[20px] border border-solid border-transparent px-[18px] py-3">
        <Image
          src="/icons/bag-gold.svg"
          alt="bag gold"
          width={32}
          height={32}
          className="drop-shadow-icon-sm"
        />
        <span className="font-inter text-grey-light text-base leading-[140%]! font-normal">
          {label}
        </span>
        <span className="font-inter text-green-normal ml-1 text-lg leading-[140%]! font-semibold tracking-[1%]">
          {amount}
        </span>
      </div>
    </div>
  );
};

export default TotalSavedLabel;
