import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  image?: string;
}

export default function ProgramCard({ icon: Icon, title, description, link, image }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-program-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-serif font-normal text-foreground">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Link href={link}>
          <Button variant="ghost" className="p-0 h-auto text-primary" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            Learn More →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
