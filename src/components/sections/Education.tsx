import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Building } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Formation
        </motion.h2>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span>YouCode Maroc</span>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>sept. 2023 - mai 2025</span>
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>Développement Full Stack, Programmation informatique</span>
                </div>
                <p className="text-muted-foreground">
                  YouCode est un établissement de développement web en partenariat avec l'UM6P, 
                  Simplon France et l'OCP. Le programme propose une formation complète en 
                  développement full-stack avec Laravel et Vue.js, suivi d'une spécialisation 
                  en fullstack Java ou full-stack JS durant la deuxième année.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "POO", "React.js", "SQL", "Node.js", "Vue.js", "C",
                    "API Development", "Redux.js", "Laravel", "HTML5", "MySQL",
                    "MongoDB", "Express.js", "JavaScript", "CSS", "PHP"
                  ].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span>Simplon Grand Ouest</span>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>sept. 2023 - avr. 2025</span>
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>Certificat de formation générale (CFG), Programmation / développeur informatique</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "POO", "React.js", "Scrum", "SQL", "Node.js", "Vue.js",
                    "API Development", "Redux.js", "Laravel", "JIRA", "Figma",
                    "HTML5", "MongoDB", "Express.js", "JavaScript", "CSS", "PHP"
                  ].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}