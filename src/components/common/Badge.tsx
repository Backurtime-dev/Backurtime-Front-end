import { cn } from "@/utils";
import Image from "next/image";

type BadgeProps = {
  color?: "gold" | "green" | "blue" | "silver" | "cuper";
  type?: "image" | "icon" | "user";
  mediaUrl?: string;
  className?: string;
  level?: number | string;
  crown?: boolean;
};

export default function Badge({
  color = "gold",
  type = "image",
  mediaUrl,
  className,
  level,
  crown = false,
}: BadgeProps) {
  return (
    <div
      className={`${className} relative flex aspect-square h-[58px] w-[58px] items-center justify-center rounded-full`}
    >
      <div className="shadow-light absolute h-[85%] w-[85%] rounded-full" />
      <Image
        src={
          type === "user"
            ? `/icons/badge/${color}-${type}.svg`
            : `/icons/badge/${color}-${type}.svg`
        }
        alt={color + "image"}
        fill
        className="object-contain"
      />
      {crown && (
        <Image
          src={"/icons/crown.svg"}
          alt={"crown"}
          width={16}
          height={16}
          className="absolute top-[9px] left-2 -rotate-45 object-contain"
        />
      )}
      <div
        className={cn(
          "flex size-[68%] items-center justify-center rounded-full p-px",
          "absolute top-1/2 left-1/2 -translate-1/2",
          crown &&
            "bg-[linear-gradient(180deg,#EEAF3E_0%,#BA6909_50%,#FFEAC8_75%,#FCC864_100%)] bg-cover bg-center bg-no-repeat",
        )}
      >
        <Image
          id="user-avatar"
          src={mediaUrl || "/icons/badge/badge-placeholder.png"}
          alt="app logo"
          width={41}
          height={41}
          className={`size-fill! relative z-2 h-full! w-full! overflow-hidden rounded-full object-center ${type === "image" ? "p-0.5" : type === "user" ? "object-contain object-bottom p-0" : "object-contain p-2"}`}
          style={{
            background:
              type === "user"
                ? "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.20) 77.6%), #FFF"
                : "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.10) 77.6%), linear-gradient(180deg, #020D1A 0%, #08151D 100%)",
          }}
        />
      </div>

      {type === "user" && (
        <div
          className="absolute right-0 bottom-0 hidden size-5 rounded-full p-0.5 md:block"
          style={{
            background:
              color === "silver"
                ? "linear-gradient(90deg, #FFF8C1 -0.05%, #C2E8FD -0.04%, #909090 31.2%, #DDD 75.92%, #E3E3E3 100.02%)"
                : color === "gold"
                  ? "linear-gradient(90deg, #FFFCA8 -0.05%, #FDB836 31.2%, #FDC966 75.92%, #F1DC83 100.02%)"
                  : color === "green"
                    ? "linear-gradient(90deg, #C2E8FD -0.05%, #67E0AC 31.2%, #138B57 75.92%, #C2E8FD 100.02%)"
                    : color === "cuper"
                      ? "linear-gradient(90deg, #ECAA2F -0.05%, #A13114 31.2%, #FFA060 75.92%, #D9A930 100.02%)"
                      : "linear-gradient(90deg, #FFFCA8 -0.05%, #FDB836 31.2%, #FDC966 75.92%, #F1DC83 100.02%)",
          }}
        >
          <div
            className="flex h-full w-full items-center justify-center rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.10) 77.6%), linear-gradient(180deg, #020D1A 0%, #08151D 100%)",
            }}
          >
            <span className="font-inter text-center text-[8px] leading-2 font-medium tracking-[.08px] text-white">
              {level || 0}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
