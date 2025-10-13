import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Target, Brain, Zap, Users, CheckCircle, Phone, Calendar, ArrowRight, Award } from "lucide-react";

const LiderazgoSostenible = () => {
  const modules = [
    {
      module: "Módulo 1",
      title: "Mentalidad Sostenible",
      duration: "4 sesiones",
      description: "Desarrollo de una mentalidad orientada a la sostenibilidad",
      topics: ["Paradigmas ESG", "Visión sistémica", "Pensamiento a largo plazo", "Valores sostenibles"],
      icon: Brain
    },
    {
      module: "Módulo 2", 
      title: "Competencias ESG",
      duration: "6 sesiones",
      description: "Desarrollo de habilidades específicas en ESG",
      topics: ["Estrategia ESG", "Gestión de stakeholders", "Comunicación sostenible", "Medición de impacto"],
      icon: Target
    },
    {
      module: "Módulo 3",
      title: "Ejecución Estratégica",
      duration: "4 sesiones", 
      description: "Implementación práctica del liderazgo sostenible",
      topics: ["Plan de acción", "Gestión del cambio", "Equipos sostenibles", "Resultados medibles"],
      icon: Zap
    }
  ];

  const targetProfile = [
    {
      role: "Directores Generales",
      description: "CEOs que buscan liderar la transformación sostenible de su organización",
      benefits: ["Visión estratégica ESG", "Liderazgo transformacional", "Comunicación efectiva"]
    },
    {
      role: "Ejecutivos C-Level",
      description: "CFOs, COOs, CMOs que necesitan integrar ESG en sus áreas",
      benefits: ["Competencias específicas", "Integración funcional", "Resultados medibles"]
    },
    {
      role: "Líderes en Transición ESG",
      description: "Ejecutivos asumiendo nuevas responsabilidades en sostenibilidad",
      benefits: ["Aceleración de curva", "Mejores prácticas", "Red de contactos"]
    }
  ];

  const includes = [
    {
      item: "Material Especializado",
      description: "Libros, casos de estudio, herramientas y plantillas exclusivas"
    },
    {
      item: "Comunidad de Líderes ESG",
      description: "Acceso a red exclusiva de ejecutivos comprometidos con la sostenibilidad"
    },
    {
      item: "Certificado de Liderazgo Sostenible",
      description: "Reconocimiento oficial de competencias desarrolladas"
    },
    {
      item: "Seguimiento Post-Programa",
      description: "3 meses de acompañamiento para asegurar implementación"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              <Award className="h-4 w-4 mr-2" />
              Certificación Incluida
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Coaching de <span className="text-primary">Liderazgo Sostenible</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Desarrolla las competencias de liderazgo necesarias para dirigir la transformación ESG
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Sesión Inicial
                </Button>
              </Link>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-navy mb-6">
                  Programa de Liderazgo Sostenible
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$85,000</div>
                    <div className="text-gray-text">MXN</div>
                    <div className="text-sm text-gray-text mt-2">Inversión total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy mb-2">14</div>
                    <div className="text-gray-text">Sesiones</div>
                    <div className="text-sm text-gray-text mt-2">90 minutos c/u</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <div className="text-gray-text">Módulos</div>
                    <div className="text-sm text-gray-text mt-2">Especializados</div>
                  </div>
                </div>
                <p className="text-lg text-gray-text mb-8">
                  Programa integral diseñado para ejecutivos que buscan liderar la transformación sostenible
                </p>
                <Link to="/diagnostico-esg">
                  <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                    Comenzar Programa
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Módulos del Programa</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Desarrollo progresivo de competencias desde la mentalidad hasta la ejecución
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {modules.map((module, index) => (
              <Card key={index} className="border-gray-light">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <module.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline" className="text-primary border-primary">
                          {module.module}
                        </Badge>
                        <span className="text-sm text-gray-text">{module.duration}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-3">{module.title}</h3>
                      <p className="text-gray-text mb-4">{module.description}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {module.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-text">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Perfil de Participantes</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Diseñado específicamente para líderes que buscan transformar sus organizaciones
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {targetProfile.map((profile, index) => (
              <Card key={index} className="border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">{profile.role}</CardTitle>
                  <CardDescription>{profile.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-navy mb-3">Beneficios específicos:</h4>
                  <ul className="space-y-2">
                    {profile.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-text text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Includes Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Incluye en el Programa</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Todo lo necesario para tu desarrollo como líder sostenible
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {includes.map((include, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <CardTitle className="text-lg text-navy flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    {include.item}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text">{include.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-navy mb-8">Resultados Esperados</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <div className="text-navy font-semibold mb-2">Mejora en Liderazgo</div>
                  <div className="text-sm text-gray-text">Según evaluación 360°</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-navy font-semibold mb-2">Implementación ESG</div>
                  <div className="text-sm text-gray-text">Iniciativas exitosas</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-navy font-semibold mb-2">Satisfacción</div>
                  <div className="text-sm text-gray-text">De participantes</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Liderar la Transformación Sostenible?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Únete a los líderes que están transformando sus organizaciones hacia un futuro sostenible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Sesión Inicial Gratuita
                </Button>
              </Link>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                +52 818 029 0061
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiderazgoSostenible;
