import ScrollReveal from "../scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div 
              className="rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px'
              }}
            />
          </ScrollReveal>

          <ScrollReveal>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-muted-foreground mb-4">
                  I'm a Computer Science student passionate about software development and problem-solving. 
                  My journey in tech started with web development and has since expanded to include various 
                  aspects of software engineering.
                </p>
                <p className="text-muted-foreground">
                  I'm constantly learning and exploring new technologies to build better solutions. 
                  When I'm not coding, you can find me contributing to open-source projects or 
                  attending tech meetups.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}