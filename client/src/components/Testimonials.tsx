import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Johnson",
    role: "Tournament Organizer",
    company: "Midwest Gaming League",
    content: "BlinC transformed how we organize tournaments. The automated payouts and referral system have increased our participant numbers by 300%. It's a game-changer for community organizers.",
    initials: "MJ"
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Competitive Player",
    company: "Esports Pro",
    content: "Finally, a platform that rewards players fairly. The weekly payouts are reliable, and the 10-year royalty network means I'm building long-term value every time I compete or refer friends.",
    initials: "SC"
  },
  {
    id: "3",
    name: "David Rodriguez",
    role: "Venue Owner",
    company: "GameZone Arena",
    content: "Our partnership with BlinC brought 40% more foot traffic. Their platform makes it effortless to host events, manage registrations, and process payments. Our members love it.",
    initials: "DR"
  },
  {
    id: "4",
    name: "Jennifer Williams",
    role: "Community Manager",
    company: "National Wiffle Ball League",
    content: "BlinC's universal approach to gaming is brilliant. Whether it's sports, esports, or board games, the platform adapts perfectly. Their team truly understands what organizers need.",
    initials: "JW"
  },
  {
    id: "5",
    name: "Alex Kim",
    role: "Casual Player",
    content: "I've earned over $500 just from referrals! BlinC makes it easy to find games, connect with players, and get paid. The interface is intuitive, and the community is incredible.",
    initials: "AK"
  },
  {
    id: "6",
    name: "Robert Martinez",
    role: "Sponsor",
    company: "Dyeislife",
    content: "Partnering with BlinC gave us direct access to thousands of engaged gamers. The platform's data insights help us target the right audience, and the ROI has exceeded expectations.",
    initials: "RM"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Trusted by Players, Organizers & Partners
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See what our community members and partners are saying about their experience with BlinC Games.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="relative hover-elevate"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary opacity-20" />
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-content-${testimonial.id}`}>
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <Avatar className="h-12 w-12">
                    {testimonial.avatar && (
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    )}
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground truncate" data-testid={`text-testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {testimonial.role}
                      {testimonial.company && (
                        <>
                          <span className="mx-1">•</span>
                          <span>{testimonial.company}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
