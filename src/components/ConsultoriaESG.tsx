import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Shield, TrendingUp, FileText, GraduationCap } from "lucide-react";

const ConsultoriaESG = () => {
  return (
    <>
      <section id="consultoria-esg-2" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Bloque 2: El Problema (Urgencia Regulatoria) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-yellow-accent">
              <div className="flex items-start gap-4 mb-6">
                <Clock className="h-12 w-12 text-yellow-accent flex-shrink-0" />
                <h2 className="text-3xl md:text-4xl font-bold text-navy">
                  ¿Por Qué la Gobernanza ESG es el Riesgo Crítico de su Empresa en 2026?
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-6">
                La verdadera sostenibilidad de una empresa se cimienta en una Gobernanza (G) robusta y a prueba de riesgos. Con la entrada en vigor de las Normas de Información de Sostenibilidad (NIS) del CINIF el 1 de enero de 2026, el reporte ESG dejó de ser una opción ética para convertirse en una obligación regulatoria para toda empresa que presente estados financieros bajo NIF. El incumplimiento se traduce directamente en un riesgo financiero inminente.
              </p>
              
              {/* Elemento Visual: Multas */}
              <div className="bg-yellow-accent/10 rounded-xl p-6 border border-yellow-accent/30">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="text-center flex-1 min-w-[200px]">
                    <div className="text-4xl md:text-5xl font-bold text-yellow-accent mb-2">$580,000</div>
                    <div className="text-sm text-gray-text">Multa CNBV</div>
                  </div>
                  <div className="text-center flex-1 min-w-[200px]">
                    <div className="text-4xl md:text-5xl font-bold text-navy mb-2">30</div>
                    <div className="text-sm text-gray-text">Indicadores IBSO</div>
                  </div>
                  <div className="text-center flex-1 min-w-[200px]">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2026</div>
                    <div className="text-sm text-gray-text">Vigencia NIS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloque 3: La Solución (Beneficios Tangibles) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                Mitigue el Riesgo de Multas y Sanciones Regulatorias
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <Shield className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Blindaje Legal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Evite multas de la CNBV, SEMARNAT y SAT por reportes incorrectos de los 30 IBSO.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Claridad Técnica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Transformamos la complejidad de la norma NIS B-1 en un proceso paso a paso.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <CheckCircle className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Garantía de Cumplimiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Procesos validados que aseguran que su reporte sea inatacable.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Link to="/diagnostico-esg">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Quiero blindar mi empresa ahora
                  </button>
                </Link>
              </div>
            </div>

            {/* Bloque 4: Autoridad y Confianza (Prueba Social) */}
            <div className="bg-gradient-to-br from-primary/10 to-green-success/10 rounded-2xl shadow-xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
                El Único Consultor Certificado para Liderar su Transformación
              </h3>
              
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                Somos el único consultor en Nuevo León con las certificaciones internacionales GRI e IASE, lo que garantiza que su cumplimiento no solo es localmente válido, sino globalmente reconocido. Esta credibilidad es su pasaporte para acceder a financiamiento verde y ser proveedor preferente de multinacionales.
              </p>

              {/* Sellos de Confianza */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  GRI Certified
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  IASE Certified
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <FileText className="h-5 w-5 mr-2" />
                  STPS Registered
                </Badge>
                <Badge className="bg-green-success text-white px-6 py-3 text-base">
                  <Shield className="h-5 w-5 mr-2" />
                  AIAC Master
                </Badge>
              </div>

              {/* Dato de Impacto */}
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  16 años de experiencia y +300 empresas transformadas en Nuevo León
                </p>
              </div>
            </div>

            {/* Bloque 5: Cierre de Conversión (Footer CTA) */}
            <div className="bg-navy rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
              <p className="text-2xl md:text-3xl font-bold mb-8">
                No espere a 2027 para descubrir que su empresa no cumple. El momento de medir los 30 IBSO es hoy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/agendar">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <span>Agendar Consulta Estratégica con Olegario Ríos</span>
                  </button>
                </Link>
                <a href="https://api.whatsapp.com/send/?phone=5218180290061&text=Hola%2C+me+interesa+informaci%C3%B3n+sobre+sus+servicios+de+consultor%C3%ADa+ESG&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-success hover:bg-green-success/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    WhatsApp Directo: +52 818 029 0061
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default ConsultoriaESG;