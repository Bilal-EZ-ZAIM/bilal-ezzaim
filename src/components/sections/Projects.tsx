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

type ProjectCategory = "all" | "mern" | "react" | "express" | "nest";

const projects = [
  {
    title: "Moride",
    description: `Je suis ravi de vous présenter Moride, la version bêta de ma plateforme dédiée à la réservation de voyages et d'offres touristiques. Le site est actuellement en phase de test, et vos retours et suggestions sont les bienvenus pour l'améliorer. 🚀✨
  
  🔹 Technologies utilisées dans le développement de Moride :
  
  ✅ **Frontend :**
  - **React ⚛️** : Bibliothèque puissante pour la création d'interfaces utilisateur interactives.
  - **TypeScript 📝** : Ajoute des fonctionnalités de typage statique pour un code plus robuste.
  - **Tailwind CSS 🎨** : Framework moderne pour un design flexible et réactif.
  
  ✅ **Backend :**
  - **NestJS 🏗️** : Framework avancé pour le développement d’applications serveur performantes.
  - **MongoDB 🗄️** : Base de données NoSQL rapide et flexible.
  
  ✅ **Gestion d'état :**
  - **Redux Toolkit 🔄** : Outil performant pour simplifier la gestion de l’état dans les applications React.
  
  ✅ **Authentification et sécurité :**
  - Système d’authentification complet 🔑 : Connexion sécurisée, y compris via Google.
  - **Guards 🔐** : Mécanismes de protection avancés pour sécuriser les données et les accès.
  
  ✅ **Téléchargement d’images :**
  - **Cloudinary 📸** : Service optimisé pour la gestion et l’optimisation des images.
  
  💡 Je vous invite à tester la plateforme et à partager vos impressions pour contribuer à son amélioration continue !
  
  🌐 [Moride](https://moride.vercel.app/)
  
  Vous pouvez également découvrir mes autres projets sur mon site personnel :
  
  👨‍💻 [Bilal Ezzaim](https://bilal-ez-zaim.github.io/bilal-ezzaim/)`,
    image: "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/moride.png",
    category: "nest",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "MongoDB",
      "Redux Toolkit",
      "Cloudinary",
      "Google Auth",
    ],
    github: "https://github.com/Bilal-EZ-ZAIM/moride-front-end",
    demo: "https://moride.vercel.app/",
    blog: "",
  },
  {
    title: "Sportify",
    description: `Sportify est une application web développée pour une organisation sportive afin de simplifier la gestion des événements et des inscriptions. 
  L'application offre une interface intuitive et moderne permettant aux organisateurs de :
  - **Gérer les événements sportifs** : création, modification, et suppression des événements.
  - **Gérer les inscriptions** : ajouter ou modifier les participants pour chaque événement.
  - **Générer et imprimer** une liste complète des participants inscrits à un événement donné.
  Cette solution vise à améliorer l'efficacité du processus d'inscription tout en offrant une expérience utilisateur fluide et professionnelle.`,
    image:
      "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/Capture d'écran 2024-11-29 215745.png",
    category: "mern",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Bilal-EZ-ZAIM/Sportify-frontend.git",
    demo: "https://bilal-ez-zaim.github.io/Sportify-frontend/",
    blog: "",
  },
  {
    title: "Topico",
    description: `Topico est une plateforme de commerce électronique développée avec la MERN Stack
    Ce projet offre une interface utilisateur moderne et réactive construite avec React et stylisée avec Tailwind CSS. 
    Le backend, géré avec Node.js et Express, est conçu pour des performances optimales, tandis que MongoDB assure une gestion rapide et fiable des données.`,
    image: "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/toppic 3.png",
    category: "mern",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "axios",
      "redux-toolkit",
      "Tailwind CSS",
    ],
    github: "https://github.com/Bilal-EZ-ZAIM/Topico.git",
    demo: "https://bilal-ez-zaim.github.io/Topico/",
    blog: "",
  },
  {
    title: "Booke-Store",
    description: `Booke-Store est une application web dédiée à la vente de livres en ligne. 
    L'interface utilisateur a été développée avec React, assurant une navigation fluide et interactive. 
    JavaScript a été utilisé pour gérer les données et les interactions utilisateur, 
    tandis que HTML et CSS ont permis de créer un design attrayant et bien structuré. 
    Redux Toolkit est intégré pour une gestion efficace de l'état global de l'application.`,
    image: "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/book-store.png",
    category: "react",
    tags: ["React", "TailwindCSS", "redux-toolkit"],
    github: "https://github.com/Bilal-EZ-ZAIM/Booke-Store.git",
    demo: "https://bilal-ez-zaim.github.io/Booke-Store/",
    blog: "",
  },
  {
    title: "Dubai Safari",
    description: `Dubai Safari est une application frontend dédiée à l'affichage des voyages et de leurs horaires de manière claire et attrayante. 
    Construit avec **React**, ce projet propose une interface utilisateur simple, fluide et intuitive pour améliorer l'expérience des utilisateurs. 
    La navigation est assurée par **React Router**, et le design est soigneusement réalisé avec CSS.`,
    image:
      "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/Capture d'écran 2024-11-29 213824.png",
    category: "react",
    tags: ["React", "Css", "react-router-dom"],
    github: "https://github.com/Bilal-EZ-ZAIM/dubai-Safari",
    demo: "https://bilal-ez-zaim.github.io/dubai-Safari/",
    blog: "",
  },
  {
    title: "Portfolio",
    description: `Mon portfolio est une application web développée avec React et React Router. Il présente une section détaillée sur mon parcours, mes compétences techniques, ainsi qu'une section pour mes projets réalisés. 
    L'interface est soignée avec une mise en page responsive, réalisée en CSS, offrant une expérience utilisateur fluide et agréable. 
    Ce portfolio permet également de me contacter facilement grâce à un formulaire de contact intégré.`,
    image: "https://bilal-ez-zaim.github.io/bilal-ezzaim/image/protfolio.png",
    category: "react",
    tags: ["React", "CSS", "React Router"],
    github: "https://github.com/Bilal-EZ-ZAIM/MyProtfolio.git",
    demo: "https://bilal-ez-zaim.github.io/MyProtfolio/",
    blog: "",
  },
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

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
          Mes Projets
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            Tout
          </Button>
          <Button
            variant={filter === "mern" ? "default" : "outline"}
            onClick={() => setFilter("mern")}
          >
            MERN
          </Button>
          <Button
            variant={filter === "react" ? "default" : "outline"}
            onClick={() => setFilter("react")}
          >
            React
          </Button>
          <Button
            variant={filter === "express" ? "default" : "outline"}
            onClick={() => setFilter("express")}
          >
            Express
          </Button>
          {/* <Button
            variant={filter === "nest" ? "default" : "outline"}
            onClick={() => setFilter("nest")}
          >
            NestJS
          </Button> */}
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {project.description.length > 300
                      ? `${project.description.substring(0, 300)}...`
                      : project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={project.blog}>En savoir plus</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
