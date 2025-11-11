"use client";

import { Button, Checkbox, Input } from "@/components/common";
import Link from "next/link";

export default function SignInForm() {
  return (
    <form className="flex w-full flex-col gap-y-8">
      <div className="flex w-full flex-col gap-y-6">
        <Input
          withLabel
          labelTitle="Username or Email"
          placeholder="Enter your username"
          id="username-or-email"
        />
        <Input
          type="password"
          withLabel
          labelTitle="Password"
          placeholder="Enter your password"
          id="password"
        />
        <div className="flex w-full items-center justify-between">
          <Checkbox withLabel labelTitle="Remember me" id="remember-me" />
          <Link
            href="/auth/sign-in"
            className="text-green-normal font-inter text-base font-medium"
          >
            Forgot password?
          </Link>
        </div>
      </div>
      <Button
        type="submit"
        title="Sign in"
        withBackgoundImage
        withTextDecoration
        backgroundImageUrl="/components/button_bg.png"
        className="font-cinzel h-[54px] w-[165px] self-center text-[18px] font-bold text-white"
      />
    </form>
  );
}
