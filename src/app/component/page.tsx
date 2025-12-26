"use client";

import {
  Button,
  FilterChips,
  PriceCounter,
  ShareSubscriptItem,
  StarBadge,
  Status,
} from "@/components/common";
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
import React, { useState } from "react";
import * as Icons from "../../components/icons";
import { FaqItem } from "@/components/common";
import MissionCard from "@/components/cards/mission_card";
import OnboardingCard from "@/components/cards/onboarding_card";
import BonusCard from "@/components/cards/bonus_card";
import RankCard from "@/components/cards/RankCard";
import WoodenCard from "@/components/cards/WoodenCard";
import LiveDonateCard from "@/components/cards/LiveDonateCard";
import PrizeCard from "@/components/cards/PrizeCard";
import SubscriptionSettingCard from "@/components/cards/SubscriptionSettingCard";
import SubscriptionPaymentCard from "@/components/cards/SubscriptionPaymentCard";
import PaymentMethodCard from "@/components/cards/PaymentMethodCard";
import { DataTable, TableData } from "@/components/common/Tables";
import SvgWallet from "@/components/icons/Wallet";
import CurrentPerkCard from "@/components/cards/CurrentPerkCard";
import CardCart from "@/components/cards/CardCart";
import HorizontalCard from "@/components/cards/HorizontalCard";
import SubscriptionCard from "@/components/cards/SubscriptionCard";
import PaymentMethodAddDetailsCard from "@/components/cards/PaymentMethodAddDetailsCard";
import PaymentMethodSelectedCard from "@/components/cards/PaymentMethodSelectedCard";
import SelectPlanCard from "@/components/cards/SelectPlanCard";
<<<<<<< HEAD
import GiftCard from "@/components/cards/GiftCard";
import AwardCard from "@/components/cards/AwardCard";
=======
import ServeyCard from "@/components/cards/ServeyCard";
import BuyMoreCard from "@/components/cards/BuyMoreCard";
import MysteryCard from "@/components/cards/MysteryCard";
>>>>>>> 3ca0477a134d110edfa889f35e8f87791b31eace

