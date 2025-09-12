import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Users, Heart, Monitor, CheckCircle, Phone, Calendar, ArrowRight, Clock } from "lucide-react";

const DinamicasFamiliares = () => {
  const modalities = [
    {
      type: "Tradicional",
      price: "2,000",
      description: "Sesiones presenciales en consultorio",
      duration: "90 minutos por sesión",
      format: "Presencial",
      benefits: ["Interacción directa", "Ambiente controlado", "Dinámicas presenciales", "Observación completa"],
      ideal: "Familias que prefieren el contacto directo"
    },
    {
      type: "Residencial",
      price: "25,000",
      description: "Programa intensivo de inmersión familiar",
      duration: "Fin de semana completo",
      format: "Retiro familiar",
      benefits: ["Inmersión total", "Ambiente neutral", "Resultados acelerados", "Experiencia transformadora"],
      ideal: "Crisis familiares que requieren intervención intensiva",
      premium: true
    },
    {
      type: "Virtual",
      price: "1,500",
      description: "Sesiones online desde la comodidad del hogar",
      duration: "75 minutos por sesión",
      format: "Videoconferencia",
      benefits: ["Comodidad del hogar", "Flexibilidad horaria", "Menor costo", "Acceso desde cualquier lugar"],
      ideal: "Familias con horarios complicados o distancia geográfica",
      popular: true
    }
  ];

  const specialties = [
    {
      specialty: "Familias con Adolescentes",
      description: "Navegando los desafíos de la adolescencia",
      challenges: ["Comunicación padres-hijos", "Establecimiento de límites", "Conflictos generacionales", "Independencia vs. dependencia"],
      approach: "Mediación y construcción de puentes comunicativos"
    },
    {
      specialty: "Familias Ensambladas",
      description: "Integrando nuevas estructuras familiares",
      challenges: ["Roles de padrastros/madrastras", "Lealtades divididas", "Nuevas reglas familiares", "Integración de hermanos"],
      approach: "Construcción de nueva identidad familiar"
    },
    {
      specialty: "Familias en Crisis",
      description: "Superando momentos difíciles juntos",
      challenges: ["Separación/divorcio", "Pérdidas familiares", "Problemas económicos", "Enfermedades"],
      approach: "Fortalecimiento de la resiliencia familiar"
    },
    {
      specialty: "Familias Empresariales",
      description: "Equilibrando negocio y familia",
      challenges: ["Mezcla trabajo-familia", "Sucesión empresarial", "Conflictos de intereses", "Roles profesionales vs. familiares"],
      approach: "Separación saludable de ámbitos y roles"
    }
  ];

  const process = [
    {
      phase: "Evaluación Inicial",
      sessions: "1-2 sesiones",
      description: "Diagnóstico de la dinámica familiar actual",
      activities: ["Entrevistas individuales", "Observación familiar", "Identificación de patrones", "Definición de objetivos"]
    },
    {
      phase: "Desarrollo de Habilidades",
      sessions: "6-8 sesiones",
      description: "Trabajo en competencias familiares específicas",
      activities: ["Comunicación efectiva", "Resolución de conflictos", "Establecimiento de límites", "Expresión emocional"]
    },
    {
      phase: "Integración y Práctica",
      sessions: "2-3 sesiones",
      description: "Aplicación de nuevas dinámicas en el hogar",
      activities: ["Tareas familiares", "Seguimiento de progreso", "Ajustes necesarios", "Consolidación de cambios"]
    }
  ];

  const outcomes = [
    {
      metric: "85%",
      description: "Mejora en comunicación familiar",
      detail: "Según evaluaciones post-tratamiento"
    },
    {
      metric: "78%",
      description: "Reducción de conflictos",
      detail: "Disminución significativa de discusiones"
    },
    {
      metric: "92%",
      description: "Satisfacción familiar",
      detail: "Familias reportan mayor armonía"
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
              <Home className="h-4 w-4 mr-2" />
              Armonía Familiar
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dinámicas <span className="text-primary">Familiares</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Fortalece los vínculos familiares y mejora la comunicación en tu hogar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Evaluación Familiar
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Modalidades de Terapia</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Diferentes opciones para adaptarse a las necesidades y preferencias de tu familia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modalities.map((modality, index) => (
              <Card key={index} className={`relative ${modality.popular ? 'border-primary shadow-xl scale-105' : modality.premium ? 'border-gold shadow-xl' : 'border-gray-light'}`}>
                {modality.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Más Popular
                  </Badge>
                )}
                {modality.premium && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-white">
                    Premium
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-navy">{modality.type}</CardTitle>
                  <CardDescription className="text-sm">{modality.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-navy">${modality.price.toLocaleString()}</span>
                    <span className="text-gray-text ml-2">MXN</span>
                  </div>
                  <div className="text-sm text-gray-text mt-2">
                    <div>{modality.duration}</div>
                    <Badge variant="outline" className="mt-1">{modality.format}</Badge>
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
                    <Button 
                      className="w-full" 
                      variant={modality.popular || modality.premium ? "cta" : "outline"}
                      size="sm"
                    >
                      Seleccionar
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Especialidades Familiares</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Enfoques específicos para diferentes tipos de familias y situaciones
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {specialties.map((specialty, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <CardTitle className="text-xl text-navy flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-3" />
                    {specialty.specialty}
                  </CardTitle>
                  <CardDescription>{specialty.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Desafíos comunes:</h4>
                    <ul className="space-y-1">
                      {specialty.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-text">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-gray-light">
                    <h4 className="font-semibold text-navy mb-2">Nuestro enfoque:</h4>
                    <p className="text-primary text-sm font-medium">{specialty.approach}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso Terapéutico</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología estructurada en 3 fases para transformar las dinámicas familiares
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {process.map((phase, index) => (
              <Card key={index} className="border-gray-light">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-navy">{phase.phase}</h3>
                        <Badge variant="outline" className="text-primary border-primary">
                          {phase.sessions}
                        </Badge>
                      </div>
                      <p className="text-gray-text mb-4">{phase.description}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {phase.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-text">{activity}</span>
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

      {/* Duration & Results */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <Clock className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-navy mb-6">
                  Duración del Proceso
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10-12</div>
                    <div className="text-gray-text">Sesiones</div>
                    <div className="text-sm text-gray-text mt-2">Promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy mb-2">3-4</div>
                    <div className="text-gray-text">Meses</div>
                    <div className="text-sm text-gray-text mt-2">Duración total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">90</div>
                    <div className="text-gray-text">Minutos</div>
                    <div className="text-sm text-gray-text mt-2">Por sesión</div>
                  </div>
                </div>
                <p className="text-lg text-gray-text mb-8">
                  Tiempo suficiente para generar cambios duraderos en las dinámicas familiares
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Resultados Comprobados</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Mejoras significativas en la armonía y comunicación familiar
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="text-center border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">{outcome.metric}</div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{outcome.description}</h3>
                  <p className="text-gray-text text-sm">{outcome.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Beneficios de la Terapia Familiar</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Mejora la comunicación familiar",
              "Reduce conflictos y tensiones",
              "Fortalece vínculos afectivos",
              "Desarrolla habilidades de resolución",
              "Aumenta la comprensión mutua",
              "Crea un ambiente más armonioso"
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-navy font-medium">{benefit}</p>
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
              ¿Listo para Transformar tu Familia?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Construye relaciones más fuertes y un hogar más armonioso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Evaluación Familiar
              </Button>
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

export default DinamicasFamiliares;
