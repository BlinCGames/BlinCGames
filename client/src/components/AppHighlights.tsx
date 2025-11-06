import overviewImage from "@assets/generated_images/BlinC_marketplace_overview_corrected_3184d987.png";

export default function AppHighlights() {
  return (
    <section id="highlights" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            The Marketplace for Games
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BlinC brings together everything you need to organize, play, and compete in any game—all in one powerful platform.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={overviewImage}
              alt="BlinC Overview: Connect, Organize, All Games, Leaderboards, Ecosystem, Data Marketplace"
              className="w-full h-auto"
              data-testid="img-overview"
            />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Connect</h3>
              <p className="text-sm text-muted-foreground">Challenge others & play live games</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Organize</h3>
              <p className="text-sm text-muted-foreground">Tournaments & leagues in moments</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">All Games</h3>
              <p className="text-sm text-muted-foreground">Sports, esports, board games all on 1 platform</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Leaderboards</h3>
              <p className="text-sm text-muted-foreground">For all players & games</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Ecosystem</h3>
              <p className="text-sm text-muted-foreground">Connects organizers, venues, officials, sponsors & more</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Data Marketplace</h3>
              <p className="text-sm text-muted-foreground">Tracking spending in sports and games</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
