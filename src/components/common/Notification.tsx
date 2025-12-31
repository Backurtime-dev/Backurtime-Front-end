import { DangerTwo } from "../icons";

type NotificationVariant = "default" | "withIcon";

interface NotificationProps {
  amount?: string;
  rank?: string;
  variant?: NotificationVariant;
}

const Notification = ({
  amount,
  variant = "withIcon",
  rank,
}: NotificationProps) => {
  return (
    <div
      className={`${
        variant === "withIcon" ? "flex items-start gap-3" : "flex items-center"
      } bg-primitives-black_80 w-full rounded-[12px] p-3 backdrop-blur-[2px]`}
    >
      {variant === "withIcon" && <DangerTwo size={20} />}
      <div>
        <p className="font-inter text-[14px] leading-[140%] font-semibold text-white">
          You've donated{" "}
          {amount && <span className="text-green-normal">{amount}</span>} You're{" "}
          <span>{rank}</span> among all users.
        </p>
      </div>
    </div>
  );
};

export default Notification;
