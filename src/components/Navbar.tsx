import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="R&S Logo" className={`h-10 w-auto transition-all ${isScrolled ? "brightness-0" : "invert"}`} />
          <div className="flex flex-col leading-tight">
            <span className={`font-serif text-lg font-bold tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Renan & Sheila
            </span>
            <span className={`text-[10px] font-light tracking-[0.2em] uppercase transition-colors ${isScrolled ? "text-primary" : "text-primary"}`}>
              Síndicos Profissionais
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/renanesheila/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-primary-foreground/80"}`}
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/renanesheilasindicosprofissionais"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-primary-foreground/80"}`}
            >
              <Linkedin size={18} />
            </a>
          </div>
          <a
            href="#contato"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-medium tracking-wide hover:bg-teal-dark transition-colors"
          >
            Solicite Proposta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground text-sm font-medium tracking-wide hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-medium tracking-wide text-center hover:bg-teal-dark transition-colors"
            >
              Solicite Proposta
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
