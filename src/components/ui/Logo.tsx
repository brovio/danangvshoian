
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("font-display text-xl font-semibold", className)}>
      <span className="text-primary">Travel</span>
      <span className="text-foreground">Lens</span>
    </div>
  );
};
