import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const differentials = [
  "Equipe multidisciplinar de especialistas",
  "Gestão financeira com prestação de contas mensal",
  "Atendimento 24 horas para emergências",
  "Plataforma digital para moradores",
  "Assessoria jurídica especializada",
  "Auditorias periódicas de contas",
  "Programa de redução de custos",
  "Mediação de conflitos condominiais",
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="section-padding hero-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
            Diferenciais
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
            Por que escolher a Renan & Sheila?
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg font-light">
            Nosso compromisso vai além da administração. Transformamos a
            experiência de viver em condomínio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {differentials.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4 glass-card rounded-sm p-5"
            >
              <CheckCircle className="text-primary shrink-0" size={20} />
              <span className="text-primary-foreground/90 text-sm font-medium">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
