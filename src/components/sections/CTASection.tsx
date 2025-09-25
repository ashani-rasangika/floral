import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-lg p-8 md:p-12 shadow-2xl overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary animate-pulse" />
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Handcrafted with Love
                </Badge>
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Fresh flowers, delivered with care
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Transform any moment into something extraordinary with our artfully crafted arrangements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="default" size="lg" className="hover-scale shadow-lg">
                <Link to="/contact" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Order Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <Link to="/gallery">
                  Browse Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;