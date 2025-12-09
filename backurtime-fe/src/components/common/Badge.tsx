import Image from "next/image";

type BadgeProps = {
  color?: "gold" | "green" | "blue";
  type?: "image" | "icon" | "user";
  mediaUrl?: string;
};
export default function Badge({
  color = "gold",
  type = "image",
  mediaUrl,
}: BadgeProps) {
  return (
    <div
      className={`relative flex aspect-square ${type === "user" ? "h-[62px] w-[62px]" : "h-[58px] w-[58px]"} items-center justify-center rounded-full`}
    >
      <div className="shadow-light absolute h-[85%] w-[85%] rounded-full" />
      <Image
        src={
          type === "user"
            ? `/icons/badge/user-frame.svg`
            : `/icons/badge/${color}-${type}.svg`
        }
        alt={color + "image"}
        fill
      />
      <Image
        src={mediaUrl || "/icons/badge/badge-placeholder.png"}
        alt="app logo"
        width={41}
        height={41}
        className={`relative overflow-hidden rounded-full object-center ${type === "image" ? "p-0.5" : type === "user" ? "object-contain p-0" : "object-contain p-2"}`}
        style={{
          background:
            type === "user"
              ? "#fff"
              : "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.10) 77.6%), linear-gradient(180deg, #020D1A 0%, #08151D 100%)",
        }}
      />
      {type === "user" && (
        <div
          className="absolute right-0 bottom-0 size-5 rounded-full p-0.5"
          style={{
            background:
              " linear-gradient(90deg, #FFF8C1 -0.05%, #C2E8FD -0.04%, #909090 31.2%, #DDD 75.92%, #E3E3E3 100.02%)",
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
              10
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
