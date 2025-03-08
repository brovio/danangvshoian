
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export const CTAButton = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        "relative overflow-hidden transition-all duration-300 rounded-md font-medium inline-flex items-center justify-center",
        "before:content-[''] before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20",
        "transform hover:translate-y-[-2px] active:translate-y-[0px]",
        size === "sm" && "text-sm px-3 py-1.5",
        size === "md" && "text-base px-4 py-2",
        size === "lg" && "text-lg px-6 py-3",
        variant === "primary" && "bg-primary text-primary-foreground shadow-sm",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        variant === "outline" && "bg-transparent border border-border text-foreground hover:bg-secondary/50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
