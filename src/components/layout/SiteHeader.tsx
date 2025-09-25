import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinkBase = "text-sm font-medium text-white/80 hover:text-white transition-colors";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-rose-dark-gradient backdrop-blur-md border-b border-white/10 shadow-[var(--shadow-elegant)]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl text-white">Bloom & Petals</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <NavLink to="/" className={navLinkBase}>
            Home
          </NavLink>
          <NavLink to="/gallery" className={navLinkBase}>
            Gallery
          </NavLink>
          <NavLink to="/seasonal" className={navLinkBase}>
            Seasonal
          </NavLink>
          <NavLink to="/contact" className={navLinkBase}>
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="soft" className="hidden md:inline-flex">
            <Link to="/gallery">Shop Bouquets</Link>
          </Button>
          <Button asChild variant="hero">
            <Link to="/contact">Order Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
