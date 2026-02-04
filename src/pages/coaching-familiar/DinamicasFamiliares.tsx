import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSchema from "@/components/FAQSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Users, Heart, Shield, CheckCircle, Phone, Calendar, AlertTriangle, FileText } from "lucide-react";

const DinamicasFamiliares = () => {
  const faqsGobernanzaFamiliar = [
    {
      question: "¿Por qué el 70% de las empresas familiares desaparecen en la segunda generación?",
      answer: "Las tres causas principales son: 1) Falta de un Protocolo Familiar claro que defina roles, responsabilidades y mecanismos de toma de decisiones, 2) Conflictos no gestionados entre hermanos o primos que escalan hasta paralizar la operación, y 3) Ausencia de un plan de sucesión formal que prepare a la siguiente generación para liderar bajo los nuevos estándares de gobernanza corporativa y cumplimiento ESG. El 90% de las empresas familiares que implementan un protocolo formal sobreviven a la transición generacional."
    },
    {
      question: "¿Qué incluye un Protocolo Familiar completo?",
      answer: "Un Protocolo Familiar completo incluye: 1) Consejo de Familia (estructura de gobierno familiar separada del negocio), 2) Reglas de Entrada y Salida (quién puede trabajar en la empresa y bajo qué condiciones), 3) Plan de Sucesión (cronograma de transición de liderazgo), 4) Política de Dividendos (cómo se distribuyen las utilidades), 5) Mecanismo de Resolución de Conflictos (mediación antes de litigio), 6) Valores y Misión Familiar (el legado que se quiere preservar), y 7) Protocolo de Venta (qué sucede si un miembro quiere vender su participación)."
    },
    {
      question: "¿Cuándo es el momento ideal para implementar un Protocolo Familiar?",
      answer: "El momento ideal es ANTES de que surjan conflictos graves. Específicamente: cuando el fundador tiene entre 55-65 años y aún está activo (puede liderar el proceso sin presión de salud), cuando la segunda generación ya trabaja en la empresa pero aún no hay disputas de poder, o cuando la empresa está considerando profesionalizar su gobierno corporativo para cumplir con NIS 2024 (que exige separación entre propiedad y gestión). Implementar un protocolo en medio de una crisis familiar es 5 veces más costoso y tiene 60% menos probabilidad de éxito."
    },
    {
      question: "¿Cómo se relaciona la Gobernanza Familiar con el cumplimiento NIS 2024?",
      answer: "La Norma NIS B-1 del CINIF exige reportar indicadores de gobernanza corporativa, incluyendo: composición del consejo de administración (independencia de consejeros), políticas de conflicto de interés, y mecanismos de rendición de cuentas. Las empresas familiares sin un protocolo formal tienen alta probabilidad de reprobar estos indicadores porque no hay separación clara entre decisiones familiares y decisiones empresariales. Un Protocolo Familiar bien diseñado facilita el cumplimiento de los 10 IBSO de gobernanza."
    },
    {
      question: "¿Cuánto tiempo toma implementar un Protocolo Familiar?",
      answer: "La implementación completa de un Protocolo Familiar toma entre 6 y 9 meses. El proceso incluye: 1) Diagnóstico de dinámicas familiares (4-6 sesiones individuales con cada miembro clave), 2) Talleres de alineación de valores (3 sesiones grupales), 3) Diseño del protocolo (2-3 meses con asesoría legal y coaching), 4) Aprobación y firma del protocolo (asamblea familiar), y 5) Implementación y seguimiento (primeros 3 meses críticos). El 80% del éxito depende de la facilitación profesional del proceso, no solo del documento legal."
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
              Gobernanza Familiar:
              <br />
              <span className="text-yellow-accent">Proteja su Legado y Asegure la Sostenibilidad de su Patrimonio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              La armonía familiar es el activo más valioso de su empresa. Implementamos protocolos de sucesión y gobernanza que garantizan la continuidad a través de las generaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  Iniciar Protocolo de Sucesión
                </Button>
              </Link>
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Ver Beneficios de la Gobernanza Familiar
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
                  El 70% de las Empresas Familiares Desaparecen en la Segunda Generación
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-6">
                La falta de reglas claras, la ausencia de un plan de sucesión y los conflictos no gestionados son riesgos de gobernanza mayores que cualquier multa externa. Sin una estructura sólida, el patrimonio construido durante décadas puede fragmentarse en menos de 5 años tras la transición de liderazgo.
              </p>
              
              {/* Pirámide de Mortalidad */}
              <div className="bg-yellow-accent/10 rounded-xl p-6 border border-yellow-accent/30">
                <h3 className="font-bold text-navy mb-4 text-center">Pirámide de Mortalidad de Empresas Familiares</h3>
                <div className="space-y-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-500">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-green-700">1ra Generación</span>
                      <span className="text-2xl font-bold text-green-700">100%</span>
                    </div>
                    <div className="text-sm text-gray-text mt-2">Fundadores - Alta supervivencia</div>
                  </div>
                  <div className="bg-yellow-100 rounded-lg p-4 border-2 border-yellow-500">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-yellow-700">2da Generación</span>
                      <span className="text-2xl font-bold text-yellow-700">30%</span>
                    </div>
                    <div className="text-sm text-gray-text mt-2">Hijos - Riesgo crítico de fragmentación</div>
                  </div>
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-500">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-red-700">3ra Generación</span>
                      <span className="text-2xl font-bold text-red-700">12%</span>
                    </div>
                    <div className="text-sm text-gray-text mt-2">Nietos - Supervivencia excepcional</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloque 3: La Solución (Beneficios Tangibles) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                Un Legado Inquebrantable Basado en Valores y Reglas Claras
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <FileText className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Protocolo Familiar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Creamos el marco legal y ético que define la relación entre la familia y la empresa.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <Users className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Gestión de Sucesión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Preparamos a la siguiente generación para liderar bajo los nuevos estándares de sostenibilidad y NIS 2026.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <Heart className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Resolución de Conflictos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Desarrollamos habilidades de comunicación para transformar las crisis en oportunidades de crecimiento.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Link to="/diagnostico-esg">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Quiero blindar el futuro de mi familia
                  </button>
                </Link>
              </div>
            </div>

            {/* Bloque 4: Autoridad y Confianza (Prueba Social) */}
            <div className="bg-gradient-to-br from-primary/10 to-green-success/10 rounded-2xl shadow-xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
                Experiencia en la Gestión de la Complejidad Humana y Empresarial
              </h3>
              
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                Con certificaciones en coaching organizacional y una profunda comprensión de la gobernanza corporativa, el Lic. Olegario Ríos ha facilitado procesos de sucesión exitosos en las familias empresarias más emblemáticas de la región.
              </p>

              {/* Sellos de Confianza */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  AIAC Master
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  WABC Certified
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  IASE Certified
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <Shield className="h-5 w-5 mr-2" />
                  STPS Registered
                </Badge>
              </div>

              {/* Dato de Impacto */}
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  100% de éxito en la implementación de protocolos familiares para la continuidad del legado
                </p>
              </div>
            </div>

            {/* Bloque 5: Cierre de Conversión (Footer CTA) */}
            <div className="bg-navy rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
              <p className="text-2xl md:text-3xl font-bold mb-8">
                Su empresa es el fruto de su esfuerzo. No permita que la falta de planeación ponga en riesgo su legado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/agendar">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Agendar Consulta de Gobernanza Familiar</span>
                  </button>
                </Link>
                <a href="https://api.whatsapp.com/send/?phone=5218180290061&text=Hola%2C+me+interesa+informaci%C3%B3n+sobre+sus+servicios+de+consultor%C3%ADa+ESG&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-success hover:bg-green-success/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>WhatsApp Directo: +52 818 029 0061</span>
                  </button>
                </a>
              </div>
            </div>

            {/* Bloque 6: FAQs Optimizadas para SEO y AI Crawlers */}
            <FAQSchema faqs={faqsGobernanzaFamiliar} pageTitle="Gobernanza Familiar" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default DinamicasFamiliares;
