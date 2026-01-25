import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSchema from "@/components/FAQSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, BarChart3, FileText, TrendingUp, Phone, Calendar, Shield, AlertTriangle, DollarSign } from "lucide-react";

const AuditoriaSostenibilidad = () => {
  const faqsAuditoriaESG = [
    {
      question: "¿Qué es el Costo de Carbono Sombra y por qué es importante?",
      answer: "El Costo de Carbono Sombra es el valor monetario asignado internamente a cada tonelada de CO2 emitida por la empresa, aunque no exista aún un impuesto al carbono en México. Este cálculo permite a los CEOs tomar decisiones de inversión considerando el riesgo futuro de regulaciones climáticas. Por ejemplo, si su empresa emite 10,000 toneladas de CO2 al año y el costo sombra es de $50 USD por tonelada, su pasivo oculto es de $500,000 USD anuales que podrían convertirse en multas reales en 2027-2028."
    },
    {
      question: "¿Cuáles son los 6 KPIs críticos del Dashboard Ejecutivo ESG?",
      answer: "Los 6 KPIs que todo CEO debe monitorear son: 1) Intensidad de Carbono (toneladas CO2 por millón de pesos de ingresos), 2) Costo de Carbono Sombra (pasivo climático oculto), 3) Tasa de Rotación Voluntaria (indicador de riesgo social), 4) Índice de Diversidad de Género en posiciones directivas, 5) ROI ESG (retorno de inversión en iniciativas de sostenibilidad), y 6) Nivel de Cumplimiento Regulatorio (porcentaje de los 30 IBSO implementados)."
    },
    {
      question: "¿Cuánto cuesta una Auditoría ESG 360° y cuál es el ROI?",
      answer: "El costo de una Auditoría ESG 360° varía entre $150,000 y $350,000 MXN dependiendo del tamaño de la empresa y la complejidad de sus operaciones. Sin embargo, nuestras auditorías han identificado ahorros operativos promedio del 15% en el primer año (eficiencia energética, reducción de residuos, optimización de agua), lo que significa que la auditoría se paga sola en 6-8 meses. Además, evita multas de la CNBV que pueden alcanzar millones de pesos."
    },
    {
      question: "¿Qué diferencia hay entre una auditoría ESG y una auditoría financiera tradicional?",
      answer: "Una auditoría financiera tradicional revisa estados contables y cumplimiento fiscal. Una Auditoría ESG 360° evalúa riesgos no financieros que impactan el valor de la empresa: riesgos climáticos (huella de carbono, dependencia de combustibles fósiles), riesgos sociales (rotación de talento, conflictos laborales), y riesgos de gobernanza (corrupción, falta de diversidad en el consejo). Estos riesgos ESG pueden representar hasta el 30% del valor de mercado de una empresa según estudios de McKinsey y MSCI."
    },
    {
      question: "¿Cada cuánto tiempo debo realizar una Auditoría ESG?",
      answer: "Se recomienda una Auditoría ESG completa cada 12 meses para empresas en proceso de certificación o con alto riesgo regulatorio. Para empresas ya certificadas, una auditoría de seguimiento cada 18-24 meses es suficiente, complementada con monitoreo trimestral del Dashboard Ejecutivo. Empresas que buscan financiamiento verde o que participan en licitaciones públicas deben tener auditorías actualizadas no mayores a 12 meses."
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
              Auditoría ESG 360°:
              <br />
              <span className="text-yellow-accent">El Mínimo Necesario para un CEO</span>
              <br />
              <span className="text-sm md:text-xl">(Riesgo, ROI y Desempeño)</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Traducimos la complejidad de la sostenibilidad al lenguaje del Consejo: Dinero y Riesgo. Obtenga su Dashboard Ejecutivo con los 6 KPIs críticos para la toma de decisiones.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  Solicitar Auditoría Estratégica
                </Button>
              </Link>
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Ver KPIs del Dashboard Ejecutivo
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
                  ¿Está Navegando a Ciegas ante los Riesgos de Gobernanza?
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-6">
                Sin una auditoría objetiva, su empresa ignora su verdadero Costo de Carbono Sombra y su exposición a incidentes de gobernanza. En el nuevo entorno regulatorio de México, lo que no se mide no solo no se gestiona, sino que se convierte en una responsabilidad legal para el CEO y el Consejo de Administración.
              </p>
              
              {/* Iceberg de Riesgos ESG */}
              <div className="bg-yellow-accent/10 rounded-xl p-6 border border-yellow-accent/30">
                <h3 className="font-bold text-navy mb-4 text-center">Iceberg de Riesgos ESG</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-3">Lo que se ve (10%)</h4>
                    <ul className="space-y-2 text-sm text-gray-text">
                      <li>✓ Reportes anuales</li>
                      <li>✓ Certificaciones básicas</li>
                      <li>✓ Cumplimiento visible</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                    <h4 className="font-bold text-red-600 mb-3">Lo que la auditoría revela (90%)</h4>
                    <ul className="space-y-2 text-sm text-gray-text">
                      <li>⚠ Costo de carbono oculto</li>
                      <li>⚠ Riesgos de gobernanza</li>
                      <li>⚠ Exposición regulatoria</li>
                      <li>⚠ Ineficiencias operativas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloque 3: La Solución (Beneficios Tangibles) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                Inteligencia de Negocio para un Liderazgo Sostenible
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <DollarSign className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Cálculo de ROI ESG</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Identificamos ahorros directos en energía, agua y residuos que pagan la auditoría por sí sola.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <BarChart3 className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Dashboard en Tiempo Real</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Visualice su Intensidad de Carbono y Tasa de Rotación Voluntaria en un panel ejecutivo claro.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Benchmark Sectorial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Sepa exactamente dónde se encuentra frente a sus competidores líderes en México.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Link to="/diagnostico-esg">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Quiero mi Dashboard Ejecutivo ESG
                  </button>
                </Link>
              </div>
            </div>

            {/* Bloque 4: Autoridad y Confianza (Prueba Social) */}
            <div className="bg-gradient-to-br from-primary/10 to-green-success/10 rounded-2xl shadow-xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
                El Estándar de Auditoría que los Bancos e Inversionistas Confían
              </h3>
              
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                Nuestras auditorías siguen los protocolos de IASE y GRI, asegurando que los datos presentados sean válidos para la obtención de créditos verdes y valoraciones empresariales superiores.
              </p>

              {/* Sellos de Confianza */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  IASE Certified
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  GRI Standards
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <Shield className="h-5 w-5 mr-2" />
                  WABC Coach
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <FileText className="h-5 w-5 mr-2" />
                  AIAC Master
                </Badge>
              </div>

              {/* Dato de Impacto */}
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Nuestras auditorías han identificado ahorros operativos de hasta el 15% en el primer año
                </p>
              </div>
            </div>

            {/* Bloque 5: Cierre de Conversión (Footer CTA) */}
            <div className="bg-navy rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
              <p className="text-2xl md:text-3xl font-bold mb-8">
                No permita que un riesgo ESG invisible destruya el valor de su empresa. Obtenga la claridad que su posición de liderazgo exige.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/agendar">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Agendar Auditoría 360°</span>
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
            <FAQSchema faqs={faqsAuditoriaESG} pageTitle="Auditoría ESG 360°" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditoriaSostenibilidad;
