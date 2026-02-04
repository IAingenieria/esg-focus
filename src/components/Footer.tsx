import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const servicios = [
    { name: "Cumplimiento NIS 2024", href: "/consultoria-esg/cumplimiento-nis-2024" },
    { name: "Certificación GRI", href: "/consultoria-esg/certificacion-gri" },
    { name: "Coaching Ejecutivo", href: "/coaching-ejecutivo/liderazgo-sostenible" },
    { name: "Auditoría Sostenibilidad", href: "/consultoria-esg/auditoria-sostenibilidad" },
    { name: "Coaching Familiar", href: "/coaching-familiar/coach-tu-hijo" }
  ];


  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Empresa */}
          <div className="space-y-4">
            <video 
              src="/src/assets/logo mov.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="h-12 w-auto"
              style={{ objectFit: 'contain' }}
            />
            <p className="text-sm text-white/80">coaching & consulting</p>
            <p className="text-white/80">
              El único consultor ESG certificado internacionalmente en Nuevo León.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-green-success" />
                <span>Monterrey, Nuevo León, México</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-green-success" />
                <span>+52 818 029 0061</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-green-success" />
                <span>info@esgconsultores.com.mx</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <ul className="space-y-2">
              {servicios.map((servicio) => (
                <li key={servicio.name}>
                  <Link 
                    to={servicio.href}
                    className="text-sm text-white/80 hover:text-green-success transition-smooth"
                  >
                    {servicio.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto y Certificaciones */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Certificaciones</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>• Master Coach Organizational (AIAC)</p>
              <p>• Consultor Certificado GRI</p>
              <p>• Certificación IASE</p>
              <p>• WABC Certified Business Coach</p>
            </div>
            
            <div className="space-y-3 pt-4">
              <a href="https://api.whatsapp.com/send/?phone=5218180290061&text=Hola%2C+me+interesa+informaci%C3%B3n+sobre+sus+servicios+de+consultor%C3%ADa+ESG&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="whatsapp" size="sm" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Directo
                </Button>
              </a>
              <a href="https://mx.linkedin.com/in/olegario-rios" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/60">
            &copy; 2026 Focus Coach & Consultoría. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/aviso-privacidad" className="text-sm text-white/60 hover:text-green-success transition-smooth">
              Aviso de Privacidad
            </Link>
            <Link to="/politicas" className="text-sm text-white/60 hover:text-green-success transition-smooth">
              Términos de Servicio
            </Link>
            <Link to="/politicas" className="text-sm text-white/60 hover:text-green-success transition-smooth">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;