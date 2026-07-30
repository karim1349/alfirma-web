export function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://alfirma.com/auteurs/karim-benchekroun/",
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://alfirma.com/#organization",
      "name": "Al Firma",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alfirma.com/assets/logo.png",
      },
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "image": image.startsWith('http') ? image : `https://alfirma.com${image}`,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    "inLanguage": "fr-FR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogListSchema({ posts }: { posts: { title: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://alfirma.com/blog/#blog",
    "name": "Blog Al Firma",
    "description": "Analyses et guides sur le développement, les API, le produit numérique et la fintech",
    "url": "https://alfirma.com/blog/",
    "publisher": {
      "@type": "Organization",
      "@id": "https://alfirma.com/#organization",
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": post.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
