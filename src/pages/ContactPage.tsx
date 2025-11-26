import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Messaggio inviato! Ti risponderò al più presto.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:caterina@example.com",
      text: "caterina@example.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/caterina-ianeselli",
      text: "linkedin.com/in/caterina-ianeselli"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/caterina-ianeselli",
      text: "github.com/caterina-ianeselli"
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contatti</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Hai un progetto in mente? Parliamone. Sono sempre aperta a nuove opportunità e collaborazioni.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Invia un Messaggio</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="tua@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Messaggio *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Parlami del tuo progetto..."
                      rows={8}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 w-4 h-4" />
                    Invia Messaggio
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Altre Modalità di Contatto</h2>
                <p className="text-muted-foreground mb-6">
                  Preferisci un contatto diretto? Puoi trovarmi anche attraverso questi canali:
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        {link.icon}
                      </div>
                      <div>
                        <p className="font-semibold">{link.label}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                          {link.text}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-muted/50">
                <h3 className="font-semibold mb-2">Tempi di Risposta</h3>
                <p className="text-sm text-muted-foreground">
                  Rispondo solitamente entro 24-48 ore nei giorni lavorativi. Per richieste urgenti, contattami direttamente via email.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Disponibilità per Progetti</h2>
            <p className="text-muted-foreground mb-6">
              Attualmente disponibile per progetti di consulenza e sviluppo. Lavoro sia su base progettuale che con contratti a lungo termine.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Consulenza Digital Transformation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Sviluppo Full-Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Security Audit</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
