import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Demo {
  title: string;
  category: string;
  description: string;
  duration: string;
  thumbnailColor?: string;
  videoUrl?: string;
  isActualVideo?: boolean;
}

const demos: Demo[] = [
  {
    title: "BlinC Halftimes Showcase",
    category: "Platform Demo",
    description: "See BlinC in action at real gaming events. Watch how our platform connects players, organizers, and venues to create seamless tournament experiences.",
    duration: "Video",
    videoUrl: "/blinc-halftimes-v3.mov",
    isActualVideo: true,
    thumbnailColor: "from-red-600 to-red-800",
  },
  {
    title: "Powderpuff Football Tournament",
    category: "Event Highlights",
    description: "Watch exciting highlights from a BlinC-organized Powderpuff football tournament. See how our platform brings communities together for competitive gaming and sports events.",
    duration: "Video",
    videoUrl: "/blinc-powderpuff-v2.mov",
    isActualVideo: true,
    thumbnailColor: "from-blue-600 to-cyan-600",
  },
  {
    title: "Royalty Network Explained",
    category: "Business Model",
    description: "See how our 10-year referral system creates passive income for organizers, venues, and players. Network effects that benefit everyone.",
    duration: "2:30",
    thumbnailColor: "from-purple-500 to-pink-500",
  },
];

export default function Demos() {
  const [selectedDemo, setSelectedDemo] = useState<Demo | null>(null);

  const handlePlayDemo = (demo: Demo) => {
    if (demo.isActualVideo) {
      setSelectedDemo(demo);
    } else {
      console.log(`Demo: ${demo.title} - Video placeholder`);
    }
  };

  return (
    <section id="demos" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            See BlinC in Action
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Watch how BlinC simplifies tournament organization, connects the gaming ecosystem, and creates sustainable revenue streams for all participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all"
              data-testid={`card-demo-${index}`}
            >
              <CardContent className="p-0">
                <div 
                  className="relative aspect-video group cursor-pointer" 
                  onClick={() => handlePlayDemo(demo)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${demo.thumbnailColor} opacity-90`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                      {demo.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                      {demo.duration}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-xl font-semibold">
                    {demo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {demo.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full"
                    onClick={() => handlePlayDemo(demo)}
                    data-testid={`button-play-demo-${index}`}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" data-testid="button-view-all-demos">
            <ExternalLink className="mr-2 h-4 w-4" />
            View All Demo Materials
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedDemo} onOpenChange={(open) => !open && setSelectedDemo(null)}>
        <DialogContent className="max-w-6xl p-0" data-testid="dialog-video-player">
          <DialogTitle className="sr-only">
            {selectedDemo?.title || "Video Player"}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={() => setSelectedDemo(null)}
            data-testid="button-close-video"
          >
            <X className="h-4 w-4" />
          </Button>
          {selectedDemo && selectedDemo.videoUrl && (
            <div className="relative bg-black">
              <video
                src={selectedDemo.videoUrl}
                controls
                autoPlay
                preload="none"
                className="w-full h-auto max-h-[85vh]"
                data-testid="video-player"
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-6 bg-background">
                <h3 className="font-semibold text-lg mb-2">
                  {selectedDemo.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedDemo.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
