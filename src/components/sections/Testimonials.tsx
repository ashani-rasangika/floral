import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content: "Bloom & Petals created the most stunning bridal bouquet. Every detail was perfect, and the flowers stayed fresh all day!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Planner",
    content: "Their attention to detail is unmatched. I've worked with them on multiple events and they never disappoint.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Anniversary Customer",
    content: "The seasonal arrangements are always a surprise and delight. My wife absolutely loves the monthly deliveries.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="font-display text-3xl mb-4">What our customers say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about our floral artistry.
          </p>
        </header>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="elevated-card hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;