import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import roseBridalA from "@/assets/gallery/rose-bridal-a.jpg";
import roseBridalB from "@/assets/gallery/rose-bridal-b.jpg";
import springPastelA from "@/assets/gallery/spring-pastel-a.jpg";
import springPastelB from "@/assets/gallery/spring-pastel-b.jpg";
import summerWildflowerA from "@/assets/gallery/summer-wildflower-a.jpg";
import summerWildflowerB from "@/assets/gallery/summer-wildflower-b.jpg";
import monoWhiteGreenA from "@/assets/gallery/white-green-mono-a.jpg";
import monoWhiteGreenB from "@/assets/gallery/white-green-mono-b.jpg";
import autumnDahliaA from "@/assets/gallery/autumn-dahlia-a.jpg";
import autumnDahliaB from "@/assets/gallery/autumn-dahlia-b.jpg";
import ikebanaMinimalA from "@/assets/gallery/ikebana-minimal-a.jpg";
import ikebanaMinimalB from "@/assets/gallery/ikebana-minimal-b.jpg";
import peonyBlushA from "@/assets/gallery/peony-blush-a.jpg";
import peonyBlushB from "@/assets/gallery/peony-blush-b.jpg";
import tulipCascadeA from "@/assets/gallery/tulip-cascade-a.jpg";
import tulipCascadeB from "@/assets/gallery/tulip-cascade-b.jpg";
import orchidModernA from "@/assets/gallery/orchid-modern-a.jpg";
import orchidModernB from "@/assets/gallery/orchid-modern-b.jpg";
import sunflowerRusticA from "@/assets/gallery/sunflower-rustic-a.jpg";
import sunflowerRusticB from "@/assets/gallery/sunflower-rustic-b.jpg";
import ranunculusRomanticA from "@/assets/gallery/ranunculus-romantic-a.jpg";
import ranunculusRomanticB from "@/assets/gallery/ranunculus-romantic-b.jpg";
import hydrangeaBlueA from "@/assets/gallery/hydrangea-blue-a.jpg";
import hydrangeaBlueB from "@/assets/gallery/hydrangea-blue-b.jpg";

const galleryCategories = {
  all: "All Arrangements",
  bridal: "Bridal & Wedding",
  seasonal: "Seasonal Collections", 
  modern: "Modern & Minimalist",
  classic: "Classic & Traditional"
};

const galleryItems = [
  { 
    primary: roseBridalA, 
    hover: roseBridalB, 
    alt: "Bridal bouquet of white roses and peonies with eucalyptus",
    title: "Bridal Elegance",
    category: "bridal",
    description: "Timeless white roses with eucalyptus",
    price: "$125"
  },
  { 
    primary: springPastelA, 
    hover: springPastelB, 
    alt: "Pastel spring arrangement with blush roses, tulips and ranunculus",
    title: "Spring Pastels",
    category: "seasonal",
    description: "Soft blush roses and delicate tulips",
    price: "$85"
  },
  { 
    primary: summerWildflowerA, 
    hover: summerWildflowerB, 
    alt: "Vibrant summer wildflower bouquet with sunflowers and delphinium",
    title: "Summer Wildflowers",
    category: "seasonal",
    description: "Vibrant sunflowers with wild accents",
    price: "$75"
  },
  { 
    primary: monoWhiteGreenA, 
    hover: monoWhiteGreenB, 
    alt: "Monochrome white and green arrangement with garden roses and hydrangea",
    title: "Monochrome Garden",
    category: "modern",
    description: "Clean white and green palette",
    price: "$95"
  },
  { 
    primary: autumnDahliaA, 
    hover: autumnDahliaB, 
    alt: "Autumn bouquet featuring dahlias, roses and chrysanthemum",
    title: "Autumn Dahlias",
    category: "seasonal",
    description: "Rich dahlias in autumn hues",
    price: "$80"
  },
  { 
    primary: ikebanaMinimalA, 
    hover: ikebanaMinimalB, 
    alt: "Minimalist ikebana-inspired floral arrangement",
    title: "Ikebana Inspired",
    category: "modern",
    description: "Japanese minimalist artistry",
    price: "$110"
  },
  { 
    primary: peonyBlushA, 
    hover: peonyBlushB, 
    alt: "Blush peony bouquet with garden greenery",
    title: "Peony Blush",
    category: "classic",
    description: "Romantic blush peonies",
    price: "$105"
  },
  { 
    primary: tulipCascadeA, 
    hover: tulipCascadeB, 
    alt: "Cascading tulip bouquet in soft pink and white",
    title: "Tulip Cascade",
    category: "bridal",
    description: "Cascading pink and white tulips",
    price: "$90"
  },
  { 
    primary: orchidModernA, 
    hover: orchidModernB, 
    alt: "Modern phalaenopsis orchid arrangement",
    title: "Modern Orchids",
    category: "modern",
    description: "Contemporary orchid design",
    price: "$135"
  },
  { 
    primary: sunflowerRusticA, 
    hover: sunflowerRusticB, 
    alt: "Rustic sunflower bouquet with wild accents",
    title: "Rustic Sunflowers",
    category: "classic",
    description: "Country charm with sunflowers",
    price: "$65"
  },
  { 
    primary: ranunculusRomanticA, 
    hover: ranunculusRomanticB, 
    alt: "Romantic ranunculus bouquet in pastel tones",
    title: "Romantic Ranunculus",
    category: "bridal",
    description: "Layered pastel ranunculus",
    price: "$100"
  },
  { 
    primary: hydrangeaBlueA, 
    hover: hydrangeaBlueB, 
    alt: "Classic blue hydrangea arrangement",
    title: "Blue Hydrangeas",
    category: "classic",
    description: "Classic blue hydrangea beauty",
    price: "$70"
  },
];

const Gallery = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '';
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Helmet>
        <title>Gallery | Bloom & Petals Flower Shop</title>
        <meta name="description" content="Browse our gallery of elegant flower arrangements and bouquets from Bloom & Petals." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            Gallery of Arrangements
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            Discover our curated collection of stunning floral artistry, where each arrangement tells its own unique story
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(galleryCategories).map(([key, label]) => (
              <Badge
                key={key}
                variant={activeCategory === key ? "default" : "secondary"}
                className={`px-6 py-2 text-sm font-medium cursor-pointer transition-all duration-300 hover-scale ${
                  activeCategory === key 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-secondary/50 hover:bg-secondary text-secondary-foreground'
                }`}
                onClick={() => setActiveCategory(key)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-2xl elevated-card animate-fade-in hover-scale"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.primary}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
                />
                <img
                  src={item.hover}
                  alt={`${item.alt} — alternate angle`}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover opacity-0 scale-110 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                  aria-hidden="true"
                />
                
                {/* Price Badge - Top Right Corner */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
                  <Badge className="bg-white/95 text-primary border-0 font-bold shadow-lg backdrop-blur-sm">
                    {item.price}
                  </Badge>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90 mb-3">{item.description}</p>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {galleryCategories[item.category as keyof typeof galleryCategories]}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No arrangements found in this category.</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Love What You See?</h2>
          <p className="text-muted-foreground mb-8">
            Each arrangement can be customized to your preferences. Contact us to bring your vision to life.
          </p>
          <Badge 
            variant="default" 
            className="px-8 py-3 text-base cursor-pointer hover-scale bg-primary text-primary-foreground"
            onClick={() => window.location.href = '/contact'}
          >
            Get in Touch
          </Badge>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
