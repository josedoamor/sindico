import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548991473703?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20s%C3%ADndico%20profissional";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
            Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Fale conosco
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
            Renan André de Souza & Sheila Oliveira dos Souza
          </p>
          <p className="text-primary text-sm font-medium tracking-wide uppercase mt-1">
            Síndicos Profissionais
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card p-8 md:p-12 rounded-sm border border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Telefones + Redes Sociais */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Renan</div>
                  <a href="tel:+5548991473703" className="text-foreground font-medium hover:text-primary transition-colors">
                    +55 48 99147-3703
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Sheila</div>
                  <a href="tel:+5548984598837" className="text-foreground font-medium hover:text-primary transition-colors">
                    +55 48 98459-8837
                  </a>
                </div>
              </div>
              {/* Redes Sociais logo abaixo dos telefones */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/renanesheila/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="text-primary" size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/renanesheilasindicosprofissionais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="text-primary" size={18} />
                </a>
              </div>
            </div>

            {/* E-mails e Endereço */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">E-mails</div>
                  <a href="mailto:renan.andre.s@outlook.com.br" className="text-foreground font-medium hover:text-primary transition-colors block">
                    renan.andre.s@outlook.com.br
                  </a>
                  <a href="mailto:shhe171814@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors block">
                    shhe171814@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Endereço</div>
                  <div className="text-foreground font-medium">
                    Rua Barra Velha, Nº 112 — CEP 88110-160
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-sm text-sm font-medium tracking-wide hover:bg-teal-dark transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
