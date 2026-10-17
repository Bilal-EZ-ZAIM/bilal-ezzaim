import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  GraduationCap,
  HeartPulse,
  Landmark,
  Sparkles,
} from "lucide-react";

const sectors = [
  {
    key: "banking",
    icon: Landmark,
    accent: "from-blue-500/15 to-indigo-500/5 text-blue-600 dark:text-blue-400",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    key: "healthcare",
    icon: HeartPulse,
    accent: "from-rose-500/15 to-pink-500/5 text-rose-600 dark:text-rose-400",
    glow: "group-hover:shadow-rose-500/10",
  },
  {
    key: "education",
    icon: GraduationCap,
    accent:
      "from-amber-500/15 to-orange-500/5 text-amber-700 dark:text-amber-400",
    glow: "group-hover:shadow-amber-500/10",
  },
];

export function About() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");

  return (
    <section
      id="about"
      className="relative isolate scroll-mt-20 overflow-hidden bg-muted/30 py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-primary/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-violet-400/[0.07] blur-3xl"
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.06] px-4 py-1.5 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            {t("aboutSection.eyebrow")}
          </div>
          <h2 className="section-heading">{t("aboutSection.title")}</h2>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 36 : -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-5"
          >
            <div className="rounded-3xl border border-border/70 bg-card/85 p-6 shadow-lg shadow-primary/[0.04] backdrop-blur-sm sm:p-8">
              <p className="text-lg font-semibold leading-8 text-foreground sm:text-xl sm:leading-9">
                {t("aboutSection.paragraph1")}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] via-card/90 to-sky-400/[0.08] p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -bottom-12 -end-10 h-36 w-36 rounded-full bg-primary/10 blur-2xl"
              />
              <p className="relative text-base leading-8 text-muted-foreground sm:text-lg">
                {t("aboutSection.paragraph2")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isArabic ? -36 : 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-[5%] rotate-[7deg] rounded-[43%_57%_59%_41%/42%_43%_57%_58%] bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 opacity-85 shadow-2xl shadow-primary/20"
            />
            <div
              aria-hidden="true"
              className="absolute -end-2 top-[12%] h-28 w-28 rounded-full bg-violet-400/25 blur-2xl"
            />
            <img
              src={`${import.meta.env.BASE_URL}image/bilal-cutout.png`}
              loading="lazy"
              alt={t("hero.name")}
              className="relative z-10 aspect-[1/0.96] w-full object-contain object-bottom drop-shadow-xl"
            />
            <div className="absolute bottom-2 start-2 z-20 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/90 px-4 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur sm:start-0">
              <span className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15" />
              {t("hero.title")}
              <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
            <h3 className="shrink-0 text-center text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground sm:text-base">
              {t("aboutSection.sectorsTitle")}
            </h3>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.article
                key={sector.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-card/85 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${sector.glow} sm:p-6`}
              >
                <div
                  aria-hidden="true"
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${sector.accent} ring-1 ring-current/10`}
                >
                  <sector.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-foreground">
                  {t(`aboutSection.sectors.${sector.key}.title`)}
                </h4>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {t(`aboutSection.sectors.${sector.key}.description`)}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
