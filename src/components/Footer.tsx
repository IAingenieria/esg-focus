import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const servicios = [
    "Cumplimiento NIS 2025",
    "Certificación GRI",
    "Coaching Ejecutivo",
    "Auditoría Sostenibilidad",
    "Coaching Familiar"
  ];

  const recursos = [
    "Diagnóstico ESG Gratuito",
    "Blog Sostenibilidad",
    "Casos de Éxito",
    "Eventos y Webinars",
    "Newsletter"
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Empresa */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-accent">FOCUS</h3>
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
                <span>oriosn@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <ul className="space-y-2">
              {servicios.map((servicio) => (
                <li key={servicio}>
                  <a 
                    href="#" 
                    className="text-sm text-white/80 hover:text-green-success transition-smooth"
                  >
                    {servicio}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Recursos</h4>
            <ul className="space-y-2">
              {recursos.map((recurso) => (
                <li key={recurso}>
                  <a 
                    href="#" 
                    className="text-sm text-white/80 hover:text-green-success transition-smooth"
                  >
                    {recurso}
                  </a>
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
              <Button variant="whatsapp" size="sm" className="w-full justify-start">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Directo
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 py-8 border-t border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-yellow-accent">¿Listo para Transformar tu Empresa?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Obtén tu diagnóstico ESG gratuito y descubre cómo cumplir con las regulaciones NIS 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="urgent" size="lg">
                Diagnóstico Gratuito
              </Button>
              <Button variant="hero" size="lg">
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/60">
            © 2025 Focus Coach & Consulting. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-white/60 hover:text-green-success transition-smooth">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-green-success transition-smooth">
              Términos de Servicio
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-green-success transition-smooth">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;