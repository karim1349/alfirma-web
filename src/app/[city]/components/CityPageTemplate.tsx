"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../home/components/ContactForm";
import NavBar from "../../home/components/NavBar";

export interface LocationData {
  name: string;
  country: string;
  region: string;
  flagEmoji: string;
  coordinates: { lat: number; lng: number };
  description: string;
  keywords: string;
  marketInsights: string;
  technologies: string;
  achievements: string;
  caseStudies?: Array<{
    title: string;
    description: string;
    technologies: string[];
    image?: string;
  }>;
  faqs?: Array<{ question: string; answer: string }>;
}

interface CityPageTemplateProps {
  location: LocationData;
  currentSlug: string;
  otherCities: Array<{ slug: string; name: string; flagEmoji: string }>;
}

const services = [
  { href: "/services/developpement-mobile/", label: "Développement mobile React Native" },
  { href: "/services/developpement-web-django/", label: "Développement web Django" },
  { href: "/services/api-rest-python/", label: "APIs REST Python" },
  { href: "/services/design-ux-ui/", label: "UX/UI Design" },
];

export default function CityPageTemplate({ location, otherCities }: CityPageTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-rose-500/30 selection:text-rose-900 overflow-hidden font-sans">
      
      {/* Centered Main NavBar */}
      <div className="w-full flex justify-center z-[100] relative">
        <NavBar />
      </div>

      {/* Hero Section - Localized from Homepage */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 bg-slate-50">
           <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-40 mix-blend-multiply bg-indigo-200 animate-[pulse_8s_ease-in-out_infinite]" />
           <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-50 mix-blend-multiply bg-rose-200 animate-[pulse_10s_ease-in-out_infinite_2s]" />
           <div className="absolute -bottom-[30%] left-[10%] w-[80vw] h-[80vw] rounded-full blur-[130px] opacity-40 mix-blend-multiply bg-blue-200 animate-[pulse_12s_ease-in-out_infinite_4s]" />
           <div className="absolute inset-0 bg-white/40 backdrop-blur-[20px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 py-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column (60%) */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/80 shadow-[0_2px_10px_rgb(0,0,0,0.03)] backdrop-blur-md mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-slate-700 uppercase">
                Agence Digitale {location.flagEmoji} {location.name}
              </span>
            </div>

            <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-6 uppercase">
              AL FIRMA <br className="hidden lg:block"/> {location.name}
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-800 tracking-tight leading-tight mb-6 max-w-2xl">
              Votre application sur mesure, livrée au cœur de la région <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">{location.region}</span>.
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-xl mb-10">
              {location.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgb(79,70,229,0.3)] transition-all duration-300 w-full sm:w-auto overflow-hidden"
                onClick={() => window.open("https://calendly.com/karimbenchekroun/30min", "_blank")}
              >
                <span className="relative z-10">Discuter de votre projet</span>
                <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column (40%) - Visual Mockup */}
          <div className="w-full lg:w-[40%] relative mt-12 lg:mt-0 flex justify-center lg:justify-end perspective-1000">
             <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] bg-white border border-white/40 shadow-[0_40px_100px_-20px_rgb(0,0,0,0.1)] p-4 transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out group">
                <div className="w-full h-full rounded-[1.5rem] bg-slate-50 overflow-hidden relative border border-slate-100/50 flex flex-col">
                  {/* Mock App Header */}
                  <div className="w-full h-16 bg-white border-b border-slate-100 flex items-center px-6 justify-between z-10 shrink-0">
                     <div className="flex items-center gap-2">
                       <span className="text-2xl">{location.flagEmoji}</span>
                       <span className="font-semibold text-slate-800">{location.name}</span>
                     </div>
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                     </div>
                  </div>
                  {/* Mock Content Map/Placeholder */}
                  <div className="flex-1 w-full bg-slate-100 relative p-6 flex flex-col gap-4">
                     <div className="w-full h-40 rounded-xl bg-gradient-to-br from-indigo-100 to-rose-50 border border-white flex items-center justify-center shadow-sm">
                       <Image src="/assets/logoWithoutBackground.png" alt="Logo" width={60} height={60} className="object-contain opacity-50 grayscale" />
                     </div>
                     <div className="w-3/4 h-6 rounded bg-white shadow-sm" />
                     <div className="w-1/2 h-6 rounded bg-white shadow-sm" />
                     <div className="w-full h-24 rounded-xl bg-white shadow-sm mt-auto" />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -right-8 top-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white transform translate-z-50 group-hover:translate-x-4 transition-transform duration-500">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">📍</div>
                      <div>
                         <p className="text-xs text-slate-500 font-medium">Présence locale</p>
                         <p className="text-sm font-bold text-slate-900">{location.region}</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Programmatic SEO Content Sections */}
      <section className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-16 py-24">
        
        {/* Market Insights & Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-indigo-900/5 border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-rose-500 mb-6 relative z-10">Insights Marché local</h3>
            <h4 className="text-3xl font-bold text-slate-900 leading-tight border-b border-slate-100 pb-8 mb-8 relative z-10">L'écosystème digital à {location.name}</h4>
            <p className="text-lg text-slate-600 leading-relaxed relative z-10">
              {location.marketInsights}
            </p>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-indigo-900/20 border border-slate-800 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6 relative z-10">Notre Expertise</h3>
            <h4 className="text-3xl font-bold text-white leading-tight border-b border-slate-800 pb-8 mb-8 relative z-10">Technologies & Solutions</h4>
            <p className="text-lg text-slate-300 leading-relaxed relative z-10">
              {location.technologies}
            </p>
          </div>
        </div>

        {/* Achievements / Case Studies localized */}
        <div className="w-full flex flex-col items-center mb-16">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-blue-500 mb-4 text-center">Impact Local</h3>
          <h4 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-8">Nos réalisations en {location.region}</h4>
          <p className="text-xl text-slate-600 text-center max-w-3xl mb-16">
            {location.achievements}
          </p>

          {location.caseStudies && location.caseStudies.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              {location.caseStudies.map((study, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row overflow-hidden group">
                  {study.image && (
                    <div className="w-full sm:w-56 aspect-square relative flex-shrink-0 bg-slate-50/50 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-100 group-hover:bg-slate-50 transition-colors duration-300">
                      <Image 
                        src={study.image} 
                        alt={study.title} 
                        fill
                        className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1 justify-center">
                    <h5 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-500 transition-colors">{study.title}</h5>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-1">{study.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {study.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 shadow-sm rounded-full text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </section>

      {/* FAQ Section */}
      {location.faqs && location.faqs.length > 0 && (
        <section className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-16 py-24 border-t border-slate-100">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-rose-500 mb-4">FAQ</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Questions fréquentes</h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {location.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Links — Services + Other Cities (Internal Linking for SEO) */}
      <section className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-16 py-20 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-rose-500 mb-4">Nos services à {location.name}</h3>
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Une équipe pluridisciplinaire</h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-3 text-slate-700 hover:text-rose-500 transition-colors"
                  >
                    <span className="w-8 h-px bg-slate-300 group-hover:bg-rose-500 group-hover:w-12 transition-all" />
                    <span className="font-medium">{service.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tarifs/"
                  className="group flex items-center gap-3 text-slate-700 hover:text-rose-500 transition-colors"
                >
                  <span className="w-8 h-px bg-slate-300 group-hover:bg-rose-500 group-hover:w-12 transition-all" />
                  <span className="font-medium">Voir nos tarifs</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-500 mb-4">Nos autres implantations</h3>
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Al Firma proche de vous</h4>
            <ul className="flex flex-wrap gap-3">
              {otherCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}/`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-sm font-medium"
                  >
                    <span>{c.flagEmoji}</span>
                    <span>Agence {c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section - Consistent with Service Pages */}
      <section className="relative z-20 w-full bg-white py-32 px-6 md:px-16 mt-12 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              Prêt à accélérer la croissance de votre entreprise à {location.name} ?
            </h2>
            <p className="text-slate-600 text-lg mb-12 max-w-md">
              Demandez un devis ou prenez directement rendez-vous. Nous serons ravis de vous accompagner dans votre transformation digitale.
            </p>
          </div>
          <div className="lg:w-2/3 w-full bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 relative shadow-2xl shadow-indigo-900/5">
             <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}
