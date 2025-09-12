import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Consultoría ESG Pages
import CumplimientoNIS2025 from "./pages/consultoria-esg/CumplimientoNIS2025";
import CertificacionGRI from "./pages/consultoria-esg/CertificacionGRI";
import AuditoriaSostenibilidad from "./pages/consultoria-esg/AuditoriaSostenibilidad";
import ReportesESG from "./pages/consultoria-esg/ReportesESG";
import CapacitacionESG from "./pages/consultoria-esg/CapacitacionESG";

// Coaching Ejecutivo Pages
import LiderazgoSostenible from "./pages/coaching-ejecutivo/LiderazgoSostenible";
import TransicionLaboral from "./pages/coaching-ejecutivo/TransicionLaboral";
import HabilidadesDirectivas from "./pages/coaching-ejecutivo/HabilidadesDirectivas";
import EquiposGerenciales from "./pages/coaching-ejecutivo/EquiposGerenciales";

// Servicios Empresariales Pages
import AuditoriaComercial from "./pages/servicios-empresariales/AuditoriaComercial";
import SmartSales from "./pages/servicios-empresariales/SmartSales";
import GestionSucursales from "./pages/servicios-empresariales/GestionSucursales";
import ConsultoriaMDIES from "./pages/servicios-empresariales/ConsultoriaMDIES";

// Coaching Familiar Pages
import CoachTuHijo from "./pages/coaching-familiar/CoachTuHijo";
import OrientacionVocacional from "./pages/coaching-familiar/OrientacionVocacional";
import DinamicasFamiliares from "./pages/coaching-familiar/DinamicasFamiliares";

// Recursos y Contacto Pages
import BlogESG from "./pages/recursos-contacto/BlogESG";
import Webinars from "./pages/recursos-contacto/Webinars";
import Herramientas from "./pages/recursos-contacto/Herramientas";
import CasosExito from "./pages/recursos-contacto/CasosExito";
import Certificaciones from "./pages/recursos-contacto/Certificaciones";
import Contacto from "./pages/recursos-contacto/Contacto";
import Equipo from "./pages/recursos-contacto/Equipo";
import FAQ from "./pages/recursos-contacto/FAQ";
import Politicas from "./pages/recursos-contacto/Politicas";
import useAnchorNavigation from "./hooks/useAnchorNavigation";

const queryClient = new QueryClient();

const AppContent = () => {
  useAnchorNavigation();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      
      {/* Consultoría ESG Routes */}
      <Route path="/consultoria-esg/cumplimiento-nis-2025" element={<CumplimientoNIS2025 />} />
      <Route path="/consultoria-esg/certificacion-gri" element={<CertificacionGRI />} />
      <Route path="/consultoria-esg/auditoria-sostenibilidad" element={<AuditoriaSostenibilidad />} />
      <Route path="/consultoria-esg/reportes-esg" element={<ReportesESG />} />
      <Route path="/consultoria-esg/capacitacion-esg" element={<CapacitacionESG />} />
      
      {/* Coaching Ejecutivo Routes */}
      <Route path="/coaching-ejecutivo/liderazgo-sostenible" element={<LiderazgoSostenible />} />
      <Route path="/coaching-ejecutivo/transicion-laboral" element={<TransicionLaboral />} />
      <Route path="/coaching-ejecutivo/habilidades-directivas" element={<HabilidadesDirectivas />} />
      <Route path="/coaching-ejecutivo/equipos-gerenciales" element={<EquiposGerenciales />} />
      
      {/* Servicios Empresariales Routes */}
      <Route path="/servicios-empresariales/auditoria-comercial" element={<AuditoriaComercial />} />
      <Route path="/servicios-empresariales/smart-sales" element={<SmartSales />} />
      <Route path="/servicios-empresariales/gestion-sucursales" element={<GestionSucursales />} />
      <Route path="/servicios-empresariales/consultoria-mdies" element={<ConsultoriaMDIES />} />
      
      {/* Coaching Familiar Routes */}
      <Route path="/coaching-familiar/coach-tu-hijo" element={<CoachTuHijo />} />
      <Route path="/coaching-familiar/orientacion-vocacional" element={<OrientacionVocacional />} />
      <Route path="/coaching-familiar/dinamicas-familiares" element={<DinamicasFamiliares />} />
      
      {/* Recursos y Contacto Routes */}
      <Route path="/recursos/blog" element={<BlogESG />} />
      <Route path="/recursos/webinars" element={<Webinars />} />
      <Route path="/recursos/herramientas" element={<Herramientas />} />
      <Route path="/recursos/casos-exito" element={<CasosExito />} />
      <Route path="/recursos/certificaciones" element={<Certificaciones />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/equipo" element={<Equipo />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/politicas" element={<Politicas />} />
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
