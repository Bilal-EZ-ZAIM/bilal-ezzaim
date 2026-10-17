import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Boxes,
  Braces,
  Code2,
  Coffee,
  Database,
  GitBranch,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";


type SkillCategory =
  | "all"
  | "java"
  | "javascript"
  | "csharp"
  | "database"
  | "api"
  | "devops"
  | "architecture"
  | "security"
  | "tools"
  | "versionControl"
  | "methodologies";

const filterOptions: SkillCategory[] = [
  "all",
  "java",
  "javascript",
  "csharp",
  "database",
  "api",
  "architecture",
  "security",
  "devops",
  "tools",
  "versionControl",
  "methodologies",
];


const skills = [
  {
    titleKey: "java",
    icon: Coffee,
    category: "java",
    items: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "Hibernate",
      "Lombok",
      "MapStruct",
      "Maven",
      "JUnit",
    ],
  },
  {
    titleKey: "javascript",
    icon: Braces,
    category: "javascript",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Express.js",
      "react-i18next",
      "Prisma",
      "Redux",
      "Redux Toolkit",
      "Axios",
      "React Hook Form",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    titleKey: "csharp",
    icon: Code2,
    category: "csharp",
    items: [
      "C#",
      "ASP.NET MVC",
      ".NET Framework",
      "Entity Framework",
      "WCF",
      "REST APIs",
    ],
  },
  {
    titleKey: "database",
    icon: Database,
    category: "database",
    items: [
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "SQL Views",
      "SQL Functions",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    titleKey: "api",
    icon: Workflow,
    category: "api",
    items: [
      "REST APIs",
      "SOAP",
      "WebSockets",
    ],
  },
  {
    titleKey: "architecture",
    icon: Boxes,
    category: "architecture",
    items: [
      "Object-Oriented Programming (OOP)",
      "MVC Architecture",
      "Layered Architecture",
      "Service Layer",
      "Repository Pattern",
      "Modular Architecture",
    ],
  },
  {
    titleKey: "security",
    icon: ShieldCheck,
    category: "security",
    items: [
      "Spring Security",
      "JWT",
      "Microsoft Entra ID",
      "OpenID Connect",
      "OTP Authentication",
      "Application Security",
    ],
  },
  {
    titleKey: "devops",
    icon: Workflow,
    category: "devops",
    items: [
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "Docker Hub",
      "YAML",
    ],
  },
  {
    titleKey: "tools",
    icon: Wrench,
    category: "tools",
    items: [
      "Postman",
      "Visual Studio Code",
    ],
  },
  {
    titleKey: "versionControl",
    icon: GitBranch,
    category: "versionControl",
    items: [
      "Git",
      "GitHub",
      "GitLab",
    ],
  },

  {
    titleKey: "methodologies",
    icon: Sparkles,
    category: "methodologies",
    items: [
      "Agile",
      "Scrum",
      "Sprint Planning",
      "Daily Scrum",
      "Sprint Review",
      "Sprint Retrospective",
      "Product Backlog",
    ],
  },

];



export function Skills() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter(
    (skill) => filter === "all" || skill.category === filter
  );
  const visibleSkillCount = filteredSkills.reduce(
    (total, skill) => total + skill.items.length,
    0
  );

  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-20 overflow-hidden bg-muted/30 py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-sky-400/[0.08] blur-3xl"
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            {t("skillsSection.eyebrow")}
          </div>
          <h2 className="section-heading">{t("skillsSection.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {t("skillsSection.subtitle")}
          </p>
        </motion.div>

        <div className="mx-auto mb-8 max-w-5xl rounded-2xl border border-border/70 bg-background/75 p-2 shadow-sm backdrop-blur sm:p-3">
          <div
            aria-label={t("skillsSection.filterLabel")}
            className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
            role="group"
          >
            {filterOptions.map((key) => {
              const count =
                key === "all"
                  ? skills.reduce((total, skill) => total + skill.items.length, 0)
                  : skills
                    .filter((skill) => skill.category === key)
                    .reduce((total, skill) => total + skill.items.length, 0);

              return (
                <motion.button
                  key={key}
                  type="button"
                  whileTap={{ scale: 0.96 }}
                  aria-pressed={filter === key}
                  onClick={() => setFilter(key)}
                  className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl px-3.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${filter === key
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                >
                  <span>{t(`skillsSection.filters.${key}`)}</span>
                  <span
                    className={`min-w-6 rounded-full px-1.5 py-0.5 text-xs tabular-nums ${filter === key
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div
          aria-live="polite"
          className="mb-5 flex items-center justify-between gap-3 text-sm text-muted-foreground"
        >
          <span>{t(`skillsSection.filters.${filter}`)}</span>
          <span className="inline-flex items-center gap-1.5">
            <Braces className="h-4 w-4 text-primary" />
            {t("skillsSection.resultsCount", { count: visibleSkillCount })}
          </span>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.titleKey}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
            >
              <Card className="group h-full overflow-hidden border-border/70 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.06]">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between gap-3">
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-sky-400/10 text-primary ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105">
                        <skill.icon className="h-5 w-5" />
                      </span>
                      <span className="truncate text-base font-bold">
                        {t(`skillsSection.categories.${skill.titleKey}`)}
                      </span>
                    </span>
                    <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold tabular-nums text-muted-foreground">
                      {skill.items.length}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border/70 bg-background px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
