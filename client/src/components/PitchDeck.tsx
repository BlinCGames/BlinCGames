import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Maximize2, ExternalLink } from "lucide-react";

const PITCH_DECK_URL = "/blinc-pitch-deck.pdf";

const deckSections = [
  { title: "Connecting People Through Games", page: 1 },
  { title: "The Problem", page: 2 },
  { title: "The Solution", page: 3 },
  { title: "The Flywheel", page: 4 },
  { title: "MVP & Features", page: 5 },
  { title: "Traction To Date", page: 6 },
  { title: "Business Model", page: 7 },
  { title: "Core Team", page: 8 },
  { title: "Market Opportunity", page: 9 },
];

export default function PitchDeck() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PITCH_DECK_URL;
    link.download = 'BlinC-Pitch-Deck.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFullscreen = () => {
    window.open(PITCH_DECK_URL, '_blank');
  };

  const handleSectionClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="pitch-deck" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Investor Pitch Deck
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our comprehensive presentation covering market opportunity, product vision, and financial projections.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
              Quick Navigation
            </h3>
            {deckSections.map((section, index) => (
              <button
                key={index}
                onClick={() => handleSectionClick(section.page)}
                className={`w-full text-left px-4 py-3 rounded-md transition-all ${
                  currentPage === section.page
                    ? "bg-primary text-primary-foreground"
                    : "hover-elevate active-elevate-2"
                }`}
                data-testid={`button-deck-section-${index}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{section.title}</span>
                  <span className="text-xs opacity-70">Pg {section.page}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-0">
                <div className="w-full" style={{ height: '600px' }}>
                  <iframe
                    src={`${PITCH_DECK_URL}#page=${currentPage}&view=FitH`}
                    className="w-full h-full rounded-t-lg"
                    title="BlinC Games Pitch Deck"
                    data-testid="iframe-pitch-deck"
                  />
                </div>

                <div className="p-6 border-t">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Button
                      onClick={handleDownload}
                      variant="default"
                      data-testid="button-download-deck"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Deck
                    </Button>
                    <Button
                      onClick={handleFullscreen}
                      variant="outline"
                      data-testid="button-fullscreen"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open in New Tab
                    </Button>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Key Highlights</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• $252B market opportunity across sports, esports, and board games</li>
                      <li>• 9,427+ players, $63K+ in paid entry fees, 5% service fee model</li>
                      <li>• Unique Royalty Network with 10-year referral rewards</li>
                      <li>• Official partnerships with Dyeislife, WSBG, and National Wiffle Ball League</li>
                      <li>• Seeking $1M to reach 500K users with strategic partner acquisition</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
