
import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes } from "react";

interface AnimatedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
}

export const AnimatedLink = ({
  children,
  className,
  underline = true,
  ...props
}: AnimatedLinkProps) => {
  return (
    <a
      className={cn(
        "transition-colors duration-200 ease-in-out",
        underline && "hover-underline-animation",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
