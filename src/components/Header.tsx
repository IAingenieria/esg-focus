import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import focusLogo from "@/assets/focus-logo-v2.png";

const Header = () => {


  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-light z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={focusLogo} alt="Focus Coach & Consulting" className="h-12 w-auto" />
          </Link>


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

export default Header;