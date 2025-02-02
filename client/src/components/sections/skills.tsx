import ScrollReveal from "../scroll-reveal";
import { SKILLS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <ScrollReveal key={skill.name}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <skill.icon 
                    className="w-12 h-12 mx-auto mb-4" 
                    style={{ color: skill.color }} 
                  />
                  <h3 className="font-medium">{skill.name}</h3>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}