import { motion } from "framer-motion";
import { Shield, Eye, Scale, Clock, Users, Wrench } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Eficiência",
    description:
      "Otimização de processos e recursos para soluções rápidas e eficazes, atendendo demandas com precisão e agilidade.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description:
      "Atualizações constantes e acesso facilitado às informações financeiras e operacionais do condomínio.",
  },
  {
    icon: Scale,
    title: "Conformidade Legal",
    description:
      "Gestão alinhada à legislação vigente, garantindo segurança jurídica para o condomínio e seus moradores.",
  },
  {
    icon: Clock,
    title: "Gestão Financeira",
    description:
      "Controle rigoroso de receitas e despesas, com relatórios detalhados e planejamento orçamentário estratégico.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description:
      "Equipe dedicada ao atendimento dos moradores, resolvendo demandas de forma ágil e humanizada.",
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description:
      "Programas de manutenção que preservam o patrimônio e evitam custos inesperados com reparos emergenciais.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Excelência em gestão condominial
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Nossa equipe de profissionais experientes oferece uma administração
            eficiente, transparente e de alta qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group bg-card p-8 rounded-sm border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <service.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
