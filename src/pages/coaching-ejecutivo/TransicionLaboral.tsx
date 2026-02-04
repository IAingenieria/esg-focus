import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TrendingUp, Search, Briefcase, Target, CheckCircle, Phone, Calendar, ArrowRight, DollarSign } from "lucide-react";

const TransicionLaboral = () => {
  const phases = [
    {
      phase: "Fase 1",
      title: "Análisis",
      duration: "4 sesiones",
      description: "Evaluación profunda de perfil profesional y objetivos",
      activities: ["Evaluación de competencias", "Análisis de mercado ESG", "Definición de objetivos", "Mapeo de oportunidades"],
      icon: Search
    },
    {
      phase: "Fase 2",
      title: "Herramientas",
      duration: "6 sesiones", 
      description: "Desarrollo de herramientas para la búsqueda efectiva",
      activities: ["CV especializado ESG", "LinkedIn optimization", "Estrategia networking", "Preparación entrevistas"],
      icon: Briefcase
    },
    {
      phase: "Fase 3",
      title: "Ejecución",
      duration: "4 sesiones",
      description: "Implementación activa de la estrategia de búsqueda",
      activities: ["Aplicación estratégica", "Seguimiento activo", "Negociación ofertas", "Onboarding exitoso"],
      icon: Target
    }
  ];


  const guarantee = [
    {
      title: "Entrevistas Garantizadas",
      description: "Mínimo 3 entrevistas en empresas objetivo o sesiones adicionales gratis"
    },
    {
      title: "Seguimiento Personalizado",
      description: "Acompañamiento hasta conseguir la posición deseada"
    },
    {
      title: "Red de Contactos ESG",
      description: "Acceso a nuestra red exclusiva de profesionales y empresas"
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
              <DollarSign className="h-4 w-4 mr-2" />
              Salarios 15-25% Superiores
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transición <span className="text-primary">Laboral Ejecutiva</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-light">
              Especialízate en posiciones ESG con salarios superiores y mayor proyección profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Evaluación Gratuita
                </Button>
              </Link>
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

      {/* Program Overview */}
      <section className="py-20 bg-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-navy mb-6">
                  Programa de Transición Laboral Ejecutiva
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy mb-2">14</div>
                    <div className="text-gray-text">Sesiones</div>
                    <div className="text-sm text-gray-text mt-2">Personalizadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <div className="text-gray-text">Fases</div>
                    <div className="text-sm text-gray-text mt-2">Estructuradas</div>
                  </div>
                </div>
                <p className="text-lg text-gray-text mb-8">
                  Enfoque especializado en posiciones con responsabilidades ESG
                </p>
                <Link to="/diagnostico-esg">
                  <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                    Comenzar Transición
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Proceso de Transición</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Metodología estructurada en 3 fases para garantizar tu éxito profesional
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="border-gray-light">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <phase.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline" className="text-primary border-primary">
                          {phase.phase}
                        </Badge>
                        <span className="text-sm text-gray-text">{phase.duration}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-3">{phase.title}</h3>
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

      {/* Guarantee Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nuestra Garantía</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Estamos comprometidos con tu éxito profesional
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {guarantee.map((item, index) => (
              <Card key={index} className="border-gray-light text-center">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl text-navy">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Posiciones Objetivo</h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Especialízate en las posiciones ESG más demandadas del mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Sustainability Manager",
              "ESG Director", 
              "Chief Sustainability Officer",
              "ESG Analyst",
              "Sustainability Consultant",
              "ESG Reporting Manager"
            ].map((position, index) => (
              <Card key={index} className="border-gray-light hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Briefcase className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">{position}</h3>
                  <Badge variant="outline" className="text-primary border-primary">
                    Alta Demanda
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Resultados Comprobados</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">92%</div>
                <div className="text-white font-semibold mb-2">Éxito en Colocación</div>
                <div className="text-sm text-gray-light">En primeros 6 meses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25%</div>
                <div className="text-white font-semibold mb-2">Incremento Salarial</div>
                <div className="text-sm text-gray-light">Promedio obtenido</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3.2</div>
                <div className="text-white font-semibold mb-2">Ofertas por Cliente</div>
                <div className="text-sm text-gray-light">Promedio recibidas</div>
              </div>
            </div>
            <p className="text-xl mb-8 text-gray-light">
              Nuestros clientes no solo consiguen trabajo, consiguen mejores oportunidades
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-6">
              ¿Listo para tu Transición Profesional?
            </h2>
            <p className="text-xl text-gray-text mb-8">
              Da el siguiente paso hacia una carrera más exitosa y mejor remunerada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Evaluación Gratuita
                </Button>
              </Link>
              <a href="https://api.whatsapp.com/send/?phone=5218180290061&text=Hola%2C+me+interesa+informaci%C3%B3n+sobre+sus+servicios+de+consultor%C3%ADa+ESG&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="whatsapp" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  +52 818 029 0061
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransicionLaboral;
