import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail, Phone, FileText } from "lucide-react";

const AvisoPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              <Shield className="h-4 w-4 mr-2" />
              Protección de Datos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Aviso de <span className="text-primary">Privacidad</span>
            </h1>
            <p className="text-xl text-gray-light">
              FOCUS COACHING & CONSULTING / ESG CONSULTORES
            </p>
            <p className="text-lg text-gray-light mt-2">
              Última actualización: Octubre 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Identidad y Domicilio */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Identidad y Domicilio del Responsable</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-text">
                <p>
                  ESG Consultores, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad, es responsable del tratamiento de los datos personales que nos proporcione.
                </p>
                <div>
                  <p className="font-semibold text-navy">Domicilio:</p>
                  <p>Monterrey, Nuevo León, México</p>
                </div>
                <div>
                  <p className="font-semibold text-navy">Datos de contacto:</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <p>Teléfono: +52 818 029 0061</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <p>Correo electrónico: info@esgconsultores.com.mx</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Datos Personales */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Datos Personales que Recabamos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-text">
                <p>
                  Para las finalidades señaladas en el presente Aviso de Privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente, cuando solicita nuestros servicios, cuando visita nuestro sitio web, o cuando nos contacta por cualquier medio.
                </p>
                <div>
                  <p className="font-semibold text-navy mb-2">Datos de identificación y contacto:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nombre completo</li>
                    <li>Edad y fecha de nacimiento</li>
                    <li>Domicilio</li>
                    <li>Teléfono fijo y/o celular</li>
                    <li>Correo electrónico</li>
                    <li>RFC</li>
                    <li>Firma autógrafa</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-navy mb-2">Datos laborales y profesionales:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Puesto o cargo</li>
                    <li>Empresa donde labora</li>
                    <li>Domicilio laboral</li>
                    <li>Teléfono de oficina</li>
                    <li>Correo electrónico corporativo</li>
                    <li>Experiencia profesional</li>
                    <li>Educación y certificaciones</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-navy mb-2">Datos financieros y patrimoniales:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Información de facturación</li>
                    <li>Datos bancarios (solo cuando sea necesario para pagos)</li>
                    <li>Razón social</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Finalidades */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Finalidades del Tratamiento de sus Datos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-text">
                <div>
                  <p className="font-semibold text-navy mb-2">Finalidades Primarias (necesarias para el servicio):</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Prestación de nuestros servicios de consultoría y coaching</li>
                    <li>Identificación y contacto con usted</li>
                    <li>Responder a sus solicitudes, dudas y comentarios</li>
                    <li>Elaboración de propuestas comerciales y contratos</li>
                    <li>Facturación y cobranza</li>
                    <li>Evaluación de la calidad del servicio prestado</li>
                    <li>Seguimiento de proyectos y servicios contratados</li>
                    <li>Cumplimiento de obligaciones legales y fiscales</li>
                    <li>Gestión administrativa y contable</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-navy mb-2">Finalidades Secundarias (opcionales):</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Envío de información sobre nuevos servicios, productos y promociones</li>
                    <li>Invitaciones a eventos, conferencias, talleres y webinars</li>
                    <li>Envío de boletines informativos y contenido de valor sobre temas ESG</li>
                    <li>Estudios de mercado y encuestas de satisfacción</li>
                    <li>Elaboración de estadísticas y tendencias del sector</li>
                    <li>Fines de mercadotecnia, publicidad y prospección comercial</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    En caso de que no desee que sus datos personales sean tratados para estas finalidades secundarias, puede manifestarlo enviando un correo a info@esgconsultores.com.mx con el asunto "Limitación de Finalidades".
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Derechos ARCO */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Derechos ARCO y Revocación del Consentimiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-text">
                <p>
                  Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
                </p>
                <div>
                  <p className="font-semibold text-navy mb-2">Para ejercer sus derechos ARCO:</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <p>Correo: info@esgconsultores.com.mx</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <p>Teléfono: +52 818 029 0061</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-navy mb-2">Su solicitud deberá contener:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nombre completo del titular</li>
                    <li>Domicilio u otro medio para comunicarle la respuesta</li>
                    <li>Documentos que acrediten su identidad (INE/Pasaporte)</li>
                    <li>Descripción clara y precisa de los datos sobre los que busca ejercer alguno de los derechos ARCO</li>
                    <li>Cualquier documento o información que facilite la localización de sus datos</li>
                  </ul>
                </div>
                <p className="text-sm">
                  <span className="font-semibold text-navy">Plazo de respuesta:</span> 20 días hábiles contados desde la fecha en que se recibió su solicitud.
                </p>
              </CardContent>
            </Card>

            {/* Transferencia de Datos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Transferencia de Datos Personales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-text">
                <p>
                  Sus datos personales pueden ser compartidos dentro y fuera del país con las siguientes entidades:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Autoridades fiscales (SAT) - Cumplimiento de obligaciones fiscales</li>
                  <li>Instituciones certificadoras (GRI, NIS) - Procesos de certificación</li>
                  <li>Proveedores de servicios tecnológicos - Almacenamiento y gestión</li>
                  <li>Despachos contables y fiscales - Servicios administrativos</li>
                  <li>Autoridades competentes - Requerimientos legales</li>
                </ul>
                <p className="text-sm">
                  Para estas transferencias no se requiere su consentimiento, en términos de los artículos 36 y 37 de la LFPDPPP.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Uso de Cookies y Web Beacons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-text">
                <p>
                  En nuestra página web utilizamos cookies, web beacons y otras tecnologías de rastreo para monitorear su comportamiento como usuario, brindarle un mejor servicio y ofrecerle nuevos productos basados en sus preferencias.
                </p>
                <div>
                  <p className="font-semibold text-navy mb-2">Datos que obtenemos:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Identificadores y contraseñas de sesión</li>
                    <li>Idioma preferido</li>
                    <li>Región del usuario</li>
                    <li>Tipo de navegador y sistema operativo</li>
                    <li>Páginas visitadas y búsquedas realizadas</li>
                  </ul>
                </div>
                <p className="text-sm">
                  Estas tecnologías pueden deshabilitarse siguiendo los procedimientos de su navegador.
                </p>
              </CardContent>
            </Card>

            {/* Cambios */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Cambios al Aviso de Privacidad</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-text">
                <p>
                  Este Aviso de Privacidad puede sufrir modificaciones. Nos comprometemos a mantenerlo informado a través de:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Publicación en nuestro sitio web</li>
                  <li>Correo electrónico</li>
                  <li>Comunicación directa en nuestras instalaciones</li>
                </ul>
              </CardContent>
            </Card>

            {/* Autoridad */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Autoridad de Protección de Datos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-text">
                <p>
                  Si considera que su derecho a la protección de datos personales ha sido lesionado, puede interponer su inconformidad ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-navy">INAI</p>
                  <p>Sitio web: www.inai.org.mx</p>
                  <p>Teléfono: 800 835 43 24</p>
                </div>
              </CardContent>
            </Card>

            {/* Aceptación */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-gray-text text-center">
                  Al proporcionar sus datos personales a ESG Consultores por cualquier medio, usted acepta y consiente que sus datos personales sean tratados conforme a los términos y condiciones del presente Aviso de Privacidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvisoPrivacidad;
