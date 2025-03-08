
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("font-noto font-bold text-2xl tracking-wide", className)}>
      <span className="text-foreground">Da Nang</span>
      <span className="text-red-500 font-bold mx-1" style={{ 
        textShadow: "0 0 5px rgba(239, 68, 68, 0.5)"
      }}> VS </span>
      <span className="text-foreground">Hoi An</span>
    </div>
  );
};
