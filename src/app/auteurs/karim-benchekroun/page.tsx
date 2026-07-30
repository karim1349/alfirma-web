import BlogCard from "@/app/blog/components/BlogCard";
import BlogNavBar from "@/app/blog/components/BlogNavBar";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Karim Benchekroun, fondateur d’Al Firma",
  description:
    "Articles de Karim Benchekroun sur le développement web et mobile, les API, la fintech et la conception de produits numériques.",
  alternates: {
    canonical: "https://alfirma.com/auteurs/karim-benchekroun/",
  },
  openGraph: {
    type: "profile",
    url: "https://alfirma.com/auteurs/karim-benchekroun/",
    title: "Karim Benchekroun, fondateur d’Al Firma",
    description:
      "Retours d’expérience et analyses sur le développement de produits numériques en France et au Maroc.",
  },
};

export default function KarimBenchekrounPage() {
  const posts = getAllPosts().filter(
    (post) => post.author === "Karim Benchekroun",
  );

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://alfirma.com/auteurs/karim-benchekroun/#person",
    name: "Karim Benchekroun",
    url: "https://alfirma.com/auteurs/karim-benchekroun/",
    jobTitle: "Fondateur d’Al Firma",
    worksFor: {
      "@type": "Organization",
      "@id": "https://alfirma.com/#organization",
      name: "Al Firma",
    },
    knowsAbout: [
      "Développement d’applications mobiles",
      "Développement web",
      "API REST",
      "Fintech",
      "Product design",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="flex items-center justify-center">
        <BlogNavBar />
      </div>
      <main className="min-h-screen bg-white pt-32">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-r from-rose-400 to-blue-400 flex items-center justify-center text-white text-4xl font-bold">
              K
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
                Auteur
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Karim Benchekroun
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fondateur d’Al Firma, agence de développement présente en France
                et au Maroc. Il écrit sur les produits numériques, les
                applications mobiles, les API et les transformations de
                l’écosystème technologique franco-marocain.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/services/api-rest-python/"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Expertise API et backend
                </Link>
                <a
                  href="https://linkedin.com/company/al-firma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Al Firma sur LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ses articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
