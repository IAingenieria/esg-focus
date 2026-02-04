import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar as CalendarIcon, Smartphone, Target, CheckCircle, Phone, Calendar, ArrowRight, Clock } from "lucide-react";

const CoachingFamiliar = () => {
  const modalities = [
    {
      type: "Individual",
      price: "1,200",
      description: "Sesiones personalizadas uno a uno con tu hijo/a",
      duration: "60 minutos por sesión",
      benefits: ["Atención personalizada", "Enfoque específico", "Flexibilidad total", "Resultados más rápidos"],
      ideal: "Casos específicos o necesidades particulares"
    },
    {
      type: "Familiar",
      price: "1,500",
      description: "Sesiones que incluyen a padres e hijos",
      duration: "90 minutos por sesión",
      benefits: ["Trabajo integral", "Mejora comunicación", "Dinámicas familiares", "Apoyo conjunto"],
      ideal: "Problemas de comunicación familiar",
      popular: true
    },
    {
      type: "Intensivo Fin de Semana",
      price: "15,000",
      description: "Programa intensivo de 2 días completos",
      duration: "16 horas totales",
      benefits: ["Resultados inmediatos", "Inmersión total", "Técnicas intensivas", "Seguimiento incluido"],
      ideal: "Situaciones que requieren intervención rápida"
    }
  ];

  const areas = [
    {
      area: "Autoestima",
      description: "Fortalecimiento de la confianza y amor propio",
      techniques: ["Reconocimiento de fortalezas", "Manejo de críticas", "Autoaceptación", "Logros personales"],
      icon: Heart
    },
    {
      area: "Comunicación",
      description: "Desarrollo de habilidades de expresión y escucha",
      techniques: ["Expresión emocional", "Escucha activa", "Resolución de conflictos", "Asertividad"],
      icon: Users
    },
    {
      area: "Gestión Emocional",
      description: "Manejo inteligente de emociones y sentimientos",
      techniques: ["Identificación emocional", "Regulación emocional", "Manejo del estrés", "Resiliencia"],
      icon: Target
    },
    {
      area: "Orientación Vocacional",
      description: "Descubrimiento de talentos y pasiones profesionales",
      techniques: ["Exploración de intereses", "Identificación de talentos", "Opciones profesionales", "Plan de carrera"],
      icon: CalendarIcon
    }
  ];

  const specialties = [
    {
      specialty: "Manejo de Tecnología",
      description: "Uso saludable y equilibrado de dispositivos digitales",
      focus: ["Tiempo de pantalla", "Redes sociales", "Cyberbullying", "Privacidad digital"]
    },
    {
      specialty: "Desarrollo de Liderazgo Juvenil",
      description: "Formación de habilidades de liderazgo desde temprana edad",
      focus: ["Trabajo en equipo", "Toma de decisiones", "Comunicación efectiva", "Responsabilidad social"]
    }
  ];

  const ageGroups = [
    { age: "8-12 años", focus: "Autoestima y habilidades sociales básicas" },
    { age: "13-15 años", focus: "Gestión emocional y comunicación familiar" },
    { age: "16-18 años", focus: "Orientación vocacional y preparación para la vida adulta" }
  ];

  return (
    <div id="coach-hijo">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Heart className="h-4 w-4 mr-2" />
              Desarrollo Integral
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Coach de <span className="text-primary">Tu Hijo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Acompañamiento especializado para el desarrollo emocional y personal de niños y adolescentes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Sesión de Evaluación
              </Button>
              <a href="https://api.whatsapp.com/send/?phone=5218180290061&text=Hola%2C+me+interesa+informaci%C3%B3n+sobre+sus+servicios+de+consultor%C3%ADa+ESG&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp Directo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Modalidades de Coaching</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Diferentes opciones para adaptarse a las necesidades específicas de tu familia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modalities.map((modality, index) => (
              <Card key={index} className={`relative ${modality.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-light'}`}>
                {modality.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-navy">{modality.type}</CardTitle>
                  <CardDescription className="text-sm">{modality.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-navy">${modality.price.toLocaleString()}</span>
                    <span className="text-gray-text ml-2">MXN</span>
                  </div>
                  <div className="text-sm text-gray-text mt-2">{modality.duration}</div>
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
                      variant={modality.popular ? "cta" : "outline"}
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

      {/* Areas of Work */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Áreas de Trabajo</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Desarrollo integral en las áreas más importantes para el crecimiento personal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-navy">{area.area}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-navy mb-3">Técnicas utilizadas:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.techniques.map((technique, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-text text-sm">{technique}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Especialidades</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Áreas de especialización para desafíos específicos de la era digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialties.map((specialty, index) => (
              <Card key={index} className="border-gray-light">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl text-navy">{specialty.specialty}</CardTitle>
                  </div>
                  <CardDescription>{specialty.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-navy mb-3">Enfoque en:</h4>
                  <ul className="space-y-2">
                    {specialty.focus.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-gray-text text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Grupos de Edad</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Enfoques específicos según la etapa de desarrollo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ageGroups.map((group, index) => (
              <Card key={index} className="text-center border-gray-light">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-navy">{group.age}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text">{group.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Beneficios del Coaching Juvenil</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Mayor autoconfianza y autoestima",
              "Mejor comunicación familiar",
              "Habilidades de gestión emocional",
              "Claridad en objetivos personales",
              "Mejores relaciones interpersonales",
              "Desarrollo de liderazgo",
              "Manejo saludable de la tecnología",
              "Preparación para la vida adulta"
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-navy font-medium text-sm">{benefit}</p>
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
              ¿Listo para Apoyar el Desarrollo de tu Hijo?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Invierte en el futuro de tu hijo con coaching especializado y personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Sesión de Evaluación
              </Button>
              <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                +52 818 029 0061
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachingFamiliar;
