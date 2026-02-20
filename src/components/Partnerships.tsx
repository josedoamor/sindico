import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  FileText,
  Gavel,
  ClipboardCheck,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548991473703?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20s%C3%ADndico%20profissional";

const items = [
  { icon: DollarSign, label: "Organização financeira" },
  { icon: Users, label: "Mediação de conflitos" },
  { icon: FileText, label: "Cumprimento de normas e convenções" },
  { icon: Gavel, label: "Apoio completo em assembleias" },
  { icon: ClipboardCheck, label: "Fiscalização de contratos e serviços" },
];

const Partnerships = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
            Como Atuamos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Parcerias e atuação estratégica
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            Trabalhamos em parceria com administradoras, prestadores de serviço e
            empresas, buscando sempre o melhor custo-benefício para o
            condomínio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 bg-card p-5 rounded-sm border border-border"
            >
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="text-primary" size={18} />
              </div>
              <span className="text-foreground text-sm font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-base mb-6">
            Estamos prontos para assumir a gestão em primeira assembleia ou em
            transição administrativa.
          </p>
          <p className="text-foreground font-medium mb-8">
            📞 Entre em contato e apresente nosso trabalho em assembleia.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-sm text-sm font-medium tracking-wide hover:bg-teal-dark transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
