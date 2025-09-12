import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Monitor, MapPin, CheckCircle, Phone, Calendar, ArrowRight, BarChart3, Target } from "lucide-react";

const EquiposGerenciales = () => {
  const modalities = [
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

  const phases = [
    {
      phase: "Fase 1",
      title: "Diagnóstico",
      sessions: "4 sesiones",
      description: "Evaluación completa del equipo gerencial",
      activities: ["Evaluación 360° individual", "Análisis de dinámicas", "Identificación de brechas", "Definición de objetivos"]
    },
    {
      phase: "Fase 2",
      title: "Desarrollo",
      sessions: "6 sesiones",
      description: "Fortalecimiento de competencias y cohesión",
      activities: ["Habilidades de liderazgo", "Comunicación efectiva", "Resolución de conflictos", "Trabajo en equipo"]
    },
    {
      phase: "Fase 3",
      title: "Implementación",
      sessions: "2 sesiones",
      description: "Aplicación práctica y seguimiento",
      activities: ["Plan de acción", "Métricas de seguimiento", "Evaluación final", "Compromiso de resultados"]
    }
  ];

  const guarantee = [
    {
      title: "Evaluación 360° Pre/Post",
      description: "Medición objetiva del progreso con métricas cuantificables"
    },
    {
      title: "Mejora Garantizada",
      description: "Si no hay mejora medible, sesiones adicionales sin costo"
    },
    {
      title: "Seguimiento 6 Meses",
      description: "Acompañamiento post-programa para asegurar sostenibilidad"
    }
  ];

  const metrics = [
    {
      metric: "85%",
      description: "Mejora en comunicación del equipo",
      detail: "Según evaluación 360°"
    },
    {
      metric: "70%",
      description: "Incremento en productividad",
      detail: "Medido a 6 meses"
    },
    {
      metric: "90%",
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
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Modalidades Disponibles</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Elige la modalidad que mejor se adapte a las necesidades de tu equipo gerencial
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modalities.map((modality, index) => (
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

      {/* Process Phases */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso en 3 Fases</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología estructurada para garantizar resultados sostenibles
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="border-gray-light">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline" className="text-primary border-primary">
                          {phase.phase}
                        </Badge>
                        <span className="text-sm text-gray-text">{phase.sessions}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-3">{phase.title}</h3>
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

      {/* Guarantee Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestra Garantía</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Comprometidos con resultados medibles y sostenibles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {guarantee.map((item, index) => (
              <Card key={index} className="border-gray-light text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-navy">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Resultados Comprobados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Métricas objetivas que demuestran la efectividad de nuestro programa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-primary/20 bg-white">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">{metric.metric}</div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{metric.description}</h3>
                  <p className="text-gray-text text-sm">{metric.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Teams */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">¿Para Qué Equipos?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Equipos Directivos",
              "Comités Ejecutivos", 
              "Gerencias Senior",
              "Consejos de Administración"
            ].map((team, index) => (
              <Card key={index} className="text-center border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy">{team}</h3>
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
              ¿Listo para Fortalecer tu Equipo Gerencial?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Transforma la efectividad de tu equipo directivo con resultados medibles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Diagnóstico Gratuito
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

export default EquiposGerenciales;
