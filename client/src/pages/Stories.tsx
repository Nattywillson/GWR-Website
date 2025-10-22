import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import heroImage from '@assets/generated_images/diverse_women_leaders_collaborating_e557efd8.png';
import givingImage from '@assets/generated_images/women_community_economic_empowerment_e410a0c8.png';
import mentorshipImage from '@assets/generated_images/women_mentorship_circle_session_abc40410.png';
import advocacyImage from '@assets/generated_images/woman_leader_advocacy_presentation_4a8494de.png';

export default function Stories() {
  const [searchTerm, setSearchTerm] = useState("");

  const stories = [
    {
      title: "Empowering Women Entrepreneurs in Rural Communities",
      excerpt: "How our giving circles funded microloans that transformed an entire village's economy and created sustainable opportunities for women-led businesses.",
      category: "Impact Story",
      date: "February 10, 2025",
      image: givingImage,
      slug: "empowering-women-entrepreneurs"
    },
    {
      title: "Meet Our 2025 Mentorship Program Cohort",
      excerpt: "Introducing the inspiring leaders joining our global mentorship network this year and their stories of resilience and vision.",
      category: "Member Spotlight",
      date: "January 28, 2025",
      image: mentorshipImage,
      slug: "2025-mentorship-cohort"
    },
    {
      title: "Advocacy Wins: Policy Changes for Equal Pay",
      excerpt: "Our coordinated advocacy efforts led to new legislation in three countries, advancing equal pay for equal work.",
      category: "Advocacy",
      date: "January 15, 2025",
      image: advocacyImage,
      slug: "advocacy-wins-equal-pay"
    },
    {
      title: "From Refugee to Tech Leader: Amina's Journey",
      excerpt: "A member's inspiring story of overcoming adversity through education and mentorship to become a successful technology entrepreneur.",
      category: "Member Spotlight",
      date: "December 20, 2024",
      image: mentorshipImage,
      slug: "amina-journey"
    },
    {
      title: "Investing in Girls' Education Across Africa",
      excerpt: "A deep dive into our scholarship program that has enabled 5,000 girls to complete their education and pursue higher learning.",
      category: "Impact Story",
      date: "December 5, 2024",
      image: givingImage,
      slug: "investing-girls-education"
    },
    {
      title: "Building a Coalition for Reproductive Rights",
      excerpt: "How our advocacy network partnered with 50 organizations to protect and advance reproductive healthcare access.",
      category: "Advocacy",
      date: "November 18, 2024",
      image: advocacyImage,
      slug: "reproductive-rights-coalition"
    }
  ];

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        image={heroImage}
        title="Stories & News"
        subtitle="Discover the latest updates, member spotlights, and impact stories from our global community of women leaders and changemakers."
        showCTA={false}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-stories"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <StoryCard key={story.slug} {...story} />
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No stories found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
