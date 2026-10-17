import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Calendar,
  CheckCircle2,
  Code2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

type ExperienceItem = {
  title: string;
  date: string;
  location: string;
  description: string;
  tasks?: string[];
  skills: string[];
  sectors?: string[];
  projects?: {
    title: string;
    tasks: string[];
    technologies: string[];
  }[];
};

export function Experience() {
  const { t } = useTranslation();
  const experiences = t("experience.experiences", {
    returnObjects: true,
  }) as ExperienceItem[];

  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            {t("experience.summaryLabel")}
          </div>
          <h2 className="section-heading">{t("experience.title")}</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {t("experience.summary")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.title}-${exp.date}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="group overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary via-sky-400 to-primary/20" />
                <CardContent className="p-5 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                          {exp.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 shrink-0 text-primary" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit shrink-0 gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.date}
                    </Badge>
                  </div>

                  <p className="mt-6 max-w-5xl text-base leading-7 text-muted-foreground">
                    {exp.description}
                  </p>

                  {exp.sectors && exp.sectors.length > 0 && (
                    <div className="mt-6">
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                        {t("experience.sectorsLabel")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.sectors.map((sector) => (
                          <Badge
                            key={sector}
                            variant="outline"
                            className="rounded-full border-primary/20 bg-primary/[0.04] px-3 py-1 text-foreground"
                          >
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mt-7">
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-bold">
                        <Code2 className="h-4 w-4 text-primary" />
                        {t("experience.projectsLabel")}
                      </h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        {exp.projects.map((project) => (
                          <article
                            key={project.title}
                            className="flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-card"
                          >
                            <div className="flex-1 p-4">
                              <h5 className="font-semibold leading-6 text-foreground">
                                {project.title}
                              </h5>
                              <ol className="mt-3 space-y-2">
                                {project.tasks.map((task, taskIndex) => (
                                  <li
                                    key={task}
                                    className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
                                  >
                                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                                      {taskIndex + 1}
                                    </span>
                                    <span>{task}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                            <div className="border-t border-border/70 bg-muted/35 px-4 py-3">
                              <div className="flex flex-wrap gap-1.5">
                                {project.technologies.map((technology) => (
                                  <Badge
                                    key={technology}
                                    variant="secondary"
                                    className="rounded-full px-2.5 py-1 text-xs font-medium"
                                  >
                                    {technology}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.tasks && exp.tasks.length > 0 && (
                    <div className="mt-7">
                      <h4 className="mb-3 text-sm font-bold">
                        {t("experience.contributionsLabel")}
                      </h4>
                      <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">
                        {exp.tasks.map((task) => (
                          <li
                            key={task}
                            className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-7 border-t border-border/70 pt-5">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      {t("experience.technologyLabel")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="rounded-full px-3 py-1 font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
