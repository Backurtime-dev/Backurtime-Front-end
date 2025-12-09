"use client";

import { Help } from "@/components/icons";
import Link from "next/link";
import { NAVBAR_ROUTES } from "./routes";
import { usePathname } from "next/navigation";
import NavbarRoute from "./Route";
import { useMemo } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const currentRoute = useMemo(() => {
    return pathname.split("/").filter(Boolean)[1] || "offers";
  }, [pathname]);

  return (
    <div className="bg-dark-normal group border-r-primitives-white_30 top-0 left-0 z-9999 flex min-h-dvh w-28 flex-col justify-between overflow-hidden rounded-r-[40px] border-r-[.5px] px-6 py-8 transition-all duration-300 ease-in-out hover:w-[280px]">
      <div className="flex w-full flex-col gap-y-[142px]">
        <div className="flex items-center justify-center transition-all duration-300 group-hover:justify-start group-hover:gap-x-5">
          <Image src="/logo.png" alt="app logo" width={40} height={40} />
          <span className="font-inter hidden text-[22px] font-semibold text-white transition-opacity duration-300 group-hover:block">
            Backurtime
          </span>
        </div>

        <div className="flex w-full flex-col gap-y-[14px]">
          {NAVBAR_ROUTES.map((r) => {
            const isActive = currentRoute === r.name;

            return <NavbarRoute key={r.id} isActive={isActive} route={r} />;
          })}
        </div>
      </div>

      <Link
        href="/dashboard"
        className="flex items-center justify-center transition-all duration-300 group-hover:justify-start group-hover:gap-x-6"
      >
        <Help />
        <span className="font-inter text-grey-light hidden text-base font-medium transition-opacity duration-300 group-hover:block">
          Help & Support
        </span>
      </Link>
    </div>
  );
}
