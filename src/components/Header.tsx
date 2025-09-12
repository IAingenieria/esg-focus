import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu as HeadlessMenu, Transition, Disclosure } from "@headlessui/react";
import { Menu as MenuIcon, X, ChevronDown, Phone, Calendar } from "lucide-react";
import focusLogo from "@/assets/focus-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const consultoriaESGItems = [
    { name: "Cumplimiento NIS 2025", href: "/consultoria-esg/cumplimiento-nis-2025" },
    { name: "Certificación GRI", href: "/consultoria-esg/certificacion-gri" },
    { name: "Auditoría Sostenibilidad", href: "/consultoria-esg/auditoria-sostenibilidad" },
    { name: "Reportes ESG", href: "/consultoria-esg/reportes-esg" },
    { name: "Capacitación ESG", href: "/consultoria-esg/capacitacion-esg" },
  ];

  const coachingEjecutivoItems = [
    { name: "Liderazgo Sostenible", href: "/coaching-ejecutivo/liderazgo-sostenible" },
    { name: "Transición Laboral", href: "/coaching-ejecutivo/transicion-laboral" },
    { name: "Habilidades Directivas", href: "/coaching-ejecutivo/habilidades-directivas" },
    { name: "Equipos Gerenciales", href: "/coaching-ejecutivo/equipos-gerenciales" },
  ];

  const serviciosItems = [
    { name: "Auditoría Comercial", href: "/servicios-empresariales/auditoria-comercial" },
    { name: "Smart Sales", href: "/servicios-empresariales/smart-sales" },
    { name: "Gestión Sucursales", href: "/servicios-empresariales/gestion-sucursales" },
    { name: "Consultoría MDIES", href: "/servicios-empresariales/consultoria-mdies" },
  ];

  const coachingFamiliarItems = [
    { name: "Coach de Tu Hijo", href: "/coaching-familiar/coach-tu-hijo" },
    { name: "Orientación Vocacional", href: "/coaching-familiar/orientacion-vocacional" },
    { name: "Dinámicas Familiares", href: "/coaching-familiar/dinamicas-familiares" },
  ];

  const recursosItems = [
    { name: "Blog ESG", href: "/recursos/blog" },
    { name: "Webinars", href: "/recursos/webinars" },
    { name: "Herramientas", href: "/recursos/herramientas" },
    { name: "Casos de Éxito", href: "/recursos/casos-exito" },
    { name: "Certificaciones", href: "/recursos/certificaciones" },
    { name: "FAQ", href: "/faq" },
    { name: "Contacto", href: "/contacto" },
    { name: "Equipo", href: "/equipo" },
  ];


  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-light z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={focusLogo} alt="Focus Coach & Consulting" className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {[ 
              { title: "Consultoría ESG", items: consultoriaESGItems },
              { title: "Coaching Ejecutivo", items: coachingEjecutivoItems },
              { title: "Servicios", items: serviciosItems },
              { title: "Coaching Familiar", items: coachingFamiliarItems },
              { title: "Recursos", items: recursosItems },
            ].map((menu) => (
              <HeadlessMenu as="div" className="relative text-left" key={menu.title}>
                <HeadlessMenu.Button className="flex items-center space-x-1 text-navy hover:text-primary transition-smooth font-medium px-3 py-2 rounded-md">
                  <span>{menu.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </HeadlessMenu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <HeadlessMenu.Items className="absolute right-0 mt-2 w-64 origin-top-right bg-white rounded-lg shadow-card border border-gray-light py-2 focus:outline-none z-50">
                    {menu.items.map((item) => (
                      <HeadlessMenu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            to={item.href}
                            className={`block px-4 py-3 text-sm transition-smooth ${
                              active ? 'bg-gray-light text-navy' : 'text-gray-text'
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </HeadlessMenu.Item>
                    ))}
                  </HeadlessMenu.Items>
                </Transition>
              </HeadlessMenu>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="whatsapp" 
              size="sm" 
              className="flex items-center space-x-2"
              onClick={() => window.open('https://wa.me/5218180290061', '_blank')}
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
            <Link to="/contacto">
              <Button variant="cta" size="sm" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Agendar Consulta</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy hover:text-primary transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isMenuOpen}
          as={Fragment}
          enter="transition-opacity duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-light shadow-lg">
            <div className="px-4 pt-4 pb-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                  <Button 
                    variant="whatsapp" 
                    size="sm" 
                    className="flex items-center justify-center space-x-2"
                    onClick={() => window.open('https://wa.me/5218180290061', '_blank')}
                  >
                    <Phone className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </Button>
                  <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="cta" size="sm" className="w-full flex items-center justify-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Agendar</span>
                    </Button>
                  </Link>
              </div>

              <div className="space-y-1">
                {[ 
                  { title: "Consultoría ESG", items: consultoriaESGItems },
                  { title: "Coaching Ejecutivo", items: coachingEjecutivoItems },
                  { title: "Servicios", items: serviciosItems },
                  { title: "Coaching Familiar", items: coachingFamiliarItems },
                  { title: "Recursos", items: recursosItems },
                ].map((section) => (
                  <Disclosure as="div" key={section.title}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full flex justify-between items-center py-3 text-left text-navy font-medium hover:text-primary transition-smooth">
                          <span>{section.title}</span>
                          <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'transform rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel as="div" className="pl-4 pb-2 space-y-1">
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block py-2 text-gray-text hover:text-navy transition-smooth"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Header;