import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span>Full-stack Developer - BOOKIZONE</span>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>mai 2024 - juil. 2024</span>
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Stage de 3 mois à Casablanca-Settat, Maroc
              </p>
              <div className="space-y-2">
                <p>
                  Pendant mon stage chez Bookizone, j'ai développé mes compétences en Laravel, PHP, et Flutter. 
                  J'ai participé au projet "Gestion de Syndique", une application web et mobile pour la gestion 
                  de complexes résidentiels, avec des rôles définis (Super Admin, Syndique, Résidents).
                </p>
                <p>
                  Mes principales réalisations :
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Développement front-end et back-end</li>
                  <li>Intégration de Bootstrap et SweetAlert</li>
                  <li>Implémentation de services RESTful API</li>
                  <li>Gestion CRUD et authentification des utilisateurs</li>
                  <li>Validation des données et système d'e-mails</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Laravel", "PHP", "JavaScript", "CSS", "HTML", "Bootstrap", "SQL", "Flutter", "REST API"].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}