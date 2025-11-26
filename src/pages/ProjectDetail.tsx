import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle2, AlertCircle, Target, Wrench } from "lucide-react";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Progetto non trovato</h1>
          <Button asChild>
            <Link to="/progetti">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Torna ai Progetti
            </Link>
          </Button>
        </div>
      </div>
    );
  }

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
      {/* Back Button */}
      <div className="container mx-auto max-w-5xl px-4 pt-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/progetti">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Torna ai Progetti
          </Link>
        </Button>
      </div>

      {/* Hero */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-6">
            <Badge className={statusColors[project.status]}>
              {statusLabels[project.status]}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          {project.tagline && (
            <p className="text-xl text-muted-foreground mb-8">{project.tagline}</p>
          )}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.demoUrl && (
              <Button asChild>
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
                  Vedi Codice
                </a>
              </Button>
            )}
          </div>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Descrizione</h2>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              {/* Objective */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-accent" />
                  <h2 className="text-2xl font-bold">Obiettivo</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.objective}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Funzionalità Principali</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-accent" />
                  <h2 className="text-2xl font-bold">Processo di Sviluppo</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.process}</p>
              </div>

              {/* Challenges */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-accent" />
                  <h2 className="text-2xl font-bold">Sfide e Soluzioni</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
              </div>

              {/* Results */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Risultati</h2>
                <p className="text-muted-foreground leading-relaxed">{project.results}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Role */}
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Ruolo</h3>
                <p className="text-sm text-muted-foreground">{project.role}</p>
              </Card>

              {/* Stack */}
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Stack Tecnologico</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <Badge key={idx} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Timeline */}
              {project.timeline && (
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4" />
                    <h3 className="font-semibold">Timeline</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.timeline.duration}</p>
                  <Separator className="my-3" />
                  <ul className="space-y-2 text-sm">
                    {project.timeline.phases.map((phase, idx) => (
                      <li key={idx} className="text-muted-foreground">• {phase}</li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold mb-8">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, idx) => (
                <div key={idx} className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8 md:p-12 bg-accent/5 border-accent/20">
              <blockquote className="text-lg md:text-xl italic mb-6">
                "{project.testimonial.text}"
              </blockquote>
              <div>
                <p className="font-semibold">{project.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Next Steps */}
      {project.nextSteps && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold mb-4">Prossimi Sviluppi</h2>
            <p className="text-muted-foreground leading-relaxed">{project.nextSteps}</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Hai un progetto simile?</h2>
          <p className="text-lg mb-8 opacity-90">
            Parliamo di come posso aiutarti a realizzarlo
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contatti">Contattami</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
