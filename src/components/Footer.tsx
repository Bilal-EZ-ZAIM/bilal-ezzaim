import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.name")}</h3>
            <p className="text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">{t("footer.links.home")}</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">{t("footer.links.about")}</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">{t("footer.links.experience")}</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">{t("footer.links.skills")}</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">{t("footer.links.projects")}</a></li>
              <li><a href="#github" className="text-muted-foreground hover:text-foreground transition-colors">{t("footer.links.github")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:bilalzaim499@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  bilalzaim499@gmail.com
                </a>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/Bilal-EZ-ZAIM" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/bilal-ezzaim-a34313240?originalSubdomain=ma" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} {t("footer.name")}. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
