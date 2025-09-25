import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Heart, MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-secondary/10">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-2xl mb-4 text-primary">Bloom & Petals</h4>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed max-w-md">
              Creating moments of beauty with premium bouquets and bespoke arrangements. 
              Every flower tells a story, and we're here to help you tell yours.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" }
              ].map(({ icon: Icon, label }) => (
                <div key={label} 
                     className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 cursor-pointer group hover-scale">
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="sr-only">{label}</span>
                </div>
              ))}
            </div>

            <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
              ✨ Serving beautiful arrangements since 2020
            </Badge>
          </div>

          {/* Contact Information */}
          <div>
            <h5 className="font-display text-lg mb-6 text-foreground">Get in Touch</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-medium">Visit Our Shop</p>
                  <address className="not-italic text-sm text-muted-foreground">
                    123 Floral Street<br />
                    Garden City, GC 12345
                  </address>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <Clock className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-medium">Open Hours</p>
                  <p className="text-sm text-muted-foreground">Mon–Sat: 9am–6pm</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-medium">Call Us</p>
                  <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">hello@bloomandpetals.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-display text-lg mb-6 text-foreground">Explore</h5>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/gallery", label: "Gallery" },
                { to: "/seasonal", label: "Seasonal Flowers" },
                { to: "/contact", label: "Contact Us" }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 story-link inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Special Services */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
              <h6 className="font-medium text-sm mb-2">Special Services</h6>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Wedding Arrangements</li>
                <li>• Corporate Events</li>
                <li>• Same-day Delivery</li>
                <li>• Custom Bouquets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary/20 bg-gradient-to-r from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              <span>© {new Date().getFullYear()} Bloom & Petals. Made with love for flower enthusiasts.</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors story-link">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors story-link">Terms of Service</a>
              <span>•</span>
              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                Fresh & Local
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;