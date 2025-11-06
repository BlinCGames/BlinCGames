import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import event1 from "@assets/stock_images/esports_gaming_tourn_827d1eb5.jpg";
import event2 from "@assets/stock_images/esports_gaming_tourn_6535ad56.jpg";
import event3 from "@assets/stock_images/esports_gaming_tourn_db33f5ec.jpg";
import event4 from "@assets/stock_images/esports_gaming_tourn_d975d137.jpg";
import event5 from "@assets/stock_images/esports_gaming_tourn_47fc4f26.jpg";
import event6 from "@assets/stock_images/esports_gaming_tourn_337abe79.jpg";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
  videoUrl?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    type: "image",
    src: event1,
    title: "BlinC Gaming Tournament 2024",
    description: "Competitive gaming at its finest"
  },
  {
    id: "2",
    type: "image",
    src: event2,
    title: "Esports Championship Finals",
    description: "Players competing for top prizes"
  },
  {
    id: "3",
    type: "video",
    src: event3,
    thumbnail: event3,
    title: "Event Highlight Reel",
    description: "Watch the best moments from our events",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "4",
    type: "image",
    src: event4,
    title: "Community Gaming Night",
    description: "Bringing gamers together"
  },
  {
    id: "5",
    type: "image",
    src: event5,
    title: "Tournament Arena",
    description: "State-of-the-art gaming setup"
  },
  {
    id: "6",
    type: "image",
    src: event6,
    title: "Championship Celebration",
    description: "Winners and community members"
  }
];

export default function EventGallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <section id="event-gallery" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Event Gallery
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See BlinC in action at tournaments, community events, and gaming competitions around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
              onClick={() => setSelectedMedia(item)}
              data-testid={`card-media-${item.id}`}
            >
              <CardContent className="p-0 relative aspect-video">
                <img
                  src={item.type === "video" ? item.thumbnail : item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-media-${item.id}`}
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                    <div className="bg-primary rounded-full p-4">
                      <Play className="h-8 w-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-white/80 text-xs">{item.description}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedMedia} onOpenChange={(open) => !open && setSelectedMedia(null)}>
        <DialogContent className="max-w-5xl p-0" data-testid="dialog-media-viewer">
          <DialogTitle className="sr-only">
            {selectedMedia?.title || "Media Viewer"}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={() => setSelectedMedia(null)}
            data-testid="button-close-media"
          >
            <X className="h-4 w-4" />
          </Button>
          {selectedMedia && (
            <div className="relative">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  data-testid="img-media-fullsize"
                />
              ) : (
                <div className="aspect-video">
                  <iframe
                    src={selectedMedia.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={selectedMedia.title}
                    data-testid="iframe-media-video"
                  />
                </div>
              )}
              <div className="p-6 bg-background">
                <h3 className="font-semibold text-lg mb-2">
                  {selectedMedia.title}
                </h3>
                {selectedMedia.description && (
                  <p className="text-muted-foreground">
                    {selectedMedia.description}
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
