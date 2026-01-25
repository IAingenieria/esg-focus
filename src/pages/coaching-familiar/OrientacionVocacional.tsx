import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Compass, Users, Zap, Search, Target, CheckCircle, Phone, Calendar, ArrowRight, Brain } from "lucide-react";

const OrientacionVocacional = () => {

  const process = [
    {
      phase: "Autoconocimiento",
      sessions: "2-3 sesiones",
      description: "Exploración profunda de personalidad, valores e intereses",
      activities: ["Test de personalidad", "Exploración de valores", "Identificación de intereses", "Análisis de fortalezas"],
      icon: Brain
    },
    {
      phase: "Exploración",
      sessions: "3-4 sesiones",
      description: "Investigación de carreras y opciones profesionales",
      activities: ["Investigación de carreras", "Entrevistas profesionales", "Visitas a universidades", "Análisis del mercado laboral"],
      icon: Search
    },
    {
      phase: "Análisis",
      sessions: "2 sesiones",
      description: "Evaluación de opciones y toma de decisiones",
      activities: ["Matriz de decisión", "Análisis costo-beneficio", "Evaluación de riesgos", "Consulta familiar"],
      icon: Target
    },
    {
      phase: "Diseño",
      sessions: "1-2 sesiones",
      description: "Creación del plan de acción personalizado",
      activities: ["Plan de estudios", "Cronograma de actividades", "Recursos necesarios", "Metas a corto plazo"],
      icon: Compass
    },
    {
      phase: "Implementación",
      sessions: "1 sesión",
      description: "Puesta en marcha del plan y seguimiento",
      activities: ["Primeros pasos", "Seguimiento inicial", "Ajustes necesarios", "Apoyo continuo"],
      icon: Zap
    }
  ];

  const specialCases = [
    {
      case: "Cambio de Carrera",
      description: "Para jóvenes que ya iniciaron estudios pero quieren cambiar",
      approach: "Análisis de transferencia de créditos y nueva orientación",
      duration: "4-6 sesiones"
    },
    {
      case: "Múltiples Opciones",
      description: "Cuando el joven tiene varios intereses y no puede decidir",
      approach: "Técnicas de priorización y análisis comparativo detallado",
      duration: "6-8 sesiones"
    },
    {
      case: "Presión Familiar",
      description: "Conflicto entre las expectativas familiares y los intereses personales",
      approach: "Mediación familiar y construcción de consensos",
      duration: "8-10 sesiones"
    }
  ];

  const outcomes = [
    {
      outcome: "Claridad Vocacional",
      description: "Identificación clara de la carrera o área profesional ideal",
      percentage: "95%"
    },
    {
      outcome: "Plan de Acción",
      description: "Roadmap específico para alcanzar los objetivos profesionales",
      percentage: "100%"
    },
    {
      outcome: "Reducción de Ansiedad",
      description: "Disminución significativa del estrés por la decisión vocacional",
      percentage: "88%"
    },
    {
      outcome: "Satisfacción Familiar",
      description: "Alineación entre expectativas familiares y decisión del joven",
      percentage: "92%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              <Compass className="h-4 w-4 mr-2" />
              Encuentra tu Camino
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Orientación <span className="text-primary">Vocacional</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Descubre tu vocación verdadera y diseña el camino hacia tu futuro profesional ideal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendar">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agenda Consulta Estratégica
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

      {/* Process Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso de 5 Fases</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología estructurada para garantizar una decisión vocacional acertada
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {process.map((phase, index) => (
              <Card key={index} className="border-gray-light">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <phase.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-navy">{phase.phase}</h3>
                        <Badge variant="outline" className="text-primary border-primary">
                          {phase.sessions}
                        </Badge>
                      </div>
                      <p className="text-gray-text mb-4">{phase.description}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {phase.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-text">{activity}</span>
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

      {/* Special Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Casos Especiales</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Enfoques específicos para situaciones particulares
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specialCases.map((specialCase, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <CardTitle className="text-lg text-navy">{specialCase.case}</CardTitle>
                  <CardDescription>{specialCase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Enfoque:</h4>
                    <p className="text-gray-text text-sm">{specialCase.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Duración:</h4>
                    <Badge variant="outline" className="text-primary border-primary">
                      {specialCase.duration}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Resultados Esperados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Beneficios concretos que obtendrás al completar el proceso
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="text-center border-primary/20 bg-white">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-4">{outcome.percentage}</div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{outcome.outcome}</h3>
                  <p className="text-gray-text text-sm">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">¿Por Qué Elegir Orientación Vocacional?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Evita cambios de carrera costosos",
              "Reduce la ansiedad por la decisión",
              "Aumenta la motivación académica",
              "Mejora el rendimiento estudiantil",
              "Alinea expectativas familiares",
              "Construye un plan de vida claro"
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-navy font-medium">{benefit}</p>
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
              ¿Listo para Descubrir tu Vocación?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Toma la decisión más importante de tu vida con el apoyo de expertos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Iniciar Proceso
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

export default OrientacionVocacional;
