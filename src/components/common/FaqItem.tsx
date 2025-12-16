import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/utils";

type AccType = {
  title: ReactNode;
  description: ReactNode;
};

interface FaqItemProps {
  className?: string;
  content?: AccType[];
}

export default function FaqItem({ className, content }: FaqItemProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("grid w-full grid-cols-1 gap-4", className)}
      defaultValue="item-1"
    >
      {content?.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col text-balance">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
