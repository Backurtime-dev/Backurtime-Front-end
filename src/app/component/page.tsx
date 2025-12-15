import { FilterChips, Status } from "@/components/common";
import Radio from "@/components/common/Radio";
import {
  CardTag,
  ClanStatus,
  ClockTag,
  TotalSavedLabel,
} from "@/components/common/Tags";
import SvgClock from "@/components/icons/Clock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

export default function Page() {
  return (
    <div className="bg-dark mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 text-white">
      {/* Button */}
      <div className="">
        <span>Button</span>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span>Radio</span>
        <div className="grid grid-cols-1 gap-3">
          <Radio label="Default" />
          <Radio label="Active" checked />
          <Radio label="Active & Done" done />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4">
        <span>Tags</span>
        <div className="grid grid-cols-1 gap-3.5">
          <ClockTag icon="/icons/clock-3d.svg" time="10" />
          <ClanStatus icon="/icons/clan-green.svg" status="Lvl. 2" />
          <TotalSavedLabel label="Total saved:" amount={"€ 3 456"} />
          <CardTag icon={<SvgClock size={16} />} text="20s" />
          <CardTag icon={<SvgClock size={16} />} />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4">
        <span>Tags</span>
        <div className="grid grid-cols-1 gap-3.5">
          <FilterChips text="Filter" icon />
          <FilterChips text="Filter" dropdown />
          <FilterChips text="Filter" dropdown icon />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4">
        <span>Status</span>
        <div className="grid grid-cols-1 gap-3.5">
          <Status text="Completed" status={"completed"} />
          <Status
            text="Completed"
            status={"in-completed"}
            rounded
            type="gold"
          />
          <Status
            text="Completed"
            status={"in-completed"}
            rounded
            type="green"
          />
          <Status
            text="Completed"
            status={"in-completed"}
            rounded
            type="blue"
          />
          <Status
            text="Completed"
            status={"in-completed"}
            rounded
            type="silver"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span>ToolTips</span>
        <div className="flex items-center gap-3.5">
          <Tooltip>
            <TooltipTrigger className="w-max rounded-full px-3 py-1 text-xs text-white">
              iOS system
            </TooltipTrigger>
            <TooltipContent direction="top" className="text-dark-50 bg-white">
              iOS system
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="w-max rounded-full px-3 py-1 text-xs text-white">
              iOS system
            </TooltipTrigger>
            <TooltipContent direction="right" className="text-dark-50 bg-white">
              iOS system
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="w-max rounded-full px-3 py-1 text-xs text-white">
              iOS system
            </TooltipTrigger>
            <TooltipContent
              direction="bottom"
              className="text-dark-50 bg-white"
            >
              iOS system
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="w-max rounded-full px-3 py-1 text-xs text-white">
              iOS system
            </TooltipTrigger>
            <TooltipContent direction="left" className="text-dark-50 bg-white">
              iOS system
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
