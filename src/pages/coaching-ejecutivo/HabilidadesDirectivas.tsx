import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Brain, CheckCircle, Phone, Calendar, ArrowRight, Star, Zap } from "lucide-react";

const HabilidadesDirectivas = () => {
  const programs = [
    {
      title: "Equipos Alto Rendimiento",
      price: "45,000",
      duration: "8 sesiones",
      description: "Desarrollo de equipos de alto desempeño y productividad",
      skills: ["Liderazgo de equipos", "Motivación avanzada", "Gestión del talento", "Cultura organizacional"],
      icon: Users,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Comunicación Ejecutiva",
      price: "35,000", 
      duration: "6 sesiones",
      description: "Habilidades avanzadas de comunicación para líderes",
      skills: ["Presentaciones ejecutivas", "Comunicación persuasiva", "Manejo de conflictos", "Feedback efectivo"],
      icon: MessageSquare,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Toma de Decisiones",
      price: "35,000",
      duration: "6 sesiones", 
      description: "Metodologías avanzadas para la toma de decisiones estratégicas",
      skills: ["Análisis estratégico", "Gestión de riesgos", "Pensamiento crítico", "Decisiones bajo presión"],
      icon: Brain,
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const comboOffer = {
    originalPrice: 115000,
    comboPrice: 95000,
    savings: 20000,
    includes: ["Los 3 programas completos", "20 sesiones totales", "Material especializado", "Seguimiento personalizado"]
  };

  const methodology = [
    {
      step: "1",
      title: "Evaluación 360°",
      description: "Diagnóstico completo de habilidades actuales"
    },
    {
      step: "2",
      title: "Plan Personalizado",
      description: "Diseño de programa específico según necesidades"
    },
    {
      step: "3",
      title: "Desarrollo Práctico",
      description: "Sesiones hands-on con casos reales"
    },
    {
      step: "4",
      title: "Implementación",
      description: "Aplicación inmediata en el entorno laboral"
    }
  ];

  const benefits = [
    {
      metric: "40%",
      description: "Mejora en efectividad de liderazgo",
      detail: "Según evaluaciones 360°"
    },
    {
      metric: "60%",
      description: "Incremento en productividad del equipo",
      detail: "Medido a 6 meses"
    },
    {
      metric: "85%",
      description: "Satisfacción de participantes",
      detail: "Calificación promedio"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Zap className="h-4 w-4 mr-2" />
              Resultados Inmediatos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desarrollo de <span className="text-primary">Habilidades Directivas</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Programas especializados para potenciar tus competencias de liderazgo ejecutivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Evaluación Gratuita
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Programas Especializados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Elige el programa que mejor se adapte a tus necesidades de desarrollo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {programs.map((program, index) => (
              <Card key={index} className="border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={program.color}>
                      {program.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-navy">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-navy">${program.price.toLocaleString()}</span>
                    <span className="text-gray-text ml-2">MXN</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-navy mb-3">Habilidades desarrolladas:</h4>
                  <ul className="space-y-2 mb-6">
                    {program.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-text text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Seleccionar Programa
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Offer */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 transform rotate-12 translate-x-4 -translate-y-2">
                <Star className="h-4 w-4 inline mr-1" />
                OFERTA ESPECIAL
              </div>
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold text-navy mb-6">
                  Combo Completo de Habilidades
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-2xl text-gray-text line-through mb-2">
                      ${comboOffer.originalPrice.toLocaleString()} MXN
                    </div>
                    <div className="text-5xl font-bold text-primary mb-2">
                      ${comboOffer.comboPrice.toLocaleString()}
                    </div>
                    <div className="text-xl text-navy font-semibold">
                      Ahorras ${comboOffer.savings.toLocaleString()} MXN
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-navy mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {comboOffer.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  Tomar Combo Completo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestra Metodología</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Proceso estructurado para garantizar el desarrollo efectivo de habilidades
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {methodology.map((step, index) => (
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
                  {index < methodology.length - 1 && (
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Resultados Comprobados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Nuestros programas generan resultados medibles y sostenibles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-primary/20 bg-white">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{benefit.description}</h3>
                  <p className="text-gray-text text-sm">{benefit.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">¿Para Quién Son Estos Programas?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Directores Generales",
              "Gerentes Senior", 
              "Líderes de Equipo",
              "Ejecutivos en Ascenso"
            ].map((role, index) => (
              <Card key={index} className="text-center border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy">{role}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Potenciar tus Habilidades Directivas?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Invierte en tu desarrollo profesional y lleva tu liderazgo al siguiente nivel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Evaluación Gratuita
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

export default HabilidadesDirectivas;
