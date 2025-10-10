import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, AlertTriangle, ShieldCheck, Eye } from "lucide-react";

const certifications = [
  {
    title: "GRI - Global Reporting Initiative",
    subtitle: "Certificación en Sostenibilidad y Reportes Corporativos",
    description: "La Global Reporting Initiative es la organización internacional líder en estándares de sostenibilidad corporativa, utilizada por más de 10,000 organizaciones en 100+ países.",
    image: "/assets/certificado-gri.jpg",
    points: [
      { title: "Expertise en Sostenibilidad", text: "Dominio completo de los estándares GRI para reportes de sostenibilidad" },
      { title: "Responsabilidad Corporativa", text: "Capacidad para implementar y auditar prácticas empresariales sostenibles" },
      { title: "Impacto Global", text: "Conocimiento de mejores prácticas internacionales en ESG (Environmental, Social & Governance)" },
      { title: "Transparencia Empresarial", text: "Habilidad para desarrollar reportes que cumplan con estándares internacionales" },
    ]
  },
  {
    title: "IASE - International Sustainable Business (ISB®)",
    subtitle: "Certificación en Negocios Sostenibles Internacionales - Level I",
    description: "La International Association for Sustainable Economy (IASE) es una organización global con sede en Londres, reconocida por certificar profesionales en modelos de negocio sostenibles y economía regenerativa.",
    image: "/assets/certificado-iase.png",
    points: [
      { title: "Modelos de Negocio Sostenibles", text: "Diseño de estrategias que generen valor económico, social y ambiental" },
      { title: "Economía Circular", text: "Implementación de sistemas regenerativos y de circuito cerrado" },
      { title: "Impacto Medible", text: "Metodologías para cuantificar y reportar el impacto sostenible" },
      { title: "Innovación Sostenible", text: "Desarrollo de soluciones disruptivas con propósito" },
    ]
  },
  {
    title: "MASTER COACH - AIAC",
    subtitle: "Certificación Internacional en Coaching Ejecutivo y Organizacional",
    description: "La certificación Organizational Master Coach por AIAC es el nivel más alto en la profesión del coaching. Requiere un programa intensivo de 300 horas de formación especializada.",
    image: "/assets/master-coach.jpg",
    points: [
      { title: "Coaching Organizacional", text: "Especialización en transformación de sistemas organizacionales completos" },
      { title: "Liderazgo Transformacional", text: "Capacidad para desarrollar líderes de alto rendimiento a nivel ejecutivo" },
      { title: "Metodologías Avanzadas", text: "Dominio de técnicas de coaching de última generación validadas internacionalmente" },
      { title: "Resultados Medibles", text: "Historial comprobado de transformación organizacional y desarrollo de talento" },
    ]
  },
  {
    title: "STPS - Agente Capacitador Externo",
    subtitle: "Acreditación Oficial de la Secretaría del Trabajo y Previsión Social",
    description: "Esta acreditación oficial del Gobierno Federal mexicano autoriza al profesional para diseñar, impartir y evaluar programas de capacitación laboral con validez oficial y beneficios fiscales para las empresas.",
    image: "/assets/certificado-stps.jpeg",
    points: [
      { title: "Diseño Curricular Autorizado", text: "Capacidad para crear programas de capacitación que cumplan con estándares oficiales mexicanos" },
      { title: "Impartición Profesional Certificada", text: "Autorización gubernamental para conducir programas de capacitación empresarial" },
      { title: "Evaluación y Certificación Oficial", text: "Facultad para evaluar competencias y otorgar constancias con validez ante STPS" },
      { title: "Deducibilidad Fiscal Total", text: "Los gastos de capacitación con agentes STPS son 100% deducibles de impuestos" },
    ]
  },
  {
    title: "NIS 2024 - Normas de Información de Sostenibilidad",
    subtitle: "Certificación Actualizada en Información Financiera y de Sostenibilidad",
    description: "Capacitación más reciente (enero 2024) en el marco regulatorio mexicano para integración de información financiera y de sostenibilidad, otorgada por el IMCP y CINIF.",
    image: "/assets/certificado-nis-2024.png",
    points: [
      { title: "Marco Regulatorio Vigente", text: "Conocimiento de las normativas mexicanas más recientes en sostenibilidad" },
      { title: "Integración Financiera-Sostenibilidad", text: "Unificación de reportes bajo nuevos estándares" },
      { title: "Cumplimiento NDPC", text: "Acreditación para el cumplimiento de la Norma de Desarrollo Profesional Continuo" },
      { title: "Aplicación Empresarial", text: "Implementación práctica de normas en contextos empresariales mexicanos" },
    ]
  }
];

const CertificacionesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Certificaciones Profesionales</h1>
              <p className="text-xl md:text-2xl text-gray-light">Lic. Olegario Ríos Nordhausen</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="/assets/lic-olegario-rios.jpeg" alt="Lic. Olegario Ríos Nordhausen" className="rounded-full h-64 w-64 object-cover border-4 border-primary shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Respaldo Internacional y Excelencia Académica</h2>
            <p className="text-lg text-gray-text">El Lic. Olegario Ríos Nordhausen cuenta con un conjunto de certificaciones de prestigio internacional que avalan su expertise profesional y compromiso con la excelencia. Estas credenciales representan años de formación especializada y el cumplimiento de estándares rigurosos reconocidos mundialmente.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-8">
            {certifications.map((cert, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none">
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="bg-gray-light/20 p-6">
                    <Badge variant="secondary" className="w-fit mb-2">{cert.subtitle}</Badge>
                    <CardTitle className="text-2xl text-navy">{cert.title}</CardTitle>
                    <CardDescription className="pt-2">{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {cert.points.map((point, pIndex) => (
                        <div key={pIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-navy">{point.title}</h4>
                            <p className="text-sm text-gray-text">{point.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div className="border-t px-6 py-4 bg-white">
                    <AccordionTrigger className="text-primary hover:no-underline p-0 w-full flex justify-start">
                      <div className="flex items-center space-x-2">
                        <Eye className="h-5 w-5" />
                        <span>Ver Certificado</span>
                      </div>
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="p-6 pt-4 bg-gray-light/20">
                    <div className="flex justify-center">
                      <img src={cert.image} alt={`Certificado ${cert.title}`} className="rounded-lg shadow-md max-w-full md:max-w-lg" />
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">¿Por Qué es Imperativo Contar con un Instructor Certificado?</h2>
            <p className="text-lg text-gray-text max-w-3xl mx-auto">La diferencia entre un consultor autodidacta y un profesional certificado puede determinar el éxito o fracaso de una iniciativa estratégica.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/50 shadow-lg">
              <CardHeader className="flex-row items-center gap-4">
                <AlertTriangle className="h-10 w-10 text-destructive" />
                <CardTitle className="text-destructive">Riesgos de Profesionales No Certificados</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-text">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-destructive/80 mr-2 mt-1" /><span>Implementaciones deficientes y resultados contraproducentes.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-destructive/80 mr-2 mt-1" /><span>Pérdida de inversión en procesos que no cumplen estándares.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-destructive/80 mr-2 mt-1" /><span>Riesgos legales y daño reputacional por incumplimiento.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-destructive/80 mr-2 mt-1" /><span>Imposibilidad de obtener certificaciones corporativas (ISO, B-Corp).</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/50 shadow-lg">
              <CardHeader className="flex-row items-center gap-4">
                <ShieldCheck className="h-10 w-10 text-primary" />
                <CardTitle className="text-primary">Valor de la Certificación Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-text">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary/80 mr-2 mt-1" /><span>Garantía de calidad con metodologías probadas internacionalmente.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary/80 mr-2 mt-1" /><span>Credibilidad institucional con validación de organismos líderes.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary/80 mr-2 mt-1" /><span>Actualización constante y acceso a una red global de expertos.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary/80 mr-2 mt-1" /><span>Respaldo institucional y compromiso con códigos de ética.</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">El Valor Integral de estas Certificaciones</h2>
                    <p className="text-lg text-gray-light">Una combinación única de competencias que integra autorización gubernamental, certificaciones internacionales y liderazgo transformacional.</p>
                </div>
                <ul className="space-y-4 text-lg">
                    <li className="flex items-start"><Award className="h-6 w-6 text-primary mr-3 mt-1" /><span><span className="font-bold">Deducibilidad Fiscal Garantizada:</span> Todos los servicios de capacitación son 100% deducibles gracias al registro STPS.</span></li>
                    <li className="flex items-start"><Award className="h-6 w-6 text-primary mr-3 mt-1" /><span><span className="font-bold">Cobertura Regulatoria Completa:</span> Cumplimiento con estándares internacionales (GRI, IASE) y normativa mexicana (NIS 2024).</span></li>
                    <li className="flex items-start"><Award className="h-6 w-6 text-primary mr-3 mt-1" /><span><span className="font-bold">Liderazgo Transformacional Certificado:</span> Master Coach con 300 horas de formación y autorización gubernamental.</span></li>
                    <li className="flex items-start"><Award className="h-6 w-6 text-primary mr-3 mt-1" /><span><span className="font-bold">Respaldo Institucional Múltiple:</span> Validación por organismos internacionales, nacionales y el Gobierno Federal.</span></li>
                </ul>
            </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto text-xl italic text-gray-text border-l-4 border-primary pl-6">
            "La verdadera medida del profesionalismo no está solo en las certificaciones obtenidas, sino en la capacidad de transformar conocimiento en resultados tangibles para nuestros clientes."
            <footer className="mt-4 not-italic font-semibold text-navy">- Lic. Olegario Ríos Nordhausen</footer>
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificacionesPage;
