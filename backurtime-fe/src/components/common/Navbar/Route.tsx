"use client";

import Link from "next/link";
import type { NavbarRoute } from "./types";
import { cn } from "@/utils";
import { ReactNode, useMemo } from "react";
import {
  Clan,
  Community,
  Drawings,
  Missions,
  Offers,
  Rewards,
  Store,
} from "@/components/icons";

interface NavbarRouteProps {
  route: NavbarRoute;
  isActive: boolean;
}

export default function NavbarRoute({ route, isActive }: NavbarRouteProps) {
  const { to, title, name } = route;

  const icon = useMemo(() => {
    const icons: Record<string, ReactNode> = {
      offers: (
        <Offers className={cn("text-grey-light", isActive && "text-white")} />
      ),
      store: (
        <Store className={cn("text-grey-light", isActive && "text-white")} />
      ),
      missions: (
        <Missions className={cn("text-grey-light", isActive && "text-white")} />
      ),
      rewards: (
        <Rewards className={cn("text-grey-light", isActive && "text-white")} />
      ),
      community: (
        <Community
          className={cn("text-grey-light", isActive && "text-white")}
        />
      ),
      drawings: (
        <Drawings className={cn("text-grey-light", isActive && "text-white")} />
      ),
      clan: (
        <Clan className={cn("text-grey-light", isActive && "text-white")} />
      ),
    };

    return icons[name];
  }, [name, isActive]);

  return (
    <Link
      href={to}
      className={cn(
        "group/nav flex w-full items-center justify-start rounded-2xl px-4 py-4 transition-all duration-300 ease-in-out group-hover:px-5",
        "group-hover:justify-start group-hover:gap-x-6",
        "hover:bg-white/10 hover:bg-[url(/components/route-item_active.png)] hover:bg-left hover:bg-no-repeat",
        isActive &&
          "bg-white/10 bg-[url(/components/route-item_active.png)] bg-left bg-no-repeat",
      )}
    >
      <div
        className={cn(
          "flex flex-shrink-0 items-center justify-center transition-all duration-300 ease-in-out group-hover:w-max",
          isActive ? "text-white" : "text-grey-light",
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "font-inter text-grey-light translate-x-[-8px] overflow-hidden text-base font-medium whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out",
          "group-hover:translate-x-0 group-hover:opacity-100",
          isActive && "text-white",
        )}
      >
        {title}
      </span>
    </Link>
  );
}
