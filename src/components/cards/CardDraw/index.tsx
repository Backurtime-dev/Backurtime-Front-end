import Image from "next/image";
import { Button, Status } from "@/components/common";
import { Drawings, Info } from "@/components/icons";
import CountdownTimer from "@/components/timer/Counter";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "@/utils";

type CardColor = "green" | "gold" | "violet";

type CardDrawProps = {
  title?: string;
  imageUrl: string;
  cardColor?: CardColor;
  pastDraws?: boolean;
  entryCount?: number;
};

const CardGlowMap: Record<CardColor, string> = {
  green:
    "bg-[linear-gradient(90deg,#C2E8FD_-0.05%,#67E0AC_31.2%,#138B57_75.92%,#C2E8FD_100.02%)]",
  gold: "bg-[linear-gradient(90deg,#FFFCA8_-0.05%,#FDB836_31.2%,#FDC966_75.92%,#F1DC83_100.02%)]",
  violet:
    "bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#909090_31.2%,#DDD_75.92%,#E3E3E3_100.02%)]",
};

const LAUNCH_DATE = new Date("2026-01-10T00:00:00");

const CardDraw = ({
  title,
  imageUrl,
  cardColor,
  pastDraws = false,
  entryCount,
}: CardDrawProps) => {
  const hasEntryCount = (entryCount ?? 0) > 0;

  return (
    <div className="bg-primitives-white_20 relative w-full rounded-[42px]">
      {/* Image / Header */}
      <div className="relative px-2 pt-2 sm:px-1 sm:pt-1">
        <div
          className={cn(
            "absolute top-[184px] left-1/2 h-[137px] w-[276px] -translate-x-1/2 -translate-y-1/2 rounded-[276px] opacity-[.4] filter-[blur(68.05000305175781px)]",
            cardColor && CardGlowMap[cardColor],
          )}
        />

        <div className="relative h-[180px] w-full overflow-hidden rounded-[38px] p-4 sm:h-60">
          <div
            className="absolute top-0 left-0 z-1 h-full w-full"
            style={{
              background:
                "linear-gradient(291deg, rgba(0, 0, 0, 0.00) 39.17%, rgba(0, 0, 0, 0.30) 81.86%)",
            }}
          />

          <Image
            src={imageUrl}
            alt="card-image-name"
            className="object-cover"
            fill
          />

          {!pastDraws && (
            <div className="relative z-1 flex w-full justify-end">
              <CountdownTimer
                targetDate={LAUNCH_DATE}
                variant="box"
                isMobile
                className="bg-primitives-black_80"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-4 sm:px-4">
        <h5
          className={cn(
            "font-cinzel text-base leading-[120%] font-bold tracking-[0.16px] text-white uppercase sm:text-[20px] sm:tracking-[0.2px]",
            pastDraws ? "mb-3" : "mb-2",
          )}
        >
          {title}
        </h5>

        {!pastDraws ? (
          <>
            <div className="mb-3 flex gap-2">
              <Status text="Weekly" small type="green" />
              <Status text="Torox" small type="gold" />
              <Status text="0/6 ent. per week" small type="silver" />
            </div>

            <p className="font-Inter mb-1 w-full overflow-hidden text-xs leading-[140%]! font-normal tracking-[0.12px] text-ellipsis whitespace-nowrap text-white sm:mb-3 sm:text-base sm:tracking-[0.16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <div className="mb-[18px] flex items-center">
              <Image
                src="/components/card-draw-clock-icon.svg"
                alt="reward"
                width={48}
                height={48}
                className="-mb-1.5"
              />
              <span className="font-cinzel text-base leading-[120%] font-bold tracking-[0.16px] text-white uppercase sm:text-[20px] sm:tracking-[0.2px]">
                125,000
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="border-primitives-white_10 xsm:px-3.5 xsm:py-3.5 mb-4 flex flex-wrap items-center gap-2.5 border-t border-b px-1 py-3 text-white">
              <Image
                src="/icons/gold-cup.svg"
                alt="cup-icon"
                width={20}
                height={20}
                className="shrink-0 object-contain"
              />

              <Avatar className="mr-1 ml-2 size-10 shrink-0 rounded-full sm:size-10!">
                <AvatarImage
                  src="/components/mock_user_avatar.png"
                  alt="profile-image"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <span className="font-inter text-grey-light text-[14px] leading-[140%] font-normal sm:text-base">
                username
              </span>

              <div className="bg-primitives-white_10 flex items-center gap-2 rounded-[8px] px-2 py-1">
                <Image
                  src="/icons/clan-lable/gold-1.svg"
                  alt="clan-image"
                  width={20}
                  height={20}
                  className="shrink-0 object-contain"
                />
                <p className="font-inter text-[14px] leading-[140%] font-normal text-white sm:text-base">
                  clanname
                </p>
              </div>
            </div>

            <div className="mb-[18px] flex justify-between">
              <p className="font-inter text-grey-light flex gap-1 text-[14px] leading-[150%] font-normal sm:text-base">
                Participants:
                <span className="leading-[150%] font-medium text-white">
                  15&nbsp;420
                </span>
              </p>

              <p className="font-inter text-grey-light flex gap-1 text-[14px] leading-[150%] font-normal sm:text-base">
                Used tickets:
                <span className="leading-[150%] font-medium text-white">2</span>
              </p>
            </div>
          </>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            title={
              pastDraws
                ? "Show Results"
                : hasEntryCount
                  ? "Play Now"
                  : "No Entries Available"
            }
            disabled={!hasEntryCount && !pastDraws}
          />
          {!pastDraws && (
            <>
              {hasEntryCount && (
                <div className="flex items-center justify-center gap-1">
                  <span className="font-inter text-base leading-[140%]! font-semibold text-white sm:text-[14px]">
                    3
                  </span>
                  <Drawings size={20} />
                </div>
              )}

              <Button
                className="border-primitives-white_10 bg-primitives-white_10 w-12 shrink-0 rounded-full! border p-0!"
                icon={<Info color="#FFFFFF" />}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDraw;
