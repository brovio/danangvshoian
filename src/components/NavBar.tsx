
import { useState, useEffect } from "react";
import { Menu, X, Award } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/CTAButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Directory", href: "/directory" },
  { label: "Da Nang", href: "/city/Da Nang" },
  { label: "Hoi An", href: "/city/Hoi An" },
  { label: "Reviews", href: "#reviews" },
  { label: "Games", href: "#games" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo className="relative z-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors hover-underline-animation"
                >
                  {item.label}
                </Link>
              ) : (
                <AnimatedLink
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                >
                  {item.label}
                </AnimatedLink>
              )
            ))}
            <Link to="/play-to-win" className="ml-2">
              <CTAButton 
                variant="primary" 
                size="md"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Award className="w-4 h-4" />
                Play to Win
              </CTAButton>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="relative z-10 block md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-0 transform transition-transform duration-300 ease-in-out",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0",
          "md:hidden"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 stagger-animation">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground text-2xl font-medium hover:text-primary animate-fade-in"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <AnimatedLink
                key={item.label}
                href={item.href}
                className="text-foreground text-2xl font-medium hover:text-primary animate-fade-in"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </AnimatedLink>
            )
          ))}
          <Link
            to="/play-to-win"
            className="text-foreground text-2xl font-medium animate-fade-in mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <CTAButton 
              variant="primary" 
              size="lg"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
            >
              <Award className="w-5 h-5" />
              Play to Win
            </CTAButton>
          </Link>
        </div>
      </div>
    </header>
  );
};
