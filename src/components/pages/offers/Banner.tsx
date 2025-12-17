import React from "react";
import Image from "next/image";
import { cn } from "@/utils";

const Banner = () => {
  return (
    <div
      className={cn(
        "bg-blend-plus-lighter relative flex flex-col items-center justify-center gap-2.5 self-stretch rounded-[48px] px-5 pt-5 pb-0 bg-blend-normal sm:min-h-[268px] sm:gap-3 sm:px-5 sm:pt-8 sm:pb-0 lg:gap-6 xl:py-8",
        "max-sm:bg-[url(/pages/offers/banner-bg-mb.png)]!",
      )}
      style={{
        backgroundImage: "url(/components/banner.png)",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="font-cinzel text-shadow-green relative z-2 text-center text-[32px] leading-[122%]! font-bold text-white md:text-4xl lg:text-5xl xl:text-[50px]">
        Every action gives you
        <br />
        <span className="flex flex-wrap items-center justify-center">
          a bit of
          <span>
            <Image
              src="/pages/offers/time-badge.svg"
              alt="character"
              width={80}
              height={80}
              className="h-10 w-10 object-contain drop-shadow-white md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
            />
          </span>
          Time
        </span>
      </h1>
      <p className="font-inter relative z-2 text-center text-sm leading-[140%]! font-normal text-white sm:text-base sm:leading-[150%]!">
        It’s not the offer that matters. It’s what you do with it afterward
      </p>
      <Image
        src="/pages/offers/banner-character.png"
        alt="character"
        width={247}
        height={260}
        className="drop-shadow-offer-banner-img relative -bottom-[31px]! z-1 mx-auto -mb-3 h-auto! w-[111px]! object-cover max-xl:inset-0 sm:-mb-[31px] sm:w-[247px]! xl:absolute xl:-right-[26px]! xl:mb-0"
      />

      <Image
        src="/pages/offers/green-shadow-bottom-right.png"
        alt="shadow"
        fill
        className="top-[inherit]! left-[inherit]! w-auto! rounded-br-[48px] max-sm:hidden xl:object-contain"
      />
      <Image
        src="/pages/offers/green-shadow-top-left.png"
        alt="shadow"
        fill
        className="right-[inherit]! bottom-[inherit]! w-auto! rounded-tl-[48px] max-sm:hidden xl:object-contain"
      />
    </div>
  );
};

export default Banner;
