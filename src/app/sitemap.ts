import { getAllPosts } from '@/lib/blog';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alfirma.com';
  const currentDate = new Date()
  
  // Location pages
  const locations = [
    // France
    'paris', 'nantes', 'angers', 'cholet',
    // Morocco  
    'casablanca', 'rabat', 'tanger', 'marrakech'
  ]

  const locationPages = locations.map(location => ({
    url: `${baseUrl}/${location}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Service pages
  const services = [
    'developpement-mobile',
    'developpement-web-django',
    'api-rest-python',
    'design-ux-ui'
  ]

  const servicePages = services.map(service => ({
    url: `${baseUrl}/services/${service}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts
  const blogPosts = getAllPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedAt || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/home/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/duodoku/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/duodoku/privacy/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/petit-pas/privacy/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tarifs/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projets/qiima/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...servicePages,
    ...locationPages,
    ...blogPosts,
  ]
}

