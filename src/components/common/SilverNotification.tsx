import Button from "./Button";
import { DangerTwo } from "../icons";
import { cn } from "@/lib/utils";

type SilverNotificationProps = {
  title?: string;
  description?: string;
  isMobile?: boolean;
};

const SilverNotification = ({
  title,
  description,
  isMobile = false,
}: SilverNotificationProps) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col gap-2 overflow-hidden rounded-3xl bg-[linear-gradient(90deg,rgba(255,248,193,0.30)_-0.05%,rgba(194,232,253,0.30)_-0.04%,rgba(144,144,144,0.30)_31.2%,rgba(221,221,221,0.30)_75.92%,rgba(227,227,227,0.30)_100.02%)] px-3 py-3 backdrop-blur-[12.5px] sm:flex-row sm:gap-3.5",
        isMobile ? "sm:px-2 sm:py-2.5" : "sm:px-4 sm:py-4",
      )}
    >
      <Button
        className={cn(
          isMobile
            ? "h-10 min-h-10! w-10 min-w-10!"
            : "h-10 w-10 sm:h-12 sm:w-12",
          "shrink-0 bg-contain! p-0!",
        )}
        icon={<DangerTwo size={20} color="#fff" />}
        withBackgoundImage={true}
        backgroundImageUrl="/components/stone-rounded-btn.svg"
      />
      <div className="flex items-center">
        <p className="font-inter text-[14px] leading-[140%] font-normal text-white sm:text-base">
          <span className="leading-[150%] font-semibold text-white sm:leading-[140%]">
            {title}
          </span>{" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default SilverNotification;
