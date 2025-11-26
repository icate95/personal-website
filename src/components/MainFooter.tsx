import { Link } from "react-router-dom";
import { Mail, Linkedin, Github } from "lucide-react";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-3">Caterina Ianeselli</h3>
            <p className="text-sm text-muted-foreground">
              Digital Transformation Consultant & Full-Stack Web Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Link Rapidi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chi-sono" className="text-muted-foreground hover:text-foreground transition-colors">
                  Chi Sono
                </Link>
              </li>
              <li>
                <Link to="/progetti" className="text-muted-foreground hover:text-foreground transition-colors">
                  Progetti
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contatti</h4>
            <div className="flex gap-4">
              <a
                href="mailto:caterina@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/caterina-ianeselli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/caterina-ianeselli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Caterina Ianeselli. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
