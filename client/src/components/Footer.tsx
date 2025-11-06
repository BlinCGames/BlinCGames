import { Linkedin, Twitter, Mail } from "lucide-react";
import blincLogoWhite from "@assets/blinc-logo-white-tagline.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="mb-4">
              <img
                src={blincLogoWhite}
                alt="BlinC Games - We Play Games"
                className="h-16 w-auto"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="text-sm text-white/70 mb-4">
              The universal platform for organizing any game, anywhere, anytime. If you can play it, you can BlinC it.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover-elevate active-elevate-2 transition-colors text-white"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover-elevate active-elevate-2 transition-colors text-white"
                data-testid="link-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:investors@blincgames.com"
                className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover-elevate active-elevate-2 transition-colors text-white"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:james@blincgames.com"
                  className="text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-email"
                >
                  james@blincgames.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Media Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Press Coverage
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} BlinC Games. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Confidential investor materials • Not for public distribution
          </p>
        </div>
      </div>
    </footer>
  );
}
