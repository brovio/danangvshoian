
import { cn } from "@/lib/utils";
interface LogoProps {
  className?: string;
}
export const Logo = ({
  className
}: LogoProps) => {
  return <div className={cn("font-noto font-bold text-[1.7rem] tracking-tighter", className)}>
      <span className="text-foreground font-extrabold tracking-tighter relative" style={{
        textShadow: "0 0 1px rgba(239, 68, 68, 1)",
        WebkitTextStroke: "1px rgba(239, 68, 68, 0.7)"
      }}>DA NANG</span>
      <span className="text-red-500 font-black mx-0.5 relative" style={{
        textShadow: "0 0 5px rgba(239, 68, 68, 0.5)",
        animation: "shake 3s ease-in-out infinite",
        WebkitTextStroke: "2px rgba(0, 0, 0, 0.8)"
      }}> VS </span>
      <span className="text-foreground font-extrabold tracking-tighter relative" style={{
        textShadow: "0 0 1px rgba(239, 68, 68, 1)",
        WebkitTextStroke: "1px rgba(239, 68, 68, 0.7)"
      }}>HOI AN</span>
    </div>;
};
