import heroImage from "@/assets/hero-flowers.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
        <article className="animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4">
            Luxury flower shop for every occasion
          </h1>
          <p className="text-muted-foreground text-lg mb-6 max-w-prose">
            Discover handcrafted bouquets and seasonal arrangements designed
            to make moments unforgettable.
          </p>
          <div className="flex gap-3">
            <Button asChild variant="hero" size="lg" className="hover-scale">
              <Link to="/gallery">Shop bouquets</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Custom order</Link>
            </Button>
          </div>
        </article>
        <div className="relative">
          <div className="absolute -inset-6 rounded-2xl bg-hero-gradient blur-2xl opacity-60 pointer-events-none" aria-hidden="true" />
          <img
            src={heroImage}
            alt="Elegant bouquet of roses, peonies and ranunculus in soft blush and cream tones"
            className="w-full rounded-2xl elevated-card"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
