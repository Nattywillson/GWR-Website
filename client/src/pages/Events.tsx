import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from '@assets/generated_images/diverse_women_leaders_collaborating_e557efd8.png';
import advocacyImage from '@assets/generated_images/woman_leader_advocacy_presentation_4a8494de.png';
import mentorshipImage from '@assets/generated_images/women_mentorship_circle_session_abc40410.png';
import givingImage from '@assets/generated_images/women_community_economic_empowerment_e410a0c8.png';

export default function Events() {
  const upcomingEvents = [
    {
      title: "Leadership Summit 2025",
      date: "March 15, 2025",
      location: "Virtual Event",
      description: "Join us for our annual leadership summit featuring keynote speakers, breakout sessions, and networking opportunities with women leaders from around the world.",
      image: advocacyImage
    },
    {
      title: "Giving Circle Workshop",
      date: "March 22, 2025",
      location: "New York, USA",
      description: "Learn how to start or join a giving circle and maximize your philanthropic impact through collective action.",
      image: mentorshipImage
    },
    {
      title: "Women in Tech Mentorship Kickoff",
      date: "April 5, 2025",
      location: "San Francisco, USA",
      description: "Launch event for our new mentorship program connecting emerging women in technology with experienced leaders.",
      image: givingImage
    },
    {
      title: "Global Impact Webinar Series",
      date: "April 12, 2025",
      location: "Virtual Event",
      description: "Monthly webinar series featuring grantees sharing their stories and impact outcomes.",
      image: advocacyImage
    }
  ];

  const pastEvents = [
    {
      title: "Annual Gala 2024",
      date: "December 10, 2024",
      location: "London, UK",
      description: "Our flagship fundraising gala brought together 500 leaders and raised $2M for women's empowerment initiatives.",
      image: mentorshipImage
    },
    {
      title: "Advocacy Workshop Series",
      date: "November 2024",
      location: "Virtual Event",
      description: "Four-part workshop series on effective advocacy strategies for gender equality reached 1,200 participants globally.",
      image: advocacyImage
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image={heroImage}
        title="Events & Gatherings"
        subtitle="Connect with fellow members, learn from experts, and engage with our global community through virtual and in-person events throughout the year."
        showCTA={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming" data-testid="tab-upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past" data-testid="tab-past">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.title} {...event} />
              ))}
            </TabsContent>
            
            <TabsContent value="past" className="space-y-6">
              {pastEvents.map((event) => (
                <EventCard key={event.title} {...event} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
