import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const Portfolio = () => {
  const statusLabels = {
    "mvp": "MVP",
    "in-development": "In Sviluppo",
    "completed": "Completato",
    "maintenance": "In Manutenzione"
  };

  const statusColors = {
    "mvp": "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    "in-development": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
    "completed": "bg-green-500/10 text-green-700 dark:text-green-400",
    "maintenance": "bg-purple-500/10 text-purple-700 dark:text-purple-400"
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Progetti che uniscono competenze tecniche avanzate, attenzione alla sicurezza e focus sulla trasformazione digitale
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Image */}
                <div className="lg:col-span-2 aspect-video lg:aspect-auto bg-muted relative overflow-hidden group">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={statusColors[project.status]}>
                      {statusLabels[project.status]}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-6 lg:py-8 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {project.title}
                    </h2>
                    {project.tagline && (
                      <p className="text-sm text-muted-foreground mb-4">{project.tagline}</p>
                    )}
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2">Ruolo:</p>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.slice(0, 6).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 6 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.stack.length - 6}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <Link to={`/progetti/${project.id}`}>
                        Dettagli Completi
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    {project.demoUrl && (
                      <Button asChild variant="outline">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 w-4 h-4" />
                          Demo Live
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild variant="outline">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Interessato a collaborare?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discutiamo del tuo prossimo progetto
          </p>
          <Button asChild size="lg">
            <Link to="/contatti">Contattami</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
