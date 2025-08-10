import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Code2,
  Database,
  Layout,
  Library,
  Server,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type SkillCategory =
  | "all"
  | "languages"
  | "frameworks"
  | "libraries"
  | "database"
  | "tools";

const skills = [
  {
    titleKey: "languages",
    icon: Code2,
    category: "languages",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "SQL",
      "NoSQL",
      "PHP",
      "C",
    ],
  },
  {
    titleKey: "frontend",
    icon: Layout,
    category: "frameworks",
    items: ["Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    titleKey: "libraries",
    icon: Library,
    category: "libraries",
    items: ["React", "Redux", "Redux Toolkit", "Axios", "React-hook-form"],
  },
  {
    titleKey: "backend",
    icon: Server,
    category: "frameworks",
    items: ["Node.js", "Express.js", "Nest.js"],
  },
  {
    titleKey: "database",
    icon: Database,
    category: "database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    titleKey: "tools",
    icon: Settings,
    category: "tools",
    items: ["Git", "Docker", "VS Code", "Postman"],
  },
];

export function Skills() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter(
    (skill) => filter === "all" || skill.category === filter
  );

  return (
    <section id="skills" className="py-20 container mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          {t("skillsSection.title")}
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          {(Object.keys(t("skillsSection.filters", { returnObjects: true })) as SkillCategory[]).map((key) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              onClick={() => setFilter(key)}
            >
              {t(`skillsSection.filters.${key}`)}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.titleKey}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <skill.icon className="h-5 w-5 text-primary" />
                    {t(`skillsSection.categories.${skill.titleKey}`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-muted-foreground">
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
