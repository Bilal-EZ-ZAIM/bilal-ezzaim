import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Building } from "lucide-react";

const educations = [
  {
    institutionKey: "education.youCode.institution",
    dateKey: "education.youCode.date",
    fieldKey: "education.youCode.field",
    descriptionKey: "education.youCode.description",
    skills: [
      "POO", "React.js", "SQL", "Node.js", "Vue.js", "C",
      "API Development", "Redux.js", "Laravel", "HTML5", "MySQL",
      "MongoDB", "Express.js", "JavaScript", "CSS", "PHP"
    ],
  },
  {
    institutionKey: "education.simplon.institution",
    dateKey: "education.simplon.date",
    fieldKey: "education.simplon.field",
    descriptionKey: "", // No description for second education in original
    skills: [
      "POO", "React.js", "Scrum", "SQL", "Node.js", "Vue.js",
      "API Development", "Redux.js", "Laravel", "JIRA", "Figma",
      "HTML5", "MongoDB", "Express.js", "JavaScript", "CSS", "PHP"
    ],
  },
];

export function Education() {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t("education.title")}
        </motion.h2>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.institutionKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span>{t(edu.institutionKey)}</span>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{t(edu.dateKey)}</span>
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{t(edu.fieldKey)}</span>
                  </div>
                  {edu.descriptionKey && (
                    <p className="text-muted-foreground">{t(edu.descriptionKey)}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
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
