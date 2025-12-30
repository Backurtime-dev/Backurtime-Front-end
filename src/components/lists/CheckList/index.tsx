"use client";

import { cn } from "@/utils";
import Checkbox from "@/components/common/Checkbox";
import { useState } from "react";
import { Done } from "@/components/icons";

export type CheckListVariant = "list" | "checkbox";

export interface ChecklistItem {
  id: string;
  title: string;
  checked?: boolean;
}

interface CheckListProps {
  items: ChecklistItem[];
  variant?: CheckListVariant;
  onChange?: (id: string, checked: boolean) => void;
  className?: string;
}

export default function CheckList({
  items,
  variant = "list",
  onChange,
  className,
}: CheckListProps) {
  // Local state for list variant
  const [localItems, setLocalItems] = useState(items);

  const handleClick = (id: string) => {
    const updatedItems = localItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setLocalItems(updatedItems);
    const changedItem = updatedItems.find((item) => item.id === id);
    if (changedItem) onChange?.(id, changedItem.checked ?? false);
  };

  return (
    <div
      className={cn(
        "bg-dark-normal border-primitives-white_20 no-scrollbar h-max w-max overflow-y-auto rounded-3xl border p-4 [backdrop-filter:blur(5px)]",
        className,
      )}
      style={{
        boxShadow: "0 0 80px 0 rgba(0, 255, 234, 0.15",
        maxHeight: "376px",
        minWidth: "110px",
      }}
    >
      <ul className="flex flex-col gap-y-4">
        {(variant === "list" ? localItems : items).map((item) => {
          const isChecked = !!item.checked;

          return (
            <li
              key={item.id}
              className={cn(
                "flex shrink-0 cursor-pointer items-center justify-between gap-2 select-none",
                variant === "list" && "transition-opacity duration-200",
                !isChecked && "opacity-80",
              )}
              onClick={() => variant === "list" && handleClick(item.id)}
            >
              {variant === "checkbox" ? (
                <Checkbox
                  id={item.id}
                  withLabel
                  labelTitle={item.title}
                  checked={isChecked}
                  onChange={(e) => onChange?.(item.id, e.target.checked)}
                  className="checked:bg-green-normal! border-green-normal size-5 rounded-[5px] bg-transparent checked:bg-[url('/components/black-checkbox-tick.svg')]"
                />
              ) : (
                <span className="font-inter leading-[140%] font-normal tracking-[0.16px] text-white">
                  {item.title}
                </span>
              )}

              {variant === "list" && isChecked && (
                <Done size={12} color="white" className="shrink-0" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
