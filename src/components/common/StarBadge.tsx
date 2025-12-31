import { cn } from "@/utils";
import Image from "next/image";

type StarBadgeProps = {
  color?: "gold" | "green" | "blue" | "silver" | "cooper";
  mediaUrl?: string;
  className?: string;
  bgWhite?: boolean;
  imageClassName?: string;
  size?: "small" | "medium" | "large";
  mediaIcon?: React.ReactNode;
};

export default function StarBadge({
  color = "gold",
  mediaUrl,
  className,
  bgWhite = false,
  size = "large",
  imageClassName,
  mediaIcon,
}: StarBadgeProps) {
  return (
    <div
      className={cn(
        className,
        `drop-shadow-star-badge relative flex aspect-square shrink-0 items-center justify-center rounded-full`,
        size === "large" && "h-[42px] w-[38.33px] sm:h-[66px] sm:w-[62px]",
        size === "medium" && "h-[42px] w-[38.33px]",
        size === "small" && "h-[29px] w-[27px]",
      )}
    >
      <Image
        src={`/icons/star-badge/${color}.svg`}
        alt={color + "image"}
        fill
        className="shrink-0 object-contain"
      />
      <div
        className={cn(
          "absolute shrink-0 rounded-full",
          size === "large" &&
            "top-[inherit] bottom-[3.3px] left-[3px] h-[calc(100%-9.7px)] w-[calc(100%-6px)] sm:top-2.5 sm:bottom-[inherit] sm:left-[5.5px] sm:h-[calc(100%-15px)] sm:w-[calc(100%-11px)]",
          size === "medium" &&
            "bottom-[3.3px] left-[3px] h-[calc(100%-9.7px)] w-[calc(100%-6px)]",
          size === "small" &&
            "bottom-[2.2px] left-[2.1px] h-[calc(100%-6.7px)] w-[calc(100%-4.5px)]",
        )}
        style={{
          background: bgWhite
            ? "#fff"
            : "linear-gradient(180deg, #020D1A 0%, #08151D 100%),linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 77.6%)",
        }}
      />
      {mediaIcon ? (
        <div
          className={cn(
            imageClassName,
            `absolute flex items-center justify-center rounded-full`,
            size === "large" &&
              "top-[inherit] bottom-[3.3px] left-[3px] h-[calc(100%-9.7px)] w-[calc(100%-6px)] sm:top-2.5 sm:bottom-[inherit] sm:left-[5.5px] sm:h-[calc(100%-15px)] sm:w-[calc(100%-11px)]",
            size === "medium" &&
              "bottom-[3.3px] left-[3px] h-[calc(100%-9.7px)] w-[calc(100%-6px)]",
            size === "small" &&
              "bottom-[2.2px] left-[2.1px] h-[calc(100%-6.7px)] w-[calc(100%-4.5px)]",
          )}
        >
          {mediaIcon}
        </div>
      ) : (
        <Image
          id="img"
          src={mediaUrl || "/icons/badge/badge-placeholder.png"}
          alt="app logo"
          width={41}
          height={41}
          className={cn(
            imageClassName,
            `absolute rounded-full object-contain object-center`,
            size === "large" &&
              "top-[inherit] bottom-[3.3px] left-[3px] h-[calc(100%-9.7px)]! w-[calc(100%-6px)]! sm:top-2.5 sm:bottom-[inherit] sm:left-[5.5px] sm:h-[calc(100%-15px)]! sm:w-[calc(100%-11px)]!",
            size === "medium" &&
              "bottom-[3.3px] left-[3px] h-[calc(100%-9.7px)]! w-[calc(100%-6px)]!",
            size === "small" &&
              "bottom-[2.2px] left-[2.1px] h-[calc(100%-6.7px)]! w-[calc(100%-4.5px)]!",
          )}
        />
      )}
    </div>
  );
}
