"use client";

import { Help, More } from "@/components/icons";
import Link from "next/link";
import { NAVBAR_ROUTES, ORDER } from "./routes";
import { usePathname } from "next/navigation";
import NavbarRoute from "./Route";
import { Fragment, useMemo } from "react";
import Image from "next/image";
import { cn } from "@/utils";

interface TypeProps {
  setIsMobileSidebar: (value: boolean) => void;
  isMobileSidebar: boolean;
}

export default function Navbar({
  setIsMobileSidebar,
  isMobileSidebar,
}: TypeProps) {
  const pathname = usePathname();

  const currentRoute = useMemo(() => {
    return pathname.split("/").filter(Boolean)[1] || "offers";
  }, [pathname]);

  const NAVBAR_ROUTES_SORTED = [...NAVBAR_ROUTES].sort(
    (a, b) => ORDER.indexOf(a.name) - ORDER.indexOf(b.name),
  );

  return (
    <Fragment>
      <div
        className={cn(
          "sidebar bg-dark-normal group border-r-primitives-white_30 top-0 left-0 z-9999 hidden min-h-dvh w-[280px] flex-col justify-between overflow-hidden rounded-r-[40px] border-r-[.5px] px-6 py-8 transition-all duration-300 ease-in-out hover:w-[280px] sm:flex xl:w-28",
          "transition-all duration-300 ease-in-out",
          "fixed top-0 left-0 xl:sticky",
          isMobileSidebar
            ? "translate-x-0 opacity-100"
            : "-translate-x-[280px] opacity-100 xl:translate-x-0 xl:opacity-100",
        )}
      >
        <div className="flex h-full w-full flex-col justify-between gap-y-8">
          <div className="relative flex items-center justify-center gap-x-5 transition-all duration-300 ease-in-out group-hover:gap-x-5 xl:gap-x-0">
            <Image
              src="/logo.png"
              alt="app logo"
              width={40}
              height={40}
              className="shrink-0"
            />
            <span
              className={cn(
                "font-inter text-[22px] font-semibold text-white transition-all duration-300 ease-in-out",
                "w-0 -translate-x-6 overflow-hidden opacity-0",
                "group-hover:w-full group-hover:translate-x-0 group-hover:opacity-100",
              )}
            >
              Backurtime
            </span>

            <Image
              src="/icons/cross.svg"
              alt="app logo"
              width={24}
              height={24}
              className="absolute top-1/2 right-0 block -translate-y-1/2 cursor-pointer opacity-100 xl:hidden xl:opacity-0"
              onClick={() => {
                setIsMobileSidebar(false);
              }}
            />
          </div>

          <div className="flex w-full flex-col gap-y-[14px]">
            {NAVBAR_ROUTES.map((r) => {
              const isActive = currentRoute === r.name;

              return <NavbarRoute key={r.id} isActive={isActive} route={r} />;
            })}
          </div>
          <Link
            href="/dashboard"
            className="flex items-center justify-start gap-x-6 transition-all duration-300 group-hover:justify-start group-hover:gap-x-6 xl:justify-center xl:gap-x-0"
          >
            <div className="shrink-0">
              <Help />
            </div>
            <span
              className={cn(
                "font-inter text-grey-light text-base font-medium whitespace-nowrap transition-all duration-300 ease-in-out",
                "w-0 -translate-x-2 overflow-hidden opacity-0",
                "group-hover:w-full group-hover:translate-x-0 group-hover:opacity-100",
              )}
            >
              Help & Support
            </span>
          </Link>
        </div>
      </div>

      <div className="bg-dark-normal border-primitives-white_30 fixed bottom-0 left-0 z-50 grid h-16 w-full grid-cols-5 rounded-tl-[20px] rounded-tr-[20px] border-t p-1 sm:hidden">
        {NAVBAR_ROUTES_SORTED.slice(0, 4).map((r) => {
          const isActive = currentRoute === r.name;

          return <NavbarRoute key={r.id} isActive={isActive} route={r} />;
        })}

        <button
          className={cn(
            "flex h-full w-full flex-col items-center justify-center gap-1 sm:hidden",
            "rounded-2xl px-2 pt-2 pb-[11px]",
            false &&
              "bg-white-10 bg-[url(/components/route-item_active-mb.svg)] bg-cover bg-bottom bg-no-repeat",
          )}
        >
          <div
            className={cn(
              "flex shrink-0 items-center justify-center",
              false ? "text-white" : "text-grey-light",
            )}
          >
            <More className={cn("text-grey-light", false && "text-white")} />
          </div>

          <span
            className={cn(
              "font-inter text-grey-light overflow-hidden text-[10px] leading-[140%] font-normal tracking-[1%] whitespace-nowrap",
              false && "text-white",
            )}
          >
            More
          </span>
        </button>
      </div>
    </Fragment>
  );
}
