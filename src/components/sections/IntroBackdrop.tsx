import { useState, useEffect } from "react";
import heroBackground from "@/assets/hero-background.jpg";
import heroBackground2 from "@/assets/hero-background-2.jpg";
import heroBackground3 from "@/assets/hero-background-3.jpg";
import heroBackground4 from "@/assets/hero-background-4.jpg";

const backgroundImages = [
  heroBackground,
  heroBackground2,
  heroBackground3,
  heroBackground4
];

const IntroBackdrop = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Background Images with Slideshow Effect */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      ))}
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" aria-hidden="true" />
      
      {/* Welcome Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
            Welcome to
          </h1>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg bg-gradient-to-r from-white via-white to-rose-100 bg-clip-text text-transparent">
            Bloom & Petals
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Where every flower tells a story of elegance and beauty
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroBackdrop;
