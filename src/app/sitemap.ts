import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alfirma.com'
  const currentDate = new Date()
  
  // Location pages
  const locations = [
    // France
    'paris', 'nantes', 'angers', 'cholet',
    // Morocco  
    'casablanca', 'rabat', 'tanger', 'marrakech'
  ]

  const locationPages = locations.map(location => ({
    url: `${baseUrl}/${location}`,
    lastModified: currentDate,
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
      url: `${baseUrl}/home`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/duodoku`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/duodoku/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...locationPages
  ]
}
