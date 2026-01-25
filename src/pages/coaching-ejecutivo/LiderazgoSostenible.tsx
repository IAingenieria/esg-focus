import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSchema from "@/components/FAQSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Target, Brain, Shield, Users, CheckCircle, Phone, Calendar, AlertTriangle, TrendingUp } from "lucide-react";

const LiderazgoSostenible = () => {
  const faqsLiderazgoSostenible = [
    {
      question: "¿Por qué el coaching ejecutivo es necesario para el cumplimiento NIS 2025?",
      answer: "El cumplimiento NIS 2025 no es solo un tema técnico, es un cambio cultural que requiere liderazgo transformacional. El 70% de las implementaciones ESG fallan por resistencia del equipo directivo, no por falta de recursos técnicos. El coaching ejecutivo desarrolla las competencias de liderazgo necesarias para gestionar el cambio organizacional, comunicar la urgencia regulatoria al consejo, y alinear los KPIs ESG con los objetivos de negocio."
    },
    {
      question: "¿Qué competencias directivas son críticas para el liderazgo sostenible?",
      answer: "Las 5 competencias críticas son: 1) Pensamiento Sistémico (entender la interconexión entre decisiones financieras y riesgos ESG), 2) Gestión de Stakeholders (balancear intereses de accionistas, empleados, comunidad y reguladores), 3) Toma de Decisiones bajo Incertidumbre (navegar regulaciones cambiantes), 4) Comunicación de Crisis (gestionar incidentes ESG sin dañar la reputación), y 5) Visión de Largo Plazo (priorizar sostenibilidad sobre ganancias trimestrales)."
    },
    {
      question: "¿Cuánto dura el programa de Coaching Ejecutivo y cuál es el formato?",
      answer: "El programa completo de Liderazgo Sostenible consta de 14 sesiones distribuidas en 3 módulos a lo largo de 4-5 meses. Módulo 1: Mentalidad Sostenible (4 sesiones), Módulo 2: Competencias ESG (6 sesiones), Módulo 3: Ejecución Estratégica (4 sesiones). Las sesiones son individuales o en formato ejecutivo grupal (máximo 8 participantes), con una duración de 90 minutos cada una, más 3 talleres prácticos de medio día."
    },
    {
      question: "¿Qué diferencia hay entre coaching ejecutivo y capacitación ESG tradicional?",
      answer: "La capacitación ESG tradicional enseña conceptos teóricos (qué son los Alcances 1, 2 y 3, cómo calcular huella de carbono). El coaching ejecutivo trabaja en el nivel de identidad y creencias del líder: cómo integrar la sostenibilidad en su estilo de liderazgo, cómo tomar decisiones difíciles cuando hay conflicto entre rentabilidad y sostenibilidad, cómo gestionar la resistencia del equipo. Es la diferencia entre saber qué hacer y tener la capacidad de hacerlo bajo presión."
    },
    {
      question: "¿El coaching ejecutivo es deducible de impuestos?",
      answer: "Sí, el coaching ejecutivo es 100% deducible de impuestos en México cuando se factura como 'Capacitación y Desarrollo de Personal' o 'Consultoría de Gestión Empresarial'. Además, las empresas que invierten en desarrollo de competencias directivas pueden acceder a estímulos fiscales de la STPS (Secretaría del Trabajo y Previsión Social) bajo el programa de Capacitación Empresarial, lo que puede representar un ahorro adicional del 20-30% del costo del programa."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Bloque 1: Hero Section (El Gancho) */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Liderazgo en Gobernanza:
              <br />
              <span className="text-yellow-accent">Transformando Directivos en Guardianes del Cumplimiento y el ROI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Desarrolle las competencias C-Level necesarias para navegar la era NIS 2026. El único coaching en México que integra estrategia ESG con alto desempeño directivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  Iniciar Programa de Liderazgo Sostenible
                </Button>
              </Link>
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Ver Perfil del Master Coach
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Bloque 2: El Problema (Urgencia Regulatoria) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-yellow-accent">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="h-12 w-12 text-yellow-accent flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold text-navy">
                  ¿Está su Liderazgo Preparado para el Nuevo Paradigma de Riesgo Sistémico?
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-6">
                El 40% de las nuevas posiciones ejecutivas exigen dominio de criterios ESG. Un directivo que no sabe traducir la sostenibilidad a indicadores financieros (ROI, Riesgo, Capital) pone en peligro su carrera y la estabilidad de la organización. En 2026, la ignorancia regulatoria es el mayor riesgo de gobernanza para cualquier CEO.
              </p>
              
              {/* Gráfico comparativo */}
              <div className="bg-yellow-accent/10 rounded-xl p-6 border border-yellow-accent/30">
                <h3 className="font-bold text-navy mb-4 text-center">Líder Tradicional vs. Líder Sostenible</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                    <h4 className="font-bold text-red-600 mb-3">Líder Tradicional</h4>
                    <ul className="space-y-2 text-sm text-gray-text">
                      <li>✗ Solo enfoque financiero</li>
                      <li>✗ Desconoce NIS/IBSO</li>
                      <li>✗ Riesgo regulatorio alto</li>
                      <li>✗ Sin visión ESG</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-3">Líder Sostenible</h4>
                    <ul className="space-y-2 text-sm text-gray-text">
                      <li>✓ Integra ESG + Finanzas</li>
                      <li>✓ Domina 30 IBSO</li>
                      <li>✓ Gestiona riesgo sistémico</li>
                      <li>✓ Ventaja competitiva</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloque 3: La Solución (Beneficios Tangibles) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                Competencias Directivas para un Futuro de Cumplimiento y Rentabilidad
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <Target className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Toma de Decisiones ESG</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Aprenda a utilizar el Dashboard Ejecutivo para priorizar inversiones de alto impacto.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <Shield className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Gestión de Crisis Reputacional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Protocolos de respuesta ante incidentes de gobernanza o restricciones de CSD.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <Users className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Cultura de Cumplimiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Metodologías para alinear a toda la organización con los 30 IBSO del CINIF.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Link to="/diagnostico-esg">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Quiero liderar con visión sostenible
                  </button>
                </Link>
              </div>
            </div>

            {/* Bloque 4: Autoridad y Confianza (Prueba Social) */}
            <div className="bg-gradient-to-br from-primary/10 to-green-success/10 rounded-2xl shadow-xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
                Formando a los Líderes que Encabezan la Sostenibilidad en México
              </h3>
              
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                Con el respaldo de la Worldwide Association of Business Coaches (WABC) y la Academia Interamericana de Coaching, el Lic. Olegario Ríos ha transformado la visión de directivos en empresas líderes de Nuevo León por más de 16 años.
              </p>

              {/* Sellos de Confianza */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  WABC Certified
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  AIAC Master
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  IASE Certified
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <Brain className="h-5 w-5 mr-2" />
                  Master Coach Organizational
                </Badge>
              </div>

              {/* Dato de Impacto */}
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Líderes entrenados por nosotros gestionan carteras con cumplimiento NIS 100% verificado
                </p>
              </div>
            </div>

            {/* Bloque 5: Cierre de Conversión (Footer CTA) */}
            <div className="bg-navy rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
              <p className="text-2xl md:text-3xl font-bold mb-8">
                El futuro de su empresa depende de su capacidad para gestionar el nuevo entorno regulatorio. No se quede atrás.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/agendar">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Agendar Sesión de Coaching Estratégico</span>
                  </button>
                </Link>
                <a href="https://wa.me/528180290061" target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-success hover:bg-green-success/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>WhatsApp Directo: +52 818 029 0061</span>
                  </button>
                </a>
              </div>
            </div>

            {/* Bloque 6: FAQs Optimizadas para SEO y AI Crawlers */}
            <FAQSchema faqs={faqsLiderazgoSostenible} pageTitle="Liderazgo Sostenible" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default LiderazgoSostenible;
