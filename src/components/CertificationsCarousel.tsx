const CertificationsCarousel = () => {
  return (
    <section className="py-12 bg-gradient-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Certificaciones Internacionales</h2>
          <p className="text-white/80">Respaldado por las mejores instituciones del mundo</p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-right space-x-8">
            <div className="flex-shrink-0">
              <img 
                src="/assets/certificado-gri.jpg" 
                alt="Certificado GRI - Global Reporting Initiative" 
                className="h-32 w-auto object-contain bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/assets/certificado-iase.png" 
                alt="Certificado IASE - International Sustainable Business (ISB®)" 
                className="h-32 w-auto object-contain bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/assets/master-coach.jpg" 
                alt="Certificado MASTER COACH - AIAC" 
                className="h-32 w-auto object-contain bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/assets/certificado-stps.jpeg" 
                alt="Certificado STPS - Agente Capacitador Externo" 
                className="h-32 w-auto object-contain bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
              src="/assets/certificado-nis-2025.png"
                alt="Certificado NIS 2024 - Normas de Información de Sostenibilidad" 
                className="h-32 w-auto object-contain bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              />
            </div>
            {/* Duplicate images for seamless loop */}
            <div className="flex-shrink-0">
              <img 
                src="/assets/certificado-gri.jpg" 
                alt="Certificado GRI - Global Reporting Initiative" 
                className="h-32 w-auto object-contain bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/assets/certificado-iase.png" 
                alt="Certificado IASE - International Sustainable Business (ISB®)" 
                className="h-32 w-auto object-contain bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/assets/master-coach.jpg" 
                alt="Certificado MASTER COACH - AIAC" 
                className="h-32 w-auto object-contain bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/assets/certificado-stps.jpeg" 
                alt="Certificado STPS - Agente Capacitador Externo" 
                className="h-32 w-auto object-contain bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
              src="/assets/certificado-nis-2025.png"
                alt="Certificado NIS 2024 - Normas de Información de Sostenibilidad" 
                className="h-32 w-auto object-contain bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsCarousel;
