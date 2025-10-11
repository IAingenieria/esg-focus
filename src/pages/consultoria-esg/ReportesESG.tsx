import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, CheckCircle, Clock, Phone, Calendar, ArrowRight, Star } from "lucide-react";

const ReportesESG = () => {
  const reportTypes = [
    {
      type: "NIS Básico",
      price: "20,000",
      description: "Cumplimiento básico de regulaciones mexicanas",
      features: ["Reporte NIS estándar", "Métricas básicas", "Formato regulatorio", "Entrega digital"],
      timeline: "8 semanas",
      ideal: "PYMES que necesitan cumplir regulación"
    },
    {
      type: "GRI Estándar", 
      price: "50,000",
      description: "Reporte internacional con estándares GRI",
      features: ["Reporte GRI completo", "Análisis de materialidad", "Verificación externa", "Comunicación stakeholders"],
      timeline: "12 semanas",
      ideal: "Empresas con presencia internacional",
      popular: true
    },
    {
      type: "Integrado Premium",
      price: "90,000", 
      description: "Reporte integrado financiero y ESG",
      features: ["Reporte integrado", "Análisis financiero ESG", "Dashboard ejecutivo", "Estrategia comunicación"],
      timeline: "14 semanas",
      ideal: "Corporativos y empresas públicas"
    },
    {
      type: "Sectorial",
      price: "120,000",
      description: "Especializado por industria específica",
      features: ["Enfoque sectorial", "Benchmarks industria", "KPIs especializados", "Mejores prácticas"],
      timeline: "12 semanas", 
      ideal: "Empresas con necesidades específicas"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Recolección",
      description: "Recopilación de datos y información ESG",
      activities: ["Auditoría de datos", "Entrevistas stakeholders", "Revisión documentos"]
    },
    {
      step: "2", 
      title: "Análisis",
      description: "Procesamiento y análisis de información",
      activities: ["Análisis de materialidad", "Cálculo de métricas", "Benchmarking"]
    },
    {
      step: "3",
      title: "Redacción",
      description: "Elaboración del reporte profesional",
      activities: ["Redacción contenido", "Diseño gráfico", "Revisión técnica"]
    },
    {
      step: "4",
      title: "Publicación",
      description: "Entrega y estrategia de comunicación",
      activities: ["Entrega final", "Estrategia comunicación", "Capacitación equipo"]
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
              <FileText className="h-4 w-4 mr-2" />
              Reportes Profesionales
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reportes <span className="text-primary">ESG Corporativos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Reportes profesionales de sostenibilidad para diferentes necesidades empresariales
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

      {/* Report Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Tipos de Reportes ESG</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Elige el tipo de reporte que mejor se adapte a tus necesidades y objetivos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {reportTypes.map((report, index) => (
              <Card key={index} className={`relative ${report.popular ? 'border-primary shadow-xl' : 'border-gray-light'}`}>
                {report.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-navy">{report.type}</CardTitle>
                  <CardDescription className="text-sm">{report.description}</CardDescription>
                  <div className="mt-3">
                    <span className="text-3xl font-bold text-navy">${report.price.toLocaleString()}</span>
                    <span className="text-gray-text ml-1 text-sm">MXN</span>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {report.timeline}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy text-sm mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {report.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-gray-light">
                    <p className="text-xs text-gray-text mb-3">
                      <strong>Ideal para:</strong> {report.ideal}
                    </p>
                    <Button 
                      className="w-full" 
                      variant={report.popular ? "cta" : "outline"}
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

      {/* Process Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso de Elaboración</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología estructurada en 4 etapas para garantizar reportes de alta calidad
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center border-gray-light">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg text-navy">{step.title}</CardTitle>
                      <CardDescription className="text-sm">{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.activities.map((activity, idx) => (
                          <li key={idx} className="text-xs text-gray-text flex items-center">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-navy mb-6">
                  Timeline Estándar
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">12</div>
                    <div className="text-gray-text">Semanas</div>
                    <div className="text-sm text-gray-text mt-2">Duración promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy mb-2">4</div>
                    <div className="text-gray-text">Fases</div>
                    <div className="text-sm text-gray-text mt-2">Proceso estructurado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-text">Profesional</div>
                    <div className="text-sm text-gray-text mt-2">Calidad garantizada</div>
                  </div>
                </div>
                <p className="text-lg text-gray-text mb-8">
                  Cada reporte es desarrollado con los más altos estándares de calidad y profesionalismo
                </p>
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  Iniciar mi Reporte ESG
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">¿Por Qué Elegir Nuestros Reportes?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-gray-light">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-navy">Cumplimiento Garantizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-text">Reportes que cumplen con todas las regulaciones nacionales e internacionales</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-gray-light">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-navy">Calidad Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-text">Diseño profesional y contenido de alta calidad que refleja la excelencia de tu empresa</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-gray-light">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-navy">Entrega Puntual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-text">Cumplimos con los plazos establecidos sin comprometer la calidad del trabajo</p>
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
              ¿Listo para tu Reporte ESG Profesional?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Comunica tu compromiso con la sostenibilidad de manera profesional y efectiva
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

export default ReportesESG;
