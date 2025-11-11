"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function AuthFooter() {
  const pathname = usePathname();

  const footer = useMemo(() => {
    const isSignUpPage = pathname.includes("sign-up");
    const isSignInPage = pathname.includes("sign-in");

    if (isSignUpPage) {
      return {
        title: "Already have an account?",
        label: "Sign in",
        to: "/auth/sign-in" as const,
      };
    }

    if (isSignInPage) {
      return {
        title: "Don’t have an account?",
        label: "Sign up",
        to: "/auth/sign-up" as const,
      };
    }

    return { title: "", label: "", to: "/" as const };
  }, [pathname]);

  return (
    <div className="flex items-center gap-x-1">
      <span className="font-inter text-grey-light text-[18px] font-normal">
        {footer.title}
      </span>
      <Link
        href={footer.to}
        replace
        className="font-inter text-green-normal text-[18px] font-normal"
      >
        {footer.label}
      </Link>
    </div>
  );
}
