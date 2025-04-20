
import { cn } from "@/lib/utils";

interface BadgeCountProps {
  count: number;
  className?: string;
  max?: number;
}

export function BadgeCount({ count, className, max = 99 }: BadgeCountProps) {
  const displayCount = count > max ? `${max}+` : count.toString();
  
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-[hsl(var(--notification))] rounded-full shadow-sm",
        "animate-[pulse_3s_ease-in-out_infinite]",
        className
      )}
    >
      {displayCount}
    </div>
  );
}
