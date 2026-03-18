import { motion } from "framer-motion";
import { CheckCircle, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import couplePhoto from "@/assets/couple-photo.jpg";

type ModalKey = "condominocentrismo" | "sindicoProfissional" | "renan2" | null;

const About = () => {
  const [openModal, setOpenModal] = useState<ModalKey>(null);

  const modals: Record<Exclude<ModalKey, null>, { title: string; src: string }> = {
    condominocentrismo: {
      title: "Certificado — Condominocentrismo",
      src: "/certificado-condominocentrismo.pdf",
    },
    sindicoProfissional: {
      title: "Certificado — Síndico Profissional",
      src: "/certificado-sindico-profissional.pdf",
    },
    renan2: {
      title: "Certificado — Renan André de Souza",
      src: "/certificado-renan-2.pdf",
    },
  };

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Apresentação do casal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={couplePhoto}
              alt="Renan e Sheila — Síndicos Profissionais"
              className="w-full aspect-[3/4] object-contain bg-muted/30 rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary rounded-sm hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
              Quem Somos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Prazer, somos Renan e Sheila
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Somos Renan e Sheila, síndicos profissionais recém-formados,
              preparados para levar ao seu condomínio uma gestão organizada,
              humana e eficiente.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Atuamos com foco em transparência, economia e boa convivência,
              cuidando do patrimônio e das pessoas com responsabilidade e
              comprometimento.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Atendemos condomínios residenciais e comerciais em{" "}
              <strong className="text-foreground">
                São José, Florianópolis, Palhoça e Biguaçu
              </strong>
              , sempre com acompanhamento próximo, comunicação clara e decisões
              técnicas.
            </p>
            <p className="text-primary font-medium text-lg">
              👉 Seu condomínio merece uma nova forma de administrar.
            </p>
          </motion.div>
        </div>

        {/* Sobre Nós — texto institucional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
            Sobre Nós
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Uma nova geração de síndicos profissionais
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            Acreditamos que a gestão condominial precisa ser organizada,
            acessível e atualizada. Por isso, nos especializamos como síndicos
            profissionais para oferecer uma administração:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8">
            {[
              "Transparente",
              "Imparcial",
              "Atualizada com a legislação",
              "Próxima dos moradores",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-primary shrink-0" size={18} />
                <span className="text-foreground text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            Mesmo recém-formados, trazemos conhecimento técnico, dedicação total
            e olhar atento aos detalhes — algo essencial para quem busca mudança
            e melhoria real no condomínio.
          </p>
          <p className="text-foreground font-medium text-lg">
            Nosso objetivo é simples: organizar, economizar e valorizar o
            condomínio.
          </p>
        </motion.div>

        {/* Certificações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
              Certificações
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              Nossa formação e qualificação
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Renan */}
            <div className="bg-card p-8 rounded-sm border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Renan André de Souza
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Renan é formado em Análise e Desenvolvimento de Sistemas e,
                junto com sua experiência no ramo de síndico, usa tecnologia
                para garantir uma gestão mais organizada, com processos claros e
                acompanhamento eficiente do condomínio.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://drive.google.com/file/d/1gOk6RZtNfecFSpsCYTv1Zx3l_sJZv69T/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  <ExternalLink size={16} />
                  Ver certificado do Renan
                </a>
                <button
                  onClick={() => setOpenModal("sindicoProfissional")}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline text-left"
                >
                  <ExternalLink size={16} />
                  Ver certificado — Síndico Profissional
                </button>
                <button
                  onClick={() => setOpenModal("renan2")}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline text-left"
                >
                  <ExternalLink size={16} />
                  Ver certificado — Formação Complementar
                </button>
              </div>
            </div>

            {/* Sheila */}
            <div className="bg-card p-8 rounded-sm border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Sheila Oliveira dos Souza
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Sheila é síndica profissional certificada, com formação
                específica para atuar na gestão condominial com competência,
                responsabilidade e foco nas pessoas.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://drive.google.com/file/d/1IGYoIPAbAQZOjerqVBL6vmtVl8u57u3-/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  <ExternalLink size={16} />
                  Ver certificado da Sheila
                </a>
                <button
                  onClick={() => setOpenModal("condominocentrismo")}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline text-left"
                >
                  <ExternalLink size={16} />
                  Ver certificado — Condominocentrismo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal PDF */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="relative bg-white rounded-sm shadow-xl w-[90vw] h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <span className="text-sm font-medium text-foreground">
                {modals[openModal].title}
              </span>
              <button
                onClick={() => setOpenModal(null)}
                className="p-1 rounded hover:bg-muted transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src={modals[openModal].src}
              className="flex-1 w-full"
              title={modals[openModal].title}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
