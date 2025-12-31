import { Button } from "@/components/common";
import Image from "next/image";

interface ShopCard {
  imageUrl: string;
  title?: string;
  price?: string;
  isBorder?: boolean;
  iconSrc: string;
}

const ShopCard = ({ imageUrl, title, price, isBorder, iconSrc }: ShopCard) => {
  return (
    <div
      className={`bg-primitives-white_10 relative flex w-full flex-col items-start gap-4 overflow-hidden rounded-[42px] p-1 sm:pr-2`}
    >
      <Image
        src="/pages/profile/shadow-white.svg"
        fill
        alt="layer"
        className="object-fill"
      />

      <div className="bg-primitives-white_10 relative z-2 flex h-[214px] w-full items-center justify-center overflow-hidden rounded-[38px]">
        <Image
          src="/pages/profile/layer.png"
          fill
          alt="layer"
          className="object-cover opacity-10"
        />
        <div className="flex h-full w-full items-start justify-end pt-4 pr-4">
          <Image
            src={iconSrc}
            width={56}
            height={56}
            className="z-1 object-contain"
            alt="shop-card-icon"
          />
        </div>

        <Image
          src={imageUrl}
          alt="shop-card-image"
          fill
          className="relative object-contain"
        />
      </div>

      <div className="relative w-full px-4 pb-3">
        <div className="mb-2">
          <p className="font-cinzel text-base leading-[120%] font-bold tracking-[.16px] text-white uppercase sm:text-xl sm:tracking-[0.2px]">
            {title}
          </p>
        </div>

        <div className="mb-2">
          <p className="font-inter text-grey-light text-xs leading-[140%] font-normal tracking-[0.12px] sm:text-base sm:tracking-[0.16px]">
            {price}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/small-badge.svg"
            alt="reward"
            width={40}
            height={40}
            className="drop-shadow-icon-md2"
          />
          <span className="font-cinzel text-[14px] leading-[120%]! font-bold text-white sm:text-base">
            125
          </span>
        </div>
        <div>
          <Button title="buy now" variant="secondary" className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
