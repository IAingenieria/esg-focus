import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Send, User } from "lucide-react";
import { Link } from "react-router-dom";

const Contacto = () => {

  return (
    <>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Contacto</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Conecta con nuestros expertos y comienza tu transformación ESG hoy mismo
            </p>
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
                      Acepto la <Link to="/politicas" className="text-primary hover:underline">política de privacidad</Link> y el tratamiento de mis datos personales
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

    </>
  );
};

export default Contacto;
