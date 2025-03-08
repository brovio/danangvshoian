
import { cn } from "@/lib/utils";

interface CategoryTagProps {
  children: React.ReactNode;
  className?: string;
}

export const CategoryTag = ({ children, className }: CategoryTagProps) => {
  return (
    <div className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-primary-foreground", className)}>
      {children}
    </div>
  );
};
