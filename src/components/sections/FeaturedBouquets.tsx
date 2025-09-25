import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img1 from "@/assets/gallery-1.jpg";
import img2 from "@/assets/gallery-2.jpg";
import img3 from "@/assets/gallery-3.jpg";

const featured = [
  { id: 1, name: "Bridal Classic", price: "$120", img: img1, alt: "Bridal bouquet of white roses and peonies" },
  { id: 2, name: "Spring Pastels", price: "$95", img: img2, alt: "Pastel spring arrangement with blush roses and tulips" },
  { id: 3, name: "Summer Wild", price: "$110", img: img3, alt: "Vibrant wildflower bouquet with sunflowers and delphinium" },
];

const FeaturedBouquets = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h2 className="font-display text-3xl">Featured bouquets</h2>
          <p className="text-muted-foreground mt-2">Our most loved arrangements</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((b) => (
            <Card key={b.id} className="overflow-hidden elevated-card group cursor-pointer">
              <CardHeader className="p-0 overflow-hidden">
                <img src={b.img} alt={b.alt} loading="lazy" className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{b.name}</CardTitle>
                  <span className="text-primary font-medium">{b.price}</span>
                </div>
                <Button asChild variant="soft" className="mt-4 w-full">
                  <Link to="/contact">Order this</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBouquets;
