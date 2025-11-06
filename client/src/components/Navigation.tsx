import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import blincLogoBlack from "@assets/blinc-logo-black.png";
import blincLogoWhite from "@assets/blinc-logo-white-tagline.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b shadow-sm" : "bg-secondary/30 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md -ml-3"
            data-testid="button-logo"
          >
            <img
              src={isScrolled ? blincLogoBlack : blincLogoWhite}
              alt="BlinC Games"
              className="h-10 lg:h-12 w-auto transition-opacity duration-300"
              data-testid="img-nav-logo"
            />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("highlights")}
              className={`text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              data-testid="link-highlights"
            >
              Highlights
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-investors-nav"
            >
              Investors & Partners
            </Button>
          </div>

          <button
            className={`lg:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("highlights")}
              className="block w-full text-left px-3 py-2 rounded-md hover-elevate active-elevate-2"
              data-testid="link-highlights-mobile"
            >
              Highlights
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
              data-testid="button-investors-mobile"
            >
              Investors & Partners
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
