import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ImpactMetrics from "@/components/ImpactMetrics";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Globe, TrendingUp, Users } from "lucide-react";
import heroImage from '@assets/generated_images/diverse_women_leaders_collaborating_e557efd8.png';
import impactImage from '@assets/generated_images/women_community_economic_empowerment_e410a0c8.png';

export default function Impact() {
  const metrics = [
    { value: "15,000+", label: "Members Worldwide" },
    { value: "$250M", label: "Grants Awarded" },
    { value: "85", label: "Countries Reached" },
    { value: "2M+", label: "Lives Impacted" },
  ];

  const caseStudies = [
    {
      title: "Economic Empowerment in Rural Kenya",
      description: "A $500,000 grant funded microloans and business training for 2,500 women entrepreneurs, creating sustainable income sources and transforming local economies.",
      impact: "2,500 women trained, 1,200 businesses launched",
      image: impactImage
    },
    {
      title: "Girls' Education in Southeast Asia",
      description: "Multi-year funding supports scholarships and mentorship programs helping 5,000 girls complete secondary education and pursue higher learning.",
      impact: "5,000 scholarships awarded, 92% graduation rate",
      image: impactImage
    },
    {
      title: "Women in Leadership Program",
      description: "Leadership development initiative preparing women for board positions and executive roles across corporate and nonprofit sectors.",
      impact: "800 women trained, 350 board placements",
      image: impactImage
    }
  ];

  const testimonials = [
    {
      quote: "This grant didn't just fund our program—it validated our approach and attracted additional funding from other sources.",
      author: "Dr. Amara Okafor",
      organization: "Women's Health Initiative, Nigeria"
    },
    {
      quote: "The mentorship I received through Global Women Rising accelerated my career by years and expanded my network globally.",
      author: "Priya Sharma",
      organization: "Tech Entrepreneur, India"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image={heroImage}
        title="Our Impact"
        subtitle="Measuring the change we create together through data-driven insights and stories of transformation from communities around the world."
        showCTA={false}
      />

      <ImpactMetrics metrics={metrics} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-12 text-center">
            Global Reach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">85</h3>
              <p className="text-muted-foreground">Countries with active programs</p>
            </Card>
            <Card className="text-center p-8">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">250+</h3>
              <p className="text-muted-foreground">Organizations funded</p>
            </Card>
            <Card className="text-center p-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">15,000+</h3>
              <p className="text-muted-foreground">Active members</p>
            </Card>
          </div>
          <div className="bg-muted p-8 rounded-md text-center">
            <p className="text-muted-foreground mb-4">
              Our members and programs span six continents, from rural villages to major metropolitan areas, creating impact where it's needed most.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-12 text-center">
            Impact Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.title} className="overflow-hidden" data-testid={`card-case-study-${study.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-serif font-normal">{study.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-sm font-semibold text-foreground">{study.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-12 text-center">
            What Partners Say
          </h2>
          <div className="space-y-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="p-8" data-testid={`card-testimonial-${testimonial.author.toLowerCase().replace(/\s+/g, '-')}`}>
                <p className="text-lg italic text-foreground mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-normal mb-6">Download Our Impact Report</h2>
          <p className="text-muted-foreground mb-8">
            Get detailed insights into our programs, financials, and the measurable impact we're creating together.
          </p>
          <Button size="lg" data-testid="button-download-impact-report">
            <Download className="w-4 h-4 mr-2" />
            Download 2024 Impact Report
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
