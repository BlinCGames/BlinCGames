import ContactForm from "@/components/ContactForm";
import blincLogoWhite from "@assets/blinc-logo-white-tagline.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center mb-6">
            <img
              src={blincLogoWhite}
              alt="BlinC - We Play Games"
              className="h-24 lg:h-32 w-auto"
              data-testid="img-blinc-logo"
            />
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
            If You Can Play It,{" "}
            <span className="text-primary">
              You Can BlinC It
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            The universal platform for organizing any game, anywhere, anytime.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
