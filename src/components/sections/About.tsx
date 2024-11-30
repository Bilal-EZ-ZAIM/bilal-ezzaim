import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          À Propos de Moi
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <p className="text-lg leading-relaxed">
                Bonjour! Je suis Bilal Ezzaim, un développeur MERN Stack
                passionné de 25 ans. Actuellement étudiant à YouCode, je me
                spécialise dans la création d'applications web modernes et
                performantes.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-lg leading-relaxed">
                Ma passion pour le développement web m'a conduit à maîtriser
                l'ensemble de la stack MERN, me permettant de créer des
                applications complètes, du backend au frontend. Je suis
                constamment à la recherche de nouveaux défis et d'opportunités
                d'apprentissage.
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://bilal-ez-zaim.github.io/bilal-ezzaim/image/bilal.png"
              loading="lazy"
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
//
