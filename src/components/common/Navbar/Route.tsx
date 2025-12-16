"use client";

import Link from "next/link";
import type { NavbarRoute } from "./types";
import { cn } from "@/utils";
import { Fragment, ReactNode, useMemo } from "react";
import {
  Clan,
  Community,
  Drawings,
  Missions,
  Offers,
  Rewards,
  Store,
} from "@/components/icons";
import { useBreakpoint } from "@/hooks/useBreakpoint";

interface NavbarRouteProps {
  route: NavbarRoute;
  isActive: boolean;
}

export default function NavbarRoute({ route, isActive }: NavbarRouteProps) {
  const { to, title, name } = route;
  const isLarge = useBreakpoint("sm");

  const icon = useMemo(() => {
    const icons: Record<string, ReactNode> = {
      offers: (
        <Offers
          className={cn("text-grey-light", isActive && "text-white")}
          size={isLarge ? 24 : 20}
        />
      ),
      store: (
        <Store
          className={cn("text-grey-light", isActive && "text-white")}
          size={isLarge ? 24 : 20}
        />
      ),
      missions: (
        <Missions
          className={cn("text-grey-light", isActive && "text-white")}
          size={isLarge ? 24 : 20}
        />
      ),
      rewards: (
        <Rewards
          className={cn("text-grey-light", isActive && "text-white")}
          size={isLarge ? 24 : 20}
        />
      ),
      community: (
        <Community
          className={cn("text-grey-light", isActive && "text-white")}
          size={isLarge ? 24 : 20}
        />
      ),
      drawings: (
        <Drawings
          className={cn("text-grey-light", isActive && "text-white")}
          size={isLarge ? 24 : 20}
        />
      ),
      clan: (
        <Clan
          className={cn("text-grey-light", isActive && "text-white")}
          size={isLarge ? 24 : 20}
        />
      ),
    };

    return icons[name];
  }, [name, isActive, isLarge]);

  return (
    <Fragment>
      <Link
        href={to}
        className={cn(
          "group/nav hidden w-full items-center justify-center gap-x-6 rounded-2xl px-5 py-4 transition-all duration-300 ease-in-out sm:flex",
          "group-hover:justify-start group-hover:gap-x-6 group-hover:px-5",
          "xl:gap-x-0 xl:px-4",
          "hover:bg-white/10 hover:bg-[url(/components/route-item_active.png)] hover:bg-left hover:bg-no-repeat",
          isActive &&
            "bg-white/10 bg-[url(/components/route-item_active.png)] bg-left bg-no-repeat",
        )}
      >
        <div
          className={cn(
            "flex shrink-0 items-center justify-center transition-all duration-300 ease-in-out group-hover:w-max",
            isActive ? "text-white" : "text-grey-light",
          )}
        >
          {icon}
        </div>
        <span
          className={cn(
            "font-inter text-grey-light w-0 translate-x-0 overflow-hidden text-base font-medium whitespace-nowrap opacity-100 transition-all duration-300 ease-in-out xl:translate-x-[-8px] xl:opacity-0",
            "group-hover:w-full group-hover:translate-x-0 group-hover:opacity-100",
            isActive && "text-white",
          )}
        >
          {title}
        </span>
      </Link>
      {/* is mobile */}
      <Link
        href={to}
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-1 sm:hidden",
          name !== "offers" && "rounded-2xl px-2 pt-2 pb-[11px]",
          isActive &&
            name !== "offers" &&
            "bg-white-10 bg-[url(/components/route-item_active-mb.svg)] bg-cover bg-bottom bg-no-repeat",
        )}
      >
        <div
          className={cn(
            name === "offers" &&
              "border-black-normal shadow-light-sm -mt-10 aspect-[1] size-[52px] rounded-full border-6",
            name === "offers" && isActive
              ? "shadow-green-sm border-transparent bg-[linear-gradient(180deg,#A0DBF0_0%,#00FFEA_100%)]"
              : "",
          )}
        >
          <div
            className={cn(
              "flex shrink-0 items-center justify-center",
              name === "offers" &&
                "size-full rounded-full bg-[linear-gradient(97.44deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
              isActive ? "text-white" : "text-grey-light",
            )}
          >
            {icon}
          </div>
        </div>

        <span
          className={cn(
            "font-inter text-grey-light overflow-hidden text-[10px] leading-[140%] font-normal tracking-[1%] whitespace-nowrap",
            isActive && "text-white",
            name === "offers" && "hidden sm:block",
          )}
        >
          {title}
        </span>
      </Link>
    </Fragment>
  );
}
