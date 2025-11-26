import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Heart, Lightbulb, Target, Zap } from "lucide-react";

const About = () => {
  const comelavoro = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Approccio Orientato ai Risultati",
      description: "Ogni progetto parte dall'analisi degli obiettivi di business. Non sviluppo soluzioni tecniche fine a sé stesse, ma strumenti che risolvono problemi concreti e generano valore misurabile."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Metodologia Agile",
      description: "Lavoro in cicli iterativi brevi con feedback continuo. Questo approccio permette di adattarsi rapidamente ai cambiamenti e garantire che il prodotto finale risponda esattamente alle esigenze."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Focus su Sicurezza e Qualità",
      description: "La cybersecurity e la qualità del codice non sono opzionali. Implemento best practices di sicurezza fin dall'inizio e scrivo codice pulito, testato e manutenibile."
    }
  ];

  const cosapossofare = [
    "Sviluppare applicazioni web full-stack moderne e scalabili",
    "Progettare e implementare sistemi di automazione per processi aziendali",
    "Consulenza su digital transformation e ottimizzazione workflow",
    "Implementare soluzioni sicure con focus su cybersecurity",
    "Integrare sistemi esistenti e modernizzare infrastrutture legacy",
    "Training e mentorship su best practices di sviluppo e sicurezza"
  ];

  const valori = [
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "Concretezza: soluzioni pragmatiche che funzionano nel mondo reale"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Affidabilità: rispetto delle deadline e comunicazione trasparente"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Innovazione: tecnologie moderne applicate con criterio"
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "Qualità: attenzione ai dettagli e codice di livello professionale"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Chi Sono</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Sviluppatrice web full-stack con 6 anni di esperienza nella realizzazione di applicazioni moderne, automazioni digitali e soluzioni orientate alla sicurezza
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Il mio percorso professionale unisce competenze tecniche approfondite con una visione strategica orientata al business. Con un background accademico in <strong>cybersecurity e sicurezza dei sistemi</strong>, ho sviluppato una particolare sensibilità per la creazione di soluzioni non solo funzionali, ma anche sicure e conformi alle normative.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Negli ultimi 6 anni ho lavorato su progetti di <strong>digital transformation</strong>, aiutando aziende a modernizzare i loro processi attraverso automazione intelligente e sviluppo di applicazioni web su misura. Mi occupo dell'intero ciclo di vita del software: dalla raccolta dei requisiti, all'architettura, allo sviluppo full-stack, fino al deployment e alla manutenzione.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Credo nella tecnologia come strumento di semplificazione: il mio obiettivo è trasformare processi complessi in soluzioni digitali intuitive che le persone vogliono usare.
            </p>
          </div>
        </div>
      </section>

      {/* Come Lavoro */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Come Lavoro</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comelavoro.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cosa Posso Fare Per Te */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cosa Posso Fare Per Te</h2>
          <Card className="p-8 md:p-12">
            <ul className="space-y-4">
              {cosapossofare.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Valori */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">I Miei Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valori.map((valore, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 text-accent">
                    {valore.icon}
                  </div>
                  <p className="text-muted-foreground">{valore.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Lavoriamo Insieme</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Se cerchi una professionista affidabile per il tuo prossimo progetto digitale
          </p>
          <Button asChild size="lg">
            <Link to="/contatti">Contattami</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
