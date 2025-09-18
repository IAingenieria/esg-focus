import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Monitor, MapPin, CheckCircle, Phone, Calendar, ArrowRight, Award } from "lucide-react";

const CapacitacionESG = () => {
  const programs = [
    {
      type: "Directivos",
      price: "45,000",
      description: "Para alta dirección y C-Level",
      duration: "16 horas",
      modality: "Presencial/Virtual",
      participants: "Hasta 12 ejecutivos",
      features: ["Estrategia ESG", "Liderazgo sostenible", "Toma de decisiones", "Comunicación stakeholders"],
      target: "CEOs, Directores, VPs"
    },
    {
      type: "Operativo",
      price: "35,000",
      description: "Para mandos medios y supervisores",
      duration: "12 horas", 
      modality: "Presencial/Virtual",
      participants: "Hasta 20 personas",
      features: ["Implementación ESG", "Procesos sostenibles", "Indicadores clave", "Mejora continua"],
      target: "Gerentes, Supervisores",
      popular: true
    },
    {
      type: "Ventas",
      price: "25,000",
      description: "Para equipos comerciales",
      duration: "8 horas",
      modality: "Presencial/Virtual", 
      participants: "Hasta 25 personas",
      features: ["Venta consultiva ESG", "Propuestas sostenibles", "Objeciones ESG", "Casos de éxito"],
      target: "Vendedores, Account Managers"
    },
    {
      type: "Integral Anual",
      price: "120,000",
      description: "Programa completo para toda la organización",
      duration: "40 horas",
      modality: "Híbrida",
      participants: "Hasta 50 personas",
      features: ["Todos los módulos", "Seguimiento mensual", "Evaluaciones", "Certificación avanzada"],
      target: "Toda la organización",
      premium: true
    }
  ];

  const modalities = [
    {
      type: "Presencial",
      icon: Users,
      description: "Sesiones en tus instalaciones o nuestras aulas",
      benefits: ["Interacción directa", "Dinámicas grupales", "Networking", "Atención personalizada"]
    },
    {
      type: "Virtual",
      icon: Monitor,
      description: "Capacitación online con herramientas interactivas",
      benefits: ["Flexibilidad horaria", "Ahorro en traslados", "Grabaciones incluidas", "Materiales digitales"]
    },
    {
      type: "Híbrida",
      icon: MapPin,
      description: "Combinación de sesiones presenciales y virtuales",
      benefits: ["Lo mejor de ambos", "Máxima flexibilidad", "Seguimiento continuo", "Adaptable a necesidades"]
    }
  ];

  const certificationProcess = [
    {
      step: "1",
      title: "Evaluación Inicial",
      description: "Diagnóstico de conocimientos previos"
    },
    {
      step: "2",
      title: "Capacitación",
      description: "Desarrollo del programa seleccionado"
    },
    {
      step: "3",
      title: "Evaluación Final",
      description: "Examen de certificación"
    },
    {
      step: "4",
      title: "Certificado",
      description: "Entrega de certificación oficial"
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
              <GraduationCap className="h-4 w-4 mr-2" />
              Certificación Incluida
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Capacitación <span className="text-primary">Empresarial ESG</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Programas especializados para desarrollar competencias ESG en tu organización
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Diseñar Programa
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

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Programas de Capacitación</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Programas diseñados específicamente para diferentes niveles organizacionales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className={`relative ${program.popular ? 'border-primary shadow-xl' : program.premium ? 'border-gold shadow-xl' : 'border-gray-light'}`}>
                {program.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Más Popular
                  </Badge>
                )}
                {program.premium && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-white">
                    Premium
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-navy">{program.type}</CardTitle>
                  <CardDescription className="text-sm">{program.description}</CardDescription>
                  <div className="mt-3">
                    <span className="text-3xl font-bold text-navy">${program.price.toLocaleString()}</span>
                    <span className="text-gray-text ml-1 text-sm">MXN</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-text">Duración:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-text">Modalidad:</span>
                      <span className="font-medium">{program.modality}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-text">Participantes:</span>
                      <span className="font-medium">{program.participants}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-light">
                    <h4 className="font-semibold text-navy text-sm mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-light">
                    <p className="text-xs text-gray-text mb-3">
                      <strong>Dirigido a:</strong> {program.target}
                    </p>
                    <Link to="/diagnostico-esg" className="w-full">
                      <Button 
                        className="w-full" 
                        variant={program.popular || program.premium ? "cta" : "outline"}
                        size="sm"
                      >
                        Seleccionar
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

      {/* Modalities Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Modalidades de Capacitación</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Elige la modalidad que mejor se adapte a las necesidades de tu equipo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modalities.map((modality, index) => (
              <Card key={index} className="text-center border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <modality.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-navy">{modality.type}</CardTitle>
                  <CardDescription>{modality.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {modality.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-text">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso de Certificación</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Todos nuestros programas incluyen certificación oficial al finalizar
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {certificationProcess.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center border-gray-light">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg text-navy">{step.title}</CardTitle>
                      <CardDescription className="text-sm">{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                  {index < certificationProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <Award className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-navy mb-6">
                  Certificación Incluida
                </h2>
                <p className="text-xl text-gray-text mb-8">
                  Todos los participantes reciben certificación oficial al completar el programa
                </p>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-text">Certificación</div>
                    <div className="text-sm text-gray-text mt-2">Garantizada</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy mb-2">3</div>
                    <div className="text-gray-text">Modalidades</div>
                    <div className="text-sm text-gray-text mt-2">Disponibles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50</div>
                    <div className="text-gray-text">Participantes</div>
                    <div className="text-sm text-gray-text mt-2">Máximo</div>
                  </div>
                </div>
                <Link to="/diagnostico-esg">
                  <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                    Diseñar mi Programa
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
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
              ¿Listo para Capacitar a tu Equipo?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Desarrolla las competencias ESG que tu organización necesita para el futuro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Diseñar Programa
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

      <Footer />
    </div>
  );
};

export default CapacitacionESG;
