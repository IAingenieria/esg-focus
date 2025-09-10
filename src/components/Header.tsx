import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";
import focusLogo from "@/assets/focus-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const consultoriaESGItems = [
    { name: "Cumplimiento NIS 2025", href: "#nis-2025" },
    { name: "Certificación GRI", href: "#gri" },
    { name: "Auditoría Sostenibilidad", href: "#auditoria" },
    { name: "Reportes ESG", href: "#reportes" },
    { name: "Capacitación ESG", href: "#capacitacion" },
  ];

  const coachingEjecutivoItems = [
    { name: "Liderazgo Sostenible", href: "#liderazgo" },
    { name: "Transición Laboral", href: "#transicion" },
    { name: "Habilidades Directivas", href: "#habilidades" },
    { name: "Equipos Gerenciales", href: "#equipos" },
  ];

  const serviciosItems = [
    { name: "Auditoría Comercial", href: "#auditoria-comercial" },
    { name: "Smart Sales", href: "#smart-sales" },
    { name: "Gestión Sucursales", href: "#sucursales" },
    { name: "Consultoría MDIES", href: "#mdies" },
  ];

  const coachingFamiliarItems = [
    { name: "Coach de Tu Hijo", href: "#coach-hijo" },
    { name: "Orientación Vocacional", href: "#orientacion" },
    { name: "Dinámicas Familiares", href: "#dinamicas" },
  ];

  const recursosItems = [
    { name: "Diagnóstico ESG Gratuito", href: "#diagnostico" },
    { name: "Blog Sostenibilidad", href: "#blog" },
    { name: "Casos de Éxito", href: "#casos" },
    { name: "Eventos", href: "#eventos" },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-light z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={focusLogo} alt="Focus Coach & Consulting" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Consultoría ESG */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-navy hover:text-primary transition-smooth font-medium"
                onMouseEnter={() => setOpenDropdown("esg")}
              >
                <span>Consultoría ESG</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-card border border-gray-light py-2 transition-all duration-200 ${
                  openDropdown === "esg" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {consultoriaESGItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-text hover:text-navy hover:bg-gray-light transition-smooth"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Coaching Ejecutivo */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-navy hover:text-primary transition-smooth font-medium"
                onMouseEnter={() => setOpenDropdown("coaching")}
              >
                <span>Coaching Ejecutivo</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-card border border-gray-light py-2 transition-all duration-200 ${
                  openDropdown === "coaching" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {coachingEjecutivoItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-text hover:text-navy hover:bg-gray-light transition-smooth"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Servicios Empresariales */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-navy hover:text-primary transition-smooth font-medium"
                onMouseEnter={() => setOpenDropdown("servicios")}
              >
                <span>Servicios</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-card border border-gray-light py-2 transition-all duration-200 ${
                  openDropdown === "servicios" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {serviciosItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-text hover:text-navy hover:bg-gray-light transition-smooth"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Coaching Familiar */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-navy hover:text-primary transition-smooth font-medium"
                onMouseEnter={() => setOpenDropdown("familiar")}
              >
                <span>Coaching Familiar</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-card border border-gray-light py-2 transition-all duration-200 ${
                  openDropdown === "familiar" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {coachingFamiliarItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-text hover:text-navy hover:bg-gray-light transition-smooth"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Recursos */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-navy hover:text-primary transition-smooth font-medium"
                onMouseEnter={() => setOpenDropdown("recursos")}
              >
                <span>Recursos</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-card border border-gray-light py-2 transition-all duration-200 ${
                  openDropdown === "recursos" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {recursosItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-text hover:text-navy hover:bg-gray-light transition-smooth"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="whatsapp" size="sm" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
            <Button variant="cta" size="sm" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Agendar Consulta</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy hover:text-primary transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-light bg-white">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button variant="whatsapp" size="sm" className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp</span>
                </Button>
                <Button variant="cta" size="sm" className="flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Agendar</span>
                </Button>
              </div>
              
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                <a href="#esg" className="block text-navy hover:text-primary font-medium transition-smooth">
                  Consultoría ESG
                </a>
                <a href="#coaching" className="block text-navy hover:text-primary font-medium transition-smooth">
                  Coaching Ejecutivo
                </a>
                <a href="#servicios" className="block text-navy hover:text-primary font-medium transition-smooth">
                  Servicios Empresariales
                </a>
                <a href="#familiar" className="block text-navy hover:text-primary font-medium transition-smooth">
                  Coaching Familiar
                </a>
                <a href="#recursos" className="block text-navy hover:text-primary font-medium transition-smooth">
                  Recursos
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;