
import { cn } from "@/lib/utils";

interface BadgeItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isEarned?: boolean;
  progress?: number;
  className?: string;
}

export const BadgeItem = ({ 
  title, 
  description, 
  icon, 
  isEarned = false, 
  progress = 0, 
  className 
}: BadgeItemProps) => {
  return (
    <div className={cn(
      "border rounded-xl p-4 flex flex-col items-center text-center transition-all",
      isEarned 
        ? "bg-primary/5 border-primary/20" 
        : "bg-muted/50 border-border/50",
      className
    )}>
      <div className={cn(
        "w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all",
        isEarned 
          ? "bg-primary/10 text-primary" 
          : "bg-muted text-muted-foreground"
      )}>
        {icon}
      </div>
      
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      
      {progress < 100 && !isEarned && (
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      
      {isEarned && (
        <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
          Earned
        </span>
      )}
    </div>
  );
};
