import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, User, Clock, ArrowRight, Search, Filter, Tag, Video, Play, Download, Star, Wrench, Calculator, FileText, BarChart, CheckCircle, Trophy, TrendingUp, Building, Award, Globe, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Recursos = () => {

  // Data from BlogESG.tsx
  const featuredPosts = [
    {
      title: "Guía Completa NIS 2024: Todo lo que Necesitas Saber",
      excerpt: "Análisis detallado de las nuevas regulaciones mexicanas y cómo preparar tu empresa para el cumplimiento.",
      author: "Dr. María González",
      date: "15 Dic 2024",
      readTime: "8 min",
      category: "Regulaciones",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      title: "ROI del ESG: Cómo Medir el Impacto Financiero",
      excerpt: "Metodologías prácticas para calcular el retorno de inversión de tus iniciativas de sostenibilidad.",
      author: "Ing. Carlos Ruiz",
      date: "12 Dic 2024",
      readTime: "6 min",
      category: "Finanzas",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Casos de Éxito: Empresas Mexicanas Líderes en ESG",
      excerpt: "Historias inspiradoras de compañías que han transformado su negocio con estrategias ESG efectivas.",
      author: "Lic. Ana Martínez",
      date: "10 Dic 2024",
      readTime: "10 min",
      category: "Casos de Éxito",
      image: "/api/placeholder/400/250"
    }
  ];

  const recentPosts = [
    {
      title: "Tendencias ESG 2024: Lo que Viene",
      excerpt: "Predicciones y tendencias clave que marcarán el futuro de la sostenibilidad empresarial.",
      author: "Dr. Luis Hernández",
      date: "8 Dic 2024",
      readTime: "5 min",
      category: "Tendencias"
    },
    {
      title: "Implementación de Reportes GRI: Paso a Paso",
      excerpt: "Guía práctica para implementar el estándar GRI en tu organización.",
      author: "Mtra. Sofia López",
      date: "5 Dic 2024",
      readTime: "7 min",
      category: "Reportes"
    }
  ];

  // Data from Webinars.tsx
  const upcomingWebinars = [
    {
      title: "NIS 2024: Implementación Práctica en 90 Días",
      description: "Roadmap completo para cumplir con las nuevas regulaciones mexicanas antes del deadline",
      date: "28 Enero 2024",
      time: "10:00 AM - 11:30 AM",
      duration: "90 minutos",
      instructor: "Dr. María González",
      level: "Intermedio",
      attendees: 245,
      price: "Gratuito",
      topics: ["Marco regulatorio", "Plan de implementación", "Casos prácticos", "Q&A en vivo"],
      featured: true
    },
    {
      title: "ROI del ESG: Métricas que Importan",
      description: "Cómo medir y comunicar el impacto financiero de tus iniciativas de sostenibilidad",
      date: "5 Febrero 2024",
      time: "2:00 PM - 3:30 PM",
      duration: "90 minutos",
      instructor: "Ing. Carlos Ruiz",
      level: "Avanzado",
      attendees: 189,
      price: "Gratuito",
      topics: ["KPIs financieros", "Metodologías de cálculo", "Reportes ejecutivos", "Casos de éxito"]
    }
  ];

  // Data from Herramientas.tsx
  const herramientas = [
    {
      name: "Calculadora de Huella de Carbono",
      description: "Herramienta completa para medir y monitorear las emisiones de CO2 de tu empresa",
      category: "Medición",
      type: "Excel + PDF",
      price: "Gratuita",
      downloads: 2450,
      rating: 4.8,
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
      icon: BarChart,
      premium: true
    }
  ];

  // Data from CasosExito.tsx
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
    }
  ];

  // Data from Certificaciones.tsx
  const certifications = [
    {
      name: "Certificación GRI Standards",
      organization: "Global Reporting Initiative",
      level: "Internacional",
      duration: "6-8 semanas",
      price: "85,000",
      featured: true
    },
    {
      name: "Certificación ISO 14001",
      organization: "International Organization for Standardization",
      level: "Internacional",
      duration: "8-10 semanas",
      price: "95,000"
    },
    {
      name: "Certificación B-Corp",
      organization: "B Lab",
      level: "Internacional",
      duration: "12-16 semanas",
      price: "120,000"
    }
  ];

  // Data from FAQ.tsx
  const faqCategories = [
    {
      category: "Servicios Generales",
      questions: [
        {
          question: "¿Qué es ESG y por qué es importante para mi empresa?",
          answer: "ESG significa Environmental, Social y Governance (Ambiental, Social y Gobernanza). Es un marco que evalúa el impacto y las prácticas sostenibles de una empresa. Es importante porque mejora la reputación, reduce riesgos, atrae inversión responsable, cumple regulaciones y genera valor a largo plazo."
        },
        {
          question: "¿Trabajan con empresas de todos los tamaños?",
          answer: "Sí, tenemos soluciones específicas para PyMEs (desde $25,000 MXN), medianas empresas (desde $75,000 MXN) y grandes corporativos (desde $150,000 MXN). Adaptamos nuestros servicios al tamaño, presupuesto y necesidades específicas de cada organización."
        }
      ]
    },
    {
      category: "Consultoría ESG",
      questions: [
        {
          question: "¿Qué incluye el servicio de Cumplimiento NIS 2024?",
          answer: "Incluye diagnóstico completo, diseño de estrategia, implementación de procesos, capacitación del equipo, documentación requerida y acompañamiento hasta la certificación. Garantizamos 100% de cumplimiento o devolvemos la inversión."
        }
      ]
    }
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* Blog Section */}
      <section id="blog-esg" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <BookOpen className="h-4 w-4 mr-2" />
              Conocimiento ESG
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog <span className="text-primary">ESG</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Insights, tendencias y guías prácticas para liderar la sostenibilidad empresarial
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Artículos Recientes</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Las últimas publicaciones sobre ESG, sostenibilidad y compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="border-gray-light hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/30 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-text mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-text mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                      <Clock className="h-3 w-3 ml-2" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Leer Más
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section id="webinars" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Video className="h-4 w-4 mr-2" />
              Formación Online
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Webinars <span className="text-primary">ESG</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Formación especializada con expertos líderes en sostenibilidad empresarial
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Próximos Webinars</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Únete a nuestras sesiones en vivo y aprende de los mejores expertos
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className={`${webinar.featured ? 'border-primary shadow-xl' : 'border-gray-light'}`}>
                {webinar.featured && (
                  <Badge className="absolute -top-3 left-8 bg-primary text-white">
                    Destacado
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-navy mb-2">{webinar.title}</h3>
                          <p className="text-gray-text mb-4">{webinar.description}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 ml-4">
                          {webinar.price}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 text-primary mr-2" />
                            <span className="font-medium">{webinar.date}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 text-primary mr-2" />
                            <span>{webinar.time} ({webinar.duration})</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <User className="h-4 w-4 text-primary mr-2" />
                            <span>{webinar.attendees} registrados</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Badge variant="outline" className="text-xs">
                              Nivel {webinar.level}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-navy mb-3">Temas a cubrir:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {webinar.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <ArrowRight className="h-3 w-3 text-primary mr-2" />
                              <span className="text-gray-text">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Card className="border-gray-light bg-gray-50">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="h-8 w-8 text-primary" />
                          </div>
                          <h4 className="font-semibold text-navy mb-2">Instructor</h4>
                          <p className="text-sm font-medium">{webinar.instructor}</p>
                        </CardContent>
                      </Card>

                      <Button 
                        size="lg" 
                        variant={webinar.featured ? "cta" : "outline"} 
                        className="w-full"
                      >
                        <Calendar className="h-5 w-5 mr-2" />
                        Registrarse Gratis
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas Section */}
      <section id="herramientas" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Wrench className="h-4 w-4 mr-2" />
              Recursos Prácticos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Herramientas <span className="text-primary">ESG</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Recursos descargables para acelerar tu implementación de sostenibilidad
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Biblioteca de Herramientas</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Recursos desarrollados por expertos para simplificar tu trabajo ESG
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {herramientas.map((tool, index) => (
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
                  <Button 
                    className="w-full" 
                    variant={tool.premium ? "cta" : "outline"}
                    size="sm"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {tool.premium ? "Comprar y Descargar" : "Descargar Gratis"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito Section */}
      <section id="casos-exito" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
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
          </div>
        </div>
      </section>
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

      {/* Certificaciones Section */}
      <section id="certificaciones" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Award className="h-4 w-4 mr-2" />
              Certificaciones Profesionales
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Certificaciones <span className="text-primary">ESG</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Valida tus competencias con certificaciones reconocidas internacionalmente
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Certificaciones Internacionales</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Obtén certificaciones reconocidas mundialmente con nuestro acompañamiento experto
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {certifications.map((cert, index) => (
              <Card key={index} className={`${cert.featured ? 'border-primary shadow-xl' : 'border-gray-light'}`}>
                {cert.featured && (
                  <Badge className="absolute -top-3 left-8 bg-primary text-white">
                    Más Solicitada
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-navy mb-2">{cert.name}</h3>
                          <p className="text-primary font-medium mb-2">{cert.organization}</p>
                        </div>
                        <div className="text-right ml-4">
                          <Badge className="mb-2">{cert.level}</Badge>
                          <div className="text-2xl font-bold text-navy">${cert.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-text">MXN</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Button 
                        size="lg" 
                        variant={cert.featured ? "cta" : "outline"} 
                        className="w-full"
                      >
                        <Award className="h-5 w-5 mr-2" />
                        Iniciar Certificación
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <HelpCircle className="h-4 w-4 mr-2" />
              Centro de Ayuda
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Preguntas <span className="text-primary">Frecuentes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-3xl font-bold text-navy mb-8 text-center">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <Card key={questionIndex} className="border-gray-light hover:shadow-md transition-all duration-300">
                          <CardHeader 
                            className="cursor-pointer"
                            onClick={() => toggleItem(globalIndex)}
                          >
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-navy pr-4">
                                {faq.question}
                              </CardTitle>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                              )}
                            </div>
                          </CardHeader>
                          {isOpen && (
                            <CardContent className="pt-0">
                              <div className="border-t border-gray-light pt-4">
                                <p className="text-gray-text leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </CardContent>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recursos;
