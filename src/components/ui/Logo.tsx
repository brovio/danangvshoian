
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("font-display text-xl font-semibold", className)}>
      <span className="text-foreground">Da Nang</span>
      <span className="text-primary"> Vs </span>
      <span className="text-foreground">Hoi An</span>
    </div>
  );
};
