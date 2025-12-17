"use client";

import { FilterChips, Tabs } from "@/components/common";
import { ReactNode, useMemo, useState } from "react";
import OfferCard from "@/components/cards/offer_card";
import Image from "next/image";

export default function TabsDetails({
  data,
}: {
  data: Array<{
    progress: number;
    image: string;
    title: string;
    stats1: number;
    stats2: number;
    stats3: string;
  }>;
}) {
  const [currentTab, setCurrentTab] = useState("inprogress");

  const inProgress = data?.filter((i) => i.progress < 100);
  const completed = data?.filter((i) => i.progress >= 100);

  const section = useMemo(() => {
    const sections: Record<string, ReactNode> = {
      inprogress: (
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] 2xl:grid-cols-4">
          {inProgress.map((d, i) => (
            <OfferCard key={i} {...d} />
          ))}
        </div>
      ),
      completed: (
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] 2xl:grid-cols-4">
          {completed.map((d, i) => (
            <OfferCard key={i} {...d} />
          ))}
        </div>
      ),
    };

    return sections[currentTab];
  }, [currentTab, inProgress, completed]);

  return (
    <div className="flex w-full flex-col gap-6 sm:gap-10">
      <div className="flex w-full flex-col items-center gap-6 md:flex-row">
        <Tabs
          tabs={[
            {
              id: "offer-details-tab-1",
              title: `In progress (${inProgress?.length})`,
              name: "inprogress",
            },
            {
              id: "offer-details-tab-2",
              title: `Completed (${completed?.length})`,
              name: "completed",
            },
          ]}
          onTabChange={setCurrentTab}
        />
        <div className="flex w-full items-center gap-3.5 md:w-max">
          <FilterChips dropdown text="Sort by: The newest" />
          <FilterChips icon text="Filters" />
        </div>
      </div>
      {section}
    </div>
  );
}
