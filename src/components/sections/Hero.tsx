import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center pt-40 pb-8 overflow-hidden  xl:container mx-auto"
    >
      <div className="w-full mx-auto px-4  sm:px-6 lg:px-8 ">
        <div className="grid xl:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left min-w-full"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-gray-300 leading-snug">
              Salut, Je suis{" "}
              <span className="bg-gradient-to-r from-primary to-pink-500 text-transparent bg-clip-text">
                Bilal Ezzaim
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-muted-foreground">
              Full-stack Developer
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-6">
              Passionné par le développement web moderne et la création
              d'applications innovantes
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button size="lg" asChild>
                <a href="#contact" className="w-full sm:w-auto">
                  Contactez-moi <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects" className="w-full sm:w-auto">
                  Mes Projets
                </a>
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/Bilal-EZ-ZAIM/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 text-gray-800 hover:text-blue-500 transition dark:text-white dark:hover:text-blue-500" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/bilal-ezzaim-a34313240?originalSubdomain=ma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-gray-800 hover:text-blue-500 transition dark:text-white dark:hover:text-blue-500" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:bilalzaim499@gmail.com">
                  <Mail className="h-5 w-5 text-gray-800 hover:text-blue-500 transition dark:text-white dark:hover:text-blue-500" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] mx-auto">
              <img
                loading="lazy"
                src="https://bilal-ez-zaim.github.io/bilal-ezzaim/image/bilal.png"
                alt="Bilal Zaim"
                className="rounded-full w-full h-full object-cover shadow-xl border-4 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full"></div>

              {[
                {
                  text: "MERN Stack",
                  position: "absolute -top-10 left-[50%]",
                  delay: 0.5,
                  color: "bg-[#4E9F3D] text-white",
                },
                {
                  text: "React",
                  position: "absolute top-5 left-[90%]",
                  delay: 0.7,
                  color: "bg-[#61DBFB] text-black",
                },
                {
                  text: "Node.js",
                  position: "absolute top-5 left-[-10%]",
                  delay: 0.9,
                  color: "bg-[#8CC84B] text-white",
                },
                {
                  text: "MongoDB",
                  position: "absolute top-[40%] left-[99%]",
                  delay: 1.1,
                  color: "bg-[#47A248] text-white",
                },
                {
                  text: "Tailwind",
                  position: "absolute top-[70%] left-[90%]",
                  delay: 1.3,
                  color: "bg-[#38BDF8] text-black",
                },
                {
                  text: "JavaScript",
                  position: "absolute top-[40%] left-[-30%]",
                  delay: 1.5,
                  color: "bg-[#F7DF1E] text-black",
                },
                {
                  text: "NestJS",
                  position: "absolute top-[70%] left-[-15%]",
                  delay: 1.7,
                  color: "bg-[#E0234E] text-white",
                },
                {
                  text: "Next.js",
                  position: "absolute top-[95%] left-[30%]",
                  delay: 1.9,
                  color: "bg-[#000000] text-white",
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className={`${skill.position} transform -translate-x-1/2 -translate-y-1/2 ${skill.color} rounded-full p-2 sm:p-3 shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: skill.delay }}
                >
                  <code className="text-xs sm:text-sm font-mono">
                    {skill.text}
                  </code>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
