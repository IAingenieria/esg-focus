import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Search, Eye, FileText, Handshake, Users, Monitor, MapPin, CheckCircle, Phone, Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const SmartSales = () => {
  const modalities = [
    {
      type: "Individual",
      price: "85,000",
      description: "Coaching personalizado uno a uno",
      duration: "12 semanas",
      sessions: "12 sesiones de 90 min",
      benefits: ["Atención personalizada", "Casos específicos", "Flexibilidad horaria", "Seguimiento detallado"],
      ideal: "Vendedores senior o gerentes comerciales"
    },
    {
      type: "Grupal",
      price: "120,000",
      description: "Programa para equipos de ventas",
      duration: "10 semanas", 
      sessions: "10 sesiones grupales",
      benefits: ["Dinámicas de equipo", "Aprendizaje colaborativo", "Competencia sana", "Mejor costo por persona"],
      ideal: "Equipos de 3-8 vendedores",
      popular: true
    },
    {
      type: "Virtual",
      price: "65,000",
      description: "Capacitación online interactiva",
      duration: "8 semanas",
      sessions: "8 sesiones virtuales",
      benefits: ["Flexibilidad total", "Grabaciones incluidas", "Menor inversión", "Acceso desde cualquier lugar"],
      ideal: "Equipos distribuidos geográficamente"
    }
  ];

  const pillars = [
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

  const results = [
    {
      metric: "+40-60%",
      description: "Incremento valor promedio de venta",
      detail: "Ventas más grandes y rentables"
    },
    {
      metric: "-50%",
      description: "Reducción objeciones de precio",
      detail: "Mejor comunicación de valor"
    },
    {
      metric: "+35%",
      description: "Mejora en tasa de cierre",
      detail: "Más prospectos convertidos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
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
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Sesión Estratégica
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

      {/* Results Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Resultados Esperados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Mejoras comprobadas que transformarán tu desempeño comercial
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

      {/* 5 Pillars Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Los 5 Pilares de Smart Sales</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología integral que cubre todos los aspectos críticos del proceso de ventas
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {pillars.map((pillar, index) => (
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

      {/* Modalities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Modalidades Disponibles</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Elige la modalidad que mejor se adapte a tus necesidades y presupuesto
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
                    {modality.type === "Individual" && <Users className="h-8 w-8 text-primary" />}
                    {modality.type === "Grupal" && <Users className="h-8 w-8 text-primary" />}
                    {modality.type === "Virtual" && <Monitor className="h-8 w-8 text-primary" />}
                  </div>
                  <CardTitle className="text-xl text-navy">{modality.type}</CardTitle>
                  <CardDescription className="text-sm">{modality.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-navy">${modality.price.toLocaleString()}</span>
                    <span className="text-gray-text ml-2">MXN</span>
                  </div>
                  <div className="text-sm text-gray-text mt-2">
                    <div>{modality.duration}</div>
                    <div>{modality.sessions}</div>
                  </div>
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
                    <Link to="/diagnostico-esg" className="w-full">
                      <Button 
                        className="w-full" 
                        variant={modality.popular ? "cta" : "outline"}
                        size="sm"
                      >
                        Seleccionar
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Casos de Éxito</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-gray-light">
              <CardHeader>
                <CardTitle className="text-lg text-navy">Empresa Tecnológica</CardTitle>
                <CardDescription>Sector: Software B2B</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-text">Incremento ventas:</span>
                    <span className="font-bold text-primary">+65%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-text">Ticket promedio:</span>
                    <span className="font-bold text-primary">+45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-text">Ciclo de venta:</span>
                    <span className="font-bold text-primary">-40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-light">
              <CardHeader>
                <CardTitle className="text-lg text-navy">Distribuidora Industrial</CardTitle>
                <CardDescription>Sector: Manufactura</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-text">Incremento ventas:</span>
                    <span className="font-bold text-primary">+52%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-text">Tasa de cierre:</span>
                    <span className="font-bold text-primary">+38%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-text">Retención clientes:</span>
                    <span className="font-bold text-primary">+28%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-light">
              <CardHeader>
                <CardTitle className="text-lg text-navy">Servicios Financieros</CardTitle>
                <CardDescription>Sector: Seguros</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-text">Incremento ventas:</span>
                    <span className="font-bold text-primary">+48%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-text">Valor promedio:</span>
                    <span className="font-bold text-primary">+55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-text">Satisfacción cliente:</span>
                    <span className="font-bold text-primary">+42%</span>
                  </div>
                </div>
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
              ¿Listo para Transformar tus Ventas?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Únete a los vendedores que han multiplicado sus resultados con Smart Sales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Sesión Estratégica
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

export default SmartSales;
