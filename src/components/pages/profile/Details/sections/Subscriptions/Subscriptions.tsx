import { Groups } from "@/components/common";
import { useState } from "react";
import EmptyState from "./components/EmptyState";
import SubscriptionOwnerCard from "@/components/cards/subscriber_card";
import { TotalSavedLabel } from "@/components/common/Tags";

interface subscriptionProps {
  status: string;
  logo: string;
  name: string;
  member: number;
}

const SUBSCRIPTION_DATA = [
  {
    status: "private",
    logo: "/icons/youtub-white.svg",
    name: "YouTube Premium",
    member: 3,
  },
  {
    status: "Public",
    logo: "/icons/netflix.svg",
    name: "Netflix  Premium",
    member: 3,
  },
  {
    status: "private",
    logo: "/icons/spotify.svg",
    name: "Spotify Premium",
    member: 3,
  },
];

const SUBSCRIPTIONS_SECTION_GROUPS = [
  {
    id: "subscriptions-section-group-1",
    title: "Subscription owner",
    name: "subscription_owner",
  },
  {
    id: "subscriptions-section-group-2",
    title: "Subscriber",
    name: "subscriber",
  },
];

export default function SubscriptionsSection() {
  const [currentGroup, setCurrentGroup] = useState("subscription_owner");

  return (
    <div className="flex w-full flex-col gap-y-8">
      <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-y-2.5">
          <span className="font-inter text-lg font-medium text-white">
            Manage subscriptions
          </span>
          <span className="text-grey-light font-inter text-base font-normal">
            Manage active subscriptions, members, check payment history.
          </span>
        </div>
        <TotalSavedLabel label="Total saved:" amount={"€ 3 456"} />
      </div>
      <div className="flex w-full flex-col gap-y-6">
        <Groups
          groups={SUBSCRIPTIONS_SECTION_GROUPS}
          onGroupChange={setCurrentGroup}
        />
      </div>
      {currentGroup === "subscriber" && (
        <div className="grid w-full grid-cols-1 items-center gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {SUBSCRIPTION_DATA.map((card: subscriptionProps, i: number) => (
            <SubscriptionOwnerCard key={i} {...card} />
          ))}
        </div>
      )}
      {currentGroup === "subscription_owner" && <EmptyState />}
    </div>
  );
}
