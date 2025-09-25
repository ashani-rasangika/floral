import { Helmet } from "react-helmet-async";
import img4 from "@/assets/gallery-4.jpg";
import img5 from "@/assets/gallery-5.jpg";
import img6 from "@/assets/gallery-6.jpg";
import springPastelA from "@/assets/gallery/spring-pastel-a.jpg";
import summerWildflowerA from "@/assets/gallery/summer-wildflower-a.jpg";
import autumnDahliaA from "@/assets/gallery/autumn-dahlia-a.jpg";
import roseBridalA from "@/assets/gallery/rose-bridal-a.jpg";
import orchidModernA from "@/assets/gallery/orchid-modern-a.jpg";
import tulipCascadeA from "@/assets/gallery/tulip-cascade-a.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const seasonalCategories = {
  Spring: [
    {
      id: 1,
      name: "Spring Pastel Dream",
      price: "$68",
      img: springPastelA,
      alt: "Soft pastel spring flowers in gentle arrangement",
      description: "Delicate pastel blooms celebrating the renewal of spring.",
    },
    {
      id: 2,
      name: "Tulip Cascade",
      price: "$72",
      img: tulipCascadeA,
      alt: "Cascading tulips in spring arrangement",
      description: "Fresh tulips arranged in a natural cascading style.",
    },
    {
      id: 3,
      name: "Rose Bridal Elegance",
      price: "$95",
      img: roseBridalA,
      alt: "Elegant white and pink bridal roses",
      description: "Classic roses perfect for spring celebrations and weddings.",
    },
  ],
  Summer: [
    {
      id: 4,
      name: "Summer Wildflower",
      price: "$58",
      img: summerWildflowerA,
      alt: "Vibrant summer wildflower bouquet",
      description: "Wild and free summer blooms bursting with color and energy.",
    },
    {
      id: 5,
      name: "Orchid Modern Chic",
      price: "$110",
      img: orchidModernA,
      alt: "Contemporary orchid arrangement",
      description: "Sophisticated orchids with clean, modern styling.",
    },
    {
      id: 6,
      name: "Green & White Serenity",
      price: "$90",
      img: img4,
      alt: "Monochrome white and green arrangement",
      description: "Elegant whites and greens with lush textures for timeless style.",
    },
  ],
  Autumn: [
    {
      id: 7,
      name: "Dahlia Harvest",
      price: "$85",
      img: img5,
      alt: "Autumn bouquet with dahlias and copper foliage",
      description: "Warm-toned dahlias with textured foliage, perfect for cozy gatherings.",
    },
    {
      id: 8,
      name: "Autumn Dahlia Warmth",
      price: "$78",
      img: autumnDahliaA,
      alt: "Rich autumn dahlia arrangement",
      description: "Deep autumn dahlias in warm copper and burgundy tones.",
    },
  ],
  Winter: [
    {
      id: 9,
      name: "Ikebana Minimal",
      price: "$75",
      img: img6,
      alt: "Minimalist ikebana arrangement",
      description: "Asymmetric line and form with thoughtful negative space.",
    },
  ],
};

const allFlowers = Object.values(seasonalCategories).flat();

const Seasonal = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '';
  const structured = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: allFlowers.map((p, index) => ({
      '@type': 'Product',
      position: index + 1,
      name: p.name,
      image: p.img,
      offers: { '@type': 'Offer', price: p.price.replace(/\$/,'') , priceCurrency: 'USD', availability: 'https://schema.org/InStock' }
    })),
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Helmet>
        <title>Seasonal Flowers | Bloom & Petals</title>
        <meta name="description" content="Explore our seasonal flowers and limited-time bouquets crafted from the freshest blooms." />
        {canonical && <link rel="canonical" href={canonical} />}
        <script type="application/ld+json">{JSON.stringify(structured)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center animate-fade-in">
            <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/30">
              🌸 Seasonal Collection
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
              Seasonal Flowers
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Limited-time bouquets inspired by the season's freshest blooms, carefully curated to capture nature's ever-changing beauty.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        
        {Object.entries(seasonalCategories).map(([season, flowers], index) => (
          <div key={season} className="mb-16 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="relative mb-8">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="relative">
                  <h2 className="font-display text-3xl md:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {season}
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full" />
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1">
                  {flowers.length} {flowers.length === 1 ? 'arrangement' : 'arrangements'}
                </Badge>
              </div>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {flowers.map((s, flowerIndex) => (
                <Card 
                  key={s.id} 
                  className="overflow-hidden elevated-card group cursor-pointer border-0 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2 + flowerIndex * 0.1}s` }}
                >
                  <CardHeader className="p-0 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={s.img} 
                      alt={s.alt} 
                      loading="lazy" 
                      className="w-full h-64 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110" 
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-white/90 text-primary border-0 font-semibold shadow-lg">
                        {s.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-b-lg" />
                    <div className="relative">
                      <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                        {s.name}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Seasonal;
