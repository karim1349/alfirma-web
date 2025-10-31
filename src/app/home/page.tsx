"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import earth from "../../content/earth.json";
import partners from "../../content/partners.json";
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
      <div className={`transition ease-linear duration-700 z-50`}>
        <div className="flex items-center bg-white justify-center">
          <div className="flex-1 flex flex-col items-center justify-center self-center overflow-hidden">
            <NavBar />
            <div
              className="flex justify-center items-center flex-col-reverse md:flex-row w-full"
              id="SECTION_ACCUEIL"
              style={{
                background: `
                  linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0.6) 85%, rgba(255, 255, 255, 0.85) 90%, white 95%),
                  radial-gradient(ellipse 70% 50% at 15% 15%, rgba(67, 56, 202, 1) 0%, rgba(79, 70, 229, 0.8) 35%, rgba(99, 102, 241, 0.5) 55%, transparent 75%),
                  linear-gradient(135deg, rgba(219, 39, 119, 0.95) 0%, rgba(236, 72, 153, 0.8) 15%, rgba(251, 113, 133, 0.6) 30%, rgba(168, 85, 247, 0.4) 45%, transparent 70%),
                  radial-gradient(ellipse 120% 70% at 85% 40%, rgba(96, 165, 250, 0.95) 0%, rgba(147, 197, 253, 0.75) 30%, rgba(191, 219, 254, 0.5) 50%, rgba(219, 234, 254, 0.3) 70%, transparent 85%),
                  linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.25) 20%, rgba(96, 165, 250, 0.3) 40%, rgba(167, 139, 250, 0.2) 55%, transparent 70%)
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              <div className="px-4 md:mx-12 md:px-0 flex flex-col items-center max-w-7xl">
                <Image
                  src="/assets/logoWithoutBackground.png"
                  alt={`Al Firma - Agence de développement d'applications mobiles et web${
                    location ? ` à ${location.name}` : ""
                  }`}
                  width={200}
                  height={200}
                  className="w-1/2 md:w-1/5 hover:transform hover:rotate-[57deg] transition-all duration-200 my-20"
                  priority
                />
                <h1 className="text-4xl md:text-8xl text-white text-center self-center font-bold mb-4">
                  AL FIRMA
                </h1>
                <h2 className="text-white my-4 text-3xl md:text-5xl text-center">
                  Développement d'Applications Mobiles et Web
                </h2>
                {location && (
                  <div className="flex items-center justify-center text-white text-lg md:text-xl mb-4">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Agence de développement web & mobile
                      {location ? ` à ${location.name}` : ""}
                    </span>
                  </div>
                )}
                <div className="flex flex-col items-center space-y-4">
                  <button
                    className="group w-64 py-4 border border-white rounded-full hover:bg-white cursor-pointer transition"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/karimbenchekroun/30min",
                        "_blank"
                      )
                    }
                  >
                    <span className="block group-hover:hidden">
                      On discute ?
                    </span>
                    <span className="hidden group-hover:block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400">
                      Réserver un appel
                    </span>
                  </button>
                  <a
                    href="#SECTION_CONTACT"
                    className="text-gray-700 text-sm underline hover:text-blue-900 transition-colors"
                  >
                    Ou envoyez-nous un message
                  </a>
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

                    <h2 className="text-7xl self-end text-gray-200 font-semibold">
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

                    <h2 className="text-7xl self-end text-gray-200 font-semibold ">
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

                    <h2 className=" text-7xl self-end text-gray-200 font-semibold">
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
                        À partir de 8900€
                      </h4>
                      <Link
                        href="/duodoku"
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        Voir notre projet Duodoku →
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
                    <h4 className="self-end text-xl font-bold text-white rounded-lg p-2 bg-gradient-to-r from-rose-400 to-blue-400 hover:scale-110 transform transition">
                      À partir de 6900€
                    </h4>
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
                  <div className="group shadow-[0px_2.421px_30.264px_0px_rgba(189,227,251,0.26)] flex flex-col items-center flex-1 bg-white mx-4 rounded-3xl p-9 my-8">
                    <Image
                      src="/assets/illustrations/api.png"
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
                    <h4 className="self-end text-xl font-bold text-white rounded-lg p-2 bg-gradient-to-r from-rose-400 to-blue-400 hover:scale-110 transform transition">
                      À partir de 4900€
                    </h4>
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
                    src="/assets/logoWithoutBackground.png"
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
                        Duodoku est une application de jeu de Sudoku innovante
                        qui offre une expérience de jeu unique pour les joueurs
                        solitaires ainsi que pour les joueurs en compétition.
                        Avec Duodoku, les joueurs peuvent profiter d'un jeu de
                        Sudoku classique en solo ou en mode multijoueur, et
                        tenter d'atteindre les plus hautes places du classement.
                        Développée en React Native, et s'appuyant sur une API
                        REST Django, elle est disponible sous iOS et Android.{" "}
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
                      <h3 className="text-orange-600 text-5xl">SAYAR</h3>
                      <p className="text-orange-600 text-sm my-8">
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
                          <h4 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400 mb-4">
                            {partners[0].name}
                          </h4>
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
                            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-400 mb-3">
                              {partner.name}
                            </h4>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mb-4">
                              {partner.description}
                            </p>

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
                BESOIN D'UN RENSEIGNEMENT ?
              </h3>
              <p className="px-4 md:px-0">
                Des questions ? On a toutes les réponses ! Remplissez le
                formulaire ci-dessous et suivez-nous sur nos réseaux sociaux
                pour rester connectés ! Notre équipe est là pour vous répondre
                avec enthousiasme et nos réseaux regorgent de contenus
                passionnants.
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
      </div>
    </>
  );
}

export default Home;
