import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Building, Sprout, CheckCircle, Phone, Calendar, ArrowRight, Star } from "lucide-react";

const ConsultoriaMDIES = () => {
  const services = [
    {
      title: "Preparación para Certificación",
      description: "Acompañamiento completo para obtener la certificación MDIES",
      features: ["Diagnóstico inicial", "Plan de mejora", "Documentación requerida", "Acompañamiento en auditoría"],
      sectors: ["Cooperativas", "Empresas sociales", "Organizaciones civiles"],
      duration: "3-6 meses"
    },
    {
      title: "Implementación Empresas Sociales",
      description: "Desarrollo de modelos de negocio con impacto social",
      features: ["Modelo de negocio", "Estructura organizacional", "Medición de impacto", "Sostenibilidad financiera"],
      sectors: ["Startups sociales", "Cooperativas nuevas", "Proyectos comunitarios"],
      duration: "4-8 meses"
    },
    {
      title: "Capacitación Grupal",
      description: "Programas de formación para grupos y organizaciones",
      features: ["Talleres especializados", "Metodologías participativas", "Material didáctico", "Certificación grupal"],
      sectors: ["Grupos de mujeres", "Cooperativas agrícolas", "Organizaciones rurales"],
      duration: "2-4 meses"
    }
  ];

  const experience = [
    {
      role: "Ex-Coordinador Estatal MDIES",
      description: "Experiencia directa en la coordinación estatal del programa",
      impact: "Conocimiento profundo de procesos y requisitos oficiales"
    },
    {
      role: "Especialista en Economía Social",
      description: "Más de 10 años trabajando con empresas sociales",
      impact: "Comprensión integral del ecosistema de economía social"
    },
    {
      role: "Consultor Certificado",
      description: "Certificación oficial como consultor MDIES",
      impact: "Capacidad para brindar servicios oficialmente reconocidos"
    }
  ];

  const targetSectors = [
    {
      sector: "Cooperativas Agrícolas",
      description: "Organizaciones de productores rurales",
      services: ["Certificación MDIES", "Fortalecimiento organizacional", "Acceso a mercados", "Capacitación técnica"],
      icon: Sprout
    },
    {
      sector: "Empresas Sociales",
      description: "Negocios con propósito social",
      services: ["Modelo de negocio", "Medición de impacto", "Sostenibilidad", "Certificaciones"],
      icon: Building
    },
    {
      sector: "Grupos de Mujeres Emprendedoras",
      description: "Organizaciones de mujeres empresarias",
      services: ["Capacitación empresarial", "Acceso a financiamiento", "Redes de apoyo", "Desarrollo de productos"],
      icon: Users
    }
  ];

  const benefits = [
    "Acceso a financiamiento preferencial",
    "Reconocimiento oficial como empresa social",
    "Participación en programas gubernamentales",
    "Conexión con redes de economía social",
    "Capacitación y asistencia técnica",
    "Oportunidades de mercado especializado"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Award className="h-4 w-4 mr-2" />
              Ex-Coordinador Estatal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Consultoría <span className="text-primary">MDIES</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Servicios especializados en economía social con experiencia oficial en el programa MDIES
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Consulta Especializada
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Experiencia Comprobada</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Experiencia directa en la coordinación y desarrollo del programa MDIES
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {experience.map((exp, index) => (
              <Card key={index} className="border-gray-light text-center">
                <CardHeader>
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg text-navy">{exp.role}</CardTitle>
                  <CardDescription>{exp.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium text-sm">{exp.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Servicios Especializados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Acompañamiento integral para organizaciones de economía social
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <Badge variant="outline" className="w-fit mt-2">
                    {service.duration}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Sectores:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.sectors.map((sector, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {sector}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Más Información
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Sectors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Sectores Especializados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Experiencia específica en los principales sectores de economía social
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {targetSectors.map((sector, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <sector.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-navy text-center">{sector.sector}</CardTitle>
                  <CardDescription className="text-center">{sector.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-navy mb-3">Servicios especializados:</h4>
                  <ul className="space-y-2">
                    {sector.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-text">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Beneficios de la Certificación MDIES</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Ventajas concretas para organizaciones certificadas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-gray-light">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-navy font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso de Certificación</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Diagnóstico", description: "Evaluación inicial de la organización" },
                { step: "2", title: "Preparación", description: "Desarrollo de documentación y procesos" },
                { step: "3", title: "Implementación", description: "Puesta en marcha de mejoras" },
                { step: "4", title: "Certificación", description: "Acompañamiento en proceso oficial" }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center border-gray-light">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg text-navy">{step.title}</CardTitle>
                      <CardDescription className="text-sm">{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Certificar tu Organización?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Aprovecha nuestra experiencia oficial en MDIES para obtener tu certificación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Consulta Especializada
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                +52 818 029 0061
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultoriaMDIES;
