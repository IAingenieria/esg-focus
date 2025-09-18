import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

// Servicios Empresariales Pages
import AuditoriaComercial from "./pages/servicios-empresariales/AuditoriaComercial";
import SmartSales from "./pages/servicios-empresariales/SmartSales";
import GestionSucursales from "./pages/servicios-empresariales/GestionSucursales";

// Coaching Familiar Pages
import CoachTuHijo from "./pages/coaching-familiar/CoachTuHijo";
import OrientacionVocacional from "./pages/coaching-familiar/OrientacionVocacional";
import DinamicasFamiliares from "./pages/coaching-familiar/DinamicasFamiliares";

// Recursos y Contacto Pages
import Webinars from "./pages/recursos-contacto/Webinars";
import Herramientas from "./pages/recursos-contacto/Herramientas";
import CasosExito from "./pages/recursos-contacto/CasosExito";
import Certificaciones from "./pages/recursos-contacto/Certificaciones";
import Contacto from "./pages/recursos-contacto/Contacto";
import Equipo from "./pages/recursos-contacto/Equipo";
import FAQ from "./pages/recursos-contacto/FAQ";
import Politicas from "./pages/recursos-contacto/Politicas";
import Agendar from "./pages/recursos-contacto/Agendar";
import DiagnosticoESG from "./pages/recursos-contacto/DiagnosticoESG";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/agendar';

  useEffect(() => {
    const fixNavigation = (e: Event) => {
      e.stopPropagation();
    };

    // We use a timeout to ensure this runs after the conflicting script
    setTimeout(() => {
      const navLinks = document.querySelectorAll('header a');
      navLinks.forEach(link => {
        link.addEventListener('click', fixNavigation, true); // Use capture phase
      });
    }, 100);

    return () => {
      const navLinks = document.querySelectorAll('header a');
      navLinks.forEach(link => {
        link.removeEventListener('click', fixNavigation, true);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20"> {/* pt-20 to offset fixed header */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultoria-esg/cumplimiento-nis-2025" element={<CumplimientoNIS2025 />} />
          <Route path="/consultoria-esg/certificacion-gri" element={<CertificacionGRI />} />
          <Route path="/consultoria-esg/auditoria-sostenibilidad" element={<AuditoriaSostenibilidad />} />
          <Route path="/consultoria-esg/reportes-esg" element={<ReportesESG />} />
          <Route path="/consultoria-esg/capacitacion-esg" element={<CapacitacionESG />} />
          <Route path="/coaching-ejecutivo/liderazgo-sostenible" element={<LiderazgoSostenible />} />
          <Route path="/coaching-ejecutivo/transicion-laboral" element={<TransicionLaboral />} />
          <Route path="/servicios-empresariales/auditoria-comercial" element={<AuditoriaComercial />} />
          <Route path="/servicios-empresariales/smart-sales" element={<SmartSales />} />
          <Route path="/servicios-empresariales/gestion-sucursales" element={<GestionSucursales />} />
          <Route path="/coaching-familiar/coach-tu-hijo" element={<CoachTuHijo />} />
          <Route path="/coaching-familiar/orientacion-vocacional" element={<OrientacionVocacional />} />
          <Route path="/coaching-familiar/dinamicas-familiares" element={<DinamicasFamiliares />} />
          <Route path="/recursos/webinars" element={<Webinars />} />
          <Route path="/recursos/herramientas" element={<Herramientas />} />
          <Route path="/recursos/casos-exito" element={<CasosExito />} />
          <Route path="/recursos/certificaciones" element={<Certificaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/diagnostico-esg" element={<DiagnosticoESG />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
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
