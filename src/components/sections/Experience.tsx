import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Full-stack Developer - Fondation Mohammed VI",
      date: "juil. 2025 - Aujourd’hui",
      location: "Rabat-Salé-Kénitra, Maroc · Sur site",
      description: `Développement et maintenance dʼune application web interne avec ASP.NET et C#.`,
      skills: ["ASP.NET", "C#", ".NET Framework", "SQL", "SQL Server", "DevOps"],
    },
    {
      title: "Full-stack Developer - Tbeninnovation",
      date: "avr. 2025 - juin 2025",
      location: "Meknès, Fès-Meknès, Maroc · À distance",
      description: `Développement dʼun chat en temps réel (Express, WebSocket, PostgreSQL, Prisma) et création dʼun backend dʼupload (C#, intégration AWS S3).`,
      skills: ["Node.js", "Express", "WebSocket", "PostgreSQL", "Prisma", "C#", "AWS S3"],
    },
    {
      title: "Full-stack Developer - BOOKIZONE",
      date: "mai 2024 - juil. 2024",
      location: "Casablanca-Settat, Maroc",
      description: `Stage de 3 mois où j'ai participé au projet "Gestion de Syndique", une application web et mobile pour la gestion de complexes résidentiels (Super Admin, Syndique, Résidents).`,
      tasks: [
        "Développement front-end et back-end",
        "Intégration de Bootstrap et SweetAlert",
        "Implémentation de services RESTful API",
        "Gestion CRUD et authentification des utilisateurs",
        "Validation des données et système d'e-mails",
      ],
      skills: ["Laravel", "PHP", "JavaScript", "CSS", "HTML", "Bootstrap", "SQL", "Flutter", "REST API"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Expérience Professionnelle
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <span>{exp.title}</span>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.date}</span>
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.location}</p>
                  <p>{exp.description}</p>
                  {exp.tasks && (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
