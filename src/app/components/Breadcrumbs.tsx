import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-gray-300 overflow-x-auto">
        {items.map((item, index) => (
          <li key={index} className="flex items-center flex-shrink-0">
            {index > 0 && (
              <svg
                className="w-3 h-3 md:w-4 md:h-4 mx-1 md:mx-2 text-gray-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium whitespace-nowrap" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Breadcrumb schema for structured data
export function BreadcrumbSchema({ items }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://www.alfirma.com${item.href}` : undefined
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
