import { cn } from "@/utils";
import type { Group } from "../types";

interface GroupItemProps {
  group: Group;
  currentGroup: string;
  onGroupChange: (value: string) => void;
}

export default function GroupItem({
  group,
  currentGroup,
  onGroupChange,
}: GroupItemProps) {
  const { title, name } = group;

  const isActiveGroup = currentGroup === name;

  return (
    <button
      className={cn(
        "flex w-full cursor-pointer items-center justify-center rounded-2xl px-4 py-1.5 sm:py-[9px]",
        isActiveGroup &&
          "bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
      )}
      onClick={() => onGroupChange(name)}
    >
      <span className="font-inter text-[12px] leading-[140%] font-medium tracking-[1%] text-white sm:text-base">
        {title}
      </span>
    </button>
  );
}
