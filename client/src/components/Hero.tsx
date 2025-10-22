import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ image, title, subtitle, showCTA = true }: HeroProps) {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-involved">
                <Button
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-hero-get-involved"
                >
                  Get Involved
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-hero-learn-more"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
