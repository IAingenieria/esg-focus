import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Award, 
  Phone, 
  ArrowRight, 
  Shield, 
  Users, 
  DollarSign,
  CheckCircle,
  Monitor,
  Package,
  MessageCircle,
  Lock,
  Star
} from "lucide-react";
import heroBg from "@/assets/sustainability-tech-bg.jpg";

const CertificacionGRILanding = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    telefono: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      cargo: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cargoLabels: { [key: string]: string } = {
      'ceo': 'CEO / Director General',
      'cfo': 'CFO / Director Financiero',
      'sustainability': 'Director de Sostenibilidad',
      'operations': 'Director de Operaciones',
      'hr': 'Director de RH',
      'other': 'Otro'
    };
    
    const cargoText = cargoLabels[formData.cargo] || formData.cargo;
    const message = `Hola, soy ${formData.nombre}, ${cargoText} de ${formData.empresa}. Me interesa información sobre Certificación GRI. Mi correo es ${formData.email}`;
    const whatsappUrl = `https://wa.me/5281802900061?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-muted/30 to-background overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-muted/40 to-background/40"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 border border-border/30 rounded-full -translate-y-48 translate-x-48 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border border-yellow-accent/20 rounded-full translate-y-32 -translate-x-32 opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-yellow-accent/20 text-primary border-yellow-accent/30">
                <Award className="h-4 w-4 mr-2" />
                Único Certificado GRI en Nuevo León
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Certifica tu empresa con estándares <span className="text-primary italic">GRI</span> internacionales
              </h1>
              
              <p className="text-xl mb-8 text-white">
                Diferencia tu empresa de la competencia con reportes de sostenibilidad 
                que cumplen los más altos estándares globales. Obtén credibilidad ante 
                inversionistas, clientes y socios comerciales.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">Reportes bajo estándares GRI</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">Deducible de impuestos (STPS)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">Certificación para tu equipo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">+15 años de experiencia</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4"
                  onClick={() => window.open('tel:+5281802900061')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Llamar Ahora
                </Button>
              </div>
            </div>

            {/* Form Card */}
            <Card className="bg-card border-border shadow-2xl relative" id="contacto">
              <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-primary to-yellow-accent rounded-b"></div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Diagnóstico Sin Costo</CardTitle>
                <CardDescription>
                  Evalúa el estado de sostenibilidad de tu empresa
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
                      placeholder="Tu nombre"
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
                    <Label htmlFor="cargo">Cargo</Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ceo">CEO / Director General</SelectItem>
                        <SelectItem value="cfo">CFO / Director Financiero</SelectItem>
                        <SelectItem value="sustainability">Director de Sostenibilidad</SelectItem>
                        <SelectItem value="operations">Director de Operaciones</SelectItem>
                        <SelectItem value="hr">Director de RH</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
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
                    Solicitar Diagnóstico →
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Lock className="h-4 w-4" />
                    Información confidencial. Respuesta en menos de 24 horas.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-accent bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-sm opacity-80">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-accent bg-clip-text text-transparent">
                4
              </div>
              <div className="text-sm opacity-80">Certificaciones Internacionales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-accent bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm opacity-80">Deducible de Impuestos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-accent bg-clip-text text-transparent">
                1°
              </div>
              <div className="text-sm opacity-80">Certificado GRI en NL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Beneficios</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              ¿Por qué certificarte con estándares GRI?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 text-white">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Credibilidad Global</h3>
                <p className="text-muted-foreground leading-relaxed">Posiciona tu empresa en el escenario internacional con reportes reconocidos en más de 100 países. Los estándares GRI te abren las puertas para integrarte a cadenas de suministro globales y demostrar a inversionistas y socios comerciales que tu operación cumple con las mejores prácticas mundiales.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 text-white">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Atrae Talento</h3>
                <p className="text-muted-foreground leading-relaxed">El 76% de los profesionales menores de 35 años prefiere trabajar en empresas con compromiso ambiental comprobable. Un reporte GRI no solo te posiciona como empleador de preferencia, sino que fortalece el orgullo de pertenencia y transforma el ambiente laboral de tu organización.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 text-white">
                  <DollarSign className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Acceso a Capital</h3>
                <p className="text-muted-foreground leading-relaxed">Cada vez más fondos de inversión exigen reportes ESG. Cumple con los requisitos para acceder a financiamiento preferencial.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 text-white">
                  <Monitor className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Ventaja Competitiva</h3>
                <p className="text-muted-foreground leading-relaxed">Mientras tus competidores aún evalúan si actuar, tú ya estarás un paso adelante. La certificación GRI te posiciona para ganar licitaciones privadas y gubernamentales que exigen criterios ESG, abriendo oportunidades de negocio que antes estaban fuera de alcance.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 text-white">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Cumplimiento Regulatorio</h3>
                <p className="text-muted-foreground leading-relaxed">Las regulaciones NIS 2024/2025 ya son una realidad en México. Adelantarte al cumplimiento no solo te protege de multas y sanciones, sino que te permite negociar desde una posición de fortaleza cuando las autoridades comiencen a fiscalizar a tu sector.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 text-white">
                  <Package className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Eficiencia Operativa</h3>
                <p className="text-muted-foreground leading-relaxed">El proceso de certificación identifica oportunidades de mejora. Reduce costos y optimiza recursos en tu operación.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Proceso</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Cómo trabajamos contigo
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Consultant Card */}
            <Card className="bg-card border-border shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    OR
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Lic. Olegario Ríos Nordhausen</h3>
                    <p className="text-muted-foreground">Consultor ESG Senior & Master Coach</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-accent" />
                    GRI Certified
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-accent" />
                    IASE International
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-accent" />
                    AIAC Master Coach
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-accent" />
                    STPS Autorizado
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">Diagnóstico Inicial</h4>
                  <p className="text-muted-foreground leading-relaxed">Evaluamos tu situación actual en temas ESG, identificamos brechas y oportunidades de mejora específicas para tu industria.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">Desarrollo de Estrategia</h4>
                  <p className="text-muted-foreground leading-relaxed">Creamos un plan de acción personalizado con metas claras, indicadores medibles y un cronograma realista.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">Implementación</h4>
                  <p className="text-muted-foreground leading-relaxed">Te acompañamos en la ejecución de cada iniciativa, capacitamos a tu equipo y documentamos todo el proceso.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">Reporte y Certificación</h4>
                  <p className="text-muted-foreground leading-relaxed">Elaboramos tu reporte bajo estándares GRI y te preparamos para la certificación y comunicación externa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-card border-border shadow-xl relative">
            <div className="absolute top-8 left-8 text-8xl text-accent/20 font-serif">"</div>
            <CardContent className="p-12 text-center relative z-10">
              <p className="text-xl md:text-2xl italic text-foreground mb-8 leading-relaxed">
                "La certificación GRI nos abrió puertas que antes parecían imposibles. Ahora tenemos 
                acceso a licitaciones internacionales y nuestros clientes nos ven como un socio 
                comprometido con el futuro. El acompañamiento del Lic. Olegario fue fundamental."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  JM
                </div>
                <div className="text-left">
                  <div className="font-semibold text-primary">Juan Martínez</div>
                  <div className="text-sm text-muted-foreground">Director General, Empresa Manufacturera</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 border border-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">
            Da el primer paso hacia la sostenibilidad
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agenda tu diagnóstico gratuito y descubre cómo la certificación GRI puede transformar tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://asesorsostenible.com/', '_blank')}
            >
              Solicitar Diagnóstico
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/20 text-white border-2 border-white hover:bg-white hover:text-primary"
              onClick={() => window.open('tel:+5281802900061')}
            >
              <Phone className="h-5 w-5 mr-2" />
              818-029-0061
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5281802900061?text=Hola,%20me%20interesa%20información%20sobre%20Certificación%20GRI%20para%20mi%20empresa"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </div>
  );
};

export default CertificacionGRILanding;