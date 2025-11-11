import { NeonText } from "@/components/common";
import { AuthDivider, SocialMedias } from "@/components/pages/auth";
import { SignInForm } from "@/forms/auth";

export default function SignInPage() {
  return (
    <div className="flex h-[759px] w-xl flex-col gap-y-12 bg-[url(/pages/auth/sign-in_border.webp)] bg-cover bg-center p-16">
      <NeonText text="Sign in" className="text-center text-[42px] font-bold" />
      <SignInForm />
      <AuthDivider />
      <SocialMedias />
    </div>
  );
}
