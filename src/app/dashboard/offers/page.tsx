"use client";
import Image from "next/image";
import { useState } from "react";
import PaperCard from "@/components/cards/paper_card";
import { Groups } from "@/components/common";
import { Banner, TabsDetails } from "@/components/pages/offers";
import { StoneTag } from "@/components/common/Tags";
import { PresentBox } from "@/components/icons";

type ItemType = {
  progress: number;
  image: string;
  title: string;
  stats1: number;
  stats2: number;
  stats3: string;
};

const data = [
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 50,
    stats1: 4,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 100,
    stats1: 44,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 50,
    stats1: 4,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 100,
    stats1: 44,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 50,
    stats1: 4,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 100,
    stats1: 44,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 50,
    stats1: 4,
    stats2: 56,
    stats3: "TS 4.6",
  },
  {
    image: "/components/offers-bg.png",
    title: "sea of conquest",
    progress: 100,
    stats1: 44,
    stats2: 56,
    stats3: "TS 4.6",
  },
];

const USER_SECTION_GROUPS = [
  {
    id: "user-section-group-1",
    title: "Time",
    name: "time",
  },
  {
    id: "user-section-group-2",
    title: "Spores",
    name: "spores",
  },
];

export default function OffersPage() {
  const [currentGroup, setCurrentGroup] = useState("time");
  return (
    <div className="flex w-full flex-col gap-8 py-4 sm:gap-12 sm:py-8">
      <div className="flex w-full flex-col gap-8">
        <Banner />
        <div className="no-scrollbar flex items-center justify-start gap-3.5 overflow-x-auto sm:justify-center sm:gap-5">
          <StoneTag active label="My offers" />
          <StoneTag label="Simple offers" />
          <StoneTag label="Premium offers" />
          <StoneTag label="Ads" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 sm:gap-8">
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
          <h1 className="text-shadow-dark-small font-cinzel w-3/4 text-left text-2xl leading-[122%]! font-bold text-white sm:text-[32px]">
            Hello, username!
          </h1>
          <div className="w-full sm:w-max">
            <Groups
              groups={USER_SECTION_GROUPS}
              onGroupChange={setCurrentGroup}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fit,minmax(163px,1fr))] md:gap-6 2xl:grid-cols-4">
          <PaperCard />
          <PaperCard />
          <PaperCard />
          <PaperCard />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <TabsDetails data={data as ItemType[]} />
      </div>
    </div>
  );
}
