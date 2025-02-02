import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

export default function ProjectCard({ title, description, technologies, github }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(github, '_blank')}
        >
          <SiGithub className="mr-2 h-4 w-4" />
          View on GitHub
        </Button>
      </CardFooter>
    </Card>
  );
}
