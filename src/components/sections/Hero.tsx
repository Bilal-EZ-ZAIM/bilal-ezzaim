import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const technologies = [
  { name: "AWS", mark: "aws", color: "#ff9900" },
  { name: "Spring", mark: "S", color: "#6db33f" },
  { name: "C#", mark: "C#", color: "#68217a" },
  { name: "SQL Server", mark: "SQL", color: "#cc2927" },
  { name: "MongoDB", mark: "M", color: "#47a248" },
  { name: "PostgreSQL", mark: "PG", color: "#4169e1" },
  { name: "NestJS", mark: "N", color: "#e0234e" },
  { name: "Node.js", mark: "JS", color: "#539e43" },
  { name: ".NET", mark: ".NET", color: "#512bd4" },
  { name: "React", mark: "R", color: "#149eca" },
  { name: "Docker", mark: "D", color: "#2496ed" },
  { name: "Java", mark: "J", color: "#ed8b00" },
];

export function Hero() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-primary/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-28 h-96 w-96 rounded-full bg-sky-400/[0.1] blur-3xl"
      />

      <div className="section-container relative z-10 flex flex-1 items-center py-12 sm:py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-w-0 text-start"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.06] px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              {t("hero.title")}
            </div>

            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              {t("hero.greeting")}{" "}
              <span className="bg-gradient-to-r from-primary via-sky-500 to-violet-500 bg-clip-text text-transparent">
                {t("hero.name")}
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              {t("hero.description")}
            </p>

            <div className="mb-7 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="h-12 rounded-xl px-6 shadow-lg shadow-primary/20"
                asChild
              >
                <a href="#contact">
                  {t("hero.contactMe")}
                  <ArrowRight
                    className={`ms-2 h-4 w-4 ${isArabic ? "rotate-180" : ""}`}
                  />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-border/80 bg-card/70 px-6"
                asChild
              >
                <a href="#projects">{t("hero.myProjects")}</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="me-2 text-sm font-medium text-muted-foreground">
                {t("hero.connect")}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-primary"
                asChild
              >
                <a
                  aria-label="GitHub"
                  href="https://github.com/Bilal-EZ-ZAIM/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-primary"
                asChild
              >
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/bilal-ezzaim-a34313240?originalSubdomain=ma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-primary"
                asChild
              >
                <a aria-label="Email" href="mailto:bilalzaim499@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isArabic ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
          >
            <div className="relative w-full max-w-[440px]">
              <div
                aria-hidden="true"
                className="hero-portrait-blob absolute inset-[4%] rotate-[-7deg] bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 opacity-90 shadow-2xl shadow-primary/20"
              />
              <div
                aria-hidden="true"
                className="absolute -right-2 top-[12%] h-28 w-28 rounded-full bg-violet-400/30 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-2 left-[8%] h-28 w-28 rounded-full bg-sky-400/30 blur-2xl"
              />
              <img
                src={`${import.meta.env.BASE_URL}image/bilal-cutout.png`}
                alt={t("hero.name")}
                loading="eager"
                className="relative z-10 aspect-[1/0.96] w-full object-contain object-bottom drop-shadow-xl"
              />
              <div className="absolute -bottom-3 end-2 z-20 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/90 px-4 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur sm:end-0 sm:bottom-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15" />
                {t("hero.title")}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full border-y border-border/70 bg-background/75 shadow-[0_-8px_32px_hsl(var(--foreground)/0.04)] backdrop-blur-xl">
        <div className="section-container">
          <div
            aria-label="Technologies"
            className="hero-tech-marquee py-5 sm:py-6"
          >
            <div className="hero-tech-track">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  className="hero-tech-group"
                  role={group === 0 ? "list" : undefined}
                  aria-hidden={group === 1}
                >
                  {technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="hero-tech-item"
                      role={group === 0 ? "listitem" : undefined}
                      aria-label={group === 0 ? technology.name : undefined}
                    >
                      <span
                        aria-hidden="true"
                        className="hero-tech-mark"
                        style={{ color: technology.color }}
                      >
                        {technology.mark}
                      </span>
                      <span className="hero-tech-name">{technology.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
