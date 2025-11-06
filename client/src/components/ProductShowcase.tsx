import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

const productImages = [
  { id: 1, title: "$1000 User Dashboard", filename: "user-1000.png", description: "Real user earning through platform" },
  { id: 2, title: "User Profile View", filename: "screenshot-1.png", description: "Complete player profiles and stats" },
  { id: 3, title: "Tournament Management", filename: "screenshot-2.png", description: "Create and manage tournaments instantly" },
  { id: 4, title: "Game Categories", filename: "screenshot-3.png", description: "All games on one platform" },
  { id: 5, title: "Leaderboards", filename: "screenshot-4.png", description: "Competitive rankings across all games" },
  { id: 6, title: "Live Games", filename: "screenshot-5.png", description: "Real-time game tracking" },
  { id: 7, title: "Event Organization", filename: "screenshot-6.png", description: "Organize events in moments" },
  { id: 8, title: "Player Stats", filename: "screenshot-7.png", description: "Comprehensive player analytics" },
  { id: 9, title: "Mobile Experience", filename: "screenshot-8.png", description: "Full mobile functionality" },
  { id: 10, title: "Analytics Dashboard", filename: "screenshot-9.png", description: "Data-driven insights" },
  { id: 11, title: "Payment Processing", filename: "screenshot-10.png", description: "Seamless payment integration" },
  { id: 12, title: "Game Details", filename: "screenshot-11.png", description: "Rich game information" },
  { id: 13, title: "User Activity", filename: "screenshot-12.png", description: "Track player engagement" },
  { id: 14, title: "Tournament Bracket", filename: "screenshot-13.png", description: "Professional bracket systems" },
  { id: 15, title: "Recent Activity", filename: "screenshot-14.png", description: "Live activity feed" },
];

export default function ProductShowcase() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageError, setImageError] = useState<Set<number>>(new Set());

  const handleImageError = (id: number) => {
    setImageError((prev) => new Set(Array.from(prev).concat(id)));
  };

  const selectedImageData = selectedImage 
    ? productImages.find((img) => img.id === selectedImage)
    : null;

  return (
    <section id="product-showcase" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Product Showcase
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real screenshots from our platform in action—showing users earning, organizing tournaments, and playing games across all categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
              data-testid={`card-screenshot-${image.id}`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
                  {!imageError.has(image.id) ? (
                    <>
                      <img
                        src={`/screenshots/${image.filename}`}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(image.id)}
                        data-testid={`img-screenshot-${image.id}`}
                      />
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-background/90 backdrop-blur-sm rounded-full p-3">
                          <Maximize2 className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-primary">{image.id}</span>
                      </div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        {image.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Upload: {image.filename}
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-4 border-t">
                  <h3 className="font-semibold mb-1" data-testid={`text-title-${image.id}`}>
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedImage && selectedImageData && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            data-testid="modal-screenshot"
          >
            <button
              className="absolute top-4 right-4 p-3 rounded-full bg-background border hover-elevate active-elevate-2"
              onClick={() => setSelectedImage(null)}
              data-testid="button-close-modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-6xl w-full">
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    {!imageError.has(selectedImage) ? (
                      <img
                        src={`/screenshots/${selectedImageData.filename}`}
                        alt={selectedImageData.title}
                        className="w-full h-auto max-h-[80vh] object-contain"
                        onError={() => handleImageError(selectedImage)}
                      />
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                            <span className="text-4xl font-bold text-primary">{selectedImage}</span>
                          </div>
                          <p className="text-lg font-medium mb-2">{selectedImageData.title}</p>
                          <p className="text-sm text-muted-foreground">
                            Screenshot preview will appear here once uploaded
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6 border-t">
                    <h3 className="text-xl font-bold mb-2">{selectedImageData.title}</h3>
                    <p className="text-muted-foreground">{selectedImageData.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
