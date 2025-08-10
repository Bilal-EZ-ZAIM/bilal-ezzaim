import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type ProjectCategory = "all" | "mern" | "react" | "express" | "nest";

const projects = [
  {
    id: 1,
    title: {
      en: "Moride",
      fr: "Moride",
      ar: "Moride",
    },
    description: {
      en: `I am excited to present Moride, the beta version of my platform dedicated to booking trips and tourist offers. The site is currently in testing phase, and your feedback and suggestions are welcome to improve it.

Technologies used:

Frontend:
- React, TypeScript, Tailwind CSS

Backend:
- NestJS, MongoDB

State Management:
- Redux Toolkit

Authentication & Security:
- Full authentication system including Google Auth and Guards

Image Upload:
- Cloudinary`,
      fr: `Je suis ravi de vous présenter Moride, la version bêta de ma plateforme dédiée à la réservation de voyages et d'offres touristiques. Le site est actuellement en phase de test, vos retours et suggestions sont les bienvenus pour l'améliorer.

Technologies utilisées :

Frontend :
- React, TypeScript, Tailwind CSS

Backend :
- NestJS, MongoDB

Gestion d'état :
- Redux Toolkit

Authentification & Sécurité :
- Système complet d'authentification incluant Google Auth et Guards

Téléchargement d’images :
- Cloudinary`,
      ar: `يسعدني أن أقدم لكم موريد، النسخة التجريبية من منصتي المخصصة لحجز الرحلات والعروض السياحية. الموقع حالياً في مرحلة الاختبار، وآراؤكم واقتراحاتكم مرحب بها لتحسينه.

التقنيات المستخدمة:

الواجهة الأمامية:
- React، TypeScript، Tailwind CSS

الخلفية:
- NestJS، MongoDB

إدارة الحالة:
- Redux Toolkit

المصادقة والأمان:
- نظام مصادقة كامل يشمل Google Auth و Guards

رفع الصور:
- Cloudinary`,
    },
    image: "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/moride.png",
    category: "nest",
    tags: {
      en: ["React", "TypeScript", "Tailwind CSS", "NestJS", "MongoDB", "Redux Toolkit", "Cloudinary", "Google Auth"],
      fr: ["React", "TypeScript", "Tailwind CSS", "NestJS", "MongoDB", "Redux Toolkit", "Cloudinary", "Google Auth"],
      ar: ["React", "TypeScript", "Tailwind CSS", "NestJS", "MongoDB", "Redux Toolkit", "Cloudinary", "Google Auth"],
    },
    github: "https://github.com/Bilal-EZ-ZAIM/moride-front-end",
    demo: "https://moride.vercel.app/",
    blog: "",
  },
  {
    id: 2,
    title: {
      en: "Sportify",
      fr: "Sportify",
      ar: "Sportify",
    },
    description: {
      en: `Sportify is a web app built to simplify event management and registrations for a sports organization.

Features:
- Manage sports events (create, modify, delete)
- Manage registrations (add, edit participants)
- Generate and print participant lists`,
      fr: `Sportify est une application web développée pour simplifier la gestion des événements et des inscriptions pour une organisation sportive.

Fonctionnalités :
- Gestion des événements sportifs (création, modification, suppression)
- Gestion des inscriptions (ajout, modification des participants)
- Génération et impression des listes de participants`,
      ar: `سبورتي فاي هو تطبيق ويب تم تطويره لتبسيط إدارة الأحداث والتسجيلات لمنظمة رياضية.

الميزات:
- إدارة الأحداث الرياضية (إنشاء، تعديل، حذف)
- إدارة التسجيلات (إضافة، تعديل المشاركين)
- إنشاء وطباعة قوائم المشاركين`,
    },
    image:
      "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/Capture d'écran 2024-11-29 215745.png",
    category: "mern",
    tags: {
      en: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      fr: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      ar: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    },
    github: "https://github.com/Bilal-EZ-ZAIM/Sportify-frontend.git",
    demo: "https://bilal-ez-zaim.github.io/Sportify-frontend/",
    blog: "",
  },
  {
    id: 3,
    title: {
      en: "Topico",
      fr: "Topico",
      ar: "Topico",
    },
    description: {
      en: `Topico is an e-commerce platform developed with the MERN stack.

Modern responsive UI built with React and Tailwind CSS.
Backend powered by Node.js, Express, and MongoDB for fast and reliable data management.`,
      fr: `Topico est une plateforme de commerce électronique développée avec la stack MERN.

Interface utilisateur moderne et responsive construite avec React et Tailwind CSS.
Backend géré avec Node.js, Express, et MongoDB pour une gestion rapide et fiable des données.`,
      ar: `توبيكو هو منصة تجارة إلكترونية تم تطويرها باستخدام تقنية MERN.

واجهة مستخدم حديثة ومتجاوبة مبنية بـ React و Tailwind CSS.
الخلفية مدعومة بـ Node.js و Express و MongoDB لإدارة بيانات سريعة وموثوقة.`,
    },
    image: "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/toppic 3.png",
    category: "mern",
    tags: {
      en: ["React", "Node.js", "MongoDB", "Express", "axios", "redux-toolkit", "Tailwind CSS"],
      fr: ["React", "Node.js", "MongoDB", "Express", "axios", "redux-toolkit", "Tailwind CSS"],
      ar: ["React", "Node.js", "MongoDB", "Express", "axios", "redux-toolkit", "Tailwind CSS"],
    },
    github: "https://github.com/Bilal-EZ-ZAIM/Topico.git",
    demo: "https://bilal-ez-zaim.github.io/Topico/",
    blog: "",
  },
  {
    id: 4,
    title: {
      en: "Booke-Store",
      fr: "Booke-Store",
      ar: "Booke-Store",
    },
    description: {
      en: `Booke-Store is a web application dedicated to online book sales.

Developed with React for smooth and interactive UI.
JavaScript handles data and user interactions.
HTML and CSS provide an attractive design.
Redux Toolkit manages global state effectively.`,
      fr: `Booke-Store est une application web dédiée à la vente de livres en ligne.

Développée avec React pour une interface fluide et interactive.
JavaScript gère les données et les interactions utilisateur.
HTML et CSS assurent un design attrayant.
Redux Toolkit permet une gestion efficace de l'état global.`,
      ar: `بووك ستور هو تطبيق ويب مخصص لبيع الكتب عبر الإنترنت.

تم تطويره باستخدام React لواجهة مستخدم سلسة وتفاعلية.
JavaScript يدير البيانات والتفاعلات.
HTML و CSS يوفران تصميماً جذاباً.
Redux Toolkit يدير الحالة العامة بكفاءة.`,
    },
    image: "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/book-store.png",
    category: "react",
    tags: {
      en: ["React", "TailwindCSS", "redux-toolkit"],
      fr: ["React", "TailwindCSS", "redux-toolkit"],
      ar: ["React", "TailwindCSS", "redux-toolkit"],
    },
    github: "https://github.com/Bilal-EZ-ZAIM/Booke-Store.git",
    demo: "https://bilal-ez-zaim.github.io/Booke-Store/",
    blog: "",
  },
  {
    id: 5,
    title: {
      en: "Dubai Safari",
      fr: "Dubai Safari",
      ar: "Dubai Safari",
    },
    description: {
      en: `Dubai Safari is a frontend app dedicated to displaying trips and schedules clearly and attractively.

Built with React for a simple, smooth, and intuitive UI.
Navigation handled by React Router.
Styled carefully with CSS.`,
      fr: `Dubai Safari est une application frontend dédiée à l'affichage des voyages et des horaires de manière claire et attrayante.

Construit avec React pour une interface simple, fluide et intuitive.
Navigation assurée par React Router.
Design soigné avec CSS.`,
      ar: `دبي سفاري هو تطبيق واجهة أمامية مخصص لعرض الرحلات والجداول بشكل واضح وجذاب.

تم بناؤه باستخدام React لواجهة بسيطة وسلسة وسهلة الاستخدام.
التنقل يتم عبر React Router.
تم تصميمه بعناية باستخدام CSS.`,
    },
    image:
      "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/Capture d'écran 2024-11-29 213824.png",
    category: "react",
    tags: {
      en: ["React", "Css", "react-router-dom"],
      fr: ["React", "Css", "react-router-dom"],
      ar: ["React", "Css", "react-router-dom"],
    },
    github: "https://github.com/Bilal-EZ-ZAIM/dubai-Safari",
    demo: "https://bilal-ez-zaim.github.io/dubai-Safari/",
    blog: "",
  },
  {
    id: 6,
    title: {
      en: "Portfolio",
      fr: "Portfolio",
      ar: "Portfolio",
    },
    description: {
      en: `My portfolio is a web app developed with React and React Router.

It features detailed sections about my background, technical skills, and completed projects.
Responsive layout with CSS for a smooth user experience.
Includes an integrated contact form for easy communication.`,
      fr: `Mon portfolio est une application web développée avec React et React Router.

Il présente des sections détaillées sur mon parcours, mes compétences techniques et mes projets réalisés.
Mise en page responsive en CSS pour une expérience utilisateur fluide.
Comprend un formulaire de contact intégré pour une communication facile.`,
      ar: `بورتفوليو هو تطبيق ويب تم تطويره باستخدام React و React Router.

يحتوي على أقسام مفصلة حول خلفيتي ومهاراتي التقنية والمشاريع المنجزة.
تصميم متجاوب باستخدام CSS لتجربة مستخدم سلسة.
يتضمن نموذج اتصال مدمج للتواصل السهل.`,
    },
    image: "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/protfolio.png",
    category: "react",
    tags: {
      en: ["React", "CSS", "React Router"],
      fr: ["React", "CSS", "React Router"],
      ar: ["React", "CSS", "React Router"],
    },
    github: "https://github.com/Bilal-EZ-ZAIM/MyProtfolio.git",
    demo: "https://bilal-ez-zaim.github.io/MyProtfolio/",
    blog: "",
  },
];


export function Projects() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const lang = i18n.language.startsWith("ar")
    ? "ar"
    : i18n.language.startsWith("fr")
      ? "fr"
      : "en";

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          {t("projectsSection.title")}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(["all", "mern", "react", "express", "nest"] as ProjectCategory[]).map(
            (cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="w-full sm:w-auto"
              >
                {t(`projectsSection.filters.${cat}`)}
              </Button>
            )
          )}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title[lang]}</CardTitle>
                  <CardDescription>
                    {project.description[lang].length > 200
                      ? `${project.description[lang].substring(0, 200)}...`
                      : project.description[lang]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags[lang].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t("projectsSection.buttons.github")}
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("projectsSection.buttons.demo")}
                    </a>
                  </Button>
                  {project.blog && (
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.blog}>{t("projectsSection.buttons.more")}</a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
