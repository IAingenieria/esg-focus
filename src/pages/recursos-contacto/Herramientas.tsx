import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Wrench, Download, Star, Users, CheckCircle, ArrowRight, Calculator, FileText, BarChart } from "lucide-react";

const Herramientas = () => {
  const tools = [
    {
      name: "Calculadora de Huella de Carbono",
      description: "Herramienta completa para medir y monitorear las emisiones de CO2 de tu empresa",
      category: "Medición",
      type: "Excel + PDF",
      price: "Gratuita",
      downloads: 2450,
      rating: 4.8,
      features: [
        "Cálculo automático de emisiones Scope 1, 2 y 3",
        "Base de datos de factores de emisión actualizados",
        "Reportes visuales automáticos",
        "Comparativas año a año",
        "Metas de reducción personalizables"
      ],
      requirements: "Microsoft Excel 2016 o superior",
      icon: Calculator,
      popular: true
    },
    {
      name: "Template de Reporte ESG",
      description: "Plantilla profesional para crear reportes de sostenibilidad alineados con estándares GRI",
      category: "Reportes",
      type: "Word + PowerPoint",
      price: "Gratuita",
      downloads: 1890,
      rating: 4.7,
      features: [
        "Estructura completa según GRI Standards",
        "Secciones pre-definidas para todos los pilares ESG",
        "Gráficos y tablas editables",
        "Checklist de cumplimiento",
        "Ejemplos de mejores prácticas"
      ],
      requirements: "Microsoft Office 2016 o superior",
      icon: FileText
    },
    {
      name: "Dashboard de KPIs ESG",
      description: "Panel de control interactivo para monitorear indicadores clave de sostenibilidad",
      category: "Monitoreo",
      type: "Excel Avanzado",
      price: "$299 MXN",
      downloads: 856,
      rating: 4.9,
      features: [
        "20+ KPIs ESG pre-configurados",
        "Visualizaciones dinámicas",
        "Alertas automáticas",
        "Integración con bases de datos",
        "Reportes ejecutivos automáticos"
      ],
      requirements: "Excel con macros habilitadas",
      icon: BarChart,
      premium: true
    },
    {
      name: "Checklist NIS 2025",
      description: "Lista de verificación completa para cumplir con las nuevas regulaciones mexicanas",
      category: "Compliance",
      type: "PDF Interactivo",
      price: "Gratuita",
      downloads: 3200,
      rating: 4.6,
      features: [
        "100+ puntos de verificación",
        "Referencias normativas actualizadas",
        "Timeline de implementación",
        "Documentos requeridos",
        "Contactos de autoridades"
      ],
      requirements: "Adobe Reader o navegador web",
      icon: CheckCircle
    },
    {
      name: "Matriz de Materialidad ESG",
      description: "Herramienta para identificar y priorizar temas materiales de sostenibilidad",
      category: "Estrategia",
      type: "Excel + Guía",
      price: "$199 MXN",
      downloads: 645,
      rating: 4.8,
      features: [
        "Metodología de análisis de materialidad",
        "Matriz visual interactiva",
        "Base de datos de temas ESG",
        "Guía paso a paso",
        "Plantillas de encuestas"
      ],
      requirements: "Microsoft Excel 2016 o superior",
      icon: Wrench,
      premium: true
    },
    {
      name: "Calculadora ROI ESG",
      description: "Calcula el retorno de inversión de tus iniciativas de sostenibilidad",
      category: "Finanzas",
      type: "Excel Avanzado",
      price: "$399 MXN",
      downloads: 423,
      rating: 4.9,
      features: [
        "Modelos financieros pre-construidos",
        "Análisis de sensibilidad",
        "Proyecciones a 5 años",
        "Comparativas de escenarios",
        "Reportes para inversionistas"
      ],
      requirements: "Excel con conocimientos financieros básicos",
      icon: Calculator,
      premium: true
    }
  ];

  const categories = [
    { name: "Medición", count: 8, color: "bg-blue-100 text-blue-800" },
    { name: "Reportes", count: 12, color: "bg-green-100 text-green-800" },
    { name: "Monitoreo", count: 6, color: "bg-purple-100 text-purple-800" },
    { name: "Compliance", count: 15, color: "bg-red-100 text-red-800" },
    { name: "Estrategia", count: 9, color: "bg-yellow-100 text-yellow-800" },
    { name: "Finanzas", count: 5, color: "bg-pink-100 text-pink-800" }
  ];

  const benefits = [
    {
      title: "Ahorra Tiempo",
      description: "Herramientas listas para usar que aceleran tu trabajo",
      icon: CheckCircle
    },
    {
      title: "Reduce Costos",
      description: "Evita contratar consultores externos para tareas básicas",
      icon: Calculator
    },
    {
      title: "Mejora Precisión",
      description: "Fórmulas y metodologías validadas por expertos",
      icon: Star
    },
    {
      title: "Facilita Compliance",
      description: "Cumple con regulaciones y estándares internacionales",
      icon: FileText
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
              <Wrench className="h-4 w-4 mr-2" />
              Recursos Prácticos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Herramientas <span className="text-primary">ESG</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Recursos descargables para acelerar tu implementación de sostenibilidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Wrench className="h-5 w-5 mr-2" />
                  Ver Herramientas
                </Button>
              </Link>
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-navy hover:bg-gray-50">
                  <Wrench className="h-5 w-5 mr-2" />
                  Herramientas Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wrenchs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Biblioteca de Herramientas</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Recursos desarrollados por expertos para simplificar tu trabajo ESG
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <Card key={index} className={`relative ${tool.popular ? 'border-primary shadow-xl' : tool.premium ? 'border-gold shadow-lg' : 'border-gray-light'}`}>
                {tool.popular && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-white">
                    Más Popular
                  </Badge>
                )}
                {tool.premium && (
                  <Badge className="absolute -top-3 right-6 bg-gold text-white">
                    Premium
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <tool.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-navy">{tool.name}</CardTitle>
                        <Badge className="mt-1 text-xs" variant="outline">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-navy">{tool.price}</div>
                      <div className="text-xs text-gray-text">{tool.type}</div>
                    </div>
                  </div>
                  <CardDescription className="mt-3">{tool.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 text-primary mr-1" />
                        <span className="text-gray-text">{tool.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-gray-text">{tool.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-3">Características:</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-light">
                    <p className="text-xs text-gray-text mb-4">
                      <strong>Requisitos:</strong> {tool.requirements}
                    </p>
                    <Link to="/diagnostico-esg" className="w-full">
                      <Button 
                        className="w-full" 
                        variant={tool.premium ? "cta" : "outline"}
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {tool.premium ? "Comprar y Descargar" : "Descargar Gratis"}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Categorías</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Encuentra herramientas específicas para cada área de tu estrategia ESG
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="text-center border-gray-light hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-2">{category.name}</h3>
                  <Badge className={`${category.color} text-sm`}>
                    {category.count} herramientas
                  </Badge>
                  <Link to="/diagnostico-esg" className="w-full">
                    <Button variant="ghost" size="sm" className="mt-4 w-full">
                      Ver Herramientas
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">¿Por Qué Usar Nuestras Herramientas?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-text text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Stats */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold text-navy mb-8">
                  Herramientas Utilizadas por Miles
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                    <div className="text-gray-text">Descargas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy mb-2">2,500+</div>
                    <div className="text-gray-text">Empresas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                    <div className="text-gray-text">Calificación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy mb-2">25+</div>
                    <div className="text-gray-text">Herramientas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Wrenchs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-navy mb-6">
              ¿Necesitas una Herramienta Personalizada?
            </h2>
            <p className="text-xl text-gray-text mb-8">
              Desarrollamos herramientas específicas para las necesidades únicas de tu empresa
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-gray-light">
                <CardContent className="p-6 text-center">
                  <Wrench className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Análisis de Necesidades</h3>
                  <p className="text-gray-text text-sm">Evaluamos tus requerimientos específicos</p>
                </CardContent>
              </Card>
              <Card className="border-gray-light">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Desarrollo Colaborativo</h3>
                  <p className="text-gray-text text-sm">Trabajamos contigo en cada etapa</p>
                </CardContent>
              </Card>
              <Card className="border-gray-light">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Entrega y Soporte</h3>
                  <p className="text-gray-text text-sm">Incluye capacitación y mantenimiento</p>
                </CardContent>
              </Card>
            </div>
            <Link to="/diagnostico-esg">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Wrench className="h-5 w-5 mr-2" />
                Solicitar Herramienta Personalizada
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Acelera tu Implementación ESG Hoy
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Descarga nuestras herramientas y comienza a ver resultados inmediatamente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Download className="h-5 w-5 mr-2" />
                  Descargar Herramientas Gratuitas
                </Button>
              </Link>
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                  <Wrench className="h-5 w-5 mr-2" />
                  Consultar Herramientas Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Herramientas;
