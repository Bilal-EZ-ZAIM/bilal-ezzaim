import { useState } from "react";
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
  | "Database";

const skills = [
  {
    title: "Langages",
    icon: Code2,
    category: "languages",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Sql",
      "NoSql",
      "Php",
      "C",
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    category: "frameworks",
    items: ["Next.js", "TailwindCSS", "Bootstrap"],
  },
  {
    title: "Libraries",
    icon: Library,
    category: "libraries",
    items: ["React", "Redux", "Redux Toolkit", "Axios", "React-hook-form"],
  },
  {
    title: "Backend",
    icon: Server,
    category: "frameworks",
    items: ["Node.js", "Express.js", "Nest.js"],
  },
  {
    title: "Database",
    icon: Database,
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Outils",
    icon: Settings,
    category: "Outils",
    items: ["Git", "Docker", "VS Code", "Postman"],
  },
];

export function Skills() {
  const [filter, setFilter] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter(
    (skill) => filter === "all" || skill.category === filter
  );

  return (
    <section id="skills" className="py-20  container mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Mes Compétences
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            Tout
          </Button>
          <Button
            variant={filter === "languages" ? "default" : "outline"}
            onClick={() => setFilter("languages")}
          >
            Langages
          </Button>
          <Button
            variant={filter === "frameworks" ? "default" : "outline"}
            onClick={() => setFilter("frameworks")}
          >
            Frameworks
          </Button>
          <Button
            variant={filter === "libraries" ? "default" : "outline"}
            onClick={() => setFilter("libraries")}
          >
            Bibliothèques
          </Button>
          <Button
            variant={filter === "Database" ? "default" : "outline"}
            onClick={() => setFilter("Database")}
          >
            Database
          </Button>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.title}
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
                    {skill.title}
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
