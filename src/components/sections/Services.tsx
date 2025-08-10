import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Globe, Server, Smartphone, Palette, Rocket } from "lucide-react";

const servicesData = [
  {
    icon: Globe,
    titleKey: "services.fullStack.title",
    descriptionKey: "services.fullStack.description",
    featuresKey: "services.fullStack.features",
  },
  {
    icon: Smartphone,
    titleKey: "services.responsiveSites.title",
    descriptionKey: "services.responsiveSites.description",
    featuresKey: "services.responsiveSites.features",
  },
  {
    icon: Server,
    titleKey: "services.backend.title",
    descriptionKey: "services.backend.description",
    featuresKey: "services.backend.features",
  },
  {
    icon: Code2,
    titleKey: "services.frontend.title",
    descriptionKey: "services.frontend.description",
    featuresKey: "services.frontend.features",
  },
  {
    icon: Palette,
    titleKey: "services.uiux.title",
    descriptionKey: "services.uiux.description",
    featuresKey: "services.uiux.features",
  },
  {
    icon: Rocket,
    titleKey: "services.deploy.title",
    descriptionKey: "services.deploy.description",
    featuresKey: "services.deploy.features",
  },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{t(service.descriptionKey)}</p>
                  <ul className="space-y-2">
                    {(Array.isArray(t(service.featuresKey, { returnObjects: true }))
                      ? (t(service.featuresKey, { returnObjects: true }) as string[])
                      : []
                    ).map((feature: string) => (
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
