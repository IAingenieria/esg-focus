import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Send, User } from "lucide-react";

const Contacto = () => {
  const contactMethods = [
    {
      method: "WhatsApp Business",
      value: "+52 818 029 0061",
      description: "Respuesta inmediata en horario laboral",
      icon: MessageCircle,
      primary: true,
      available: "Lun-Vie 8:00-18:00"
    },
    {
      method: "Teléfono Directo",
      value: "+52 81 8029 0061",
      description: "Llamadas directas para consultas urgentes",
      icon: Phone,
      available: "Lun-Vie 9:00-17:00"
    },
    {
      method: "Email Corporativo",
      value: "contacto@focusesgpros.com",
      description: "Para consultas detalladas y propuestas",
      icon: Mail,
      available: "Respuesta en 24 hrs"
    },
    {
      method: "Oficinas Monterrey",
      value: "Av. Constitución 1234, Col. Centro",
      description: "Citas presenciales con cita previa",
      icon: MapPin,
      available: "Lun-Vie 9:00-17:00"
    }
  ];

  const team = [
    {
      name: "Dr. María González",
      position: "Directora General",
      specialization: "Estrategia ESG y Compliance",
      email: "maria.gonzalez@focusesgpros.com",
      phone: "+52 818 029 0062"
    },
    {
      name: "Ing. Carlos Ruiz",
      position: "Director de Consultoría",
      specialization: "Implementación y Auditorías",
      email: "carlos.ruiz@focusesgpros.com",
      phone: "+52 818 029 0063"
    },
    {
      name: "Lic. Ana Martínez",
      position: "Directora de Coaching",
      specialization: "Desarrollo Organizacional",
      email: "ana.martinez@focusesgpros.com",
      phone: "+52 818 029 0064"
    }
  ];

  const offices = [
    {
      city: "Monterrey (Sede Principal)",
      address: "Av. Constitución 1234, Col. Centro, 64000 Monterrey, N.L.",
      phone: "+52 81 8029 0061",
      hours: "Lun-Vie: 9:00-17:00, Sáb: 9:00-13:00"
    },
    {
      city: "Ciudad de México",
      address: "Av. Reforma 456, Col. Juárez, 06600 CDMX",
      phone: "+52 55 5555 0061",
      hours: "Lun-Vie: 9:00-17:00"
    },
    {
      city: "Guadalajara",
      address: "Av. Chapultepec 789, Col. Americana, 44160 Guadalajara, Jal.",
      phone: "+52 33 3333 0061",
      hours: "Lun-Vie: 9:00-17:00"
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
              <Phone className="h-4 w-4 mr-2" />
              Estamos Aquí para Ayudarte
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Contacto</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Conecta con nuestros expertos y comienza tu transformación ESG hoy mismo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-navy hover:bg-gray-50">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Reunión
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Múltiples Formas de Contactarnos</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Elige el método que más te convenga para iniciar la conversación
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((contact, index) => (
              <Card key={index} className={`text-center ${contact.primary ? 'border-primary shadow-xl scale-105' : 'border-gray-light'} hover:shadow-lg transition-all duration-300`}>
                {contact.primary && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Recomendado
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${contact.primary ? 'bg-primary' : 'bg-primary/10'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <contact.icon className={`h-8 w-8 ${contact.primary ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{contact.method}</h3>
                  <p className="text-primary font-medium mb-3">{contact.value}</p>
                  <p className="text-gray-text text-sm mb-4">{contact.description}</p>
                  <div className="flex items-center justify-center text-xs text-gray-text">
                    <Clock className="h-3 w-3 mr-1" />
                    {contact.available}
                  </div>
                  <Button 
                    variant={contact.primary ? "cta" : "outline"} 
                    size="sm" 
                    className="w-full mt-4"
                  >
                    Contactar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy mb-6">Envíanos un Mensaje</h2>
              <p className="text-xl text-gray-text">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
              </p>
            </div>
            
            <Card className="border-gray-light shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Email Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="tu.email@empresa.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+52 81 1234 5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Servicio de Interés
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Selecciona un servicio</option>
                      <option value="consultoria-esg">Consultoría ESG</option>
                      <option value="coaching-ejecutivo">Coaching Ejecutivo</option>
                      <option value="servicios-empresariales">Servicios Empresariales</option>
                      <option value="coaching-familiar">Coaching Familiar</option>
                      <option value="certificaciones">Certificaciones</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Cuéntanos sobre tu proyecto o necesidades específicas..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-text">
                      Acepto la <a href="#" className="text-primary hover:underline">política de privacidad</a> y el tratamiento de mis datos personales
                    </label>
                  </div>
                  
                  <Button size="lg" variant="cta" className="w-full text-lg py-4">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestro Equipo Directivo</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Contacta directamente con nuestros líderes especializados
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-gray-light hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-gray-text text-sm mb-6">{member.specialization}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 text-primary mr-2" />
                      <a href={`mailto:${member.email}`} className="text-gray-text hover:text-primary">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="h-4 w-4 text-primary mr-2" />
                      <a href={`tel:${member.phone}`} className="text-gray-text hover:text-primary">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestras Oficinas</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Presencia nacional para estar cerca de nuestros clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="border-primary/20 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-lg font-bold text-navy">{office.city}</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-text">{office.address}</p>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-primary mr-2" />
                      <span className="text-gray-text">{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span className="text-gray-text">{office.hours}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-6">
                    Ver en Mapa
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Preguntas Frecuentes</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "¿Cuál es el tiempo de respuesta típico?",
                answer: "Por WhatsApp respondemos en menos de 2 horas en horario laboral. Por email, en menos de 24 horas."
              },
              {
                question: "¿Ofrecen consultas gratuitas?",
                answer: "Sí, ofrecemos una consulta inicial de 30 minutos sin costo para evaluar tus necesidades."
              },
              {
                question: "¿Trabajan con empresas de todos los tamaños?",
                answer: "Absolutamente. Tenemos soluciones específicas para PyMEs, medianas empresas y corporativos."
              },
              {
                question: "¿Qué información necesitan para una propuesta?",
                answer: "Necesitamos conocer tu industria, tamaño de empresa, objetivos ESG y timeline deseado."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-gray-light">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-navy mb-2">{faq.question}</h3>
                  <p className="text-gray-text">{faq.answer}</p>
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
              ¿Listo para Transformar tu Empresa?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Contacta con nosotros hoy y comienza tu viaje hacia la sostenibilidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp: +52 818 029 0061
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-navy hover:bg-gray-50">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
