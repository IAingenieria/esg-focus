import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Brain, Zap, Users, CheckCircle, Phone, Calendar, ArrowRight, Award, TrendingUp, Search, Briefcase, DollarSign, MessageSquare, Star, Monitor, MapPin, BarChart3 } from "lucide-react";

const CoachingEjecutivo = () => {

  // Data from LiderazgoSostenible.tsx
  const liderazgoSostenibleModules = [
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

  // Data from TransicionLaboral.tsx
  const transicionLaboralPhases = [
    {
      phase: "Fase 1",
      title: "Análisis",
      duration: "4 sesiones",
      description: "Evaluación profunda de perfil profesional y objetivos",
      activities: ["Evaluación de competencias", "Análisis de mercado ESG", "Definición de objetivos", "Mapeo de oportunidades"],
      icon: Search
    },
    {
      phase: "Fase 2",
      title: "Herramientas",
      duration: "6 sesiones", 
      description: "Desarrollo de herramientas para la búsqueda efectiva",
      activities: ["CV especializado ESG", "LinkedIn optimization", "Estrategia networking", "Preparación entrevistas"],
      icon: Briefcase
    },
    {
      phase: "Fase 3",
      title: "Ejecución",
      duration: "4 sesiones",
      description: "Implementación activa de la estrategia de búsqueda",
      activities: ["Aplicación estratégica", "Seguimiento activo", "Negociación ofertas", "Onboarding exitoso"],
      icon: Target
    }
  ];

  const transicionLaboralSalaryBenefits = [
    {
      position: "Sustainability Manager",
      traditional: "$45,000 - $60,000",
      esg: "$55,000 - $75,000",
      increase: "15-25%"
    },
    {
      position: "ESG Director",
      traditional: "$80,000 - $100,000", 
      esg: "$95,000 - $125,000",
      increase: "18-25%"
    },
    {
      position: "Chief Sustainability Officer",
      traditional: "$120,000 - $150,000",
      esg: "$140,000 - $190,000",
      increase: "17-27%"
    }
  ];

  // Data from HabilidadesDirectivas.tsx
  const habilidadesDirectivasPrograms = [
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

  // Data from EquiposGerenciales.tsx
  const equiposGerencialesModalities = [
    {
      type: "Presencial Intensivo",
      price: "120,000",
      duration: "12 sesiones",
      format: "Sesiones de día completo en tus instalaciones",
      benefits: ["Interacción directa", "Dinámicas grupales", "Team building", "Resultados inmediatos"],
      ideal: "Equipos que necesitan transformación rápida",
      icon: Users
    },
    {
      type: "Virtual Distribuido",
      price: "85,000",
      duration: "12 sesiones", 
      format: "Sesiones virtuales de 3 horas distribuidas",
      benefits: ["Flexibilidad horaria", "Menor inversión", "Grabaciones incluidas", "Seguimiento digital"],
      ideal: "Equipos distribuidos geográficamente",
      icon: Monitor,
      popular: true
    },
    {
      type: "Híbrido",
      price: "100,000",
      duration: "12 sesiones",
      format: "Combinación de sesiones presenciales y virtuales",
      benefits: ["Lo mejor de ambos", "Máxima flexibilidad", "Seguimiento continuo", "Adaptable"],
      ideal: "Equipos que buscan equilibrio",
      icon: MapPin
    }
  ];

  return (
    <>
      {/* Liderazgo Sostenible Section */}
      <section id="liderazgo-sostenible" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
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
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Sesión Inicial
              </Button>
              <a href="https://api.whatsapp.com/send/?phone=5218180290061&text=Hola%2C+me+interesa+informaci%C3%B3n+sobre+sus+servicios+de+consultor%C3%ADa+ESG&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp Directo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Módulos del Programa</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Desarrollo progresivo de competencias desde la mentalidad hasta la ejecución
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {liderazgoSostenibleModules.map((module, index) => (
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

      {/* Transicion Laboral Section */}
      <section id="transicion-laboral" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <DollarSign className="h-4 w-4 mr-2" />
              Salarios 15-25% Superiores
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transición <span className="text-primary">Laboral Ejecutiva</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Especialízate en posiciones ESG con salarios superiores y mayor proyección profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Evaluación Gratuita
              </Button>
              <a href="https://api.whatsapp.com/send/?phone=5218180290061&text=Hola%2C+me+interesa+informaci%C3%B3n+sobre+sus+servicios+de+consultor%C3%ADa+ESG&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp Directo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Comparativo Salarial ESG</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Las posiciones con responsabilidades ESG ofrecen salarios significativamente superiores
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Posición</th>
                    <th className="px-6 py-4 text-center">Tradicional</th>
                    <th className="px-6 py-4 text-center">Con ESG</th>
                    <th className="px-6 py-4 text-center">Incremento</th>
                  </tr>
                </thead>
                <tbody>
                  {transicionLaboralSalaryBenefits.map((position, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-navy">{position.position}</td>
                      <td className="px-6 py-4 text-center text-gray-text">{position.traditional}</td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">{position.esg}</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="bg-primary/10 text-primary border-primary">
                          +{position.increase}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades Directivas Section */}
      <section id="habilidades-directivas" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
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
              <a href="https://api.whatsapp.com/send/?phone=5218180290061&text=Hola%2C+me+interesa+informaci%C3%B3n+sobre+sus+servicios+de+consultor%C3%ADa+ESG&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp Directo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Programas Especializados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Elige el programa que mejor se adapte a tus necesidades de desarrollo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {habilidadesDirectivasPrograms.map((program, index) => (
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

      {/* Equipos Gerenciales Section */}
      <section id="equipos-gerenciales" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <BarChart3 className="h-4 w-4 mr-2" />
              Métricas Objetivas
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Coaching de <span className="text-primary">Equipos Gerenciales</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Fortalece la cohesión y efectividad de tu equipo directivo con resultados medibles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Diagnóstico Gratuito
              </Button>
              <a href="https://api.whatsapp.com/send/?phone=5218180290061&text=Hola%2C+me+interesa+informaci%C3%B3n+sobre+sus+servicios+de+consultor%C3%ADa+ESG&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp Directo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Modalidades Disponibles</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Elige la modalidad que mejor se adapte a las necesidades de tu equipo gerencial
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {equiposGerencialesModalities.map((modality, index) => (
              <Card key={index} className={`relative ${modality.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-light'}`}>
                {modality.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <modality.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-navy">{modality.type}</CardTitle>
                  <CardDescription className="text-sm">{modality.format}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-navy">${modality.price.toLocaleString()}</span>
                    <span className="text-gray-text ml-2">MXN</span>
                  </div>
                  <Badge variant="outline" className="w-fit mx-auto mt-2">
                    {modality.duration}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy text-sm mb-2">Beneficios:</h4>
                    <ul className="space-y-1">
                      {modality.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-xs">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-text">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-gray-light">
                    <p className="text-xs text-gray-text mb-3">
                      <strong>Ideal para:</strong> {modality.ideal}
                    </p>
                    <Button 
                      className="w-full" 
                      variant={modality.popular ? "cta" : "outline"}
                      size="sm"
                    >
                      Seleccionar
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoachingEjecutivo;
