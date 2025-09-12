import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, Lock, Eye, Download, Calendar, CheckCircle } from "lucide-react";

const Politicas = () => {
  const policies = [
    {
      title: "Política de Privacidad",
      description: "Cómo recopilamos, utilizamos y protegemos tu información personal",
      lastUpdated: "Diciembre 2024",
      icon: Lock,
      sections: [
        "Información que recopilamos",
        "Uso de la información",
        "Compartir información",
        "Seguridad de datos",
        "Derechos del usuario",
        "Cookies y tecnologías similares"
      ]
    },
    {
      title: "Términos y Condiciones",
      description: "Condiciones de uso de nuestros servicios y plataforma web",
      lastUpdated: "Diciembre 2024",
      icon: FileText,
      sections: [
        "Aceptación de términos",
        "Descripción de servicios",
        "Responsabilidades del usuario",
        "Propiedad intelectual",
        "Limitaciones de responsabilidad",
        "Modificaciones y terminación"
      ]
    },
    {
      title: "Política de Cookies",
      description: "Información sobre el uso de cookies en nuestro sitio web",
      lastUpdated: "Diciembre 2024",
      icon: Eye,
      sections: [
        "Qué son las cookies",
        "Tipos de cookies que utilizamos",
        "Finalidad de las cookies",
        "Gestión de cookies",
        "Cookies de terceros",
        "Actualizaciones de la política"
      ]
    },
    {
      title: "Política de Calidad",
      description: "Nuestro compromiso con la excelencia en todos los servicios",
      lastUpdated: "Diciembre 2024",
      icon: Shield,
      sections: [
        "Compromiso de calidad",
        "Estándares de servicio",
        "Proceso de mejora continua",
        "Satisfacción del cliente",
        "Certificaciones y acreditaciones",
        "Medición y seguimiento"
      ]
    }
  ];

  const dataProtection = [
    {
      principle: "Transparencia",
      description: "Informamos claramente sobre el tratamiento de datos personales"
    },
    {
      principle: "Finalidad",
      description: "Utilizamos los datos solo para los fines específicos comunicados"
    },
    {
      principle: "Proporcionalidad",
      description: "Recopilamos únicamente los datos necesarios para nuestros servicios"
    },
    {
      principle: "Seguridad",
      description: "Implementamos medidas técnicas y organizativas de protección"
    },
    {
      principle: "Confidencialidad",
      description: "Mantenemos la confidencialidad de toda la información personal"
    },
    {
      principle: "Derechos ARCO",
      description: "Garantizamos el ejercicio de derechos de Acceso, Rectificación, Cancelación y Oposición"
    }
  ];

  const compliance = [
    {
      regulation: "LFPDPPP (México)",
      description: "Ley Federal de Protección de Datos Personales en Posesión de los Particulares",
      status: "Cumplimiento Total"
    },
    {
      regulation: "GDPR (Europa)",
      description: "Reglamento General de Protección de Datos para clientes europeos",
      status: "Cumplimiento Total"
    },
    {
      regulation: "ISO 27001",
      description: "Estándar internacional para sistemas de gestión de seguridad de la información",
      status: "Certificado"
    },
    {
      regulation: "SOC 2 Type II",
      description: "Auditoría de controles de seguridad, disponibilidad y confidencialidad",
      status: "Certificado"
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
              <Shield className="h-4 w-4 mr-2" />
              Transparencia y Confianza
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Políticas y <span className="text-primary">Privacidad</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Nuestro compromiso con la protección de tus datos y la transparencia en nuestros servicios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Download className="h-5 w-5 mr-2" />
                Descargar Políticas
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-navy hover:bg-gray-50">
                <FileText className="h-5 w-5 mr-2" />
                Ver Términos Completos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestras Políticas</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Documentos que rigen nuestra relación contigo y garantizan la protección de tus derechos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {policies.map((policy, index) => (
              <Card key={index} className="border-gray-light hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <policy.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-navy">{policy.title}</CardTitle>
                        <div className="flex items-center mt-2">
                          <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-text">Actualizado: {policy.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-3">{policy.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Secciones principales:</h4>
                    <ul className="space-y-2">
                      {policy.sections.map((section, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-text">{section}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t border-gray-light">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Completo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Principles */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Principios de Protección de Datos</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Los fundamentos que guían nuestro manejo responsable de la información personal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dataProtection.map((principle, index) => (
              <Card key={index} className="text-center border-primary/20 bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{principle.principle}</h3>
                  <p className="text-gray-text text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Cumplimiento Regulatorio</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Certificaciones y cumplimiento de estándares internacionales de seguridad y privacidad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {compliance.map((item, index) => (
              <Card key={index} className="border-gray-light">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-2">{item.regulation}</h3>
                      <p className="text-gray-text text-sm mb-3">{item.description}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 ml-4">
                      {item.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-navy mb-6">Tus Derechos ARCO</h2>
                  <p className="text-xl text-gray-text">
                    Como titular de datos personales, tienes derecho a:
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                        A
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy mb-2">Acceso</h3>
                        <p className="text-gray-text text-sm">Conocer qué datos personales tenemos sobre ti y cómo los utilizamos.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                        R
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy mb-2">Rectificación</h3>
                        <p className="text-gray-text text-sm">Solicitar la corrección de datos inexactos o incompletos.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                        C
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy mb-2">Cancelación</h3>
                        <p className="text-gray-text text-sm">Solicitar la eliminación de tus datos cuando no sean necesarios.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                        O
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy mb-2">Oposición</h3>
                        <p className="text-gray-text text-sm">Oponerte al tratamiento de tus datos para fines específicos.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8 pt-8 border-t border-gray-light">
                  <p className="text-gray-text mb-4">
                    Para ejercer tus derechos, contáctanos en:
                  </p>
                  <p className="text-primary font-medium mb-6">
                    privacidad@focusesgpros.com
                  </p>
                  <Button variant="cta" size="lg">
                    Ejercer Mis Derechos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Medidas de Seguridad</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Implementamos las mejores prácticas para proteger tu información
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Encriptación SSL/TLS",
                description: "Todas las comunicaciones están encriptadas",
                icon: Lock
              },
              {
                title: "Acceso Restringido",
                description: "Solo personal autorizado accede a los datos",
                icon: Shield
              },
              {
                title: "Auditorías Regulares",
                description: "Revisiones periódicas de seguridad",
                icon: Eye
              },
              {
                title: "Respaldos Seguros",
                description: "Copias de seguridad encriptadas y redundantes",
                icon: FileText
              }
            ].map((measure, index) => (
              <Card key={index} className="text-center border-gray-light">
                <CardContent className="p-6">
                  <measure.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-navy mb-2">{measure.title}</h3>
                  <p className="text-gray-text text-sm">{measure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-navy mb-6">
              ¿Tienes Dudas sobre Privacidad?
            </h2>
            <p className="text-xl text-gray-text mb-8">
              Nuestro equipo de privacidad está disponible para resolver cualquier consulta
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-gray-light">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Oficial de Privacidad</h3>
                  <p className="text-gray-text text-sm">privacidad@focusesgpros.com</p>
                </CardContent>
              </Card>
              <Card className="border-gray-light">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Seguridad de Datos</h3>
                  <p className="text-gray-text text-sm">seguridad@focusesgpros.com</p>
                </CardContent>
              </Card>
              <Card className="border-gray-light">
                <CardContent className="p-6 text-center">
                  <Lock className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Cumplimiento</h3>
                  <p className="text-gray-text text-sm">cumplimiento@focusesgpros.com</p>
                </CardContent>
              </Card>
            </div>
            
            <Button size="lg" variant="cta" className="text-lg px-8 py-4">
              <FileText className="h-5 w-5 mr-2" />
              Contactar Equipo de Privacidad
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Tu Confianza es Nuestra Prioridad
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Trabajamos con los más altos estándares de seguridad y transparencia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Download className="h-5 w-5 mr-2" />
                Descargar Todas las Políticas
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Shield className="h-5 w-5 mr-2" />
                Consultar sobre Privacidad
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Politicas;
