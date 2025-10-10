import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { HelpCircle, Search, MessageCircle, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
        },
        {
          question: "¿Cuánto tiempo toma implementar una estrategia ESG?",
          answer: "Depende del alcance y complejidad. Una implementación básica toma 3-4 meses, mientras que una transformación completa puede requerir 6-12 meses. Ofrecemos planes acelerados de 90 días para necesidades urgentes como NIS 2024."
        },
        {
          question: "¿Ofrecen servicios en toda la República Mexicana?",
          answer: "Sí, tenemos oficinas en Monterrey, CDMX y Guadalajara, pero atendemos todo México. Ofrecemos servicios presenciales, virtuales e híbridos para adaptarnos a las necesidades geográficas de nuestros clientes."
        }
      ]
    },
    {
      category: "Consultoría ESG",
      questions: [
        {
          question: "¿Qué incluye el servicio de Cumplimiento NIS 2024?",
          answer: "Incluye diagnóstico completo, diseño de estrategia, implementación de procesos, capacitación del equipo, documentación requerida y acompañamiento hasta la certificación. Garantizamos 100% de cumplimiento o devolvemos la inversión."
        },
        {
          question: "¿Cómo funciona la Certificación GRI?",
          answer: "Es un proceso de 6-8 semanas que incluye formación teórica, desarrollo de proyecto práctico, mentoría personalizada y examen final. Al completarlo, obtienes certificación oficial GRI reconocida internacionalmente."
        },
        {
          question: "¿Qué diferencia una Auditoría de Sostenibilidad de una auditoría tradicional?",
          answer: "Una auditoría ESG evalúa impacto ambiental, social y de gobernanza, no solo aspectos financieros. Incluye análisis de huella de carbono, prácticas laborales, ética empresarial, cadena de suministro y stakeholders."
        },
        {
          question: "¿Los reportes ESG son obligatorios?",
          answer: "En México, son obligatorios para empresas públicas y ciertas industrias reguladas. Sin embargo, son altamente recomendables para todas las empresas que buscan inversión, contratos con grandes corporativos o expansión internacional."
        }
      ]
    },
    {
      category: "Coaching y Desarrollo",
      questions: [
        {
          question: "¿Qué diferencia el coaching ejecutivo tradicional del coaching ESG?",
          answer: "El coaching ESG integra principios de sostenibilidad en el desarrollo de liderazgo. Desarrolla competencias para liderar transformaciones sostenibles, tomar decisiones considerando impacto ESG y comunicar propósito organizacional."
        },
        {
          question: "¿El coaching familiar realmente funciona para adolescentes?",
          answer: "Sí, tenemos 85% de éxito en casos con adolescentes. Utilizamos metodologías específicas para esta edad, incluyendo mediación familiar, establecimiento de límites saludables y construcción de comunicación efectiva."
        },
        {
          question: "¿Cómo funciona la Orientación Vocacional?",
          answer: "Es un proceso de 5 fases: autoconocimiento, exploración de opciones, análisis comparativo, diseño de plan y seguimiento. Incluye tests psicométricos, entrevistas con profesionales y construcción de roadmap personalizado."
        },
        {
          question: "¿Ofrecen coaching grupal para equipos?",
          answer: "Sí, ofrecemos coaching de equipos gerenciales con modalidades presencial, virtual e intensiva. Incluye diagnóstico de dinámicas, desarrollo de habilidades colaborativas y seguimiento de resultados."
        }
      ]
    },
    {
      category: "Precios y Pagos",
      questions: [
        {
          question: "¿Cómo funcionan los precios por tamaño de empresa?",
          answer: "PyMEs (1-50 empleados): desde $25,000. Medianas (51-250): desde $75,000. Grandes (250+): desde $150,000. Los precios varían según complejidad, alcance y duración del proyecto."
        },
        {
          question: "¿Ofrecen planes de pago flexibles?",
          answer: "Sí, ofrecemos pagos en 3, 6 o 12 meses sin intereses. También aceptamos pagos contra entregables y esquemas de pago por resultados en proyectos específicos."
        },
        {
          question: "¿Hay descuentos por múltiples servicios?",
          answer: "Sí, ofrecemos paquetes integrados con hasta 25% de descuento. Por ejemplo, Consultoría ESG + Coaching Ejecutivo, o implementación completa con certificaciones incluidas."
        },
        {
          question: "¿Qué incluye la garantía de resultados?",
          answer: "Garantizamos cumplimiento de objetivos específicos acordados. Si no se alcanzan por causas atribuibles a nosotros, reembolsamos hasta 100% de la inversión o continuamos sin costo hasta lograr resultados."
        }
      ]
    },
    {
      category: "Proceso y Metodología",
      questions: [
        {
          question: "¿Cómo inicia el proceso de trabajo?",
          answer: "Iniciamos con consulta gratuita de 30 minutos, seguida de diagnóstico detallado, propuesta personalizada, firma de contrato y kick-off del proyecto. Todo el proceso está estructurado y documentado."
        },
        {
          question: "¿Qué metodologías utilizan?",
          answer: "Utilizamos metodologías probadas como GRI Standards, ISO 14001, B-Corp, además de frameworks propios desarrollados en 15+ años de experiencia. Todas están alineadas con estándares internacionales."
        },
        {
          question: "¿Cómo miden el éxito de los proyectos?",
          answer: "Establecemos KPIs específicos al inicio: métricas ESG, ROI, cumplimiento regulatorio, satisfacción de stakeholders. Realizamos mediciones mensuales y reportes ejecutivos trimestrales."
        },
        {
          question: "¿Ofrecen seguimiento post-implementación?",
          answer: "Sí, incluimos 3-6 meses de seguimiento según el proyecto. Esto incluye monitoreo de KPIs, ajustes necesarios, capacitación adicional y soporte técnico continuo."
        }
      ]
    },
    {
      category: "Recursos y Herramientas",
      questions: [
        {
          question: "¿Las herramientas descargables son realmente gratuitas?",
          answer: "Sí, ofrecemos herramientas básicas completamente gratuitas como calculadoras de huella de carbono, checklists NIS 2024 y templates de reportes. Las herramientas premium tienen costo adicional."
        },
        {
          question: "¿Los webinars quedan grabados?",
          answer: "Sí, todos los webinars se graban y están disponibles 24/7. Los gratuitos permanecen accesibles indefinidamente, los premium requieren suscripción o compra individual."
        },
        {
          question: "¿Puedo solicitar webinars privados para mi empresa?",
          answer: "Sí, ofrecemos webinars corporativos personalizados desde $15,000 MXN. Incluyen contenido específico para tu industria, Q&A exclusivo y materiales complementarios."
        },
        {
          question: "¿Cómo accedo a las certificaciones?",
          answer: "Las certificaciones internacionales requieren inscripción previa y cumplir requisitos específicos. Las certificaciones Focus ESG Pros están disponibles todo el año con inicio mensual."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              <HelpCircle className="h-4 w-4 mr-2" />
              Centro de Ayuda
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Preguntas <span className="text-primary">Frecuentes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar en preguntas frecuentes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-navy text-lg"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-navy hover:bg-gray-50">
                <Phone className="h-5 w-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <Card className="text-center border-gray-light">
                <CardContent className="p-12">
                  <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-2">No se encontraron resultados</h3>
                  <p className="text-gray-text mb-6">
                    No encontramos preguntas que coincidan con tu búsqueda. Intenta con otros términos.
                  </p>
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    Ver todas las preguntas
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-12">
                {filteredFAQs.map((category, categoryIndex) => (
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
            )}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold text-navy mb-8">
                  Estadísticas de Soporte
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{"< 2hrs"}</div>
                    <div className="text-gray-text">Tiempo de respuesta WhatsApp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy mb-2">{"< 24hrs"}</div>
                    <div className="text-gray-text">Respuesta por email</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <div className="text-gray-text">Problemas resueltos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy mb-2">4.9/5</div>
                    <div className="text-gray-text">Satisfacción soporte</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">¿No Encontraste tu Respuesta?</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Nuestro equipo de soporte está listo para ayudarte con cualquier duda específica
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">WhatsApp Business</h3>
                <p className="text-gray-text mb-4">Respuesta inmediata en horario laboral</p>
                <p className="text-primary font-medium mb-4">+52 818 029 0061</p>
                <Button variant="cta" size="sm" className="w-full">
                  Chatear Ahora
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-gray-light">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">Llamada Directa</h3>
                <p className="text-gray-text mb-4">Para consultas urgentes y complejas</p>
                <p className="text-primary font-medium mb-4">+52 81 8029 0061</p>
                <Button variant="outline" size="sm" className="w-full">
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-gray-light">
              <CardContent className="p-8">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">Soporte Técnico</h3>
                <p className="text-gray-text mb-4">Para dudas sobre herramientas y recursos</p>
                <p className="text-primary font-medium mb-4">soporte@esgconsultores.com.mx</p>
                <Button variant="outline" size="sm" className="w-full">
                  Enviar Email
                </Button>
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
              ¿Listo para Comenzar tu Proyecto ESG?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Nuestro equipo está disponible para resolver todas tus dudas y guiarte en el proceso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Consulta Gratuita
                </Button>
              </Link>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp: +52 818 029 0061
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
