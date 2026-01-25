import React, { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageTitle?: string;
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs, pageTitle }) => {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    script.id = 'faq-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [faqs]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
          Preguntas Frecuentes {pageTitle && `- ${pageTitle}`}
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-xl font-bold text-navy mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-text leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default FAQSchema;
