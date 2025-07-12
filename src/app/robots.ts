import { MetadataRoute } from 'next'

// 🤖 robots.txt: 検索エンジンクローラーへの指示
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://yoursite.com' // 🌐 本番URLに変更してください
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/studio/', // Sanity Studio
        '/api/',     // API routes
        '/_next/',   // Next.js internals
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 