
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div 
      className={cn(
        "bg-card rounded-xl overflow-hidden shadow-sm border border-border/50",
        "transition-all duration-300 ease-out hover:shadow-md",
        "transform hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children }: CardProps) => {
  return (
    <div className={cn("p-6 pb-3", className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ className, children }: CardProps) => {
  return (
    <div className={cn("p-6 pt-3", className)}>
      {children}
    </div>
  );
};

export const CardMedia = ({ className, children }: CardProps) => {
  return (
    <div className={cn("relative w-full h-48 overflow-hidden", className)}>
      {children}
    </div>
  );
};

export const CardFooter = ({ className, children }: CardProps) => {
  return (
    <div className={cn("px-6 py-4 bg-secondary/50 border-t border-border/50", className)}>
      {children}
    </div>
  );
};
