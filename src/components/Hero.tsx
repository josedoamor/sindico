import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Condomínio moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase border border-primary/30 px-5 py-2 rounded-sm">
              Gestão Condominial de Excelência
            </span>
          </motion.div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Seu condomínio em{" "}
            <span className="text-gradient">boas mãos</span>
          </h1>

          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Gestão condominial com prestação de contas clara, processos bem definidos e comunicação rápida para o morador saber o que está acontecendo e ver resultado
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm font-medium tracking-wide hover:bg-teal-dark transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Solicite uma Proposta
            </a>
            <a
              href="#servicos"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-sm text-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-all"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-primary-foreground/50" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
