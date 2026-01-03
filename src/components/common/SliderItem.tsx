import React from "react";
import { ArrowRight } from "../icons";
import Button from "./Button";

type SliderItemProps = {
  title?: string;
  description?: string;
  badge?: React.ReactNode;
  onClick?: () => void;
};

const SliderItem = ({
  title,
  description,
  onClick,
  badge,
}: SliderItemProps) => {
  return (
    <div className="border-primitives-white_20 relative flex w-full shrink-0 flex-col items-start gap-4 overflow-hidden border-b px-4 py-6 sm:flex-row sm:items-center sm:gap-6">
      {badge && <div className="shrink-0">{badge}</div>}
      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-2">
          <h5 className="font-inter text-base leading-[135%] font-medium text-white sm:text-base">
            {title}
          </h5>
          <p className="font-inter text-grey-light text-[14px] leading-[140%] font-normal sm:text-base">
            {description}
          </p>
        </div>
        <Button
          className="group h-12 w-12 shrink-0"
          icon={<ArrowRight size={20} />}
          withBackgoundImage={true}
          backgroundImageUrl="/components/stone-rounded-btn.svg"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default SliderItem;
