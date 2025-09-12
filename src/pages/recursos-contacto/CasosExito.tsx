import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Users, Building, Calendar, ArrowRight, CheckCircle, Target } from "lucide-react";

const CasosExito = () => {
  const featuredCase = {
    company: "Grupo Industrial Mexicano S.A.",
    sector: "Manufactura",
    size: "500+ empleados",
    challenge: "Cumplimiento NIS 2025 en tiempo récord",
    solution: "Implementación integral ESG en 4 meses",
    results: [
      "100% cumplimiento NIS 2025",
      "35% reducción en consumo energético",
      "Certificación GRI obtenida",
      "ROI del 240% en primer año"
    ],
    timeline: "4 meses",
    investment: "$180,000 MXN",
    roi: "240%",
    testimonial: "Focus ESG Pros transformó completamente nuestra operación. No solo cumplimos con NIS 2025, sino que mejoramos nuestra eficiencia operativa significativamente.",
    contact: "Ing. María Rodríguez, Directora de Sostenibilidad"
  };

  const successCases = [
    {
      company: "TechStart México",
      sector: "Tecnología",
      size: "50-100 empleados",
      service: "ESG para PyMEs",
      challenge: "Implementar ESG con presupuesto limitado",
      results: [
        "Estrategia ESG completa implementada",
        "20% reducción en costos operativos",
        "Acceso a financiamiento verde",
        "Mejora en atracción de talento"
      ],
      timeline: "3 meses",
      investment: "$45,000 MXN",
      roi: "180%",
      icon: Building
    },
    {
      company: "Retail Chain Nacional",
      sector: "Retail",
      size: "1000+ empleados",
      service: "Auditoría de Sostenibilidad",
      challenge: "Identificar oportunidades de mejora ESG",
      results: [
        "15 áreas de mejora identificadas",
        "Plan de acción a 3 años",
        "25% reducción proyectada en emisiones",
        "Certificación B-Corp en proceso"
      ],
      timeline: "2 meses",
      investment: "$95,000 MXN",
      roi: "320%",
      icon: Trophy
    },
    {
      company: "Constructora Sustentable",
      sector: "Construcción",
      size: "200-500 empleados",
      service: "Reportes ESG Corporativos",
      challenge: "Crear primer reporte de sostenibilidad",
      results: [
        "Reporte GRI Standards completo",
        "Transparencia mejorada con stakeholders",
        "Nuevos contratos con clientes ESG",
        "Reconocimiento sectorial obtenido"
      ],
      timeline: "6 semanas",
      investment: "$32,000 MXN",
      roi: "150%",
      icon: TrendingUp
    },
    {
      company: "Servicios Financieros Plus",
      sector: "Finanzas",
      size: "300+ empleados",
      service: "Coaching de Liderazgo Sostenible",
      challenge: "Transformar cultura organizacional",
      results: [
        "100% del equipo directivo capacitado",
        "Nuevas políticas ESG implementadas",
        "40% mejora en engagement empleados",
        "Liderazgo sectorial reconocido"
      ],
      timeline: "5 meses",
      investment: "$75,000 MXN",
      roi: "280%",
      icon: Users
    }
  ];

  const metrics = [
    {
      value: "150+",
      label: "Empresas Transformadas",
      description: "Desde PyMEs hasta corporativos"
    },
    {
      value: "98%",
      label: "Tasa de Éxito",
      description: "En cumplimiento de objetivos"
    },
    {
      value: "220%",
      label: "ROI Promedio",
      description: "Retorno de inversión típico"
    },
    {
      value: "4.9/5",
      label: "Satisfacción Cliente",
      description: "Calificación promedio"
    }
  ];

  const sectors = [
    { name: "Manufactura", cases: 35, growth: "+45%" },
    { name: "Tecnología", cases: 28, growth: "+60%" },
    { name: "Retail", cases: 22, growth: "+30%" },
    { name: "Construcción", cases: 18, growth: "+55%" },
    { name: "Finanzas", cases: 15, growth: "+40%" },
    { name: "Servicios", cases: 12, growth: "+35%" },
    { name: "Energía", cases: 10, growth: "+70%" },
    { name: "Otros", cases: 10, growth: "+25%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Trophy className="h-4 w-4 mr-2" />
              Historias de Éxito
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Casos de <span className="text-primary">Éxito</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Descubre cómo hemos transformado empresas con estrategias ESG efectivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Target className="h-5 w-5 mr-2" />
                Ver Casos Detallados
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-navy hover:bg-gray-50">
                <Calendar className="h-5 w-5 mr-2" />
                Solicitar Consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Caso Destacado</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Transformación integral que superó todas las expectativas
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-primary/20 shadow-2xl">
              <CardContent className="p-0">
                <div className="bg-primary/5 p-8 border-b border-primary/10">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">{featuredCase.timeline}</div>
                      <div className="text-gray-text">Tiempo de implementación</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-navy mb-2">{featuredCase.investment}</div>
                      <div className="text-gray-text">Inversión total</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">{featuredCase.roi}</div>
                      <div className="text-gray-text">ROI primer año</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-navy mb-2">{featuredCase.company}</h3>
                        <div className="flex gap-2 mb-4">
                          <Badge variant="outline">{featuredCase.sector}</Badge>
                          <Badge variant="outline">{featuredCase.size}</Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-navy mb-2">Desafío:</h4>
                          <p className="text-gray-text">{featuredCase.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy mb-2">Solución:</h4>
                          <p className="text-gray-text">{featuredCase.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy mb-4">Resultados Obtenidos:</h4>
                      <div className="space-y-3 mb-6">
                        {featuredCase.results.map((result, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                            <span className="text-gray-text">{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <blockquote className="text-gray-text italic mb-4">
                          "{featuredCase.testimonial}"
                        </blockquote>
                        <cite className="text-navy font-medium">— {featuredCase.contact}</cite>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Cases Grid */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Más Casos de Éxito</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Resultados comprobados en diferentes sectores e industrias
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {successCases.map((case_, index) => (
              <Card key={index} className="border-gray-light hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-navy mb-2">{case_.company}</CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{case_.sector}</Badge>
                        <Badge variant="outline" className="text-xs">{case_.size}</Badge>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">
                        {case_.service}
                      </Badge>
                    </div>
                    <case_.icon className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Desafío:</h4>
                    <p className="text-gray-text text-sm">{case_.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Resultados:</h4>
                    <ul className="space-y-1">
                      {case_.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-text">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-light">
                    <div className="text-sm">
                      <span className="text-gray-text">Tiempo: </span>
                      <span className="font-medium text-navy">{case_.timeline}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-text">ROI: </span>
                      <span className="font-bold text-primary">{case_.roi}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestro Impacto en Números</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{metric.label}</h3>
                  <p className="text-gray-text text-sm">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Sectores Atendidos</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Experiencia comprobada en múltiples industrias
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sectors.map((sector, index) => (
              <Card key={index} className="text-center border-gray-light bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-navy mb-2">{sector.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-1">{sector.cases}</div>
                  <div className="text-xs text-gray-text mb-2">casos exitosos</div>
                  <Badge className="bg-green-100 text-green-800 text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {sector.growth}
                  </Badge>
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
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestro Proceso de Éxito</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología probada que garantiza resultados excepcionales
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Diagnóstico",
                description: "Análisis profundo de la situación actual y identificación de oportunidades"
              },
              {
                step: "2", 
                title: "Estrategia",
                description: "Diseño de plan personalizado con objetivos claros y métricas específicas"
              },
              {
                step: "3",
                title: "Implementación",
                description: "Ejecución estructurada con acompañamiento continuo y ajustes necesarios"
              },
              {
                step: "4",
                title: "Resultados",
                description: "Medición de impacto y optimización continua para maximizar el ROI"
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center border-gray-light">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{phase.title}</h3>
                  <p className="text-gray-text text-sm">{phase.description}</p>
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
              ¿Listo para Ser Nuestro Próximo Caso de Éxito?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Únete a las empresas líderes que ya están transformando su futuro con ESG
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Target className="h-5 w-5 mr-2" />
                Iniciar Transformación
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasosExito;
