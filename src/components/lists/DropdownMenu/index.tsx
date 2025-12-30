import React from "react";
import { Info } from "@/components/icons";
import { cn } from "@/utils";

interface MenuItem {
  label: string;
  icon?: React.ReactNode;
}

interface DropDownMenuProps {
  items: MenuItem[];
  className?: string;
  isGradient?: boolean;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  items,
  className = "",
  isGradient,
}) => {
  return (
    <div
      className={cn(
        `${isGradient ? "bg-[linear-gradient(177deg,rgba(17,17,17,0)_-64.05%,#3B1C07_104.56%)]" : "bg-primitives-black_80"} space-y-3 rounded-3xl border ${isGradient ? "border-[rgba(236,170,47,0.5)]" : "border-primitives-white_20"} no-scrollbar h-auto max-h-[180px] w-max overflow-y-auto p-4 ${isGradient ? "backdrop-blur-[2px]" : "backdrop-blur-[5px]"}`,
        !isGradient && "shadow-[0_0_80px_0_rgba(0,255,234,0.15)]",
        className,
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2.5">
          {item.icon || <Info size={20} color="white" />}
          <span className="font-inter text-base leading-[140%] font-normal text-white">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DropDownMenu;
