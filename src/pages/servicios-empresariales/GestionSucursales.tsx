import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Building2, BarChart3, Users, Cog, CheckCircle, Phone, Calendar, ArrowRight, Target } from "lucide-react";

const GestionSucursales = () => {
  const pricingTiers = [
    {
      range: "1-3 Sucursales",
      price: "95,000",
      description: "Para empresas con pocas ubicaciones",
      features: ["Diagnóstico completo", "Estandarización básica", "Capacitación gerentes", "Seguimiento 3 meses"]
    },
    {
      range: "4-8 Sucursales", 
      price: "140,000",
      description: "Para cadenas medianas",
      features: ["Diagnóstico avanzado", "Estandarización completa", "Capacitación equipos", "Seguimiento 6 meses"],
      popular: true
    },
    {
      range: "9+ Sucursales",
      price: "180,000",
      description: "Para cadenas grandes",
      features: ["Diagnóstico ejecutivo", "Estandarización premium", "Capacitación masiva", "Seguimiento 12 meses"]
    }
  ];

  const process = [
    {
      phase: "Diagnóstico",
      duration: "3-4 semanas",
      description: "Evaluación completa de todas las sucursales",
      activities: ["Visitas a sucursales", "Análisis de performance", "Identificación de brechas", "Benchmarking interno"],
      icon: BarChart3
    },
    {
      phase: "Estandarización",
      duration: "4-6 semanas",
      description: "Desarrollo de procesos y estándares uniformes",
      activities: ["Manuales de operación", "Procesos estandarizados", "KPIs unificados", "Herramientas comunes"],
      icon: Cog
    },
    {
      phase: "Implementación",
      duration: "6-8 semanas",
      description: "Puesta en marcha de los nuevos estándares",
      activities: ["Capacitación equipos", "Implementación procesos", "Monitoreo inicial", "Ajustes necesarios"],
      icon: Users
    }
  ];

  const results = [
    {
      metric: "-40%",
      description: "Reducción variabilidad en performance",
      detail: "Todas las sucursales operan con estándares similares"
    },
    {
      metric: "+25%",
      description: "Incremento en satisfacción del cliente",
      detail: "Experiencia consistente en todas las ubicaciones"
    },
    {
      metric: "+30%",
      description: "Mejora en eficiencia operativa",
      detail: "Procesos optimizados y estandarizados"
    }
  ];

  const challenges = [
    {
      challenge: "Inconsistencia en Servicio",
      solution: "Estandarización de procesos de atención al cliente",
      impact: "Experiencia uniforme en todas las sucursales"
    },
    {
      challenge: "Variabilidad en Resultados",
      solution: "KPIs unificados y sistemas de monitoreo",
      impact: "Performance predecible y mejorable"
    },
    {
      challenge: "Falta de Control Central",
      solution: "Sistemas de reporte y dashboard ejecutivo",
      impact: "Visibilidad total de la operación"
    },
    {
      challenge: "Capacitación Desigual",
      solution: "Programas de capacitación estandarizados",
      impact: "Equipos con competencias homogéneas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              <Building2 className="h-4 w-4 mr-2" />
              Múltiples Ubicaciones
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gestión de <span className="text-primary">Sucursales</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Estandariza y optimiza la operación de todas tus sucursales para resultados consistentes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Diagnóstico
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

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Resultados Esperados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Mejoras comprobadas en la gestión y performance de sucursales
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {results.map((result, index) => (
              <Card key={index} className="text-center border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">{result.metric}</div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{result.description}</h3>
                  <p className="text-gray-text text-sm">{result.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Inversión por Número de Sucursales</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Precios escalables según el tamaño de tu cadena de sucursales
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-light'}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-navy">{tier.range}</CardTitle>
                  <CardDescription className="text-sm">{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-navy">${tier.price.toLocaleString()}</span>
                    <span className="text-gray-text ml-2">MXN</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-text text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/diagnostico-esg" className="w-full">
                    <Button 
                      className="w-full" 
                      variant={tier.popular ? "cta" : "outline"}
                      size="sm"
                    >
                      Seleccionar Plan
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
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
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso de Implementación</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología estructurada en 3 fases para garantizar resultados sostenibles
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
                          {phase.duration}
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

      {/* Challenges & Solutions */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Desafíos Comunes y Soluciones</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Abordamos los problemas más frecuentes en la gestión de múltiples sucursales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {challenges.map((item, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <CardTitle className="text-lg text-navy flex items-center">
                    <Target className="h-5 w-5 text-primary mr-3" />
                    {item.challenge}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Nuestra Solución:</h4>
                    <p className="text-gray-text text-sm">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Impacto:</h4>
                    <p className="text-primary text-sm font-medium">{item.impact}</p>
                  </div>
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
            <h2 className="text-4xl font-bold text-navy mb-6">Beneficios de la Estandarización</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Control Centralizado",
                description: "Visibilidad total de todas las operaciones desde un solo lugar"
              },
              {
                title: "Calidad Consistente",
                description: "Mismo nivel de servicio en todas las ubicaciones"
              },
              {
                title: "Eficiencia Operativa",
                description: "Procesos optimizados y recursos mejor utilizados"
              },
              {
                title: "Escalabilidad",
                description: "Fácil replicación del modelo exitoso en nuevas sucursales"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-text text-sm">{benefit.description}</p>
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
              ¿Listo para Estandarizar tus Sucursales?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Transforma la gestión de tu cadena con procesos estandarizados y resultados consistentes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Diagnóstico
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GestionSucursales;
