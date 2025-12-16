import Header from "@/components/common/Header";

import { ProfileDetails, ProfileInformation } from "@/components/pages/profile";

export default function ProfilePage() {
  return (
    <div className="mx-auto mt-[47px] flex w-full max-w-[1542px] flex-col gap-y-6 sm:gap-y-10 lg:gap-y-16">
      <ProfileInformation />
      <ProfileDetails />
    </div>
  );
}
