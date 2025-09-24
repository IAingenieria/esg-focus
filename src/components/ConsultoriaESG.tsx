import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Shield, TrendingUp, FileText, GraduationCap } from "lucide-react";

const ConsultoriaESG = () => {
  const services = [
    {
      id: "nis-2025",
      title: "Cumplimiento NIS 2025",
      description: "Implementación completa de las nuevas regulaciones mexicanas",
      prices: {
        pymes: "85,000",
        medianas: "150,000",
        corporativos: "250,000"
      },
      duration: "6 meses",
      guarantee: "Si no pasas auditoría NIS, devuelvo 100% de inversión",
      process: ["Diagnóstico", "Diseño", "Implementación", "Certificación"],
      icon: Shield,
      urgent: true
    },
    {
      id: "gri",
      title: "Certificación Internacional GRI",
      description: "Acceso a mercados internacionales y tasas preferenciales",
      prices: {
        range: "180,000 - 350,000"
      },
      duration: "4-6 meses",
      benefits: ["Acceso mercados internacionales", "Tasas preferenciales", "Credibilidad global"],
      process: ["Evaluación", "Desarrollo", "Auditoría", "Comunicación"],
      icon: TrendingUp,
      premium: true
    },
    {
      id: "auditoria",
      title: "Auditoría de Sostenibilidad",
      description: "Evaluación 360° integral de tu empresa",
      prices: {
        range: "65,000 - 120,000"
      },
      duration: "6-8 semanas",
      deliverables: ["Reporte ejecutivo", "Dashboard interactivo", "Plan de mejora", "Benchmark sectorial"],
      icon: CheckCircle
    },
    {
      id: "reportes",
      title: "Reportes ESG Corporativos",
      description: "Reportes profesionales para diferentes necesidades",
      options: [
        { name: "NIS Básico", price: "25,000" },
        { name: "GRI Estándar", price: "85,000" },
        { name: "Integrado Premium", price: "150,000" },
        { name: "Sectorial", price: "120,000" }
      ],
      duration: "12 semanas",
      process: ["Recolección", "Análisis", "Redacción", "Publicación"],
      icon: FileText
    },
    {
      id: "capacitacion",
      title: "Capacitación Empresarial ESG",
      description: "Programas de formación especializados",
      programs: [
        { name: "Directivos", price: "45,000" },
        { name: "Operativo", price: "35,000" },
        { name: "Ventas", price: "25,000" },
        { name: "Integral Anual", price: "120,000" }
      ],
      modalities: ["Presencial", "Virtual", "Híbrida"],
      certification: true,
      icon: GraduationCap
    }
  ];

  return (
    <section id="consultoria-esg" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Consultoría ESG <span className="text-primary">Certificada</span>
          </h2>
          <p className="text-xl text-gray-text max-w-3xl mx-auto">
            Servicios especializados para cumplir con las nuevas regulaciones y transformar tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
                      <Card id={service.id} key={service.id} className={`h-full shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2 ${service.urgent ? 'border-yellow-accent border-2' : ''} ${service.premium ? 'border-primary border-2' : ''}`}>
              <CardHeader className="relative">
                {service.urgent && (
                  <Badge className="absolute -top-3 -right-3 bg-yellow-accent text-navy font-bold animate-pulse">
                    URGENTE
                  </Badge>
                )}
                {service.premium && (
                  <Badge className="absolute -top-3 -right-3 bg-gradient-primary text-white font-bold">
                    PREMIUM
                  </Badge>
                )}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="h-4 w-4 text-gray-text" />
                      <span className="text-sm text-gray-text">{service.duration}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-text">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <div className="space-y-3">
                  {service.prices && (
                    <div className="space-y-2">
                      {service.prices.pymes && (
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center p-2 bg-green-light rounded">
                            <div className="text-sm text-gray-text">PYMES</div>
                            <div className="font-bold text-primary">${service.prices.pymes}</div>
                          </div>
                          <div className="text-center p-2 bg-green-light rounded">
                            <div className="text-sm text-gray-text">Medianas</div>
                            <div className="font-bold text-primary">${service.prices.medianas}</div>
                          </div>
                          <div className="text-center p-2 bg-green-light rounded">
                            <div className="text-sm text-gray-text">Corporativos</div>
                            <div className="font-bold text-primary">${service.prices.corporativos}</div>
                          </div>
                        </div>
                      )}
                      {service.prices.range && (
                        <div className="text-center p-4 bg-green-light rounded-lg">
                          <div className="text-2xl font-bold text-primary">${service.prices.range} MXN</div>
                        </div>
                      )}
                    </div>
                  )}

                  {service.options && (
                    <div className="space-y-2">
                      {service.options.map((option) => (
                        <div key={option.name} className="flex justify-between items-center p-3 bg-gray-light rounded">
                          <span className="font-medium text-navy">{option.name}</span>
                          <span className="font-bold text-primary">${option.price}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {service.programs && (
                    <div className="space-y-2">
                      {service.programs.map((program) => (
                        <div key={program.name} className="flex justify-between items-center p-3 bg-gray-light rounded">
                          <span className="font-medium text-navy">{program.name}</span>
                          <span className="font-bold text-primary">${program.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Features */}
                {service.process && (
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Proceso:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.process.map((step, index) => (
                        <div key={step} className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <span className="text-sm text-gray-text">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.benefits && (
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Beneficios:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-success" />
                          <span className="text-sm text-gray-text">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.deliverables && (
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Entregables:</h4>
                    <ul className="space-y-1">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-success" />
                          <span className="text-sm text-gray-text">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.guarantee && (
                  <div className="p-4 bg-green-light border border-green-success rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-5 w-5 text-green-success" />
                      <span className="font-semibold text-green-success">Garantía</span>
                    </div>
                    <p className="text-sm text-gray-text">{service.guarantee}</p>
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <Link to="/diagnostico-esg" className="w-full">
                    <Button variant={service.urgent ? "urgent" : service.premium ? "cta" : "default"} className="w-full">
                      Solicitar Información
                    </Button>
                  </Link>
                  <Link to="/diagnostico-esg" className="w-full">
                    <Button variant="outline" size="sm" className="w-full">
                      Ver Detalles
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">¿Necesitas Asesoría Personalizada?</h3>
            <p className="text-xl mb-8 opacity-90">
              Agenda una consulta gratuita de 15 minutos y descubre cómo podemos ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://asesorsostenible.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="urgent" size="lg">
                  Diagnóstico ESG Gratuito
                </Button>
              </a>
              <a href="http://127.0.0.1:51694/agendar">
                <Button variant="hero" size="lg">
                  Agendar Consulta
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultoriaESG;