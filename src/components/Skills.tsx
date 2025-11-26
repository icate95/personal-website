import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API", "GraphQL"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "Figma", "AWS", "CI/CD", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Le Mie Competenze</h2>
          <p className="text-lg text-muted-foreground">
            Tecnologie e strumenti con cui lavoro quotidianamente
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-center">{category.category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-6 py-3 text-base bg-skill-badge hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
