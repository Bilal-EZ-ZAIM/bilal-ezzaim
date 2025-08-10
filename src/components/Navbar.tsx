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
    { title: t('skills'), href: "#skills" },
    { title: t('projects'), href: "#projects" },
    { title: t('contact'), href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-black dark:text-foreground">
            {t('shortName')}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-black dark:text-foreground/60 hover:text-black dark:hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition"
              >
                {item.title}
              </a>
            ))}
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              className="ml-4 p-2 text-black bg-white dark:bg-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-foreground/10 focus:outline-none transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-black dark:text-foreground transition-colors duration-300" />
              ) : (
                <Menu className="h-6 w-6 text-black dark:text-foreground transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background/95 border-t">
          <div className="px-2 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block text-black dark:text-foreground/60 hover:text-black dark:hover:text-foreground px-3 py-2 rounded-md text-base font-medium transition"
                onClick={() => setIsOpen(false)} // Close menu after clicking
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
