import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, Clock, Phone, Calendar, ArrowRight } from "lucide-react";

const CumplimientoNIS2024 = () => {
  const phases = [
    {
      phase: "Fase 1",
      title: "Diagnóstico",
      description: "Evaluación completa del estado actual de cumplimiento",
      duration: "2-3 semanas",
      deliverables: ["Reporte de brechas", "Matriz de riesgos", "Plan de trabajo"]
    },
    {
      phase: "Fase 2", 
      title: "Diseño",
      description: "Desarrollo de políticas y procedimientos específicos",
      duration: "3-4 semanas",
      deliverables: ["Manual de políticas", "Procedimientos operativos", "Matriz de responsabilidades"]
    },
    {
      phase: "Fase 3",
      title: "Implementación", 
      description: "Puesta en marcha de controles y capacitación",
      duration: "8-10 semanas",
      deliverables: ["Controles implementados", "Personal capacitado", "Documentación actualizada"]
    },
    {
      phase: "Fase 4",
      title: "Certificación",
      description: "Preparación y acompañamiento en auditoría",
      duration: "2-3 semanas", 
      deliverables: ["Preparación auditoría", "Acompañamiento", "Certificado NIS"]
    }
  ];

  const pricing = [
    {
      type: "PYMES",
      price: "35,000",
      description: "Hasta 50 empleados",
      features: ["Diagnóstico completo", "4 fases incluidas", "Garantía total", "Soporte 6 meses"]
    },
    {
      type: "Medianas",
      price: "60,000", 
      description: "51-250 empleados",
      features: ["Diagnóstico avanzado", "4 fases incluidas", "Garantía total", "Soporte 12 meses"],
      popular: true
    },
    {
      type: "Corporativos",
      price: "180,000",
      description: "Más de 250 empleados", 
      features: ["Diagnóstico ejecutivo", "4 fases incluidas", "Garantía total", "Soporte 18 meses"]
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
              <Clock className="h-4 w-4 mr-2" />
              Regulación Obligatoria 2024
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cumplimiento <span className="text-primary">NIS 2024</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Implementación completa de las nuevas regulaciones mexicanas con garantía de cumplimiento total
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Consulta Gratuita
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

      {/* Guarantee Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-8 text-center">
                <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-navy mb-4">
                  Garantía de Cumplimiento Total
                </h2>
                <p className="text-xl text-gray-text mb-6">
                  "Si no pasas la auditoría NIS 2024, devuelvo el 100% de tu inversión"
                </p>
                <Badge variant="outline" className="text-lg px-6 py-2 border-primary text-primary">
                  Garantía por Escrito
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Inversión por Tamaño de Empresa</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Precios fijos con todo incluido. Sin sorpresas, sin costos ocultos.
              <br />
              No incluye Certificación Internacional
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-light'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-navy">{plan.type}</CardTitle>
                  <CardDescription className="text-gray-text">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-navy">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-text ml-2">MXN</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/diagnostico-esg" className="w-full">
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "cta" : "outline"}
                      size="lg"
                    >
                      Comenzar Ahora
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
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso de 4 Fases</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología probada para garantizar el cumplimiento total en 6 meses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {phases.map((phase, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-primary border-primary">
                      {phase.phase}
                    </Badge>
                    <span className="text-sm text-gray-text">{phase.duration}</span>
                  </div>
                  <CardTitle className="text-xl text-navy">{phase.title}</CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-navy text-sm">Entregables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-gray-text flex items-center">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              ¿Listo para Cumplir con NIS 2024?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              No esperes hasta el último momento. Comienza tu proceso de cumplimiento hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Consulta Gratuita
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

      <Footer />
    </div>
  );
};

export default CumplimientoNIS2024;
