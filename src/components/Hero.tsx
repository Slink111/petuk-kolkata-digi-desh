import { Phone, Calendar, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import biryaniIllustration from '@/assets/biryani-illustration.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bengali-pattern"
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'var(--gradient-hero)',
        }}
      />

      {/* Floating Illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 md:opacity-30 animate-float">
        <img
          src={biryaniIllustration}
          alt="Delicious Biryani"
          className="w-64 md:w-96 lg:w-[500px]"
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Authentic Flavors of Kolkata
            <span className="block text-secondary mt-2">On Your Plate</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Experience the warmth of Bengali hospitality and the richness of multi-cuisine
            delights at Petuk Kolkata. Where every dish tells a story of tradition and taste.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              className="bg-secondary text-accent hover:bg-secondary/90 hover-lift text-lg px-8"
              asChild
            >
              <a href="#menu">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent hover-lift text-lg px-8"
              asChild
            >
              <a href="#reservations">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Table
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent hover-lift text-lg px-8"
              asChild
            >
              <a href="tel:09830132779">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm">Open Daily 1-11 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm">Gouribari, Kolkata</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm">Multi-Cuisine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
