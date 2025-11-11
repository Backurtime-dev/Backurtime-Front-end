import { NeonText } from "@/components/common";
import { AuthDivider, SocialMedias } from "@/components/pages/auth";
import { SignUpForm } from "@/forms/auth";

export default function SignUpPage() {
  return (
    <div className="flex h-[791px] w-[822px] flex-col gap-y-12 bg-[url(/pages/auth/sign-up_border.webp)] bg-cover bg-center p-16">
      <NeonText
        text="Registration"
        className="text-center text-[42px] font-bold"
      />
      <SignUpForm />
      <AuthDivider />
      <SocialMedias />
    </div>
  );
}
