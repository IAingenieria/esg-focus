import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Mail, Phone, Linkedin, Calendar, Star, CheckCircle } from "lucide-react";

const Equipo = () => {
  const leadership = [
    {
      name: "Dr. María González Herrera",
      position: "CEO & Fundadora",
      specialization: "Estrategia ESG y Compliance Regulatorio",
      experience: "15+ años",
      education: "PhD en Sostenibilidad Empresarial, MBA en Gestión Ambiental",
      certifications: ["GRI Certified", "ISO 14001 Lead Auditor", "B-Corp Consultant"],
      achievements: [
        "Implementó ESG en 50+ empresas Fortune 500",
        "Autora de 3 libros sobre sostenibilidad",
        "Conferencista internacional reconocida",
        "Miembro del Consejo Nacional de ESG México"
      ],
      email: "maria.gonzalez@focusesgpros.com",
      phone: "+52 818 029 0062",
      linkedin: "maria-gonzalez-esg"
    },
    {
      name: "Ing. Carlos Ruiz Mendoza",
      position: "Director de Consultoría",
      specialization: "Implementación ESG y Auditorías de Sostenibilidad",
      experience: "12+ años",
      education: "Ing. Industrial, Master en Gestión Ambiental",
      certifications: ["ISO 14001", "OHSAS 18001", "Carbon Footprint Specialist"],
      achievements: [
        "Dirigió 200+ proyectos de implementación ESG",
        "Especialista en NIS 2025 y regulaciones mexicanas",
        "Redujo emisiones en 35% promedio en clientes",
        "Certificó 80+ empresas en estándares internacionales"
      ],
      email: "carlos.ruiz@focusesgpros.com",
      phone: "+52 818 029 0063",
      linkedin: "carlos-ruiz-esg"
    },
    {
      name: "Lic. Ana Martínez López",
      position: "Directora de Coaching y Desarrollo",
      specialization: "Coaching Ejecutivo y Transformación Organizacional",
      experience: "10+ años",
      education: "Lic. Psicología Organizacional, Certificación ICF",
      certifications: ["ICF Professional Coach", "Leadership Coach", "Change Management"],
      achievements: [
        "Transformó cultura organizacional en 100+ empresas",
        "Desarrolló metodología propia de coaching ESG",
        "Formó 500+ líderes en sostenibilidad",
        "Reconocida como Top Coach México 2023"
      ],
      email: "ana.martinez@focusesgpros.com",
      phone: "+52 818 029 0064",
      linkedin: "ana-martinez-coach"
    }
  ];

  const consultants = [
    {
      name: "Dr. Luis Hernández",
      position: "Consultor Senior ESG",
      specialization: "Reportes GRI y Finanzas Sostenibles",
      experience: "8+ años",
      projects: 45
    },
    {
      name: "Mtra. Sofia López",
      position: "Consultora de Auditorías",
      specialization: "Auditorías Ambientales y Compliance",
      experience: "7+ años",
      projects: 38
    },
    {
      name: "Ing. Patricia Morales",
      position: "Especialista en Implementación",
      specialization: "Sistemas de Gestión y Procesos",
      experience: "6+ años",
      projects: 42
    },
    {
      name: "Lic. Roberto Díaz",
      position: "Coach Ejecutivo Senior",
      specialization: "Liderazgo y Equipos Gerenciales",
      experience: "9+ años",
      projects: 55
    }
  ];

  const stats = [
    {
      value: "15+",
      label: "Años de Experiencia Promedio",
      description: "Equipo con amplia trayectoria"
    },
    {
      value: "500+",
      label: "Proyectos Completados",
      description: "Experiencia comprobada"
    },
    {
      value: "25+",
      label: "Certificaciones Internacionales",
      description: "Equipo altamente calificado"
    },
    {
      value: "98%",
      label: "Satisfacción del Cliente",
      description: "Excelencia en servicio"
    }
  ];

  const values = [
    {
      value: "Excelencia",
      description: "Buscamos la perfección en cada proyecto y superamos las expectativas",
      icon: Star
    },
    {
      value: "Integridad",
      description: "Actuamos con transparencia y ética en todas nuestras relaciones",
      icon: CheckCircle
    },
    {
      value: "Innovación",
      description: "Desarrollamos soluciones creativas para desafíos complejos",
      icon: Award
    },
    {
      value: "Colaboración",
      description: "Trabajamos como un equipo unido con nuestros clientes",
      icon: Users
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
              <Users className="h-4 w-4 mr-2" />
              Conoce a Nuestro Equipo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestro <span className="text-primary">Equipo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Expertos apasionados por transformar empresas hacia la sostenibilidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Conocer al Equipo
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-navy hover:bg-gray-50">
                <Mail className="h-5 w-5 mr-2" />
                Contactar Directamente
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Equipo Directivo</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Líderes con experiencia internacional y resultados comprobados
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-gray-light shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-navy mb-2">{leader.name}</h3>
                          <p className="text-primary font-medium text-lg mb-2">{leader.position}</p>
                          <p className="text-gray-text mb-4">{leader.specialization}</p>
                          <Badge variant="outline" className="text-primary border-primary">
                            {leader.experience} experiencia
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-navy mb-2">Formación Académica:</h4>
                          <p className="text-gray-text text-sm">{leader.education}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-navy mb-2">Certificaciones:</h4>
                          <div className="flex flex-wrap gap-2">
                            {leader.certifications.map((cert, idx) => (
                              <Badge key={idx} className="bg-primary/10 text-primary border-primary/30 text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-navy mb-2">Logros Destacados:</h4>
                          <ul className="space-y-1">
                            {leader.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-text">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Card className="border-gray-light bg-gray-50">
                        <CardContent className="p-6 text-center">
                          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="h-10 w-10 text-primary" />
                          </div>
                          <h4 className="font-semibold text-navy mb-4">Contacto Directo</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-center">
                              <Mail className="h-4 w-4 text-primary mr-2" />
                              <a href={`mailto:${leader.email}`} className="text-gray-text hover:text-primary">
                                Email
                              </a>
                            </div>
                            <div className="flex items-center justify-center">
                              <Phone className="h-4 w-4 text-primary mr-2" />
                              <a href={`tel:${leader.phone}`} className="text-gray-text hover:text-primary">
                                Teléfono
                              </a>
                            </div>
                            <div className="flex items-center justify-center">
                              <Linkedin className="h-4 w-4 text-primary mr-2" />
                              <a href={`https://linkedin.com/in/${leader.linkedin}`} className="text-gray-text hover:text-primary">
                                LinkedIn
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Button variant="outline" size="sm" className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        Agendar Reunión
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants Team */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Equipo de Consultores</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Especialistas dedicados con experiencia práctica en implementación
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {consultants.map((consultant, index) => (
              <Card key={index} className="text-center border-gray-light hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{consultant.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{consultant.position}</p>
                  <p className="text-gray-text text-xs mb-4">{consultant.specialization}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-text">Experiencia:</span>
                      <span className="font-medium text-navy">{consultant.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-text">Proyectos:</span>
                      <span className="font-medium text-primary">{consultant.projects}+</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Ver Perfil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestro Equipo en Números</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{stat.label}</h3>
                  <p className="text-gray-text text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y relaciones con clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-primary/20 bg-white">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-3">{value.value}</h3>
                  <p className="text-gray-text text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-navy mb-6">
              ¿Quieres Formar Parte del Equipo?
            </h2>
            <p className="text-xl text-gray-text mb-8">
              Buscamos profesionales apasionados por la sostenibilidad y el impacto positivo
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-gray-light">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Crecimiento Profesional</h3>
                  <p className="text-gray-text text-sm">Oportunidades de desarrollo y certificaciones</p>
                </CardContent>
              </Card>
              <Card className="border-gray-light">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Ambiente Colaborativo</h3>
                  <p className="text-gray-text text-sm">Equipo unido con cultura de apoyo mutuo</p>
                </CardContent>
              </Card>
              <Card className="border-gray-light">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Impacto Significativo</h3>
                  <p className="text-gray-text text-sm">Trabajo que genera cambio positivo real</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Mail className="h-5 w-5 mr-2" />
                Ver Vacantes Disponibles
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <Users className="h-5 w-5 mr-2" />
                Enviar CV Espontáneo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Trabajar con Nuestro Equipo?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Conecta con nuestros expertos y comienza tu transformación ESG
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipo;