export default function Page() {
  const [selectedId, setSelectedId] = useState<string | null>("visa-hdfc");

  const paymentMethods = [
    {
      id: "time-balance-1",
      type: "balance" as const,
      bankName: "Time balance",
      insufficientBalance: true,
    },
    {
      id: "axis-1",
      type: "card" as const,
      bankName: "Axis Bank",
      bankIconUrl: "/icons/master-icon.svg",
      cardNumber: "4578457845784578",
    },
    {
      id: "visa-hdfc",
      type: "card" as const,
      bankName: "VISA HDFC Bank",
      bankIconUrl: "/icons/visa-icon.svg",
      cardNumber: "4578457845784578",
    },
    {
      id: "time-balance-2",
      type: "balance" as const,
      bankName: "Time balance",
      insufficientBalance: false,
    },
    {
      id: "axis-2",
      type: "card" as const,
      bankName: "Axis Bank",
      bankIconUrl: "/icons/master-icon.svg",
      cardNumber: "4578457845784578",
    },
    {
      id: "visa-hdfc-2",
      type: "card" as const,
      bankName: "VISA HDFC Bank",
      bankIconUrl: "/icons/visa-icon.svg",
      cardNumber: "4578457845784578",
    },
  ];

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

  const paymentHistoryData: TableData = {
    id: "payment-history",
    type: "payment-history",
    title: "Payments history",
    columns: [
      { header: "Name", accessorKey: "name", align: "center" },
      { header: "Email", accessorKey: "email" },
      { header: "Method", accessorKey: "method" },
      { header: "Amount", accessorKey: "amount" },
      { header: "Date", accessorKey: "date" },
    ],
    rows: [
      {
        id: "player-1",
        type: "payment-history",
        cells: {
          name: { value: "name" },
          email: { value: "Alex Champion" },
          method: { value: "Time balance", icon: <SvgWallet size={20} /> },
          amount: { value: "name 2" },
          date: { value: "name 4" },
        },
      },
    ],
  };
  const leaderboardData: TableData = {
    id: "leaderboard",
    type: "leaderboard",
    title: "Leaderboard",
    columns: [
      { header: "User ID", accessorKey: "userId" },
      { header: "Profile", accessorKey: "profile" },
      { header: "Other Clans", accessorKey: "otherClans" },
      { header: "Strategist", accessorKey: "strategist" },
      { header: "Tag", accessorKey: "tag" },
    ],
    rows: [
      {
        id: "player-1",
        type: "leaderboard",
        cells: {
          userId: { value: 4 },
          profile: { value: "Alex Champion" },
          strategist: { value: "Strategist" },
          tag: { value: 123 },
        },
      },
      {
        id: "player-2",
        type: "leaderboard",
        cells: {
          userId: { value: 4 },
          profile: {
            value: "Alex ",
            profileImage: "/components/mock_user_avatar.png",
          },
          otherClans: {
            value: "Clanname",
            icon: "/icons/clan-lable/gold-1.svg",
          },
          strategist: { value: "Strategist" },
          tag: { value: 128 },
        },
      },
    ],
  };

  const drawsItemData: TableData = {
    id: "draws-item",
    type: "draws-item",
    title: "Draws Item",
    columns: [
      { header: "User ID", accessorKey: "userId" },
      { header: "Profile", accessorKey: "profile" },
      { header: "Prize", accessorKey: "prize" },
      { header: "Tickets", accessorKey: "tickets" },
      { header: "Time", accessorKey: "time" },
    ],
    rows: [
      {
        id: "player-1",
        type: "draws-item",
        cells: {
          userId: { value: 4 },
          profile: {
            value: "Alex Champion",
            profileImage: "/components/mock_user_avatar.png",
            clanName: "clan name",
            icon: "/icons/clan-lable/gold-1.svg",
          },
          prize: { value: "iPhone 16 Pro" },
          tickets: { value: 123 },
          time: { value: "2 hours age" },
        },
      },
    ],
  };

  const rewardData: TableData = {
    id: "reward",
    type: "reward",
    title: "Reward",
    columns: [
      { header: "User ID", accessorKey: "userId" },
      { header: "Profile", accessorKey: "profile" },
      { header: "Status", accessorKey: "status" },
      { header: "Items", accessorKey: "items" },
      { header: "Time", accessorKey: "time" },
    ],
    rows: [
      {
        id: "player-1",
        type: "reward",
        cells: {
          userId: { value: 1 },
          profile: {
            value: "Alex Champion",
            profileImage: "/components/mock_user_avatar.png",
          },
          status: { value: "completed" },
          items: { value: 123 },
          time: { value: "2 hours age" },
        },
      },
      {
        id: "player-2",
        type: "reward",
        cells: {
          userId: { value: 1 },
          profile: {
            value: "Alex Champion",
            profileImage: "/components/mock_user_avatar.png",
          },
          status: { value: "" },
          items: { value: 123 },
          time: { value: "2 hours age" },
        },
      },
    ],
  };
  const MembersItemData: TableData = {
    id: "members-item",
    type: "members-item",
    title: "members item",
    columns: [
      { header: "User ID", accessorKey: "userId" },
      { header: "Profile", accessorKey: "profile" },
      { header: "price", accessorKey: "price" },
      { header: "", accessorKey: "actions" },
    ],
    rows: [
      {
        id: "player-1",
        type: "members-item",
        cells: {
          userId: { value: 1 },
          profile: {
            value: "Alex Champion",
            profileImage: "/components/mock_user_avatar.png",
          },
          price: { value: "Price: € 7.42" },
          action: { value: "" },
        },
      },
      {
        id: "player-2",
        type: "members-item",
        cells: {
          userId: { value: 1 },
          profile: {
            value: "Alex Champion",
            profileImage: "/components/mock_user_avatar.png",
          },
          price: { value: "Price: € 7.42" },
          actions: {
            value: "",
            render: () => (
              <div className="flex w-full items-center justify-end gap-4">
                <Button
                  className="group border-primitives-white_10 bg-primitives-white_10 size-9! min-h-auto! min-w-auto! shrink-0! rounded-full border backdrop-blur-xs"
                  icon={
                    <Icons.Message
                      size={20}
                      className="[&_path]:stroke-white"
                    />
                  }
                />
                <Button
                  className="group border-primitives-white_10 bg-primitives-white_10 size-9! min-h-auto! min-w-auto! shrink-0! rounded-full border backdrop-blur-xs"
                  icon={
                    <Icons.Trash size={20} className="[&_path]:stroke-white" />
                  }
                />
              </div>
            ),
          },
        },
      },
      {
        id: "player-3",
        type: "members-item",
        cells: {
          userId: { value: 1 },
          profile: {
            value: "Alex Champion",
            profileImage: "/components/mock_user_avatar.png",
          },
          price: { value: "Price: € 7.42" },
          actions: {
            value: "",
            render: () => (
              <div className="flex w-full items-center justify-end gap-4">
                <Button
                  className="group border-primitives-white_10 bg-primitives-white_10 size-9! min-h-auto! min-w-auto! shrink-0! rounded-full border backdrop-blur-xs"
                  icon={
                    <Icons.Plus size={20} className="[&_path]:stroke-white" />
                  }
                />
              </div>
            ),
          },
        },
      },
      {
        id: "player-2",
        type: "members-item",
        cells: {
          userId: { value: 1 },
          profile: {
            value: "Alex Champion",
            profileImage: "/components/mock_user_avatar.png",
          },
          price: { value: "Price: € 7.42" },
          actions: {
            value: "",
            render: () => (
              <div className="flex w-full items-center justify-end gap-4">
                <Button
                  className="group border-primitives-white_10 bg-primitives-white_10 size-9! min-h-auto! min-w-auto! shrink-0! rounded-full border backdrop-blur-xs"
                  icon={
                    <Icons.Edit size={20} className="[&_path]:stroke-white" />
                  }
                />
              </div>
            ),
          },
        },
      },
    ],
  };

  const rewardsItemData: TableData = {
    id: "rewards",
    type: "rewards",
    title: "Draws Item",
    columns: [
      { header: "User ID", accessorKey: "userId" },
      { header: "Profile", accessorKey: "profile" },
      { header: "Prize", accessorKey: "prize" },
      { header: "Tickets", accessorKey: "tickets" },
      { header: "Time", accessorKey: "time" },
      { header: "Member Duration", accessorKey: "memberDuration" },
    ],
    rows: [
      {
        id: "player-1",
        type: "rewards",
        cells: {
          userId: { value: 4 },
          profile: {
            value: "Title",
            profileImage: "/components/mock_user_avatar.png",
            clanName: "Clanname",
            icon: "/icons/clan-lable/gold-1.svg",
          },
          prize: { value: "365 days strike" },
          tickets: { value: "40 000" },
          time: { value: "Member for 869 days" },
          memberDuration: { value: "869 days", icon: "/icons/fire.svg" },
        },
      },
      {
        id: "player-2",
        type: "rewards",
        cells: {
          userId: { value: 4 },
          profile: {
            value: "Title",
            profileImage: "/components/mock_user_avatar.png",
            clanName: "Clanname",
            icon: "/icons/clan-lable/gold-1.svg",
          },
          prize: { value: "365 days strike" },
          tickets: { value: "40 000" },
          time: { value: "Member for 869 days" },
          memberDuration: { value: "869 days", icon: "/icons/fire.svg" },
        },
      },
      {
        id: "player-3",
        type: "rewards",
        cells: {
          userId: { value: 4 },
          profile: {
            value: "Title",
            profileImage: "/components/mock_user_avatar.png",
            clanName: "Clanname",
            icon: "/icons/clan-lable/gold-1.svg",
          },
          prize: { value: "365 days strike" },
          tickets: { value: "40 000" },
          time: { value: "Member for 869 days" },
          memberDuration: { value: "869 days", icon: "/icons/fire.svg" },
        },
      },
      {
        id: "player-4",
        type: "rewards",
        cells: {
          userId: { value: 4 },
          profile: {
            value: "Title",
            profileImage: "/components/mock_user_avatar.png",
            clanName: "Clanname",
            icon: "/icons/clan-lable/gold-1.svg",
          },
          prize: { value: "iPhone 16 Pro" },
          tickets: { value: "120 000" },
          time: { value: "2 hours ago" },
          memberDuration: { value: "N/A" },
        },
      },
    ],
  };

  const CompletedHistoryItemRowData: TableData = {
    id: "completed-history-item",
    type: "completed-history-item",
    title: "completed history item",
    columns: [
      { header: "User ID", accessorKey: "userId" },
      { header: "Profile", accessorKey: "profile" },
      { header: "Tag", accessorKey: "tag" },
      { header: "Method", accessorKey: "method" },
      { header: "Tickets", accessorKey: "tickets" },
      { header: "Time", accessorKey: "time" },
      { header: "", accessorKey: "actions" },
    ],
    rows: [
      {
        id: "player-1",
        type: "completed-history-item",
        cells: {
          userId: { value: 4 },
          profile: {
            value: "Title",
            profileImage: "/components/mock_user_avatar.png",
          },
          tag: {
            value: "",
            render: () => (
              <Status
                text="Game"
                status={"in-completed"}
                rounded
                type="gold"
                icon={<Icons.Game />}
                className="[&>div]:gap-2! [&>div]:px-[11px]! [&>div]:py-[9px]! [&>div>span]:text-sm!"
              />
            ),
          },
          tickets: { value: 123 },
          time: { value: "2 hours age" },
        },
      },
      {
        id: "2",
        type: "completed-history-item",
        cells: {
          userId: { value: 4 },
          profile: {
            value: "Title",
          },
          tag: { value: "text" },
          tickets: { value: 123 },
          time: { value: "2 hours age" },
        },
      },

      {
        id: "3",
        type: "completed-history-item",
        cells: {
          userId: { value: 4 },
          profile: {
            value: "Title",
            icon: "/icons/gold-cup.svg",
            profileImage: "/components/mock_user_avatar.png",
            clanName: "Clanename",
            clanIcon: "/icons/clan-lable/gold-1.svg",
          },

          tickets: { value: 123 },
          time: { value: "2 hours age" },
        },
      },
      {
        id: "4",
        type: "completed-history-item",
        cells: {
          userId: { value: 4 },
          profile: {
            value: "Title",
            profileImage: "/components/mock_user_avatar.png",
          },
          method: {
            value: "Axim Bank **** 4578",
            icon: "/icons/master-icon.svg",
          },
          tickets: { value: 123 },
          time: { value: "2 hours age" },
        },
      },
      {
        id: "43",
        type: "completed-history-item",
        cells: {
          profile: {
            value: "10 missions",
            profileImage: "/components/mock_user_avatar.png",
          },

          tickets: { value: 123 },
          actions: {
            value: "",
            render: () => (
              <Button
                className="ml-auto w-max"
                title="Claim "
                variant="secondary"
              />
            ),
          },
        },
      },
    ],
  };

  return (
    <div className="bg-dark mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 text-white">
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Table</span>
        <div className="flex w-full flex-col gap-6">
          <DataTable
            table={paymentHistoryData}
            rowsSpace="0"
            isTableHeader={true}
          />
          <DataTable table={leaderboardData} isTableHeader={true} />
          <DataTable table={drawsItemData} />
          <DataTable table={rewardData} />
          <DataTable table={MembersItemData} />
          <DataTable table={rewardsItemData} />
          <DataTable table={CompletedHistoryItemRowData} />
        </div>
      </div>
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
            className="w-full"
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
            rank="silver"
            points={150}
            className="w-[273px]"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Wooden Card</span>
        <div className="flex w-full flex-col gap-3.5">
          <WoodenCard label="Total members" TotalMembers={20} />
          <StarBadge
            color="gold"
            mediaUrl="/icons/badge/user-placeholder.svg"
          />
          <span>mobile</span>
          <WoodenCard label="Total members" TotalMembers={20} small />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-bold">Live Donate Card</span>
        <div className="flex w-full gap-8">
          <LiveDonateCard
            donate={500}
            level={21}
            userImage={"/icons/badge/user-placeholder.svg"}
          />
          <LiveDonateCard
            donate={10000}
            level={21}
            userImage={"/icons/badge/user-placeholder.svg"}
          />
          <LiveDonateCard
            donate={50000}
            level={21}
            userImage={"/icons/badge/user-placeholder.svg"}
          />
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
          <SubscriptionSettingCard
            name="Netflix"
            logoUrl="/components/subcription-setting-icon.svg"
            isOwner={true}
          />
          <SubscriptionSettingCard
            name="Netflix"
            logoUrl="/components/subcription-setting-icon.svg"
            isOwner={false}
          />
        </div>
        <span className="font-bold">Subscription Payment Card</span>
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <SubscriptionPaymentCard
            isButton={false}
            name="Netflix Premium"
            price={22.27}
          />
          <SubscriptionPaymentCard
            isButton={true}
            name="Netflix Premium"
            price={22.27}
            onClick={() => {
              alert("button is clicking");
            }}
          />
        </div>
        <span className="font-bold">Payment method Card</span>
        <div className="grid w-full grid-cols-1 gap-3">
          <PaymentMethodCard
            bankName="Axim Bank"
            cardLast4="4578"
            expiry="08/25"
            isPrimary
            iconSrc={"/components/bank-card-icon.svg"}
          />

          <PaymentMethodCard
            bankName="Axim Bank"
            cardLast4="4578"
            expiry="08/25"
            iconSrc={"/components/bank-card-icon.svg"}
          />
        </div>
        <span className="font-bold">Current Perk Card</span>
        <div className="grid w-full grid-cols-1 gap-3">
          <CurrentPerkCard
            title="Burt"
            price="€ 49"
            period="/year"
            expiresAt="Expires 12 April, 2026"
          />
        </div>
        <span className="font-bold">Price Counter</span>
        <div className="">
          <PriceCounter
            initialValue={1}
            min={1}
            max={100}
            step={1}
            onChange={() => {}}
            value={1}
          />
        </div>
        <span className="font-bold">Card cart</span>
        <div className="grid grid-cols-1">
          <CardCart
            title="Spuffy Family Name"
            image="/components/card-cart-image.png"
            value={125}
            initialQuantity={2}
            onDelete={() => alert("Deleted")}
          />
        </div>
      </div>

      <span className="font-bold">Horizontal card</span>
      <div className="grid grid-cols-1">
        <HorizontalCard
          title="YouTube Premium:"
          description="Enjoy your favorite videos for free, but be prepared for lots of ad interruptions. This version is ideal for occasional use, but ads can quickly become annoying if you consume a lot of content."
          iconSrc="/components/youtube-red.svg"
        />
      </div>
      <span className="font-bold">Share Subscript Item </span>
      <div className="grid grid-cols-1">
        <ShareSubscriptItem iconSrc="/icons/spotify.svg" />
      </div>
      <span className="font-bold">Subscription Card</span>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <SubscriptionCard
          logo="/icons/youtub-white.svg"
          name="YouTube Premium"
          variant="green"
          price={3.99}
        />
        <SubscriptionCard
          logo="/icons/youtub-white.svg"
          name="YouTube Premium"
          variant="gold"
          price={3.99}
        />
        <SubscriptionCard
          logo="/icons/youtub-white.svg"
          name="YouTube Premium"
          variant="blue"
          price={2.66}
        />
        <SubscriptionCard
          logo="/icons/youtub-white.svg"
          name="YouTube Premium"
          variant="silver"
          price={1.99}
        />
      </div>
      <span className="font-bold">Servery Card</span>
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ServeyCard variant="priced" active={false} />
        <ServeyCard active={false} variant="default" />
      </div>
      <span className="font-bold">Buy More Card</span>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <BuyMoreCard
          iconSrc="/icons/key.svg"
          keyValue={100}
          buttonText="Buy € 14"
        />
        <BuyMoreCard
          iconSrc="/icons/key.svg"
          keyValue={100}
          buttonText="Buy € 14"
        />
        <BuyMoreCard
          iconSrc="/icons/key.svg"
          keyValue={100}
          buttonText="Buy € 12"
        />
        <BuyMoreCard
          iconSrc="/icons/key.svg"
          keyValue={100}
          buttonText="Buy € 13"
        />
      </div>
      <span className="font-bold">Mystery Card</span>
      <div className="flex w-max gap-4">
        <MysteryCard
          type="tick"
          count={1}
          iconSrc="/icons/mystery-tick-icon.svg"
        />
        <MysteryCard
          type="cross"
          count={1}
          iconSrc="/icons/mystery-cross-icon.svg"
        />
        <MysteryCard
          type="lock"
          count={1}
          iconSrc="/icons/mystery-lock-icon.svg"
        />
      </div>

      <span className="font-bold">Payment Method Add Details Card</span>
      <div className="grid grid-cols-1 gap-5">
        <PaymentMethodAddDetailsCard />

        {paymentMethods.map((method) => (
          <PaymentMethodSelectedCard
            key={method.id}
            bankName={method.bankName}
            bankIconUrl={method.bankIconUrl}
            cardNumber={method.cardNumber}
            type={method.type}
            insufficientBalance={method.insufficientBalance}
            selected={selectedId === method.id}
            disabled={method.insufficientBalance}
            onClick={() => {
              if (!method.insufficientBalance) {
                setSelectedId(method.id);
                console.log("Selected:", method.bankName);
              }
            }}
          />
        ))}
      </div>

      <span className="font-bold">Payment Method Add Details Card</span>
      <div className="mb-12 grid grid-cols-1 gap-5">
        <SelectPlanCard isOpen={true} />
        <SelectPlanCard variant="user-plan" />
        <SelectPlanCard variant="user-plan" inSharePlan={false} />
        <SelectPlanCard
          variant="onboarding-plan"
          planImage="/icons/clock-3d.svg"
        />
      </div>
      <span className="font-bold">Gift Card</span>
      <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <GiftCard
          iconSrc="/icons/apple-icon.svg"
          name="Google gift card"
          variant="gold"
        />
        <GiftCard
          iconSrc="/icons/apple-icon.svg"
          name="Google gift card"
          variant="green"
        />
        <GiftCard
          iconSrc="/icons/apple-icon.svg"
          name="Google gift card"
          variant="silver"
        />
        <GiftCard
          iconSrc="/icons/apple-icon.svg"
          name="Google gift card"
          variant="blue"
        />
      </div>
      <span className="font-bold">Award Card</span>
      <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <AwardCard
          selected={false}
          prizeName="Premium Headphones"
          referralsText="100"
        />
        <AwardCard
          selected={true}
          prizeName="Premium Headphones"
          referralsText="100"
        />
        <AwardCard
          prizeName="Premium Headphones"
          isLock
          lockPrizeName="$500 amazon Card"
          referralsText="50"
          lockPrizeTicket={1}
        />
      </div>
    </div>
  );
}
