import { Button, FilterChips, Status } from "@/components/common";
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
import * as Icons from "../../components/icons";
import { FaqItem } from "@/components/common";

export default function Page() {
  const iconComponents = [
    "Adds",
    "Clan",
    "Clock",
    "Community",
    "Drawings",
    "Game",
    "Help",
    "Missions",
    "Offers",
    "Question",
    "Refresh",
    "Rewards",
    "Store",
    "Time",
    "More",
    "Top",
    "Team",
    "Spore",
    "Apple",
    "ArrowLeftOne",
    "Calender",
    "Camera",
    "Message",
    "ChevronDown",
    "Android",
    "CircleUser",
    "Desktop",
    "Eye",
    "Video",
    "Done",
    "Flag",
    "Search",
    "Info",
    "Notification",
    "Close",
    "Danger",
    "Plus",
    "Minus",
    "Send",
    "Heart",
    "Comment",
    "Edit",
    "Lock",
    "Smile",
    "ArrowRight",
    "Cart",
    "Maximize",
    "Minimize",
    "ArrowLeft",
    "ArrowTopRight",
    "Menu",
    "Trash",
    "DangerTwo",
    "Verified",
    "FaqCircle",
    "Key",
    "Link",
    "VerifiedStar",
    "Diamond",
    "Clear",
    "Crown",
    "Filters",
    "Flame",
    "LoadMore",
    "LogOut",
    "Pazzle",
    "PresentBox",
    "Reply",
    "Shield",
    "Telegram",
    "Rewards",
    "UnArchive",
  ];

  return (
    <div className="bg-dark mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 text-white">
      {/* Button */}
      <div className="">
        <span className="font-semibold">Button</span>
        <div className="grid grid-cols-1 gap-3">
          <Button
            className="group h-12 w-12"
            icon={<Icons.ArrowRight size={20} />}
            withBackgoundImage={true}
            backgroundImageUrl="/components/stone-rounded-btn.svg"
          />
        </div>
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
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-semibold">Icons</span>
        <div className="flex flex-wrap items-center gap-3">
          {iconComponents.map((iconName, index) => {
            const Icon = Icons[iconName as keyof typeof Icons];
            return (
              <div
                key={`${iconName}-${index}`} // ensures unique key
                className="flex flex-col items-center gap-1 text-xs"
              >
                <Icon />
                <span>{iconName}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span>FaqItem</span>
        <div>
          <FaqItem
            content={[
              {
                title: "What is the Spuffy Collection?",
                description:
                  "The Spuffy Collection is your personal gallery of unique and charming Spuffy characters you've discovered or earned on Backurtime. Each Spuffy has its own story and adds a special flair to your profile!",
              },
              {
                title: "What is the Spuffy Collection?",
                description:
                  "The Spuffy Collection is your personal gallery of unique and charming Spuffy characters you've discovered or earned on Backurtime. Each Spuffy has its own story and adds a special flair to your profile!",
              },
              {
                title: "What is the Spuffy Collection?",
                description:
                  "The Spuffy Collection is your personal gallery of unique and charming Spuffy characters you've discovered or earned on Backurtime. Each Spuffy has its own story and adds a special flair to your profile!",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
