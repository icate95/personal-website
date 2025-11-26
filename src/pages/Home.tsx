import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Shield, Workflow, Database } from "lucide-react";
import { projects } from "@/data/projects";

const Home = () => {
  const competenze = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Sviluppo applicazioni web moderne con React, Node.js e database relazionali"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Digital Transformation",
      description: "Ottimizzazione processi aziendali attraverso automazione e digitalizzazione"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Implementazione best practices di sicurezza e compliance normativa"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Automazione",
      description: "Creazione di workflow intelligenti per ridurre attività manuali ripetitive"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Caterina Ianeselli
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Digital Transformation Consultant & Full-Stack Web Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trasformo processi complessi in soluzioni digitali semplici, sicure ed efficienti
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link to="/progetti">
                  Vedi i Progetti
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contatti">Contattami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Competenze Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Competenze
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competenze.map((comp, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  {comp.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{comp.title}</h3>
                <p className="text-sm text-muted-foreground">{comp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progetti Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Miei Progetti</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selezione di progetti che dimostrano la mia esperienza in sviluppo full-stack e digital transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.shortDescription}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/progetti/${project.id}`}>
                      Scopri di più
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/progetti">Vedi Tutti i Progetti</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hai un progetto in mente?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Parliamo di come posso aiutarti a digitalizzare e ottimizzare i tuoi processi
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contatti">Iniziamo a Collaborare</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
