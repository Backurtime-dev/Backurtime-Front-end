import Image from "next/image";

export default function AuthHeading() {
  return (
    <div className="flex items-center gap-x-5">
      <Image src="/logo.png" alt="app logo" width={40} height={40} />
      <span className="font-inter text-[22px] font-semibold text-white">
        Backurtime
      </span>
    </div>
  );
}
