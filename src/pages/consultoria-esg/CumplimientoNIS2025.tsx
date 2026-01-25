import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSchema from "@/components/FAQSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, Clock, Phone, Calendar, ArrowRight } from "lucide-react";

const CumplimientoNIS2024 = () => {
  const faqsNIS2025 = [
    {
      question: "¿Cuáles son las multas por no cumplir con NIS 2025 en México?",
      answer: "Las empresas que no cumplan con las Normas de Información de Sostenibilidad (NIS) B-1 del CINIF enfrentan multas de la CNBV que pueden alcanzar hasta el 10% de los ingresos anuales, además de sanciones del SAT por incumplimiento fiscal relacionado con la materialidad financiera ESG. El plazo límite para reportar los 30 IBSO es diciembre 2026 para ejercicio fiscal 2025."
    },
    {
      question: "¿Qué son los 30 IBSO (Indicadores Básicos de Sostenibilidad Obligatorios)?",
      answer: "Los 30 IBSO son los indicadores mínimos que toda empresa listada en la BMV debe reportar según la Norma NIS B-1 del CINIF. Se dividen en tres categorías: Ambiental (emisiones de carbono Alcance 1, 2 y 3, consumo de agua, generación de residuos), Social (diversidad de género, rotación de personal, inversión en capacitación) y Gobernanza (composición del consejo, políticas anticorrupción, gestión de riesgos ESG)."
    },
    {
      question: "¿Mi empresa está obligada a cumplir con NIS 2025?",
      answer: "Están obligadas todas las empresas listadas en la Bolsa Mexicana de Valores (BMV), empresas que buscan financiamiento verde, proveedores de grandes corporaciones con requisitos ESG en su cadena de suministro, y empresas que deseen acceder a créditos preferenciales o licitaciones públicas que requieran certificación de sostenibilidad. A partir de 2027, se espera que la obligatoriedad se extienda a empresas medianas con más de 250 empleados."
    },
    {
      question: "¿Cuánto tiempo toma implementar el cumplimiento NIS 2025?",
      answer: "La implementación completa de los 30 IBSO y la Norma NIS B-1 toma entre 4 y 6 meses, dependiendo del nivel de madurez ESG de la empresa. Esto incluye: diagnóstico inicial (2-3 semanas), recolección y validación de datos (6-8 semanas), implementación de sistemas de medición (4-6 semanas), capacitación de personal (2 semanas), y preparación del reporte final (3-4 semanas)."
    },
    {
      question: "¿Qué diferencia hay entre NIS 2025 y la certificación GRI?",
      answer: "NIS 2025 (Norma B-1 del CINIF) es obligatoria para empresas mexicanas listadas y se enfoca en 30 indicadores básicos de cumplimiento regulatorio. GRI (Global Reporting Initiative) es un estándar internacional voluntario más amplio (más de 200 indicadores) que mejora la reputación corporativa y facilita el acceso a financiamiento verde internacional. Idealmente, las empresas deben cumplir NIS 2025 primero y luego buscar certificación GRI para maximizar su ventaja competitiva."
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
              Implementación Garantizada NIS 2026:
              <br />
              <span className="text-yellow-accent">Asegure sus 30 IBSO y Evite Multas</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              No deje su cumplimiento al azar. Implementamos los 30 Indicadores Básicos de Sostenibilidad obligatorios en 6 meses con garantía de cumplimiento total ante el CINIF.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  Iniciar Diagnóstico de Brechas
                </Button>
              </Link>
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Ver Metodología de 6 Meses
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
                <Clock className="h-12 w-12 text-yellow-accent flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold text-navy">
                  El Tiempo se Agota: ¿Está su Empresa Lista para el Reporte Obligatorio de 2027?
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-6">
                A partir del 1 de enero de 2026, recopilar los datos de sostenibilidad ya no es opcional. Las empresas bajo NIF deben reportar 30 indicadores técnicos (IBSO) que abarcan desde emisiones GEI hasta brecha salarial. El 90% de las empresas mexicanas no cuentan con los sistemas de recolección de datos necesarios, exponiéndose a sanciones financieras y exclusión de mercados.
              </p>
              
              {/* Timeline hacia 2027 */}
              <div className="bg-yellow-accent/10 rounded-xl p-6 border border-yellow-accent/30">
                <h3 className="font-bold text-navy mb-4 text-center">Timeline de Cumplimiento 2026-2027</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-yellow-accent mb-2">Ene 2026</div>
                    <div className="text-sm text-gray-text">Inicio recolección datos</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-navy mb-2">Dic 2026</div>
                    <div className="text-sm text-gray-text">Cierre ejercicio fiscal</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border-2 border-red-500">
                    <div className="text-2xl font-bold text-red-500 mb-2">Mar 2027</div>
                    <div className="text-sm text-gray-text font-bold">Reporte NIS obligatorio</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloque 3: La Solución (Beneficios Tangibles) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                Metodología Certificada para un Cumplimiento Inatacable
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <Shield className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Recolección de Datos 360°</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Diseñamos el sistema para medir los 30 IBSO (Ambientales, Sociales y de Gobernanza).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <CheckCircle className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Garantía de Auditoría</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Si su empresa no pasa la revisión NIS, devolvemos el 100% de su inversión.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <CheckCircle className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Capacitación de Equipos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Formamos a su personal para que el reporte sea autónomo y eficiente año tras año.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Link to="/diagnostico-esg">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Quiero asegurar mi cumplimiento NIS ahora
                  </button>
                </Link>
              </div>
            </div>

            {/* Bloque 4: Autoridad y Confianza (Prueba Social) */}
            <div className="bg-gradient-to-br from-primary/10 to-green-success/10 rounded-2xl shadow-xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
                Expertise Técnico Avalado por Certificaciones Globales
              </h3>
              
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                Como el único consultor en Nuevo León certificado por GRI e IASE, aplicamos el estándar internacional más riguroso a la normativa local del CINIF. Hemos guiado a más de 500 empresas en su transformación hacia la sostenibilidad regulatoria.
              </p>

              {/* Sellos de Confianza */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  GRI Certified
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  IASE Certified
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <Shield className="h-5 w-5 mr-2" />
                  CINIF Compliant
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <Shield className="h-5 w-5 mr-2" />
                  STPS Registered
                </Badge>
              </div>

              {/* Dato de Impacto */}
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Garantía de Cero Multas en todas nuestras implementaciones 2024-2026
                </p>
              </div>
            </div>

            {/* Bloque 5: Cierre de Conversión (Footer CTA) */}
            <div className="bg-navy rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
              <p className="text-2xl md:text-3xl font-bold mb-8">
                La regulación NIS no espera. El momento de cerrar sus brechas de datos es hoy para evitar crisis en 2027.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/agendar">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Agendar Sesión de Diagnóstico NIS</span>
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
            <FAQSchema faqs={faqsNIS2025} pageTitle="Cumplimiento NIS 2025" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default CumplimientoNIS2024;
