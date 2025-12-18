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
import MissionCard from "@/components/cards/mission_card";
import OnboardingCard from "@/components/cards/onboarding_card";
import BonusCard from "@/components/cards/bonus_card";
import RankCard from "@/components/cards/RankCard";
import WoodenCard from "@/components/cards/WoodenCard";
import PrizeCard from "@/components/cards/PrizeCard";
import { SubscriptionCard } from "@/components/cards/SubscriptionSettingCard";

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
          <Button className="w-max" title="secondary" variant="primary" />
          <Button
            className="w-max"
            title="Access The Subscription "
            variant="secondary"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span>Radio</span>
        <div className="grid grid-cols-1 gap-3">
          <Radio label="Default" />
          <Radio label="Active" checked readOnly />
          <Radio label="Active & Done" checked readOnly done />
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
        <div className="grid grid-cols-1 gap-3.5">
          <Status small text="Completed" status={"completed"} />
          <Status
            small
            text="Completed"
            status={"in-completed"}
            rounded
            type="gold"
          />
          <Status
            small
            text="Completed"
            status={"in-completed"}
            rounded
            type="green"
          />
          <Status
            small
            text="Completed"
            status={"in-completed"}
            rounded
            type="blue"
          />
          <Status
            small
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
                key={`${iconName}-${index}`}
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
        <span className="font-bold">FaqItem</span>
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
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Misson Card</span>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MissionCard
            description="Visit the rewards section to claim your reward."
            icon="/icons/small-badge.svg"
            title="Visit rewards"
            progress={1}
            isCompleted={false}
          />
          <MissionCard
            description="Visit the rewards section to claim your reward."
            icon="/icons/small-badge.svg"
            title="Visit rewards"
            progress={0.5}
            isCompleted={false}
          />
          <MissionCard
            description="Visit the rewards section to claim your reward."
            icon="/icons/small-badge.svg"
            title="Visit rewards"
            progress={1}
            isCompleted={true}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Onboarding Card</span>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <OnboardingCard
            image="/components/onbording-card-image.png"
            title="Psychodelic"
            description="Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor."
            selected={false}
          />
          <OnboardingCard
            image="/components/onbording-card-image.png"
            title="Psychodelic"
            description="Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor."
            selected={true}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Bonus Card</span>
        <div className="w-full">
          <BonusCard title="Text" icon="/icons/bonus-card.svg" />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Rank Card</span>
        <div className="w-full">
          <RankCard
            clanname="Clanname"
            username="Username"
            level={10}
            rank="sliver"
            points={150}
            className="w-[273px]"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Wooden Card</span>
        <div className="flex w-full flex-col gap-3.5">
          <WoodenCard label="Total members" TotalMembers={20} />

          <span>mobile</span>
          <WoodenCard label="Total members" TotalMembers={20} small />
        </div>
      </div>
      <span className="font-bold">Prize Card</span>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PrizeCard
          imageUrl="/components/prize-card.png"
          campaignName="Cyber monday"
          productName="iPhone 16 Pro"
          rarity="Ultra Rare"
        />
        <PrizeCard
          imageUrl="/components/prize-card.png"
          campaignName="Cyber monday"
          productName="iPhone 16 Pro"
          rarity="Rare"
        />
        <PrizeCard
          imageUrl="/components/prize-card.png"
          campaignName="Cyber monday"
          productName="iPhone 16 Pro"
          rarity="Common"
        />
      </div>
      <span className="font-bold">Subscription Setting Card</span>
      <div className="grid w-full grid-cols-1 gap-4">
        <SubscriptionCard
          name="Netflix"
          logoUrl="/components/subcription-setting-icon.svg"
          isOwner={true}
        />
        <SubscriptionCard
          name="Netflix"
          logoUrl="/components/subcription-setting-icon.svg"
          isOwner={false}
        />
      </div>
    </div>
  );
}
