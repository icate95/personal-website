export interface Project {
  id: string;
  title: string;
  tagline?: string;
  shortDescription: string;
  heroImage: string;
  description: string;
  objective: string;
  role: string;
  stack: string[];
  features: string[];
  process: string;
  challenges: string;
  results: string;
  screenshots: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: "mvp" | "in-development" | "completed" | "maintenance";
  nextSteps?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  timeline?: {
    duration: string;
    phases: string[];
  };
}

export const projects: Project[] = [
  // {
  //   id: "digital-transformation-dashboard",
  //   title: "Digital Transformation Dashboard",
  //   tagline: "Enterprise Process Automation Platform",
  //   shortDescription: "Piattaforma di monitoraggio e automazione processi aziendali con analytics in tempo reale",
  //   heroImage: "/placeholder.svg",
  //   description: "Una dashboard completa per monitorare e automatizzare i processi di trasformazione digitale aziendale. La piattaforma integra dati da multiple fonti, fornisce analytics avanzate e permette l'automazione di workflow complessi.",
  //   objective: "Digitalizzare e ottimizzare i processi aziendali riducendo il tempo di gestione manuale del 60% e aumentando la trasparenza operativa.",
  //   role: "Full-Stack Developer & Digital Transformation Consultant",
  //   stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
  //   features: [
  //     "Dashboard analytics in tempo reale",
  //     "Automazione workflow con trigger personalizzabili",
  //     "Integrazione multi-sistema via API REST",
  //     "Sistema di notifiche intelligente",
  //     "Export reports PDF/Excel automatizzato",
  //     "Role-based access control (RBAC)"
  //   ],
  //   process: "Il progetto è partito da un'analisi approfondita dei processi esistenti, identificando colli di bottiglia e punti critici. Ho progettato un'architettura modulare basata su microservizi per garantire scalabilità. L'implementazione è avvenuta in sprint iterativi con feedback continuo dal cliente.",
  //   challenges: "La sfida principale è stata integrare sistemi legacy con API limitate. Ho sviluppato layer di astrazione custom e implementato retry logic robusto per gestire le disconnessioni. La gestione della sicurezza dei dati sensibili ha richiesto implementazione di encryption at-rest e in-transit.",
  //   results: "Riduzione del 65% del tempo di gestione manuale, aumento del 40% nella produttività del team operations, e ROI positivo raggiunto in 8 mesi.",
  //   screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  //   demoUrl: "https://demo.example.com",
  //   githubUrl: "https://github.com/example/project",
  //   status: "completed",
  //   nextSteps: "Integrazione con sistemi di AI per predictive analytics e automazione avanzata delle decisioni.",
  //   testimonial: {
  //     text: "La piattaforma ha trasformato completamente il nostro modo di lavorare. I processi che prima richiedevano giorni ora vengono completati in ore.",
  //     author: "Marco Rossi",
  //     role: "COO, Enterprise Client"
  //   },
  //   timeline: {
  //     duration: "6 mesi",
  //     phases: ["Discovery & Planning (4 settimane)", "MVP Development (8 settimane)", "Testing & Integration (6 settimane)", "Deployment & Training (2 settimane)"]
  //   }
  // },
  // {
  //   id: "secure-authentication-system",
  //   title: "Secure Authentication System",
  //   tagline: "Enterprise-Grade Security Platform",
  //   shortDescription: "Sistema di autenticazione multi-fattore con focus su cybersecurity e compliance GDPR",
  //   heroImage: "/placeholder.svg",
  //   description: "Piattaforma di autenticazione sicura con supporto MFA, SSO, e gestione centralizzata delle identità. Implementa best practices di cybersecurity e compliance normativa.",
  //   objective: "Fornire un sistema di autenticazione sicuro, scalabile e conforme alle normative per proteggere applicazioni enterprise.",
  //   role: "Security Engineer & Full-Stack Developer",
  //   stack: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "OAuth 2.0", "Docker"],
  //   features: [
  //     "Multi-Factor Authentication (TOTP, SMS, Email)",
  //     "Single Sign-On (SSO) con SAML 2.0",
  //     "Rate limiting e brute-force protection",
  //     "Session management distribuito",
  //     "Audit logging completo",
  //     "Password policy enforcement"
  //   ],
  //   process: "Ho seguito un approccio security-first, partendo da threat modeling e vulnerability assessment. Ogni componente è stato sviluppato seguendo OWASP guidelines e sottoposto a penetration testing.",
  //   challenges: "Bilanciare sicurezza e user experience è stata la sfida principale. Ho implementato progressive MFA (richiesto solo per azioni sensibili) e remember device functionality sicura. La gestione delle sessioni distribuite ha richiesto un'architettura Redis cluster con failover automatico.",
  //   results: "Zero breach di sicurezza in 2 anni di produzione, compliance certificata GDPR, riduzione del 90% di account compromise.",
  //   screenshots: ["/placeholder.svg", "/placeholder.svg"],
  //   githubUrl: "https://github.com/example/auth-system",
  //   status: "maintenance",
  //   nextSteps: "Implementazione di passwordless authentication con WebAuthn e biometric support."
  // },
  // {
  //   id: "automation-workflow-builder",
  //   title: "Automation Workflow Builder",
  //   tagline: "No-Code Automation Platform",
  //   shortDescription: "Piattaforma drag-and-drop per creare automazioni complesse senza scrivere codice",
  //   heroImage: "/placeholder.svg",
  //   description: "Tool visuale che permette a utenti non tecnici di creare workflow di automazione complessi attraverso un'interfaccia drag-and-drop intuitiva.",
  //   objective: "Democratizzare l'automazione permettendo a business users di creare e gestire workflow senza competenze di programmazione.",
  //   role: "Lead Full-Stack Developer & UX Designer",
  //   stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "RabbitMQ", "Kubernetes"],
  //   features: [
  //     "Visual workflow builder con drag-and-drop",
  //     "Libreria di 50+ connettori pre-built",
  //     "Conditional logic e branching",
  //     "Error handling e retry mechanisms",
  //     "Real-time execution monitoring",
  //     "Template marketplace"
  //   ],
  //   process: "Focus intenso su UX research per capire le esigenze degli utenti non tecnici. Iterazioni multiple sul design dell'interfaccia con user testing continuo. Backend progettato per scalabilità orizzontale con queue-based architecture.",
  //   challenges: "Rendere la complessità tecnica accessibile senza sacrificare flessibilità. Ho implementato un sistema di abstraction layers che nasconde la complessità ma permette configurazioni avanzate per power users. La gestione degli errori nei workflow distribuiti ha richiesto un sistema di orchestrazione custom.",
  //   results: "1000+ workflow attivi, 10,000+ ore risparmiate mensilmente, adoption rate del 85% tra gli utenti target.",
  //   screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  //   demoUrl: "https://workflow-demo.example.com",
  //   status: "in-development",
  //   timeline: {
  //     duration: "In corso - 8 mesi fino ad ora",
  //     phases: ["Research & Design (6 settimane)", "Core Engine (12 settimane)", "UI Builder (10 settimane)", "Connectors Library (ongoing)"]
  //   }
  // }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
