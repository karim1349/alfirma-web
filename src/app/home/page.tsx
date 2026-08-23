"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import earth from "../../content/earth.json";
import partners from "../../content/partners.json";
import { HOME_FAQS, MOBILE_STARTING_PRICE } from "@/lib/seo-data";
import { FAQSchema, ServiceSchema } from "../components/StructuredData";
import ContactForm from "./components/ContactForm";
import NavBar from "./components/NavBar";

export const dynamic = "force-static";

interface LocationData {
  name: string;
  country: string;
  region: string;
  flagEmoji: string;
  coordinates: { lat: number; lng: number };
  description: string;
}

interface HomeProps {
  location?: LocationData;
}

function Home({ location }: HomeProps = {}) {
  return (
    <>
      <FAQSchema />
      <ServiceSchema />
      <main className="transition ease-linear duration-700 z-50">
        <div className="flex items-center bg-white justify-center">
          <div className="flex-1 flex flex-col items-center justify-center self-center overflow-hidden">
            <NavBar />
            
            {/* Redesigned Hero Section - Editorial & Premium */}
            <div
              className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-slate-50"
              id="SECTION_ACCUEIL"
            >
              {/* Complex Animated Background Mesh */}
              <div className="absolute inset-0 z-0 bg-slate-50">
                 {/* Top Left Deep Indigo */}
                 <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-40 mix-blend-multiply bg-indigo-200 animate-[pulse_8s_ease-in-out_infinite]" />
                 {/* Center Right Warm Rose */}
                 <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-50 mix-blend-multiply bg-rose-200 animate-[pulse_10s_ease-in-out_infinite_2s]" />
                 {/* Bottom Left Soft Blue */}
                 <div className="absolute -bottom-[30%] left-[10%] w-[80vw] h-[80vw] rounded-full blur-[130px] opacity-40 mix-blend-multiply bg-blue-200 animate-[pulse_12s_ease-in-out_infinite_4s]" />
                 {/* Subtle Light Overlay */}
                 <div className="absolute inset-0 bg-white/40 backdrop-blur-[20px]" />
              </div>

              {/* Main Content Container - 60/40 Split on Desktop */}
              <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Left Column (60%) - Typography & CTA */}
                <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
                  
                  {/* Eyebrow Label */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/80 shadow-[0_2px_10px_rgb(0,0,0,0.03)] backdrop-blur-md mb-8">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                    </span>
                    <span className="text-sm font-semibold tracking-wide text-slate-700 uppercase">
                      Agence de développement
                      {location ? ` à ${location.name}` : ""}
                    </span>
                  </div>

                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
                    AL FIRMA
                    <span className="sr-only"> - Agence Développement Applications Mobiles & Web</span>
                  </h1>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-800 tracking-tight leading-tight mb-6 max-w-2xl">
                    Votre application mobile,<br className="hidden sm:block" /> livrée en <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">20 jours</span>.
                  </h2>
                  
                  <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-xl mb-10">
                    De l'idée à l'App Store : développement React Native, API Django, design Figma.
                    <br className="hidden sm:block" />
                    <span className="font-semibold text-slate-800">À partir de {MOBILE_STARTING_PRICE.display}</span> • iOS & Android • Retours illimités
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <button
                      className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgb(79,70,229,0.3)] transition-all duration-300 w-full sm:w-auto overflow-hidden"
                      onClick={() => window.open("https://calendly.com/karimbenchekroun/30min", "_blank")}
                      aria-label="Réserver un appel découverte gratuit"
                    >
                      <span className="relative z-10">Réserver mon appel</span>
                      <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      {/* Button Gloss Overlay */}
                      <div className="absolute inset-0 top-0 left-0 w-full h-[50%] bg-white/10 group-hover:bg-transparent transition-colors duration-300" />
                    </button>
                    
                    <div className="flex flex-col gap-1">
                       <p className="text-slate-500 text-sm font-medium">30 minutes • 100% gratuit</p>
                       <a
                        href="#SECTION_PROJETS"
                        className="text-indigo-600 text-sm font-semibold hover:text-indigo-700 transition-colors flex items-center gap-1 group w-fit"
                      >
                        Voir nos réalisations
                        <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>

                {/* Right Column (40%) - App Visual / 3D Element Showcase */}
                <div className="w-full lg:w-[40%] relative mt-12 lg:mt-0 flex justify-center lg:justify-end perspective-1000">
                   <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] bg-white border border-white/40 shadow-[0_40px_100px_-20px_rgb(0,0,0,0.1)] p-4 transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out group">
                      
                      {/* Content inside the mock screen */}
                      <div className="w-full h-full rounded-[1.5rem] bg-slate-50 overflow-hidden relative border border-slate-100/50">
                        {/* Mock App Header */}
                        <div className="absolute top-0 w-full h-16 bg-white border-b border-slate-100 flex items-center px-6 justify-between z-10">
                           <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden p-2">
                             <Image src="/assets/logoWithoutBackground.webp" alt="Logo" width={40} height={40} className="object-contain" />
                           </div>
                           <div className="flex gap-2">
                              <div className="w-2 h-2 rounded-full bg-slate-200" />
                              <div className="w-2 h-2 rounded-full bg-slate-200" />
                           </div>
                        </div>
                        
                        {/* Mock App Content Area */}
                        <div className="absolute inset-0 pt-20 px-6 pb-6 flex flex-col gap-4">
                           <div className="w-3/4 h-8 rounded-lg bg-indigo-100/50 animate-pulse" />
                           <div className="w-full h-32 rounded-xl bg-gradient-to-br from-rose-100/50 to-indigo-100/50 backdrop-blur-sm border border-white shadow-sm flex items-center justify-center">
                              <Image src="/assets/logoWithoutBackground.webp" alt="Logo" width={80} height={80} className="object-contain opacity-20 invert" />
                           </div>
                           <div className="w-full h-2 rounded-full bg-slate-200" />
                           <div className="w-5/6 h-2 rounded-full bg-slate-200" />
                           <div className="w-full h-2 rounded-full bg-slate-200" />
                           <div className="w-4/6 h-2 rounded-full bg-slate-200" />
                           
                           <div className="mt-auto w-full h-12 rounded-xl bg-slate-900 flex items-center justify-center">
                             <div className="w-1/3 h-2 rounded-full bg-white/20" />
                           </div>
                        </div>
                      </div>

                      {/* Floating Decorative Elements around the screen */}
                      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center transform md:group-hover:-translate-y-4 md:group-hover:translate-x-4 transition-transform duration-500 ease-out z-20">
                         <div className="text-4xl">🚀</div>
                      </div>
                      <div className="absolute -bottom-10 -left-6 w-32 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center transform md:group-hover:translate-y-4 md:group-hover:-translate-x-4 transition-transform duration-500 ease-out z-20 border border-slate-50">
                         <div className="text-center">
                           <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Temps</div>
                           <div className="text-xl font-bold text-slate-800">20 Jours</div>
                         </div>
                      </div>

                   </div>
                </div>

              </div>
            </div>
            {/* Social Proof Stats Bar */}
            <div className="w-full bg-white border-y border-gray-100 py-8">
              <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
                      10+
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Applications livrées</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
                      100%
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Clients satisfaits</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
                      20j
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Livraison minimum</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
                      5★
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Note moyenne</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-7xl flex flex-col items-center justify-center self-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:h-80">
                <div className="flex flex-1 px-2 py-12 md:border-r border-gray-200 group hover:bg-[url(/assets/illustrations/backgroundDiscussion.png)] bg-cover bg-center hover:text-white">
                  <div className="w-4 h-4 rounded-full bg-blue-50 mr-7 mt-2" />
                  <div className="flex-1 flex flex-col justify-between">
                    <h2 className="text-2xl font-medium">
                      Discussion du projet
                    </h2>
                    <p className="font-thin mt-4 mr-8">
                      Partagez vos idées et objectifs. Nous créons une feuille
                      de route pour le développement de votre application
                      {location ? ` à ${location.name}` : ""}.
                    </p>

                    <h2 className="text-7xl self-end text-gray-400 font-semibold">
                      01.
                    </h2>
                  </div>
                </div>
                <div className="flex px-2 py-12 md:border-r border-gray-200 group hover:bg-[url(/assets/illustrations/backgroundCreation.png)] bg-cover bg-center hover:text-white">
                  <div className="w-4 h-4 rounded-full bg-blue-50 mr-7 mt-2" />
                  <div className="flex-1 flex flex-col justify-between">
                    <h2 className="text-2xl font-medium">
                      Création sur Mesure
                    </h2>
                    <p className="font-thin mt-4 mr-8">
                      On transforme vos idées en réalité avec un design intuitif
                      et des fonctionnalités innovantes, en vous impliquant à
                      chaque étape.
                    </p>

                    <h2 className="text-7xl self-end text-gray-400 font-semibold ">
                      02.
                    </h2>
                  </div>
                </div>
                <div className="flex px-2 py-12 group hover:bg-[url(/assets/illustrations/backgroundDeploy.png)] bg-cover bg-center hover:text-white">
                  <div className="w-4 h-4 rounded-full bg-blue-50 mr-7 mt-2" />
                  <div className="flex-1 flex flex-col justify-between">
                    <h2 className="text-2xl font-medium">Déploiement</h2>
                    <p className="font-thin mt-4 mr-8">
                      Après approbation, votre application prend son envol en
                      ligne. Nous restons à vos côtés pour assurer son succès
                      continu.
                    </p>

                    <h2 className=" text-7xl self-end text-gray-400 font-semibold">
                      03.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h2
                  id="SECTION_A_PROPOS"
                  className="text-center mb-6 text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400 mt-24"
                >
                  NOS SERVICES
                  {location ? ` À ${location.name.toUpperCase()}` : ""}
                </h2>
                <p className="text-center px-4 md:px-0">
                  {location
                    ? location.description
                    : "Nous allions créativité et expertise technique pour concrétiser vos idées."}
                  {location && (location as any).marketInsights && (
                    <span className="block mt-4 text-lg text-gray-600">
                      {(location as any).marketInsights}
                    </span>
                  )}
                </p>
                <div className="flex w-full flex-col md:flex-row md:my-12">
                  <div className="group shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9 my-8">
                    <Image
                      src="/assets/illustrations/appmobile.png"
                      alt={`Développement d'applications mobiles iOS et Android${
                        location ? ` à ${location.name}` : ""
                      }`}
                      width={144}
                      height={144}
                      className="h-36 group-hover:h-48 object-contain transform transition-all"
                      loading="lazy"
                    />
                    <h3 className="font-semibold">
                      Développement d'Applications Mobiles iOS et Android
                    </h3>
                    <p className="text-xs text-center mt-4">
                      Notre agence développe et déploie des applications mobiles
                      cross-platform (iOS et Android) d'un haut niveau de
                      qualité avec React Native
                      {location
                        ? ` pour les entreprises de ${location.name}`
                        : ""}
                      .
                      {location && (location as any).technologies && (
                        <span className="block mt-2 text-xs text-gray-600">
                          {(location as any).technologies}
                        </span>
                      )}
                    </p>
                    <div className="flex flex-1 flex-col justify-start self-center my-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Design de maquettes Figma
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Compatibilité iOS / Android
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Traduction multi-langues
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Notifications, authentification, messagerie, ...
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Déploiement sur l'App Store / Google Play Store /
                          Huawei App Gallery
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">Retours illimités</p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          30 jours de garantie pour signaler un problème ou une
                          modification
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Livraison à partir de 20 jours seulement !
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-2">
                      <h4 className="text-xl font-bold text-white rounded-lg p-2 bg-gradient-to-r from-rose-400 to-blue-400 hover:scale-110 transform transition">
                        À partir de {MOBILE_STARTING_PRICE.display}
                      </h4>
                      <Link
                        href="/duodoku"
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        Voir notre projet Duodoku →
                      </Link>
                      <Link
                        href="/services/developpement-mobile"
                        className="text-xs text-blue-600 hover:text-blue-800 underline mt-2"
                      >
                        En savoir plus sur le dev mobile →
                      </Link>
                    </div>
                  </div>
                  <div className="group shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9 my-8">
                    <Image
                      src="/assets/illustrations/appweb.png"
                      alt={`Développement d'applications web avec React.js et Django${
                        location ? ` à ${location.name}` : ""
                      }`}
                      width={144}
                      height={144}
                      className="h-36 group-hover:h-48 object-contain transform transition-all"
                      loading="lazy"
                    />
                    <h3 className="font-semibold">
                      Développement d'Applications Web avec React.js et Django
                    </h3>
                    <p className="text-xs text-center mt-4">
                      Notre agence spécialisée en développement d'applications
                      web avec React.js et Django. Création d'applications web
                      full-stack sur mesure
                      {location ? ` pour ${location.name}` : ""}.
                      {location && (location as any).achievements && (
                        <span className="block mt-2 text-xs text-gray-600">
                          {(location as any).achievements}
                        </span>
                      )}
                    </p>
                    <div className="flex flex-1 flex-col justify-start self-center my-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Design de maquettes Figma
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">Landing page</p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">Site E-Commerce</p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">Responsive</p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Traduction multi-langues
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">Retours illimités</p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          30 jours de garantie pour signaler un problème ou une
                          modification
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Livraison à partir de 15 jours seulement !
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2 self-end">
                      <h4 className="text-xl font-bold text-white rounded-lg p-2 bg-gradient-to-r from-rose-400 to-blue-400 hover:scale-110 transform transition">
                        À partir de 6900€
                      </h4>
                      <Link
                        href="/services/developpement-web-django"
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        En savoir plus sur le dev web →
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col md:flex-row md:my-12">
                  <div className="group shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9 my-8">
                    <Image
                      src="/assets/illustrations/uiuxdesign.png"
                      alt="Design UX/UI et branding pour applications"
                      width={144}
                      height={144}
                      className="h-36 group-hover:h-48 object-contain transform transition-all"
                      loading="lazy"
                    />
                    <h3 className="font-semibold">
                      UX/UI Design et Branding pour Applications
                    </h3>
                    <p className="text-xs text-center mt-4">
                      Notre agence de design UX/UI n'attend que vous pour
                      concevoir les maquettes de votre application mobile et
                      web, basée sur les meilleures normes d'ergonomie et
                      d'optimisation.
                    </p>
                    <div className="flex flex-1 flex-col justify-start self-center my-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">Charte graphique</p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">Logo</p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Conception de wireframes
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">Retours illimités</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2 self-end">
                      <button
                        onClick={() =>
                          window.open(
                            "https://calendly.com/karimbenchekroun/30min",
                            "_blank"
                          )
                        }
                      >
                        <h4 className="text-xl font-bold text-white rounded-lg p-2 bg-gradient-to-r from-rose-400 to-blue-400 hover:scale-110 transform transition">
                          Nous contacter
                        </h4>
                      </button>
                      <Link
                        href="/services/design-ux-ui"
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        En savoir plus sur l'UX/UI →
                      </Link>
                    </div>
                  </div>
                  <div className="group shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9 my-8">
                    <Image
                      src="/assets/illustrations/api.webp"
                      alt="Développement d'APIs RESTful et micro-services"
                      width={144}
                      height={144}
                      className="h-36 group-hover:h-48 object-contain transform transition-all"
                      loading="lazy"
                    />
                    <h3 className="font-semibold">
                      Développement d'APIs RESTful avec Django
                    </h3>
                    <p className="text-xs text-center mt-4">
                      Notre agence développe des APIs RESTful avec Django pour
                      vos applications web et mobiles, garantissant une
                      communication fluide entre les différentes parties de
                      votre application.
                    </p>
                    <div className="flex flex-1 flex-col justify-start self-center my-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Développement d'un back-end RESTful en Python + Django
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Micro-services : authentification, gestion de
                          paiements, abonnements, notifications, ...
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Versioning dev / staging / production
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Déploiement et hébergement de l'API et de la base de
                          données
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Conseil et accompagnement illimité
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">Retours illimités</p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          30 jours de garantie pour signaler un problème ou une
                          modification
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Livraison à partir de 10 jours seulement !
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2 self-end">
                      <h4 className="text-xl font-bold text-white rounded-lg p-2 bg-gradient-to-r from-rose-400 to-blue-400 hover:scale-110 transform transition">
                        À partir de 4900€
                      </h4>
                      <Link
                        href="/services/api-rest-python"
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        En savoir plus sur le dev API →
                      </Link>
                    </div>
                  </div>
                  <div className="group shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9 my-8">
                    <Image
                      src="/assets/illustrations/maintenance.png"
                      alt="Maintenance et support technique d'applications"
                      width={144}
                      height={144}
                      className="h-36 group-hover:h-48 object-contain transform transition-all"
                      loading="lazy"
                    />
                    <h3 className="font-semibold">
                      Maintenance d'Applications Mobiles et Web
                    </h3>
                    <p className="text-xs text-center mt-4">
                      Besoin d'apporter des modifications sur votre application
                      mobile ou web ? Notre agence peut prendre en charge la
                      maintenance des applications que nous développons.{" "}
                    </p>
                    <div className="flex flex-1 flex-col justify-start self-center my-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">
                          Conception de wireframes
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-xs flex-1">Retours illimités</p>
                      </div>
                    </div>
                    <button
                      className="self-end"
                      onClick={() =>
                        window.open(
                          "https://calendly.com/karimbenchekroun/30min",
                          "_blank"
                        )
                      }
                    >
                      <h4 className="text-xl font-bold text-white rounded-lg p-2 bg-gradient-to-r from-rose-400 to-blue-400 hover:scale-110 transform transition">
                        Nous contacter
                      </h4>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-gradient-to-tr from-rose-200 to-blue-300 py-8 md:py-24 flex justify-center items-center w-screen">
              <div className="px-4 md:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-center self-center overflow-hidden">
                <div className="relative w-96 h-96 flex items-center justify-center">
                  <Image
                    src="/assets/logoWithoutBackground.webp"
                    alt="Al Firma - Logo"
                    width={384}
                    height={384}
                    className="w-full h-full absolute object-contain filter invert opacity-30"
                  />
                  <Lottie animationData={earth} className="w-5/6" loop />
                </div>
                <div className="flex-1 md:ml-16">
                  <h2 className="text-center mb-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
                    MONDIALEMENT VÔTRE !
                  </h2>
                  <p>
                    Découvrez nos services où que vous soyez dans le monde
                    {location ? `, y compris à ${location.name}` : ""}. Notre
                    équipe travaille sans frontières pour apporter des solutions
                    innovantes à votre porte, où que cette porte puisse se
                    trouver. Que vous soyez une petite start-up à la recherche
                    de l'élément différenciateur ou une grande entreprise prête
                    à révolutionner son secteur, nous sommes là pour collaborer
                    avec vous. Votre vision devient notre mission, peu importe
                    le lieu. Chez Al Firma, nous croyons que chaque projet,
                    grand ou petit, mérite une approche personnalisée et un
                    engagement total. Faites équipe avec nous et donnez vie à
                    vos idées, où que vous soyez dans le monde.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4 md:px-8 max-w-7xl flex flex-col items-center justify-center self-center overflow-hidden mt-28">
              <h2
                id="SECTION_PROJETS"
                className="text-center mb-6 text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400"
              >
                NOS PROJETS D'APPLICATIONS MOBILES ET WEB
              </h2>
              <p className="text-center px-4 md:px-0">
                Découvrez nos projets les plus récents et les plus innovants.
                Chaque application est unique et conçue sur mesure pour répondre
                aux besoins spécifiques de nos clients. Nous sommes fiers de
                notre travail et de la confiance que nos clients nous accordent
                pour donner vie à leurs idées. Explorez nos projets et
                laissez-vous inspirer pour votre prochaine application !
              </p>
              <div className="flex w-full flex-col my-6 items-center">
                {/* QIIMA - Featured Project */}
                <div
                  id="PROJECT_QIIMA"
                  className="bg-[#5A6A3F] rounded-3xl p-8 justify-between md:w-2/3 my-6 hover:bg-[#4a5a2f] transition-colors duration-300 cursor-pointer"
                  onClick={() => (window.location.href = "/projets/qiima")}
                >
                  <div className="flex flex-wrap items-center justify-end mb-4 md:mb-0">
                    <div className="bg-[#5a7a30] rounded-full px-2 mr-2 mb-2 text-white">
                      Mobile App
                    </div>
                    <div className="bg-[#5a7a30] rounded-full px-2 mr-2 mb-2 text-white">
                      Web App
                    </div>
                    <div className="bg-[#5a7a30] rounded-full px-2 mr-2 mb-2 text-white">
                      API Django
                    </div>
                    <div className="bg-[#5a7a30] rounded-full px-2 mr-2 mb-2 text-white">
                      UX/UI Design
                    </div>
                    <div className="bg-[#5a7a30] rounded-full px-2 mr-2 mb-2 text-white">
                      Community
                    </div>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row flex-1 rounded-3xl justify-between w-full">
                    <div className="flex-1 p-4">
                      <h3 className="text-white text-5xl">QIIMA</h3>
                      <p className="text-white/90 text-sm my-8">
                        Qiima est une application communautaire de partage de
                        bons plans au Maroc. Les utilisateurs découvrent et
                        partagent les meilleures offres des enseignes comme
                        Marjane, BIM, Jumia et Electroplanet. La communauté vote
                        pour garantir la qualité des deals. Développée avec
                        React Native + Expo et une API Django robuste.
                      </p>
                      <div className="flex items-center my-2">
                        <a
                          href="https://apps.apple.com/app/id6754856570"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Image
                            src="/assets/button_appstore.png"
                            alt="Télécharger Qiima sur l'App Store"
                            width={128}
                            height={64}
                            className="w-20 sm:w-32 mr-2 hover:scale-110 transform transition"
                          />
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=ma.qiima.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Image
                            src="/assets/button_playstore.png"
                            alt="Télécharger Qiima sur Google Play"
                            width={128}
                            height={64}
                            className="w-20 sm:w-32 mr-2 hover:scale-110 transform transition"
                          />
                        </a>
                        <a
                          href="https://qiima.ma"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-white text-[#5A6A3F] px-4 py-2 rounded-lg font-semibold hover:scale-110 transform transition text-sm"
                        >
                          Visiter le site
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between self-center md:self-end">
                      <Image
                        src="/assets/projects/qiima/logo.webp"
                        alt="Qiima - Application de bons plans au Maroc"
                        width={192}
                        height={192}
                        className="w-48 h-48 object-contain rounded-3xl self-end"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="PROJECT_DUODOKU"
                  className="bg-gray-800 rounded-3xl p-8 justify-between md:w-2/3 my-6 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                  onClick={() => (window.location.href = "/duodoku")}
                >
                  <div className="flex flex-wrap items-center justify-end mb-4 md:mb-0">
                    <div className="bg-blue-300 rounded-full px-2 mr-2 mb-2">
                      Mobile App
                    </div>
                    <div className="bg-blue-300 rounded-full px-2 mr-2 mb-2">
                      In-App Ads
                    </div>
                    <div className="bg-blue-300 rounded-full px-2 mr-2 mb-2">
                      UX/UI Design
                    </div>
                    <div className="bg-blue-300 rounded-full px-2 mr-2 mb-2">
                      API
                    </div>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row flex-1 rounded-3xl justify-between w-full">
                    <div className="flex-1 p-4">
                      <h3 className="text-white text-5xl">DUODOKU</h3>
                      <p className="text-white text-sm my-8">
                        Duodoku est le premier jeu de Sudoku multijoueur en
                        temps réel, disponible sur iOS et Android. Plus de
                        10 000 joueurs actifs, avec matchmaking et modes
                        compétitifs. Développée en React Native et s'appuyant
                        sur une API REST Django, elle est disponible sous iOS et
                        Android.{" "}
                      </p>
                      <div className="flex items-center my-2">
                        <a
                          href="https://apps.apple.com/ie/app/duodoku-sudoku-multi-joueurs/id6448099658"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Image
                            src="/assets/button_appstore.png"
                            alt="Télécharger Duodoku sur l'App Store"
                            width={128}
                            height={64}
                            className="w-20 sm:w-32 mr-2 hover:scale-110 transform transition"
                          />
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.duodoku.app&hl=fr_CH"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Image
                            src="/assets/button_playstore.png"
                            alt="Télécharger Duodoku sur Google Play"
                            width={128}
                            height={64}
                            className="w-20 sm:w-32 mr-2 hover:scale-110 transform transition"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between self-center md:self-end">
                      <Image
                        src="/assets/duodoku.png"
                        alt="Duodoku - Premier jeu de Sudoku multi-joueurs"
                        width={192}
                        height={192}
                        className="w-48 h-48 object-contain rounded-3xl self-end"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="PROJECT_AINKLUS"
                  className="rounded-3xl p-8 justify-between md:w-2/3 my-6 hover:opacity-95 transition-opacity duration-300"
                  style={{ backgroundColor: "#FAF3EE" }}
                >
                  <div className="flex flex-wrap items-center justify-end mb-4 md:mb-0">
                    <div className="rounded-full px-2 mr-2 mb-2 text-white" style={{ backgroundColor: "#C35C41" }}>
                      Web App
                    </div>
                    <div className="rounded-full px-2 mr-2 mb-2 text-white" style={{ backgroundColor: "#C35C41" }}>
                      IA
                    </div>
                    <div className="rounded-full px-2 mr-2 mb-2 text-white" style={{ backgroundColor: "#C35C41" }}>
                      OCR
                    </div>
                    <div className="rounded-full px-2 mr-2 mb-2 text-white" style={{ backgroundColor: "#C35C41" }}>
                      PDF
                    </div>
                    <div className="rounded-full px-2 mr-2 mb-2 text-white" style={{ backgroundColor: "#C35C41" }}>
                      Éducation inclusive
                    </div>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row flex-1 rounded-3xl justify-between w-full">
                    <div className="flex-1 p-4">
                      <h3 className="text-5xl" style={{ color: "#28211F" }}>AINKLUS</h3>
                      <p className="text-sm my-8" style={{ color: "#28211F", opacity: 0.8 }}>
                        AInklus est une plateforme d'adaptation automatique de
                        documents scolaires pour enfants à besoins spécifiques
                        (TDAH, dyscalculie, TSA, dyspraxie). Elle combine OCR
                        et intelligence artificielle pour transformer les
                        contenus pédagogiques en exercices adaptés, générés au
                        format PDF. Développée avec Next.js, Django REST et
                        WeasyPrint.
                      </p>
                      <div className="flex items-start">
                        <div className="p-2 rounded-md" style={{ backgroundColor: "#C35C41" }}>
                          <p className="text-white text-sm">
                            Bientôt disponible !
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between self-center md:self-end">
                      <img
                        src="/assets/ainklus.svg"
                        alt="AInklus - Adaptation scolaire par l'IA"
                        className="w-48 h-48 object-contain rounded-3xl self-end"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="PROJECT_PETITPAS"
                  className="rounded-3xl p-8 justify-between md:w-2/3 my-6 hover:opacity-95 transition-opacity duration-300"
                  style={{ backgroundColor: "#2B2320" }}
                >
                  <div className="flex flex-wrap items-center justify-end mb-4 md:mb-0">
                    <div className="rounded-full px-2 mr-2 mb-2 text-white" style={{ backgroundColor: "#C46848" }}>
                      Mobile App
                    </div>
                    <div className="rounded-full px-2 mr-2 mb-2 text-white" style={{ backgroundColor: "#5B8C6A" }}>
                      TDAH
                    </div>
                    <div className="rounded-full px-2 mr-2 mb-2 text-white" style={{ backgroundColor: "#C46848" }}>
                      Coaching
                    </div>
                    <div className="rounded-full px-2 mr-2 mb-2 text-white" style={{ backgroundColor: "#5B8C6A" }}>
                      Parentalité
                    </div>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row flex-1 rounded-3xl justify-between w-full">
                    <div className="flex-1 p-4">
                      <h3 className="text-5xl" style={{ color: "#FAF6F1" }}>PETIT PAS</h3>
                      <p className="text-sm my-8" style={{ color: "#FAF6F1", opacity: 0.9 }}>
                        Petit Pas est une application mobile d'accompagnement
                        au quotidien pour les familles confrontées au TDAH.
                        Elle propose des routines structurées et des outils de
                        coaching accessibles, pensés pour aider les parents à
                        mieux accompagner leurs enfants. Développée avec React
                        Native, Expo et une API Django REST.
                      </p>
                      <div className="flex items-start">
                        <div className="p-2 rounded-md" style={{ backgroundColor: "#C46848" }}>
                          <p className="text-white text-sm">
                            Bientôt disponible !
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between self-center md:self-end">
                      <Image
                        src="/assets/petitpas.png"
                        alt="Petit Pas - Coaching TDAH parent-enfant"
                        width={192}
                        height={192}
                        className="w-48 h-48 object-contain rounded-3xl self-end"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="PROJECT_SAYAR"
                  className="bg-orange-200 rounded-3xl p-8 justify-between md:w-2/3 my-6"
                >
                  <div className="flex flex-wrap items-center justify-end mb-4 md:mb-0">
                    <div className="bg-orange-300 rounded-full px-2 ml-2 my-2">
                      Mobile App
                    </div>
                    <div className="bg-orange-300 rounded-full px-2 ml-2 my-2">
                      Web App
                    </div>
                    <div className="bg-orange-300 rounded-full px-2 ml-2 my-2">
                      API
                    </div>
                    <div className="bg-orange-300 rounded-full px-2 ml-2 my-2">
                      UX/UI Design
                    </div>
                    <div className="bg-orange-300 rounded-full px-2 ml-2 my-2">
                      Paiements in-app
                    </div>
                  </div>
                  <div className="flex flex-col-reverse md:flex-row flex-1 rounded-3xl justify-between w-full">
                    <div className="flex-1 p-4">
                      <h3 className="text-orange-800 text-5xl">SAYAR</h3>
                      <p className="text-orange-800 text-sm my-8">
                        Sayar est une market-place digitale d'auto-partage de
                        véhicules entre particuliers au Maroc. Nous avons
                        développé une application permettant aux propriétaires
                        et aux locataires de véhicules d'entrer en contact, et
                        simplifiant toutes les formalités liées à la location
                        grâce à des process modernes intégrés à l'application.
                      </p>
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-md">
                          <p>Bientôt disponible !</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between self-center md:self-end">
                      <Image
                        src="/assets/sayar.png"
                        alt="Sayar - Application d'autopartage de véhicules au Maroc"
                        width={192}
                        height={192}
                        className="w-48 h-48 object-contain rounded-3xl self-end bg-white"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 md:px-8 max-w-7xl flex flex-col items-center justify-center self-center overflow-hidden mt-28">
              <h2
                id="SECTION_AVIS"
                className="text-center mb-6 text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400"
              >
                ILS NOUS ONT FAIT CONFIANCE
              </h2>
              <p className="text-center px-4 md:px-0">
                Un coup de projecteur sur nos partenaires formidables ! Leur
                confiance en notre expertise renforce notre détermination à
                offrir des solutions innovantes et personnalisées pour répondre
                à leurs besoins uniques.
              </p>
              <div className="relative w-full max-w-7xl mx-auto my-12">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-blue-50 to-rose-50 rounded-3xl opacity-30"></div>
                <div className="absolute inset-0 rounded-3xl"></div>

                <div className="relative z-10 p-8 md:p-12">
                  <div className="mb-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Client Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 bg-gradient-to-br from-rose-100 to-blue-100 rounded-2xl flex items-center justify-center p-4">
                            <Image
                              src={partners[0].image}
                              alt={partners[0].name}
                              width={80}
                              height={80}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400 mb-4">
                            {partners[0].name}
                          </h3>
                          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            {partners[0].description}
                          </p>

                          {/* Links */}
                          {partners[0].links?.length > 0 && (
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                              {partners[0].links.map((link, index) => (
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  key={index}
                                  className="hover:scale-105 transform transition duration-200"
                                >
                                  <Image
                                    src={`/assets/button_${link.type}.png`}
                                    alt={`${link.type} link`}
                                    width={140}
                                    height={70}
                                    className="h-12 w-auto"
                                  />
                                </a>
                              ))}
                            </div>
                          )}

                          {/* Stack */}
                          {(partners[0] as { stack?: string[] | null }).stack && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              {((partners[0] as { stack?: string[] | null }).stack as string[]).map((tech, i) => (
                                <span key={i} className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200 font-medium">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Review */}
                          {partners[0].review && (
                            <div className="bg-gradient-to-r from-rose-50 to-blue-50 rounded-2xl p-6 border-l-4 border-rose-400">
                              <div className="flex items-start gap-3">
                                <div className="text-3xl text-rose-400">"</div>
                                <p className="text-gray-700 italic text-lg leading-relaxed flex-1">
                                  {partners[0].review}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other Clients Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {partners.slice(1).map((partner, index) => (
                      <div key={index + 1} className="group">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/30 h-full">
                          <div className="text-center">
                            {/* Logo */}
                            <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-blue-100 rounded-xl flex items-center justify-center p-3 mx-auto mb-4">
                              <Image
                                src={partner.image}
                                alt={partner.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-contain"
                              />
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400 mb-3">
                              {partner.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mb-4">
                              {partner.description}
                            </p>

                            {/* Stack */}
                            {(partner as { stack?: string[] | null }).stack && (
                              <div className="flex flex-wrap justify-center gap-1 mb-4">
                                {((partner as { stack?: string[] | null }).stack as string[]).map((tech, i) => (
                                  <span key={i} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Links */}
                            {partner.links?.length > 0 && (
                              <div className="flex justify-center gap-2 mb-4">
                                {partner.links
                                  .slice(0, 2)
                                  .map((link, linkIndex) => (
                                    <a
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      key={linkIndex}
                                      className="hover:scale-110 transform transition duration-200"
                                    >
                                      <Image
                                        src={`/assets/button_${link.type}.png`}
                                        alt={`${link.type} link`}
                                        width={100}
                                        height={50}
                                        className="h-8 w-auto"
                                      />
                                    </a>
                                  ))}
                              </div>
                            )}

                            {/* Review */}
                            {partner.review && (
                              <div className="bg-white/50 rounded-lg p-3">
                                <p className="text-xs text-gray-600 italic">
                                  "{partner.review}"
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-center mb-6 text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
                QUESTIONS FRÉQUENTES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-4 md:px-0">
                {HOME_FAQS.map((faq) => (
                  <div key={faq.question} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">?</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-center mb-6 text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
                PARLONS DE VOTRE PROJET
              </h3>
              <p className="px-4 md:px-0 text-center max-w-2xl mx-auto">
                Prêt à lancer votre application ? Remplissez le formulaire ci-dessous 
                et nous vous répondrons sous 24h avec une première estimation.
              </p>
            </div>
            <div
              id="SECTION_CONTACT"
              className="relative w-full justify-center flex overflow-hidden"
            >
              <div className=" max-h-72 overflow-hidden">
                <div className="absolute left-[-1500px] rotate-[6.856deg] shrink-0 rounded-full p-[400px] bg-gradient-to-r from-rose-200 to-blue-300">
                  <div className="p-[1000px] rounded-full bg-white" />
                </div>
              </div>
              <div className="px-8 max-w-7xl flex w-full items-center justify-center self-center overflow-hidden z-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
