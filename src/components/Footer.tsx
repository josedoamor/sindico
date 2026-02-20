import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="R&S Logo" className="h-10 w-auto invert" />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold text-background tracking-tight">
                  Renan & Sheila
                </span>
                <span className="text-[10px] font-light tracking-[0.2em] uppercase text-primary">
                  Síndicos Profissionais
                </span>
              </div>
            </div>
            <p className="text-background/50 text-sm leading-relaxed mb-4">
              Gestão condominial organizada, humana e eficiente com
              transparência e compromisso.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/renanesheila/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="text-primary" size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/renanesheilasindicosprofissionais"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="text-primary" size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-background text-sm font-semibold tracking-wide uppercase mb-4">
              Links Rápidos
            </h4>
            <div className="space-y-2">
              {["Início", "Serviços", "Sobre", "Diferenciais", "Contato"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="block text-background/50 text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-background text-sm font-semibold tracking-wide uppercase mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-background/50 text-sm">
              <p>Renan: +55 48 99147-3703</p>
              <p>Sheila: +55 48 98459-8837</p>
              <p>renan.andre.s@outlook.com.br</p>
              <p>shhe171814@gmail.com</p>
              <p>Rua Barra Velha, Nº 112 — CEP 88110-160</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6">
          <p className="text-background/30 text-xs text-center">
            © {new Date().getFullYear()} Renan & Sheila Síndicos Profissionais. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
