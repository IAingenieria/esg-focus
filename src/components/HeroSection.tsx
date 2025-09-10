import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, Award, Users, Calendar, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // Calculate days until January 1, 2025
    const targetDate = new Date("2025-01-01");
    const today = new Date();
    const timeDiff = targetDate.getTime() - today.getTime();
    const daysDiff = Math.max(0, Math.ceil(timeDiff / (1000 * 3600 * 24)));
    setDaysLeft(daysDiff);
  }, []);

  const credentials = [
    { name: "GRI Certified", icon: Award },
    { name: "IASE Certified", icon: CheckCircle },
    { name: "WABC Coach", icon: Users },
    { name: "AIAC Master", icon: Award },
  ];

  const stats = [
    { number: "500+", label: "Empresas Transformadas" },
    { number: "14", label: "Años de Experiencia" },
    { number: "100%", label: "Garantía NIS" },
    { number: "$580K", label: "Multa por Incumplimiento" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
        {/* Urgency Alert */}
        <div className="mb-8 flex justify-center">
          <Badge variant="destructive" className="bg-yellow-accent text-navy font-bold text-lg px-6 py-3 rounded-full animate-pulse flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>FALTAN {daysLeft} DÍAS PARA CUMPLIMIENTO OBLIGATORIO NIS 2025</span>
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          El <span className="text-yellow-accent">Único Consultor ESG</span>
          <br />
          Certificado Internacionalmente
          <br />
          <span className="text-green-success">en Nuevo León</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
          Cumple las nuevas regulaciones NIS 2025 y convierte la sostenibilidad en ventaja competitiva
        </p>

        {/* Urgency Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-10 max-w-4xl mx-auto border border-white/20">
          <h2 className="text-2xl font-bold mb-4 text-yellow-accent">⚠️ REGULACIÓN OBLIGATORIA</h2>
          <div className="space-y-3 text-lg">
            <p>• Desde el 1 de enero de 2025, las empresas mexicanas DEBEN reportar 30 indicadores ESG obligatorios</p>
            <p>• Multas hasta <span className="font-bold text-yellow-accent">$580,000 MXN</span> por incumplimiento</p>
            <p>• Exclusión de licitaciones públicas sin certificación ESG</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button variant="urgent" size="xl" className="flex items-center space-x-3 text-xl">
            <Download className="h-6 w-6" />
            <span>Diagnóstico ESG Gratuito - 15 Minutos</span>
          </Button>
          <Button variant="hero" size="xl" className="flex items-center space-x-3 text-xl">
            <Calendar className="h-6 w-6" />
            <span>Agenda Consulta Estratégica</span>
          </Button>
        </div>

        {/* Credentials */}
        <div className="mb-10">
          <p className="text-lg mb-4 text-white/80">Certificaciones Internacionales:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {credentials.map((credential) => (
              <Badge
                key={credential.name}
                variant="outline"
                className="bg-white/10 border-white/30 text-white px-4 py-2 text-sm flex items-center space-x-2"
              >
                <credential.icon className="h-4 w-4" />
                <span>{credential.name}</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-accent mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Authority Statement */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-green-success">Lic. Olegario Ríos Nordhausen</h3>
          <p className="text-lg text-white/90">
            Master Coach Organizational • Consultor Certificado GRI • Certificación IASE • WABC Certified Business Coach
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;