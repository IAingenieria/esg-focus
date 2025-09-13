import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import focusLogo from "@/assets/focus-logo-v2.png";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const menuItems = [
  {
    title: "Consultoría ESG",
    href: "/consultoria-esg",
    subItems: [
      { title: "Cumplimiento NIS 2025", href: "/consultoria-esg/cumplimiento-nis-2025", description: "Prepárate para la nueva normativa de ciberseguridad.", },
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
      { title: "Habilidades Directivas", href: "/coaching-ejecutivo/habilidades-directivas", description: "Potencia tus competencias de gestión.", },
      { title: "Equipos Gerenciales", href: "/coaching-ejecutivo/equipos-gerenciales", description: "Fortalece el rendimiento de tu equipo directivo.", },
    ],
  },
  {
    title: "Servicios",
    href: "/servicios-empresariales",
    subItems: [
      { title: "Auditoría Comercial", href: "/servicios-empresariales/auditoria-comercial", description: "Optimiza tu estrategia y procesos de venta.", },
      { title: "Smart Sales", href: "/servicios-empresariales/smart-sales", description: "Implementa un enfoque de ventas inteligente.", },
      { title: "Gestión Sucursales", href: "/servicios-empresariales/gestion-sucursales", description: "Mejora la eficiencia de tus puntos de venta.", },
      { title: "Consultoría MDIES", href: "/servicios-empresariales/consultoria-mdies", description: "Asesoría experta para el crecimiento de tu negocio.", },
    ],
  },
  {
    title: "Coaching Familiar",
    href: "/coaching-familiar",
    subItems: [
      { title: "Coach de Tu Hijo", href: "/coaching-familiar/coach-tu-hijo", description: "Herramientas para el desarrollo de tus hijos.", },
      { title: "Orientación Vocacional", href: "/coaching-familiar/orientacion-vocacional", description: "Descubre la profesión ideal para tu futuro.", },
      { title: "Dinámicas Familiares", href: "/coaching-familiar/dinamicas-familiares", description: "Fortalece los lazos y la comunicación en familia.", },
    ],
  },
  {
    title: "Recursos",
    href: "/recursos",
    subItems: [
      { title: "Diagnóstico ESG Gratuito", href: "/recursos/herramientas", description: "Evalúa la madurez ESG de tu organización.", },
      { title: "Blog Sostenibilidad", href: "/recursos/blog", description: "Artículos y noticias sobre sostenibilidad y ESG.", },
      { title: "Casos de Éxito", href: "/recursos/casos-exito", description: "Conoce cómo hemos ayudado a otras empresas.", },
      { title: "Eventos", href: "/recursos/webinars", description: "Participa en nuestros webinars y talleres.", },
    ],
  },
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-light z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={focusLogo} alt="Focus Coach & Consulting" className="h-12 w-auto" />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href={item.href}
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                {item.title}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Descubre nuestros servicios de {item.title.toLowerCase()}.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {item.subItems?.map((subItem) => (
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
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
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