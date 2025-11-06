import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/BlinC_Games_app_interface_hero_da8128a6.png";
import blincLogoWhite from "@assets/blinc-logo-white-tagline.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
      {/* Navy blue background with subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            {/* BlinC Logo */}
            <div className="flex items-center">
              <img
                src={blincLogoWhite}
                alt="BlinC - We Play Games"
                className="h-32 lg:h-40 w-auto"
                data-testid="img-blinc-logo"
              />
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
              If You Can Play It,{" "}
              <span className="text-primary">
                You Can BlinC It
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
              The universal platform for organizing any game, anywhere, anytime. From sports to esports to board games, we connect players, organizers, venues, and fans—while paying users for organizing, winning, and referring others.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="default"
                onClick={() => scrollToSection("contact")}
                className="group"
                data-testid="button-investors-partners"
              >
                Investors & Partners
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Market Stats */}
            <div className="flex items-center gap-6 lg:gap-8 pt-4 flex-wrap">
              <div>
                <div className="text-3xl font-bold text-primary">$1.3T</div>
                <div className="text-sm text-white/70">Sports Market</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-primary">3B+</div>
                <div className="text-sm text-white/70">Global Gamers</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-primary">2.5B</div>
                <div className="text-sm text-white/70">Athletes Worldwide</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="BlinC Games App Interface"
              className="relative rounded-xl lg:rounded-2xl shadow-2xl w-full border-4 border-white/10"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
