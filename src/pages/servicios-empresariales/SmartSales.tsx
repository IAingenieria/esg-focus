import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Shield, CheckCircle, Phone, Calendar, AlertTriangle, Award } from "lucide-react";
import { Link } from "react-router-dom";

const SmartSales = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Bloque 1: Hero Section (El Gancho) */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Smart Sales:
              <br />
              <span className="text-yellow-accent">Convierta su Cumplimiento ESG en su Mayor Ventaja de Cierre Comercial</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              El 85% de los clientes B2B ya evalúan su sostenibilidad antes de comprar. Capacitamos a su equipo para vender valor, eficiencia y bajo riesgo regulatorio.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/diagnostico-esg">
                <Button size="lg" variant="cta" className="text-lg px-8 py-4">
                  Potenciar mis Ventas con ESG
                </Button>
              </Link>
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Ver Auditoría Comercial Sostenible
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
                  ¿Está Perdiendo Contratos por No Saber Comunicar su Valor ESG?
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-6">
                Sus competidores ya están usando sus certificaciones y reportes NIS para desplazarlo de las cadenas de suministro. Si su equipo comercial sigue vendiendo solo "precio y calidad", está ignorando el factor de decisión número uno de los grandes corporativos en 2026: el cumplimiento de sostenibilidad y la reducción de huella de Alcance 3.
              </p>
              
              {/* Infografía: Proceso de Decisión B2B 2026 */}
              <div className="bg-yellow-accent/10 rounded-xl p-6 border border-yellow-accent/30">
                <h3 className="font-bold text-navy mb-4 text-center">El Proceso de Decisión de Compra B2B en 2026</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">1°</div>
                    <div className="text-sm text-gray-text font-bold">Cumplimiento ESG</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">2°</div>
                    <div className="text-sm text-gray-text">Calidad</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">3°</div>
                    <div className="text-sm text-gray-text">Precio</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">4°</div>
                    <div className="text-sm text-gray-text">Servicio</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloque 3: La Solución (Beneficios Tangibles) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                Estrategia Comercial de Alto Impacto y Bajo Riesgo
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <Target className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Diferenciación Real</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Transformamos sus logros en los 30 IBSO en argumentos de venta irrefutables.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Auditoría de Eficiencia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Identificamos ahorros operativos que mejoran su margen y su perfil ambiental simultáneamente.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <Award className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <CardTitle className="text-center text-navy">Acceso a Grandes Cuentas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-text text-center">
                      Posicionamos su empresa como el "Proveedor de Bajo Riesgo" preferido por las multinacionales.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Link to="/diagnostico-esg">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Quiero ser proveedor preferente
                  </button>
                </Link>
              </div>
            </div>

            {/* Bloque 4: Autoridad y Confianza (Prueba Social) */}
            <div className="bg-gradient-to-br from-primary/10 to-green-success/10 rounded-2xl shadow-xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
                Expertise Comercial Vinculado a la Excelencia en Gobernanza
              </h3>
              
              <p className="text-lg md:text-xl text-gray-text leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                Nuestra metodología Smart Sales integra la rigurosidad del cumplimiento GRI con estrategias de ventas inteligentes, probadas en más de 500 empresas manufactureras y de servicios en México.
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
                  Empresas que implementan Smart Sales ESG reportan un incremento del 20% en la tasa de cierre con grandes corporativos
                </p>
              </div>
            </div>

            {/* Bloque 5: Cierre de Conversión (Footer CTA) */}
            <div className="bg-navy rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
              <p className="text-2xl md:text-3xl font-bold mb-8">
                Deje de competir por precio. Empiece a ganar por cumplimiento y visión de futuro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/agendar">
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Solicitar Auditoría Comercial Sostenible</span>
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSales;
