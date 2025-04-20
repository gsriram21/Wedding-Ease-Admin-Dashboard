
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface ActionCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ActionCard({ title, description, icon: Icon, className, ...props }: ActionCardProps) {
  return (
    <button
      className={cn(
        "bg-card p-4 rounded-lg border border-border shadow-sm hover:bg-secondary/50 transition-colors text-left w-full",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </button>
  );
}
