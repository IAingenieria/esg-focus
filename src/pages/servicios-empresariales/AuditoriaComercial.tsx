import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TrendingUp, Target, Users, Clock, CheckCircle, Phone, Calendar, ArrowRight, BarChart3 } from "lucide-react";

const AuditoriaComercial = () => {
  const expectedResults = [
    {
      metric: "+25-40%",
      description: "Incremento en conversión",
      detail: "Mejora en tasa de cierre de ventas",
      icon: TrendingUp
    },
    {
      metric: "-30%",
      description: "Reducción ciclo de ventas",
      detail: "Procesos más eficientes",
      icon: Clock
    },
    {
      metric: "+50%",
      description: "Mejora en retención",
      detail: "Clientes más satisfechos y leales",
      icon: Users
    },
    {
      metric: "+20%",
      description: "Incremento ticket promedio",
      detail: "Ventas de mayor valor",
      icon: BarChart3
    }
  ];

  const auditAreas = [
    {
      area: "Proceso de Ventas",
      description: "Análisis completo del embudo comercial",
      items: ["Prospección", "Calificación", "Presentación", "Cierre", "Seguimiento"]
    },
    {
      area: "Equipo Comercial",
      description: "Evaluación de competencias y desempeño",
      items: ["Habilidades de venta", "Motivación", "Capacitación", "Herramientas", "Liderazgo"]
    },
    {
      area: "Estrategia Comercial",
      description: "Revisión de estrategias y tácticas",
      items: ["Segmentación", "Propuesta de valor", "Pricing", "Canales", "Competencia"]
    },
    {
      area: "Sistemas y Procesos",
      description: "Análisis de herramientas y metodologías",
      items: ["CRM", "Reportes", "KPIs", "Procesos", "Automatización"]
    }
  ];

  const timeline = [
    {
      week: "Semanas 1-2",
      title: "Diagnóstico Inicial",
      activities: ["Entrevistas equipo", "Análisis de datos", "Observación procesos", "Identificación brechas"]
    },
    {
      week: "Semanas 3-5",
      title: "Análisis Profundo",
      activities: ["Evaluación competencias", "Benchmarking", "Análisis competencia", "Mapeo procesos"]
    },
    {
      week: "Semanas 6-7",
      title: "Desarrollo de Soluciones",
      activities: ["Plan de mejora", "Nuevos procesos", "Capacitación", "Herramientas"]
    },
    {
      week: "Semanas 8-9",
      title: "Entrega y Seguimiento",
      activities: ["Presentación resultados", "Implementación", "Capacitación equipo", "Plan seguimiento"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              <Target className="h-4 w-4 mr-2" />
              Resultados Garantizados
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Auditoría <span className="text-primary">Comercial</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Optimiza tu proceso de ventas y aumenta la conversión con nuestra auditoría especializada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Auditoría
                </Button>
              </Link>
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

      {/* Expected Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Resultados Esperados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Mejoras comprobadas que impactarán directamente en tus resultados comerciales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {expectedResults.map((result, index) => (
              <Card key={index} className="text-center border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <result.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                  <CardTitle className="text-lg text-navy">{result.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text text-sm">{result.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-navy mb-6">
                  Auditoría Comercial Completa
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy mb-2">9</div>
                    <div className="text-gray-text">Semanas</div>
                    <div className="text-sm text-gray-text mt-2">Duración completa</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">4</div>
                    <div className="text-gray-text">Áreas</div>
                    <div className="text-sm text-gray-text mt-2">De análisis</div>
                  </div>
                </div>
                <p className="text-lg text-gray-text mb-8">
                  Análisis integral de tu operación comercial con plan de mejora específico
                </p>
                <Link to="/diagnostico-esg">
                  <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                    Comenzar Auditoría
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audit Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Áreas de Auditoría</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Análisis completo de todos los aspectos críticos de tu operación comercial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {auditAreas.map((area, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">{area.area}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-navy mb-3">Elementos evaluados:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-text text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Cronograma de Trabajo</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Proceso estructurado en 9 semanas para garantizar resultados óptimos
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-6">
            {timeline.map((phase, index) => (
              <Card key={index} className="border-gray-light">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <Badge className="bg-primary text-white px-4 py-2">
                        {phase.week}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy mb-3">{phase.title}</h3>
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
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-navy mb-6">
                  Garantía de Resultados
                </h2>
                <p className="text-xl text-gray-text mb-8">
                  "Si no incrementas tus ventas al menos 20% en los siguientes 6 meses, 
                  te damos coaching adicional completamente gratis"
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">20%</div>
                    <div className="text-gray-text">Incremento Mínimo</div>
                    <div className="text-sm text-gray-text mt-2">Garantizado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy mb-2">6</div>
                    <div className="text-gray-text">Meses</div>
                    <div className="text-sm text-gray-text mt-2">Para ver resultados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-text">Garantía</div>
                    <div className="text-sm text-gray-text mt-2">Por escrito</div>
                  </div>
                </div>
                <Link to="/diagnostico-esg">
                  <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                    Solicitar Auditoría Ahora
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
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
              ¿Listo para Optimizar tus Ventas?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Descubre las oportunidades ocultas en tu proceso comercial y aumenta tus resultados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Auditoría
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

export default AuditoriaComercial;
