"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../home/components/ContactForm";
import NavBar from "../../home/components/NavBar";

interface ServicePageProps {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  features: string[];
  price: string;
  seoContent?: React.ReactNode;
}

export default function ServicePageTemplate({
  title,
  description,
  imageAlt,
  imageSrc,
  features,
  price,
  seoContent,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-rose-500/30 selection:text-rose-900 overflow-hidden font-sans">
      
      {/* Decorative Background Elements matching the Homepage vibe */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(99,102,241,0.4) 50%, transparent 100%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.8) 0%, rgba(139,92,246,0.4) 50%, transparent 100%)'
        }}
      />

      {/* Main NavBar (Centered) */}
      <div className="w-full flex justify-center z-[100]">
        <NavBar />
      </div>

      {/* Header Logo */}
      <header className="relative z-40 w-full flex justify-between items-center px-6 pt-32 pb-8 md:px-16 md:pt-12 md:pb-12">
        <Link 
          href="/home" 
          className="flex items-center gap-3 text-slate-900 font-bold text-2xl tracking-tighter uppercase leading-none hover:opacity-70 transition-opacity"
        >
          <Image src="/assets/logoWithoutBackground.png" alt="Al Firma Logo" width={40} height={40} className="object-contain invert opacity-90" priority />
          Al Firma
        </Link>
      </header>

      {/* Hero Section - Editorial Asymmetry */}
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-12 md:pt-24 pb-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
          
          <div className="lg:col-span-1 border-l border-slate-200 hidden lg:flex flex-col items-center justify-start pt-4 h-full">
            <span className="writing-vertical-lr text-xs tracking-[0.3em] uppercase text-slate-400 transform rotate-180">
              Services — 2026
            </span>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-slate-900 leading-[1.05] tracking-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-light leading-relaxed">
              {description}
            </p>

            <div className="pt-8">
               <button 
                onClick={() => window.open("https://calendly.com/karimbenchekroun/30min", "_blank")} 
                className="bg-indigo-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors inline-block shadow-lg hover:shadow-xl shadow-indigo-600/20"
              >
                Démarrer le projet
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
             <div className="aspect-[3/4] md:aspect-square lg:aspect-[3/4] relative w-full overflow-hidden bg-white/60 backdrop-blur-xl border border-white p-12 flex items-center justify-center shadow-2xl shadow-indigo-900/5 rounded-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain object-center scale-90 hover:scale-100 transition-transform duration-700 drop-shadow-xl"
                  priority
                />
             </div>
             
             {/* Decorative metric */}
             <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white border border-slate-100 p-6 shadow-xl rounded-2xl">
               <span className="block text-xs uppercase tracking-widest text-slate-500 mb-2">À partir de</span>
               <span className="block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-blue-500">{price}</span>
             </div>
          </div>
        </div>

        {/* Features - Minimalist Grid */}
        <div className="mt-48 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 border border-white shadow-xl shadow-indigo-900/5">
           <div className="lg:col-span-4">
             <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-blue-500 mb-6">Expertise</h2>
             <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">Ce qui est inclus dans notre prestation.</h3>
           </div>
           
           <div className="lg:col-span-7 lg:col-start-6">
             <ul className="grid grid-cols-1 gap-0">
               {features.map((feature, idx) => (
                 <li key={idx} className="group py-6 border-b border-slate-200 flex items-start gap-6 hover:bg-white transition-colors -mx-6 px-6 cursor-default rounded-xl last:border-0">
                   <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-blue-400 transition-all">
                     <span className="text-indigo-600 font-bold text-sm group-hover:text-white transition-colors">
                       {idx + 1}
                     </span>
                   </div>
                   <p className="text-lg text-slate-700 font-medium leading-snug group-hover:text-slate-900 transition-colors pt-1">
                     {feature}
                   </p>
                 </li>
               ))}
             </ul>
           </div>
        </div>

        {/* SEO Rich Content */}
        {seoContent && (
          <div className="mt-24">
            {seoContent}
          </div>
        )}

      </main>

      {/* CTA Section - Adapting the original form with the new light, colorful aesthetic */}
      <section className="relative z-20 w-full bg-white py-32 px-6 md:px-16 mt-12 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
              Prêt à transformer votre vision en réalité ?
            </h2>
            <p className="text-slate-600 text-lg mb-12 max-w-md">
              Laissez-nous vos coordonnées ou prenez rendez-vous directement pour discuter de vos enjeux techniques et business.
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
