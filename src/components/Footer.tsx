import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bilal Zaim</h3>
            <p className="text-muted-foreground">
              Full-stack Developer passionné par la création d'applications web
              modernes et performantes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Expérience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#github"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:bilal.zaim@example.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  bilalzaim499@gmail.com
                </a>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/Bilal-EZ-ZAIM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/bilal-ezzaim-a34313240?originalSubdomain=ma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Bilal Zaim. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
