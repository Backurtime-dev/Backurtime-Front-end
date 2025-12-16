import { cn } from "@/utils";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
const PaperCard = ({
  image,
  number,
  text,
}: {
  image?: string;
  number?: string | number;
  text?: string;
}) => {
  const topRef = useRef<HTMLImageElement>(null);
  const bottomRef = useRef<HTMLImageElement>(null);
  const [topHeight, setTopHeight] = useState(0);
  const [bottomHeight, setBottomHeight] = useState(0);

  useLayoutEffect(() => {
    const update = () => {
      setTopHeight(topRef.current?.offsetHeight ?? 0);
      setBottomHeight(bottomRef.current?.offsetHeight ?? 0);
    };

    update();

    const elements = document.querySelectorAll(".main-content");
    const observer = new ResizeObserver(update);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "text-black-normal relative flex h-auto w-full items-start gap-[11px] self-stretch overflow-hidden bg-no-repeat px-4 py-[17px] md:gap-4 md:p-6 lg:gap-6 lg:p-8",
      )}
    >
      {/* TOP */}
      <Image
        ref={topRef}
        src="/components/paper-card/paper-top.svg"
        alt="top"
        fill
        className="pointer-events-none absolute top-0 left-0 h-auto! max-h-[50px]! w-full object-cover"
      />
      {/* CENTER */}
      <div
        className="pointer-events-none absolute left-0 min-h-8 w-full bg-[url(/components/paper-card/paper-center.svg)] bg-size-[100%_auto] bg-top bg-repeat-y"
        style={{
          top: topHeight + "px",
          bottom: bottomHeight + "px",
        }}
      />
      {/* BOTTOM */}
      <Image
        ref={bottomRef}
        src="/components/paper-card/paper-bottom.svg"
        alt="bottom"
        fill
        className="pointer-events-none absolute top-[inherit]! bottom-0 left-0 h-auto! max-h-[50px]! w-full object-cover"
      />
      <div className="relative z-1 flex h-8 w-8 shrink-0 items-center justify-center bg-[url(/components/paper-card-bg-icon.svg)] bg-cover! bg-center bg-no-repeat p-1 sm:h-12 sm:w-12">
        <Image
          src={image || "/icons/badge/badge-placeholder.png"}
          alt="badge"
          width={40}
          height={40}
          className="h-[26px] w-[26px] object-contain sm:h-10 sm:w-10"
        />
      </div>
      <div className="relative z-1 flex w-full flex-col gap-1">
        <h4 className="font-cinzel text-black-normal text-[20px] leading-[120%]! font-bold tracking-[1%] uppercase sm:text-2xl sm:tracking-[.24px]">
          50000
        </h4>
        <p className="font-inter text-primitives-grey_900 text-[14px] leading-[140%]! font-normal sm:text-base">
          Total earned
        </p>
      </div>
    </div>
  );
};

export default PaperCard;
