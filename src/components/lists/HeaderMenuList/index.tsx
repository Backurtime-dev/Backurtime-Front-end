"use client";

import React, { useState } from "react";
import HeaderMenuItem from "@/components/common/HeaderMenuItem";

interface MenuItem {
  label: string | number;
  iconSrc: string;
  initialSelected?: boolean;
}

interface HeaderMenuListProps {
  items: MenuItem[];
}

const HeaderMenuList = ({ items }: HeaderMenuListProps) => {
  const [selectedItems, setSelectedItems] = useState(
    items.map((item) => item.initialSelected ?? false),
  );

  const handleItemClick = (index: number) => {
    setSelectedItems((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="border-primitives-white_20 no-scrollbar flex max-h-[226px] flex-col gap-1.5 overflow-y-auto rounded-3xl border p-1 shadow-[0_0_80px_0_rgba(0,255,234,0.15)] backdrop-blur-[5px]">
      {items.map((item, index) => (
        <HeaderMenuItem
          key={index}
          label={item.label}
          iconSrc={item.iconSrc}
          selected={selectedItems[index]}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default HeaderMenuList;
