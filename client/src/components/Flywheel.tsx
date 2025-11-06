import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Coins, Award } from "lucide-react";
import flywheelImage from "@assets/generated_images/BlinC_Flywheel_stakeholder_diagram_ae843627.png";

export default function Flywheel() {
  return (
    <section id="flywheel" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Network Effects</span>
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            The BlinC Flywheel
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A powerful ecosystem where every participant creates value for everyone else. Organizers sustain communities, players compete, sponsors reach audiences, and venues provide infrastructure—all in a continuous cycle.
          </p>
        </div>

        {/* Flywheel Visualization */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={flywheelImage}
              alt="The BlinC Flywheel - Organizers sustain communities, Players compete and play, Sponsors want to reach players, Venues are the infrastructure"
              className="w-full h-auto"
              data-testid="img-flywheel"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            Organizers connect players to venues, attracting sponsors. Each stakeholder strengthens the others, creating sustainable network effects that accelerate platform growth.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <Card className="text-center" data-testid="card-metric-network">
            <CardContent className="p-6 lg:p-8">
              <Coins className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">10 Years</div>
              <div className="text-sm text-muted-foreground">
                Royalty Network - organizers earn from referrals for a decade
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center" data-testid="card-metric-payouts">
            <CardContent className="p-6 lg:p-8">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Weekly</div>
              <div className="text-sm text-muted-foreground">
                Automated payouts to winners, organizers, and venues
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center" data-testid="card-metric-fees">
            <CardContent className="p-6 lg:p-8">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">5% Fee</div>
              <div className="text-sm text-muted-foreground">
                Simple revenue model on paid entry fees and transactions
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
