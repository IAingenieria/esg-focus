import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Calendar, Users, Globe, ArrowRight, Star, Clock } from "lucide-react";

const Certificaciones = () => {
  const certifications = [
    {
      name: "Certificación GRI Standards",
      organization: "Global Reporting Initiative",
      level: "Internacional",
      duration: "6-8 semanas",
      price: "85,000",
      description: "Certificación oficial para reportes de sostenibilidad según estándares GRI",
      benefits: [
        "Reconocimiento internacional",
        "Credibilidad con stakeholders",
        "Acceso a red global GRI",
        "Validación de competencias"
      ],
      requirements: [
        "Experiencia mínima en ESG",
        "Participación en curso preparatorio",
        "Examen teórico y práctico",
        "Proyecto de implementación"
      ],
      modules: [
        "Fundamentos GRI Standards",
        "Proceso de reporte",
        "Materialidad y stakeholders",
        "Indicadores y métricas",
        "Verificación y aseguramiento"
      ],
      featured: true
    },
    {
      name: "Certificación ISO 14001",
      organization: "International Organization for Standardization",
      level: "Internacional",
      duration: "8-10 semanas",
      price: "95,000",
      description: "Certificación en sistemas de gestión ambiental ISO 14001:2015",
      benefits: [
        "Estándar mundial reconocido",
        "Mejora continua ambiental",
        "Reducción de costos operativos",
        "Ventaja competitiva"
      ],
      requirements: [
        "Conocimientos básicos ambientales",
        "Experiencia en sistemas de gestión",
        "Curso de formación obligatorio",
        "Auditoría práctica"
      ],
      modules: [
        "Contexto organizacional",
        "Liderazgo y compromiso",
        "Planificación ambiental",
        "Operación y control",
        "Evaluación del desempeño"
      ]
    },
    {
      name: "Certificación B-Corp",
      organization: "B Lab",
      level: "Internacional",
      duration: "12-16 semanas",
      price: "120,000",
      description: "Certificación como empresa B que balancea propósito y beneficio",
      benefits: [
        "Diferenciación en el mercado",
        "Atracción de talento comprometido",
        "Acceso a comunidad B-Corp",
        "Impacto social medible"
      ],
      requirements: [
        "Evaluación B Impact Assessment",
        "Puntaje mínimo de 80 puntos",
        "Modificaciones legales corporativas",
        "Verificación por B Lab"
      ],
      modules: [
        "Gobernanza corporativa",
        "Trabajadores y comunidad",
        "Medio ambiente",
        "Clientes y proveedores",
        "Transparencia y rendición"
      ]
    }
  ];

  const internalCertifications = [
    {
      name: "Especialista ESG Focus",
      level: "Básico",
      duration: "4 semanas",
      price: "25,000",
      description: "Certificación interna que valida conocimientos fundamentales en ESG",
      topics: ["Fundamentos ESG", "Regulaciones mexicanas", "Métricas básicas", "Casos prácticos"]
    },
    {
      name: "Consultor ESG Avanzado",
      level: "Intermedio", 
      duration: "8 semanas",
      price: "45,000",
      description: "Certificación para consultores que implementan estrategias ESG completas",
      topics: ["Estrategia ESG", "Implementación", "Auditorías", "Coaching organizacional"]
    },
    {
      name: "Master ESG Practitioner",
      level: "Avanzado",
      duration: "12 semanas", 
      price: "75,000",
      description: "Máximo nivel de certificación para líderes en sostenibilidad empresarial",
      topics: ["Liderazgo ESG", "Transformación organizacional", "Innovación sostenible", "Mentoring"]
    }
  ];

  const process = [
    {
      step: "Evaluación",
      description: "Diagnóstico de conocimientos y definición de ruta de certificación",
      duration: "1 semana"
    },
    {
      step: "Formación",
      description: "Programa intensivo con módulos teóricos y prácticos",
      duration: "4-12 semanas"
    },
    {
      step: "Examen",
      description: "Evaluación integral teórica y proyecto práctico",
      duration: "1-2 semanas"
    },
    {
      step: "Certificación",
      description: "Emisión de certificado y registro en base de datos oficial",
      duration: "1 semana"
    }
  ];

  const benefits = [
    {
      title: "Credibilidad Profesional",
      description: "Validación oficial de tus competencias ESG",
      icon: Award
    },
    {
      title: "Oportunidades Laborales",
      description: "Acceso a posiciones especializadas mejor remuneradas",
      icon: Users
    },
    {
      title: "Red de Contactos",
      description: "Conexión con comunidad global de profesionales ESG",
      icon: Globe
    },
    {
      title: "Actualización Continua",
      description: "Acceso a contenido actualizado y nuevas tendencias",
      icon: Star
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
              Certificaciones Profesionales
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Certificaciones <span className="text-primary">ESG</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Valida tus competencias con certificaciones reconocidas internacionalmente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Award className="h-5 w-5 mr-2" />
                Ver Certificaciones
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-navy hover:bg-gray-50">
                <Calendar className="h-5 w-5 mr-2" />
                Próximas Fechas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* International Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Certificaciones Internacionales</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Obtén certificaciones reconocidas mundialmente con nuestro acompañamiento experto
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {certifications.map((cert, index) => (
              <Card key={index} className={`${cert.featured ? 'border-primary shadow-xl' : 'border-gray-light'}`}>
                {cert.featured && (
                  <Badge className="absolute -top-3 left-8 bg-primary text-white">
                    Más Solicitada
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-navy mb-2">{cert.name}</h3>
                          <p className="text-primary font-medium mb-2">{cert.organization}</p>
                          <p className="text-gray-text mb-4">{cert.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <Badge className="mb-2">{cert.level}</Badge>
                          <div className="text-2xl font-bold text-navy">${cert.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-text">MXN</div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-navy mb-3">Beneficios:</h4>
                          <ul className="space-y-2">
                            {cert.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                <span className="text-gray-text">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy mb-3">Requisitos:</h4>
                          <ul className="space-y-2">
                            {cert.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                <span className="text-gray-text">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Card className="border-gray-light bg-gray-50">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <Clock className="h-5 w-5 text-primary mr-2" />
                            <span className="font-medium text-navy">Duración: {cert.duration}</span>
                          </div>
                          <h4 className="font-semibold text-navy mb-3">Módulos:</h4>
                          <ul className="space-y-1">
                            {cert.modules.map((module, idx) => (
                              <li key={idx} className="text-sm text-gray-text">
                                • {module}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Button 
                        size="lg" 
                        variant={cert.featured ? "cta" : "outline"} 
                        className="w-full"
                      >
                        <Award className="h-5 w-5 mr-2" />
                        Iniciar Certificación
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Certifications */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Certificaciones Focus ESG Pros</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Programas de certificación propios diseñados para el mercado mexicano
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {internalCertifications.map((cert, index) => (
              <Card key={index} className="border-gray-light hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-navy">{cert.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    Nivel {cert.level}
                  </Badge>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-navy">${cert.price.toLocaleString()}</span>
                    <span className="text-gray-text ml-2">MXN</span>
                  </div>
                  <div className="text-sm text-gray-text mt-2">{cert.duration}</div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription>{cert.description}</CardDescription>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-2 text-sm">Temas principales:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.topics.map((topic, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Más Información
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso de Certificación</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Ruta clara y estructurada hacia tu certificación profesional
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <Card key={index} className="text-center border-gray-light">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{step.step}</h3>
                  <p className="text-gray-text text-sm mb-3">{step.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">¿Por Qué Certificarte?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-primary/20 bg-white">
                <CardContent className="p-6">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-text text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-primary/5 shadow-xl">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold text-navy mb-8">
                  Certificaciones Otorgadas
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-gray-text">Profesionales Certificados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy mb-2">95%</div>
                    <div className="text-gray-text">Tasa de Aprobación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-gray-text">Programas Disponibles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy mb-2">4.9/5</div>
                    <div className="text-gray-text">Satisfacción</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Certificarte como Experto ESG?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Impulsa tu carrera profesional con certificaciones reconocidas mundialmente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Award className="h-5 w-5 mr-2" />
                Iniciar Certificación
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Consultar Fechas
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificaciones;
