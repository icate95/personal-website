import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Sviluppo",
      description: "Creo applicazioni web moderne e performanti con le tecnologie più avanzate",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Progetto interfacce intuitive e visivamente accattivanti che gli utenti adorano",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ottimizzazione",
      description: "Focalizzo su performance e user experience per risultati eccezionali",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Chi Sono</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sono un professionista appassionato di tecnologia e design, con esperienza nella creazione
            di soluzioni digitali innovative. Mi piace trasformare idee complesse in esperienze utente
            semplici ed eleganti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center card-hover-effect border-border/50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
