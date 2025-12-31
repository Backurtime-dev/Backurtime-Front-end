import { cn } from "@/utils";
interface QuizItemProps {
  description?: string;
  isActive?: boolean;
}

function QuizItem({ description, isActive = false }: QuizItemProps) {
  return (
    <div
      className={cn(
        "w-full rounded-[20px] border border-transparent",
        isActive
          ? "bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]"
          : "bg-primitives-black_50",
      )}
    >
      <div className="flex h-full w-full items-center gap-3 rounded-[20px] bg-[rgba(8,21,29,1)] px-3.5 py-3.5 sm:px-[22px] sm:py-[22px]">
        <div className="bg-primitives-white_10 h-7 w-7 shrink-0 rounded-full border-3 border-transparent">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#909090_31.2%,#DDD_75.92%,#E3E3E3_100.02%)] text-center">
            1
          </span>
        </div>
        <p className="font-inter text-[14px] leading-[140%] font-normal text-white sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default QuizItem;
