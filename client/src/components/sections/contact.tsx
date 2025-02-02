import ScrollReveal from "../scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>

              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('mailto:your.email@example.com')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  your.email@example.com
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://github.com/yourusername')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://linkedin.com/in/yourusername')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}