import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Calendar, Users, Clock, Play, Download, Star, ArrowRight } from "lucide-react";

const Webinars = () => {
  const upcomingWebinars = [
    {
      title: "NIS 2025: Implementación Práctica en 90 Días",
      description: "Roadmap completo para cumplir con las nuevas regulaciones mexicanas antes del deadline",
      date: "28 Enero 2025",
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
      date: "5 Febrero 2025",
      time: "2:00 PM - 3:30 PM",
      duration: "90 minutos",
      instructor: "Ing. Carlos Ruiz",
      level: "Avanzado",
      attendees: 189,
      price: "Gratuito",
      topics: ["KPIs financieros", "Metodologías de cálculo", "Reportes ejecutivos", "Casos de éxito"]
    },
    {
      title: "ESG para PyMEs: Primeros Pasos",
      description: "Estrategias accesibles para pequeñas y medianas empresas que inician en ESG",
      date: "12 Febrero 2025",
      time: "11:00 AM - 12:00 PM",
      duration: "60 minutos",
      instructor: "Lic. Ana Martínez",
      level: "Básico",
      attendees: 156,
      price: "Gratuito",
      topics: ["Diagnóstico inicial", "Quick wins", "Presupuesto limitado", "Recursos gratuitos"]
    }
  ];

  const pastWebinars = [
    {
      title: "Auditorías ESG: Preparación y Mejores Prácticas",
      description: "Todo lo que necesitas saber para superar una auditoría de sostenibilidad",
      date: "15 Diciembre 2024",
      instructor: "Ing. Patricia Morales",
      duration: "75 minutos",
      views: 1250,
      rating: 4.8,
      downloadable: true,
      premium: false
    },
    {
      title: "Certificación GRI: Proceso Completo",
      description: "Guía paso a paso para obtener la certificación internacional GRI",
      date: "8 Diciembre 2024",
      instructor: "Dr. Luis Hernández",
      duration: "90 minutos",
      views: 980,
      rating: 4.9,
      downloadable: true,
      premium: true
    },
    {
      title: "Reportes ESG Corporativos: Estándares Internacionales",
      description: "Cómo crear reportes que cumplan con los estándares globales",
      date: "1 Diciembre 2024",
      instructor: "Mtra. Sofia López",
      duration: "85 minutos",
      views: 1100,
      rating: 4.7,
      downloadable: true,
      premium: false
    },
    {
      title: "Liderazgo Sostenible en Tiempos de Crisis",
      description: "Estrategias para mantener el compromiso ESG durante desafíos económicos",
      date: "24 Noviembre 2024",
      instructor: "Dr. Roberto Díaz",
      duration: "70 minutos",
      views: 850,
      rating: 4.6,
      downloadable: true,
      premium: true
    }
  ];

  const instructors = [
    {
      name: "Dr. María González",
      title: "Directora de Compliance ESG",
      expertise: "Regulaciones, NIS 2025, Auditorías",
      experience: "15+ años",
      webinars: 28
    },
    {
      name: "Ing. Carlos Ruiz",
      title: "Especialista en Finanzas Sostenibles",
      expertise: "ROI ESG, Métricas Financieras",
      experience: "12+ años",
      webinars: 22
    },
    {
      name: "Lic. Ana Martínez",
      title: "Consultora Senior ESG",
      expertise: "PyMEs, Implementación Práctica",
      experience: "10+ años",
      webinars: 18
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Ver Próximos Webinars
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-navy hover:bg-gray-50">
                <Play className="h-5 w-5 mr-2" />
                Webinars Grabados
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
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
                            <Users className="h-4 w-4 text-primary mr-2" />
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
                            <Users className="h-8 w-8 text-primary" />
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

      {/* Past Webinars */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Webinars Grabados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Accede a nuestra biblioteca de contenido especializado disponible 24/7
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pastWebinars.map((webinar, index) => (
              <Card key={index} className="border-gray-light hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy mb-2">{webinar.title}</h3>
                      <p className="text-gray-text text-sm mb-3">{webinar.description}</p>
                    </div>
                    {webinar.premium && (
                      <Badge className="bg-gold text-white ml-2">Premium</Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span>{webinar.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Play className="h-4 w-4 text-primary mr-2" />
                      <span>{webinar.views.toLocaleString()} vistas</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>{webinar.rating}/5</span>
                    </div>
                  </div>

                  <div className="mb-4 pb-4 border-b border-gray-light">
                    <p className="text-sm text-gray-text">
                      <strong>Instructor:</strong> {webinar.instructor}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant={webinar.premium ? "cta" : "outline"} 
                      size="sm" 
                      className="flex-1"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {webinar.premium ? "Ver (Premium)" : "Ver Gratis"}
                    </Button>
                    {webinar.downloadable && (
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestros Expertos</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Aprende de profesionales con experiencia comprobada en el sector
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center border-gray-light">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{instructor.name}</h3>
                  <p className="text-primary font-medium mb-4">{instructor.title}</p>
                  <div className="space-y-2 text-sm text-gray-text mb-6">
                    <p><strong>Especialidad:</strong> {instructor.expertise}</p>
                    <p><strong>Experiencia:</strong> {instructor.experience}</p>
                    <p><strong>Webinars:</strong> {instructor.webinars} realizados</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Perfil Completo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">¿Por Qué Nuestros Webinars?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Contenido Actualizado",
                description: "Información al día con las últimas regulaciones y tendencias",
                icon: Calendar
              },
              {
                title: "Expertos Certificados",
                description: "Instructores con experiencia real en implementación ESG",
                icon: Star
              },
              {
                title: "Interacción en Vivo",
                description: "Q&A en tiempo real para resolver tus dudas específicas",
                icon: Users
              },
              {
                title: "Acceso Permanente",
                description: "Grabaciones disponibles para revisar cuando necesites",
                icon: Play
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-primary/20 bg-white">
                <CardContent className="p-6">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-gray-text text-sm">{benefit.description}</p>
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
              ¿Listo para Acelerar tu Conocimiento ESG?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Únete a miles de profesionales que ya están transformando sus organizaciones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Registrarse Ahora
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Video className="h-5 w-5 mr-2" />
                Solicitar Webinar Privado
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Webinars;
