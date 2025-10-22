import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import ProgramCard from "@/components/ProgramCard";
import MemberSpotlight from "@/components/MemberSpotlight";
import EventCard from "@/components/EventCard";
import StoryCard from "@/components/StoryCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Heart, Megaphone, DollarSign } from "lucide-react";
import heroImage from '@assets/generated_images/diverse_women_leaders_collaborating_e557efd8.png';
import mentorshipImage from '@assets/generated_images/women_mentorship_circle_session_abc40410.png';
import advocacyImage from '@assets/generated_images/woman_leader_advocacy_presentation_4a8494de.png';
import givingImage from '@assets/generated_images/women_community_economic_empowerment_e410a0c8.png';
import member1 from '@assets/generated_images/professional_woman_leader_portrait_9070e067.png';
import member2 from '@assets/generated_images/Asian_woman_leader_portrait_20969a48.png';
import member3 from '@assets/generated_images/Latina_woman_leader_portrait_885179f2.png';

export default function Home() {
  const metrics = [
    { value: "15,000+", label: "Members Worldwide" },
    { value: "$250M", label: "Grants Awarded" },
    { value: "85", label: "Countries Reached" },
    { value: "2M+", label: "Lives Impacted" },
  ];

  const programs = [
    {
      icon: Heart,
      title: "Giving Circles",
      description: "Join collaborative giving groups that pool resources to fund high-impact initiatives supporting women and girls globally.",
      link: "/programs",
      image: givingImage,
    },
    {
      icon: Users,
      title: "Mentorship & Leadership",
      description: "Connect with experienced leaders for guidance, support, and professional development through our global mentorship network.",
      link: "/programs",
      image: mentorshipImage,
    },
    {
      icon: Megaphone,
      title: "Advocacy",
      description: "Amplify your voice and drive systemic change through coordinated advocacy campaigns for gender equality and women's rights.",
      link: "/programs",
      image: advocacyImage,
    },
  ];

  const members = [
    {
      name: "Sarah Johnson",
      title: "CEO, Tech Innovation Fund",
      location: "San Francisco, USA",
      quote: "Joining Global Women Rising connected me with incredible leaders who share my passion for empowering the next generation of women entrepreneurs.",
      image: member1
    },
    {
      name: "Li Wei Chen",
      title: "Director of Social Impact",
      location: "Singapore",
      quote: "Through this community, I've found both mentors and mentees, creating a powerful network of support across continents.",
      image: member2
    },
    {
      name: "Maria Rodriguez",
      title: "Philanthropist & Advocate",
      location: "Mexico City, Mexico",
      quote: "The collective giving circles have amplified our impact far beyond what I could achieve alone. Together, we're creating real change.",
      image: member3
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image={heroImage}
        title="Empowering Women to Rise, Lead, and Thrive"
        subtitle="Global Women Rising is an international community of visionary women leaders, changemakers, and philanthropists accelerating gender equality through collective giving, mentorship, and advocacy."
      />

      <ImpactMetrics metrics={metrics} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We mobilize resources, expertise, and influence to create lasting change through strategic programs designed to empower women and girls everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </section>

      <MemberSpotlight members={members} />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal">
              Upcoming Events
            </h2>
            <Link href="/events">
              <Button variant="ghost" data-testid="button-view-all-events">
                View All →
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <EventCard
              title="Leadership Summit 2025"
              date="March 15, 2025"
              location="Virtual Event"
              description="Join us for our annual leadership summit featuring keynote speakers, breakout sessions, and networking opportunities."
              image={advocacyImage}
            />
            <EventCard
              title="Giving Circle Workshop"
              date="March 22, 2025"
              location="New York, USA"
              description="Learn how to start or join a giving circle and maximize your philanthropic impact through collective action."
              image={mentorshipImage}
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-normal">
              Latest Stories
            </h2>
            <Link href="/stories">
              <Button variant="ghost" data-testid="button-view-all-stories">
                View All →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StoryCard
              title="Empowering Women Entrepreneurs in Rural Communities"
              excerpt="How our giving circles funded microloans that transformed an entire village's economy."
              category="Impact Story"
              date="February 10, 2025"
              image={givingImage}
              slug="empowering-women-entrepreneurs"
            />
            <StoryCard
              title="Meet Our 2025 Mentorship Program Cohort"
              excerpt="Introducing the inspiring leaders joining our global mentorship network this year."
              category="Member Spotlight"
              date="January 28, 2025"
              image={mentorshipImage}
              slug="2025-mentorship-cohort"
            />
            <StoryCard
              title="Advocacy Wins: Policy Changes for Equal Pay"
              excerpt="Our coordinated advocacy efforts led to new legislation in three countries."
              category="Advocacy"
              date="January 15, 2025"
              image={advocacyImage}
              slug="advocacy-wins-equal-pay"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Join our global community of women leaders, changemakers, and philanthropists. Together, we can create lasting change for women and girls everywhere.
          </p>
          <Link href="/get-involved">
            <Button size="lg" variant="secondary" data-testid="button-cta-get-involved">
              Get Involved Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
