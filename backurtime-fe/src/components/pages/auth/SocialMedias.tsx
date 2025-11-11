"use client";

import Image from "next/image";

const SOCIAL_MEDIAS = [
  { id: "google", src: "/social_medias/google.svg", alt: "google logo" },
  { id: "facebook", src: "/social_medias/facebook.svg", alt: "facebook logo" },
  { id: "apple", src: "/social_medias/apple.svg", alt: "apple logo" },
];

export default function SocialMedias() {
  return (
    <div className="flex w-full items-center justify-center gap-x-5">
      {SOCIAL_MEDIAS.map((sm) => (
        <Image
          key={sm.id}
          src={sm.src}
          alt={sm.alt}
          width={64}
          height={64}
          className="cursor-pointer"
          onClick={() => alert("In development")}
        />
      ))}
    </div>
  );
}
