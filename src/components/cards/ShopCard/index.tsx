import { Button } from "@/components/common";
import { cn } from "@/utils";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

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
      className={cn(
        `relative flex w-full flex-col items-start gap-4 rounded-[42px]`,
        isBorder
          ? "min-w-[357px] px-6 pt-6 pb-[34px]"
          : "bg-primitives-white_10 overflow-hidden p-1 sm:pr-2",
      )}
    >
      {isBorder && (
        <div className="absolute inset-1/2 size-[calc(100%-14px)] -translate-1/2 rounded-3xl bg-[#101922]" />
      )}
      {isBorder && (
        <Fragment>
          {/* top border */}
          {/* <Image
            src={"/components/shop-card/top.svg"}
            alt="top border"
            width={200}
            height={22}
            className="absolute top-0 left-1/2 h-auto! w-[calc(100%-32px)]! -translate-x-1/2 object-cover object-top sm:w-[calc(100%-54px)]!"
            priority
          /> */}
          <div
            className={cn(
              "absolute top-0 left-1/2 h-[22px]! w-[calc(100%-32px)]! -translate-x-1/2 sm:w-[calc(100%-54px)]!",
              "bg-[url(/components/shop-card/top.svg)]",
              "bg-contain bg-repeat-x",
            )}
          />
          {/* right border */}
          <Image
            src={"/components/shop-card/right.svg"}
            alt="right border"
            width={34}
            height={200}
            className="absolute top-0 right-0 h-full w-auto! object-cover object-right"
            priority
          />

          {/* bottom border */}
          <Image
            src={"/components/shop-card/bottom.svg"}
            alt="bottom border"
            width={200}
            height={19}
            className="absolute bottom-0 left-1/2 h-auto! w-[calc(100%-32px)]! -translate-x-1/2 object-cover object-bottom sm:w-[calc(100%-54px)]!"
            priority
          />

          {/* left border */}
          <Image
            src={"/components/shop-card/left.svg"}
            alt="left border"
            width={34}
            height={200}
            className="absolute top-0 left-0 h-full w-auto! object-cover object-left"
            priority
          />
        </Fragment>
      )}
      {/*  */}
      {!isBorder && (
        <Image
          src="/pages/profile/shadow-white.svg"
          fill
          alt="layer"
          className="object-fill"
        />
      )}
      <div
        className={cn(
          "bg-primitives-white_10 relative z-2 flex w-full items-center justify-center overflow-hidden",
          isBorder ? "h-40 sm:h-[188px]" : "h-[214px] rounded-[38px]",
        )}
      >
        {isBorder && (
          <Fragment>
            <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(180deg,#252D43_0%,#404349_100%)]" />
            <div className="absolute -top-5 -left-5 z-2 size-10! rounded-full bg-[#101922]" />
            <div className="absolute -top-5 -right-5 z-2 size-10! rounded-full bg-[#101922]" />
            <div className="absolute -bottom-5 -left-5 z-2 size-10! rounded-full bg-[#101922]" />
            <div className="absolute -right-5 -bottom-5 z-2 size-10! rounded-full bg-[#101922]" />
          </Fragment>
        )}
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
          className="z-1 object-contain"
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
