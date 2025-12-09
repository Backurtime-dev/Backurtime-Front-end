"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Badge from "../Badge";
import Progress from "../Progress";

interface HeadingProps {
  title: string;
}

export default function Header({ title }: HeadingProps) {
  const [availableCount, setAvailableCount] = useState(4);

  return (
    <div className="flex h-fit w-full items-center justify-between">
      <span className="font-inter text-2xl font-semibold text-white">
        {title}
      </span>
      <div className="flex items-center gap-4">
        <div className="meter-rate mr-4 flex items-center justify-center gap-2">
          <Image
            src="/pages/common/header/ratio.png"
            alt="app logo"
            width={88}
            height={54}
            className="overflow-hidden rounded-[1000px] object-cover"
          />
          <div className="flex items-center gap-[-9.579px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <Progress key={i} filled={availableCount < i} />
            ))}
          </div>
          <div className="font-cinzel text-base leading-[120%] font-bold">
            <span className="text-white">10</span>
            <span className="text-grey-light">/100</span>
          </div>
        </div>

        <div className="background-glass flex items-center justify-between gap-3 rounded-[100px] py-0.5 pr-4 pl-0.5">
          <Badge
            color="gold"
            type="image"
            mediaUrl="/icons/badge/badge-placeholder.png"
          />
          <span className="font-cinzel text-base leading-[120%] font-bold text-white">
            4
          </span>
        </div>

        <div className="fire background-glass flex items-center justify-between gap-3 rounded-[100px] py-0.5 pr-4 pl-0.5">
          <Badge
            color="gold"
            type="image"
            mediaUrl="/icons/badge/badge-placeholder.png"
          />
          <Select>
            <SelectTrigger className="font-cinzel min-w-[52px] p-0! text-base leading-[120%] font-bold text-white shadow-none! outline-none! focus:ring-0!">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className="font-cinzel mt-3 text-base leading-[120%] font-bold">
              <SelectItem value="123">124</SelectItem>
              <SelectItem value="200">200</SelectItem>
              <SelectItem value="300">300</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="ml-2">
          <Badge color="green" type="icon" mediaUrl="/icons/message.svg" />
        </div>

        <div className="ml-4 flex items-center gap-3">
          <Badge
            color="green"
            type="user"
            mediaUrl="/icons/badge/user-placeholder.svg"
          />
          <div className="font-cinzel flex flex-col gap-1 text-base leading-[120%] font-bold text-white">
            <span className="flex items-center gap-1">
              <p>Username </p>
              <Image
                src="/pages/common/header/rank.svg"
                alt="app logo"
                width={25}
                height={19}
                className="object-contain"
              />
            </span>
            <p className="font-inter! font-normal! tracking-[.16px]">Rank</p>
          </div>
        </div>
      </div>
    </div>
  );
}
