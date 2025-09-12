import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Search, Eye, FileText, Handshake, Users, Monitor, MapPin, CheckCircle, Phone, Calendar, ArrowRight, TrendingUp, Target, Clock, BarChart3, Building2, Cog, Award, Sprout, Star } from "lucide-react";

const ServiciosEmpresariales = () => {

  // Data from AuditoriaComercial.tsx
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

  // Data from SmartSales.tsx
  const smartSalesPillars = [
    {
      pillar: "1. Mindset",
      title: "Mentalidad Ganadora",
      description: "Desarrollo de la mentalidad correcta para el éxito en ventas",
      topics: ["Psicología de ventas", "Manejo de objeciones mentales", "Confianza y autoestima", "Persistencia inteligente"],
      icon: Brain,
      color: "bg-blue-100 text-blue-800"
    },
    {
      pillar: "2. Investigación",
      title: "Prospección Inteligente",
      description: "Técnicas avanzadas para identificar y calificar prospectos",
      topics: ["Investigación de mercado", "Identificación de decisores", "Calificación BANT", "Social selling"],
      icon: Search,
      color: "bg-green-100 text-green-800"
    },
    {
      pillar: "3. Descubrimiento",
      title: "Diagnóstico Profundo",
      description: "Habilidades para descubrir necesidades reales del cliente",
      topics: ["Preguntas poderosas", "Escucha activa", "Identificación de dolor", "Mapeo de stakeholders"],
      icon: Eye,
      color: "bg-purple-100 text-purple-800"
    },
    {
      pillar: "4. Propuestas",
      title: "Presentaciones Ganadoras",
      description: "Creación de propuestas irresistibles y personalizadas",
      topics: ["Propuesta de valor", "Storytelling", "Manejo de objeciones", "ROI y beneficios"],
      icon: FileText,
      color: "bg-orange-100 text-orange-800"
    },
    {
      pillar: "5. Cierre",
      title: "Cierre Consultivo",
      description: "Técnicas avanzadas para cerrar ventas de forma natural",
      topics: ["Señales de compra", "Técnicas de cierre", "Negociación win-win", "Seguimiento post-venta"],
      icon: Handshake,
      color: "bg-red-100 text-red-800"
    }
  ];

  // Data from GestionSucursales.tsx
  const gestionSucursalesPricingTiers = [
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

  // Data from ConsultoriaMDIES.tsx
  const consultoriaMDIESServices = [
    {
      title: "Preparación para Certificación",
      description: "Acompañamiento completo para obtener la certificación MDIES",
      features: ["Diagnóstico inicial", "Plan de mejora", "Documentación requerida", "Acompañamiento en auditoría"],
      sectors: ["Cooperativas", "Empresas sociales", "Organizaciones civiles"],
      duration: "3-6 meses"
    },
    {
      title: "Implementación Empresas Sociales",
      description: "Desarrollo de modelos de negocio con impacto social",
      features: ["Modelo de negocio", "Estructura organizacional", "Medición de impacto", "Sostenibilidad financiera"],
      sectors: ["Startups sociales", "Cooperativas nuevas", "Proyectos comunitarios"],
      duration: "4-8 meses"
    },
    {
      title: "Capacitación Grupal",
      description: "Programas de formación para grupos y organizaciones",
      features: ["Talleres especializados", "Metodologías participativas", "Material didáctico", "Certificación grupal"],
      sectors: ["Grupos de mujeres", "Cooperativas agrícolas", "Organizaciones rurales"],
      duration: "2-4 meses"
    }
  ];

  return (
    <>
      {/* Auditoria Comercial Section */}
      <section id="auditoria-comercial" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
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
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Auditoría
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </section>
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

      {/* Smart Sales Section */}
      <section id="smart-sales" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <TrendingUp className="h-4 w-4 mr-2" />
              Resultados Comprobados
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Estrategia de Ventas <span className="text-primary">Smart Sales</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Metodología avanzada de ventas consultivas basada en 5 pilares fundamentales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Iniciar Programa
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Los 5 Pilares de Smart Sales</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología integral que cubre todos los aspectos críticos del proceso de ventas
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {smartSalesPillars.map((pillar, index) => (
              <Card key={index} className="border-gray-light">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <pillar.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className={pillar.color}>
                          {pillar.pillar}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-3">{pillar.title}</h3>
                      <p className="text-gray-text mb-4">{pillar.description}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {pillar.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-text">{topic}</span>
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

      {/* Gestion de Sucursales Section */}
      <section id="gestion-sucursales" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
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
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Inversión por Número de Sucursales</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Precios escalables según el tamaño de tu cadena de sucursales
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gestionSucursalesPricingTiers.map((tier, index) => (
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
                  <Button 
                    className="w-full" 
                    variant={tier.popular ? "cta" : "outline"}
                    size="lg"
                  >
                    Seleccionar Plan
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultoria MDIES Section */}
      <section id="consultoria-mdies" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Award className="h-4 w-4 mr-2" />
              Ex-Coordinador Estatal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Consultoría <span className="text-primary">MDIES</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Servicios especializados en economía social con experiencia oficial en el programa MDIES
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
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Servicios Especializados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Acompañamiento integral para organizaciones de economía social
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {consultoriaMDIESServices.map((service, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <Badge variant="outline" className="w-fit mt-2">
                    {service.duration}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Sectores:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.sectors.map((sector, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {sector}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Más Información
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiciosEmpresariales;
