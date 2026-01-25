import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, DollarSign, Award, CheckCircle, Phone, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CertificacionGRI = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Acceso a Mercados Internacionales",
      description: "Abre puertas a oportunidades globales y contratos internacionales"
    },
    {
      icon: DollarSign,
      title: "Tasas Preferenciales",
      description: "Acceso a financiamiento con mejores condiciones y tasas reducidas"
    },
    {
      icon: Award,
      title: "Credibilidad Global",
      description: "Reconocimiento internacional que fortalece tu reputación corporativa"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Evaluación",
      description: "Análisis completo de la situación actual de sostenibilidad",
      duration: "2-3 semanas",
      activities: ["Diagnóstico inicial", "Mapeo de stakeholders", "Análisis de materialidad"]
    },
    {
      step: "2",
      title: "Desarrollo",
      description: "Creación de estrategias y sistemas de reporte GRI",
      duration: "8-12 semanas",
      activities: ["Desarrollo de indicadores", "Sistemas de medición", "Políticas ESG"]
    },
    {
      step: "3",
      title: "Auditoría",
      description: "Verificación externa y preparación para certificación",
      duration: "3-4 semanas",
      activities: ["Auditoría externa", "Corrección de hallazgos", "Documentación final"]
    },
    {
      step: "4",
      title: "Comunicación",
      description: "Publicación y comunicación de resultados",
      duration: "2-3 semanas",
      activities: ["Reporte de sostenibilidad", "Estrategia comunicación", "Lanzamiento público"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              <Award className="h-4 w-4 mr-2" />
              Certificación Internacional
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Certificación <span className="text-primary">GRI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Obtén reconocimiento internacional y accede a mercados globales con la certificación GRI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Consulta Especializada
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Beneficios de la Certificación GRI</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Transforma tu empresa con reconocimiento internacional y ventajas competitivas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-navy">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso de Certificación</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología estructurada en 4 etapas para garantizar tu certificación GRI
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <Card className="flex-1 border-gray-light">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl text-navy">{step.title}</CardTitle>
                        <Badge variant="outline" className="text-primary border-primary">
                          {step.duration}
                        </Badge>
                      </div>
                      <CardDescription className="text-lg">{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {step.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-text">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-navy mb-6">Timeline del Proyecto</h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4-6</div>
                  <div className="text-gray-text">Meses</div>
                </div>
                <div className="text-6xl text-primary">→</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy mb-2">GRI</div>
                  <div className="text-gray-text">Certificado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Obtener tu Certificación GRI?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Únete a las empresas líderes que ya tienen acceso a mercados internacionales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Consulta Especializada
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

export default CertificacionGRI;
