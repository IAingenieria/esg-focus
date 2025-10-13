import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, BarChart3, FileText, TrendingUp, Phone, Calendar, ArrowRight, Eye } from "lucide-react";

const AuditoriaSostenibilidad = () => {
  const deliverables = [
    {
      icon: FileText,
      title: "Reporte Ejecutivo",
      description: "Análisis completo con hallazgos, recomendaciones y plan de acción prioritizado"
    },
    {
      icon: BarChart3,
      title: "Dashboard Interactivo",
      description: "Plataforma digital con métricas en tiempo real y seguimiento de progreso"
    },
    {
      icon: TrendingUp,
      title: "Plan de Mejora",
      description: "Roadmap detallado con acciones específicas, responsables y cronograma"
    },
    {
      icon: Eye,
      title: "Benchmark Sectorial",
      description: "Comparativo con mejores prácticas de tu industria y competidores"
    }
  ];

  const evaluationAreas = [
    {
      category: "Ambiental",
      items: ["Huella de carbono", "Gestión de residuos", "Uso de recursos", "Biodiversidad", "Energía renovable"],
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Social", 
      items: ["Derechos humanos", "Diversidad e inclusión", "Seguridad laboral", "Desarrollo comunitario", "Cadena de suministro"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Gobernanza",
      items: ["Ética empresarial", "Transparencia", "Gestión de riesgos", "Cumplimiento regulatorio", "Estructura directiva"],
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const pricingTiers = [
    {
      type: "Básica",
      price: "20,000",
      description: "Para PYMES hasta 50 empleados",
      features: ["Evaluación 360°", "Reporte ejecutivo", "Plan de mejora básico", "1 sesión de seguimiento"]
    },
    {
      type: "Estándar",
      price: "40,000",
      description: "Para empresas medianas",
      features: ["Evaluación 360°", "Dashboard interactivo", "Plan de mejora detallado", "Benchmark sectorial", "3 sesiones seguimiento"],
      popular: true
    },
    {
      type: "Premium",
      price: "65,000",
      description: "Para corporativos",
      features: ["Evaluación 360°", "Dashboard avanzado", "Plan estratégico", "Benchmark personalizado", "6 meses de soporte"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              <Eye className="h-4 w-4 mr-2" />
              Evaluación 360°
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Auditoría de <span className="text-primary">Sostenibilidad</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Evaluación integral de tu empresa en las dimensiones Ambiental, Social y de Gobernanza
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Iniciar Auditoría
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

      {/* Evaluation Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Evaluación 360° ESG</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Análisis completo de las tres dimensiones fundamentales de la sostenibilidad empresarial
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {evaluationAreas.map((area, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <Badge className={`w-fit ${area.color} mb-4`}>
                    {area.category}
                  </Badge>
                  <CardTitle className="text-2xl text-navy">{area.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Entregables Incluidos</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Todo lo que necesitas para entender y mejorar tu desempeño ESG
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {deliverables.map((deliverable, index) => (
              <Card key={index} className="text-center border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <deliverable.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-navy">{deliverable.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text text-sm">{deliverable.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Opciones de Auditoría</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Elige el nivel de profundidad que mejor se adapte a tu empresa
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
                  <CardTitle className="text-2xl font-bold text-navy">{tier.type}</CardTitle>
                  <CardDescription className="text-gray-text">{tier.description}</CardDescription>
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
                      size="lg"
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

      {/* Timeline Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold text-navy mb-8">Timeline del Proyecto</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6-8</div>
                    <div className="text-gray-text">Semanas</div>
                    <div className="text-sm text-gray-text mt-2">Duración total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy mb-2">360°</div>
                    <div className="text-gray-text">Evaluación</div>
                    <div className="text-sm text-gray-text mt-2">Análisis completo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">4</div>
                    <div className="text-gray-text">Entregables</div>
                    <div className="text-sm text-gray-text mt-2">Documentos finales</div>
                  </div>
                </div>
                <p className="text-lg text-gray-text mb-8">
                  Proceso estructurado que te dará una visión completa de tu desempeño ESG
                </p>
                <Link to="/diagnostico-esg">
                  <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                    Comenzar Auditoría Ahora
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
              ¿Listo para Conocer tu Posición ESG?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Obtén una evaluación profesional y un plan de acción para mejorar tu sostenibilidad
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

export default AuditoriaSostenibilidad;
