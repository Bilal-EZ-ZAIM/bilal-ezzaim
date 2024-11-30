import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Globe, Server, Smartphone, Palette, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Développement Full Stack",
    description: "Création d'applications web complètes et performantes avec les dernières technologies MERN Stack.",
    features: [
      "Applications web sur mesure",
      "API RESTful",
      "Base de données optimisée",
      "Architecture moderne"
    ]
  },
  {
    icon: Smartphone,
    title: "Sites Web Responsifs",
    description: "Conception de sites web adaptatifs offrant une expérience utilisateur optimale sur tous les appareils.",
    features: [
      "Design mobile-first",
      "Performance optimisée",
      "Compatibilité multi-navigateurs",
      "Animations fluides"
    ]
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Développement de serveurs robustes et évolutifs avec Node.js et Express.",
    features: [
      "API sécurisées",
      "Authentification JWT",
      "Gestion de base de données",
      "Microservices"
    ]
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Création d'interfaces utilisateur modernes et interactives avec React.js.",
    features: [
      "UI/UX moderne",
      "État global avec Redux",
      "Composants réutilisables",
      "Optimisation des performances"
    ]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Conception d'interfaces utilisateur intuitives et esthétiques.",
    features: [
      "Design moderne",
      "Expérience utilisateur optimisée",
      "Prototypage",
      "Guidelines de design"
    ]
  },
  {
    icon: Rocket,
    title: "Déploiement & Maintenance",
    description: "Déploiement et maintenance continue de vos applications.",
    features: [
      "Configuration serveur",
      "Déploiement automatisé",
      "Monitoring",
      "Support technique"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Mes Services</h2>
          <p className="text-muted-foreground text-lg">
            Des solutions sur mesure pour vos projets web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}