"use client";

import { Button, Input } from "@/components/common";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <form className="flex w-full flex-col gap-y-8">
      <div className="grid w-full grid-cols-2 gap-6">
        <Input
          withLabel
          labelTitle="Username"
          placeholder="Enter your username"
          id="username"
        />
        <Input
          withLabel
          labelTitle="Email"
          placeholder="Enter your email"
          id="email"
        />
        <Input
          type="password"
          withLabel
          labelTitle="Password"
          placeholder="Create a password"
          id="password"
        />
        <Input
          type="password"
          withLabel
          labelTitle="Re-enter password"
          placeholder="Re-enter password"
          id="re-enter-password"
        />
      </div>
      <span className="text-grey-light w-full text-base font-normal">
        By clicking 'Sign up' or Continue with Google, Facebook, or Apple, you
        agree to our <br />
        <Link
          href="/auth/sign-up"
          className="text-green-normal font-inter underline"
        >
          Liability Policy
        </Link>
        ,{" "}
        <Link
          href="/auth/sign-up"
          className="text-green-normal font-inter underline"
        >
          Privacy Policy
        </Link>
        , and{" "}
        <Link
          href="/auth/sign-up"
          className="text-green-normal font-inter underline"
        >
          Terms of Service
        </Link>
      </span>
      <Button
        type="submit"
        title="Sign up"
        withBackgoundImage
        withTextDecoration
        backgroundImageUrl="/components/button_bg.png"
        className="font-cinzel h-[54px] w-[168px] self-center text-[18px] font-bold text-white"
      />
    </form>
  );
}
