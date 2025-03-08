
import { Logo } from "@/components/ui/Logo";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-slide-in-right" style={{animationDelay: "0.1s"}}>
            <Logo className="mb-4" />
            <p className="text-muted-foreground mb-6">
              Your ultimate guide to exploring and comparing the best experiences in Hoi An and Da Nang.
            </p>
            <div className="flex space-x-4">
              <AnimatedLink href="#" className="text-muted-foreground hover:text-primary" underline={false}>
                <Facebook size={20} />
              </AnimatedLink>
              <AnimatedLink href="#" className="text-muted-foreground hover:text-primary" underline={false}>
                <Twitter size={20} />
              </AnimatedLink>
              <AnimatedLink href="#" className="text-muted-foreground hover:text-primary" underline={false}>
                <Instagram size={20} />
              </AnimatedLink>
              <AnimatedLink href="#" className="text-muted-foreground hover:text-primary" underline={false}>
                <Youtube size={20} />
              </AnimatedLink>
            </div>
          </div>

          <div className="animate-slide-in-right" style={{animationDelay: "0.2s"}}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="/" className="text-muted-foreground hover:text-foreground">Home</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#listings" className="text-muted-foreground hover:text-foreground">Top Listings</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#reviews" className="text-muted-foreground hover:text-foreground">Reviews</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#games" className="text-muted-foreground hover:text-foreground">Games</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#about" className="text-muted-foreground hover:text-foreground">About Us</AnimatedLink>
              </li>
            </ul>
          </div>

          <div className="animate-slide-in-right" style={{animationDelay: "0.3s"}}>
            <h3 className="text-lg font-semibold mb-4">Featured Cities</h3>
            <ul className="space-y-3">
              <li>
                <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">Hoi An Guide</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">Da Nang Guide</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">Hue Day Trips</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">My Son Sanctuary</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#" className="text-muted-foreground hover:text-foreground">Ba Na Hills</AnimatedLink>
              </li>
            </ul>
          </div>

          <div className="animate-slide-in-right" style={{animationDelay: "0.4s"}}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">123 Travel Street, Da Nang, Vietnam</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary flex-shrink-0" />
                <AnimatedLink href="tel:+84123456789" className="text-muted-foreground hover:text-foreground">
                  +84 123 456 789
                </AnimatedLink>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary flex-shrink-0" />
                <AnimatedLink href="mailto:info@travellens.com" className="text-muted-foreground hover:text-foreground">
                  info@travellens.com
                </AnimatedLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2023 TravelLens. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <AnimatedLink href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </AnimatedLink>
            <AnimatedLink href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </AnimatedLink>
            <AnimatedLink href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </AnimatedLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
