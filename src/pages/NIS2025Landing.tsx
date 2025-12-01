import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  Phone, 
  AlertTriangle, 
  XCircle, 
  ArrowRight,
  Award,
  MessageCircle,
  Lock,
  DollarSign,
  Star
} from "lucide-react";
import heroBg from "@/assets/sustainability-tech-bg.jpg";

const NIS2025Landing = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: ''
  });

  // Countdown to January 1, 2026
  useEffect(() => {
    const deadline = new Date('2026-01-01T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance < 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setCountdown({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hola soy ${formData.nombre} de ${formData.empresa}. Me interesa la evaluación gratuita de cumplimiento NIS 2024. Mi correo es ${formData.email}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=528180290061&text=${message.replace(/\s+/g, '%20')}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const problems = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Multas y Sanciones",
      description: "Las autoridades ya están fiscalizando. Las multas por incumplimiento pueden superar los 2 millones de pesos."
    },
    {
      icon: <XCircle className="h-6 w-6" />,
      title: "Pérdida de Contratos",
      description: "Cada vez más corporativos exigen reportes ESG a sus proveedores. Sin cumplimiento, pierdes oportunidades de negocio."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Daño Reputacional",
      description: "Los consumidores y socios comerciales ya evalúan el compromiso ambiental. El incumplimiento daña tu imagen."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Diagnóstico Inicial",
      description: "Evaluamos tu situación actual y determinamos exactamente qué necesitas para cumplir."
    },
    {
      number: "2", 
      title: "Plan de Acción Personalizado",
      description: "Desarrollamos una estrategia a la medida con tiempos claros y entregables específicos."
    },
    {
      number: "3",
      title: "Implementación y Certificación", 
      description: "Te acompañamos hasta lograr el cumplimiento total y la certificación correspondiente."
    }
  ];

  const certifications = [
    "Único certificado GRI en Nuevo León",
    "Certificación internacional IASE", 
    "AIAC Master Coach certificado",
    "Autorizado STPS desde 2010",
    "+15 años de experiencia"
  ];

  const trustBadges = [
    "Certificación GRI",
    "Certificación IASE", 
    "Deducible de impuestos (STPS)"
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy to-navy-light overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/40 to-navy-light/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <Badge className="mb-6 bg-white text-destructive border-destructive/30 animate-pulse">
                <Clock className="h-4 w-4 mr-2" />
                Fecha límite regulatoria
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                ¿Tu empresa está lista para <span className="text-yellow-accent">NIS 2024</span>?
              </h1>
              
              <p className="text-xl mb-8 text-gray-light">
                Las regulaciones de sostenibilidad en México ya no son opcionales. 
                Evita multas y posiciona tu empresa como líder responsable con 
                nuestro programa de cumplimiento garantizado.
              </p>

              {/* Countdown */}
              <Card className="mb-8 bg-card/10 border-border/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-yellow-accent">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm font-medium uppercase tracking-wide">
                      Tiempo restante para el cumplimiento obligatorio
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{countdown.days.toString().padStart(2, '0')}</div>
                      <div className="text-xs text-yellow-accent uppercase font-medium">Días</div>
                    </div>
                    <span className="text-2xl text-muted-foreground">:</span>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{countdown.hours.toString().padStart(2, '0')}</div>
                      <div className="text-xs text-yellow-accent uppercase font-medium">Horas</div>
                    </div>
                    <span className="text-2xl text-muted-foreground">:</span>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{countdown.minutes.toString().padStart(2, '0')}</div>
                      <div className="text-xs text-yellow-accent uppercase font-medium">Minutos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-light">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <Card className="bg-card border-border shadow-2xl" id="formulario">
              <CardHeader className="border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="text-2xl">Evaluación de Cumplimiento</CardTitle>
                <CardDescription>
                  Descubre en qué posición está tu empresa frente a NIS 2024. Sin costo, sin compromiso.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="10 dígitos"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Correo corporativo</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@empresa.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Solicitar Evaluación Gratuita
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Lock className="h-4 w-4" />
                    Tu información está segura. Respuesta en menos de 24 horas.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">El Riesgo Real</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              ¿Qué pasa si ignoras las regulaciones NIS 2024?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 text-destructive">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-yellow-accent/20 text-yellow-accent border-yellow-accent/30">Nuestra Propuesta</Badge>
            <h2 className="text-4xl font-bold mb-6">
              Tu Ventaja con Nosotros
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-accent/20 rounded-lg flex items-center justify-center mb-4 text-yellow-accent">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Cumplimiento Garantizado</h3>
                <p className="text-white/80 leading-relaxed">Con el único consultor certificado GRI e IASE en Nuevo León, tu empresa cumple desde el primer día. Te entregamos la documentación completa y te preparamos para cualquier auditoría, eliminando el riesgo de multas y sanciones.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-accent/20 rounded-lg flex items-center justify-center mb-4 text-yellow-accent">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Acceso a Nuevos Negocios</h3>
                <p className="text-white/80 leading-relaxed">Nuestros clientes se vuelven elegibles para licitaciones gubernamentales y contratos con corporativos que exigen reportes ESG. En lugar de perder oportunidades, las multiplicas con una certificación que te diferencia de tu competencia.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-accent/20 rounded-lg flex items-center justify-center mb-4 text-yellow-accent">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Reputación que Vende</h3>
                <p className="text-white/80 leading-relaxed">Transforma la sostenibilidad en tu mejor argumento comercial. Te ayudamos a comunicar tu compromiso ambiental de forma profesional, posicionándote como líder responsable ante clientes, inversionistas y la comunidad.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <div>
              <Badge variant="outline" className="mb-4">La Solución</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Cumplimiento NIS 2024 en 3 pasos simples
              </h2>
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials Card */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    OR
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Lic. Olegario Ríos Nordhausen</h3>
                    <p className="text-muted-foreground">Consultor ESG Senior</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-border">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                No esperes a que sea tarde
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Agenda tu evaluación gratuita hoy y descubre exactamente qué necesita tu empresa para cumplir con NIS 2024.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  onClick={() => window.open('https://asesorsostenible.com/', '_blank')}
                >
                  Diagnostico Gratuito NIS
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4"
                  onClick={() => window.open('tel:+5281802900061')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  818-029-0061
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* WhatsApp Float Button */}
      <a
        href="https://api.whatsapp.com/send?phone=528180290061&text=Hola%20me%20interesa%20información%20sobre%20cumplimiento%20NIS%202024"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </div>
  );
};

export default NIS2025Landing;
