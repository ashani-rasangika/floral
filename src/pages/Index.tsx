import { Helmet } from "react-helmet-async";
import IntroBackdrop from "@/components/sections/IntroBackdrop";
import Hero from "@/components/sections/Hero";
import FeaturedBouquets from "@/components/sections/FeaturedBouquets";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '';
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: 'Bloom & Petals',
    url: canonical,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Floral Street',
      addressLocality: 'Garden City',
      addressRegion: 'CA',
      postalCode: '90210',
      addressCountry: 'US'
    },
    openingHours: 'Mo-Sa 09:00-18:00',
  };

  return (
    <main>
      <Helmet>
        <title>Bloom & Petals | Luxury Flower Shop</title>
        <meta name="description" content="Featured bouquets, seasonal flowers and bespoke arrangements. Order premium flowers from Bloom & Petals." />
        {canonical && <link rel="canonical" href={canonical} />}
        <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
      </Helmet>
      <IntroBackdrop />
      <Hero />
      <FeaturedBouquets />
      <Testimonials />
      <CTASection />
    </main>
  );
};

export default Index;
