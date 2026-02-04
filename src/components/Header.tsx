import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoVideo from "@/assets/logo mov.mp4";

const menuItems = [
  {
    title: "Consultoría ESG",
    href: "/consultoria-esg",
    subItems: [
      { title: "Cumplimiento NIS 2024", href: "/consultoria-esg/cumplimiento-nis-2024", description: "Prepárate para la nueva normativa de ciberseguridad.", },
      { title: "Certificación GRI", href: "/consultoria-esg/certificacion-gri", description: "Obtén la certificación en reportes de sostenibilidad.", },
      { title: "Auditoría Sostenibilidad", href: "/consultoria-esg/auditoria-sostenibilidad", description: "Evalúa y mejora tus prácticas de sostenibilidad.", },
      { title: "Reportes ESG", href: "/consultoria-esg/reportes-esg", description: "Comunica tu desempeño en materia ESG.", },
      { title: "Capacitación ESG", href: "/consultoria-esg/capacitacion-esg", description: "Forma a tu equipo en criterios ESG.", },
    ],
  },
  {
    title: "Coaching Ejecutivo",
    href: "/coaching-ejecutivo",
    subItems: [
      { title: "Liderazgo Sostenible", href: "/coaching-ejecutivo/liderazgo-sostenible", description: "Desarrolla líderes con visión de futuro.", },
      { title: "Transición Laboral", href: "/coaching-ejecutivo/transicion-laboral", description: "Apoyo profesional en cambios de carrera.", },
    ],
  },
  {
    title: "Servicios",
    href: "/servicios-empresariales",
    subItems: [
      { title: "Auditoría Comercial", href: "/servicios-empresariales/auditoria-comercial", description: "Optimiza tu estrategia y procesos de venta.", },
      { title: "Smart Sales", href: "/servicios-empresariales/smart-sales", description: "Implementa un enfoque de ventas inteligente.", },
      { title: "Gestión Sucursales", href: "/servicios-empresariales/gestion-sucursales", description: "Mejora la eficiencia de tus puntos de venta.", },
    ],
  },
  {
    title: "Coaching Familiar",
    href: "/coaching-familiar",
    subItems: [
      { title: "Coach de Tu Hijo", href: "/coaching-familiar/coach-tu-hijo", description: "Herramientas para el desarrollo de tus hijos.", },
      { title: "Orientación Vocacional", href: "/coaching-familiar/orientacion-vocacional", description: "Descubre la profesión ideal para tu futuro.", },
    ],
  },
  /* OCULTO TEMPORALMENTE - Sin información
  {
    title: "Recursos",
    href: "/recursos",
    subItems: [
      { title: "Diagnóstico ESG Gratuito", href: "/recursos/herramientas", description: "Evalúa la madurez ESG de tu organización.", },
      { title: "Casos de Éxito", href: "/recursos/casos-exito", description: "Conoce cómo hemos ayudado a otras empresas.", },
      { title: "Eventos", href: "/recursos/webinars", description: "Participa en nuestros webinars y talleres.", },
    ],
  },
  */
  {
    title: "Certificaciones",
    href: "/certificaciones",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-light z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <video 
              src={logoVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-12 w-auto"
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-br from-navy to-navy/90 p-6 no-underline outline-none focus:shadow-md"
                                  href={item.href}
                                >
                                  <video 
                                    src={logoVideo} 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="h-10 w-auto"
                                    style={{ objectFit: 'contain' }}
                                  />
                                  <div>
                                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                                      {item.title}
                                    </div>
                                    <p className="text-sm leading-tight text-gray-light/90">
                                      Descubre nuestros servicios de {item.title.toLowerCase()}.
                                    </p>
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            {item.subItems.map((subItem) => (
                              <ListItem
                                key={subItem.title}
                                title={subItem.title}
                                href={subItem.href}
                              >
                                {subItem.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link to={item.href} className="font-medium text-sm px-4 py-2 text-gray-text hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/diagnostico-esg">
              <Button 
                variant="whatsapp" 
                size="sm" 
                className="flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Contáctanos</span>
              </Button>
            </Link>
            <Link to="/agendar">
              <Button variant="cta" size="sm" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Agendar Consulta</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0">
                <SheetHeader className="p-6 border-b">
                  <SheetTitle>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3">
                      <video 
                        src={logoVideo} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="h-10 w-auto"
                        style={{ objectFit: 'contain' }}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="p-6 h-[calc(100vh-160px)] overflow-y-auto">
                  <Accordion type="single" collapsible className="w-full">
                    {menuItems.map((item) =>
                      item.subItems ? (
                        <AccordionItem value={item.title} key={item.title}>
                          <AccordionTrigger className="text-base font-semibold">{item.title}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="flex flex-col space-y-2 pl-2 border-l border-gray-light ml-2">
                              {item.subItems.map((subItem) => (
                                <li key={subItem.title}>
                                  <Link
                                    to={subItem.href}
                                    className="block p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="flex items-center text-base font-semibold py-4 border-b"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )
                    )}
                  </Accordion>
                </div>
                <div className="p-6 border-t absolute bottom-0 w-full bg-white">
                  <div className="flex flex-col space-y-3">
                      <Link to="/diagnostico-esg" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button 
                          variant="whatsapp" 
                          className="w-full flex items-center justify-center space-x-2"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Contáctanos</span>
                        </Button>
                      </Link>
                      <Link to="/agendar" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="cta" className="w-full flex items-center justify-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>Agendar Consulta</span>
                        </Button>
                      </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header;