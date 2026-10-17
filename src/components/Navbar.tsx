import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { title: t('home'), href: "#home" },
    { title: t('about'), href: "#about" },
    { title: t('experience.title'), href: "#experience" },
    { title: t('skills'), href: "#skills" },
    { title: t('projects'), href: "#projects" },
    { title: t('services.title'), href: "#services" },
    { title: t('contact'), href: "#contact" },
  ];

  return (
    <nav className="fixed z-50 w-full border-b border-border/70 bg-background/80 shadow-sm shadow-foreground/[0.02] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold tracking-tight text-foreground">
            {t('shortName')}
            <span className="text-primary">.</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              aria-label={isOpen ? t("navigation.closeMenu") : t("navigation.openMenu")}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="rounded-lg p-2 text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
