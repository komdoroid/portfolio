import { MetadataRoute } from 'next'

// 🗺️ サイトマップ: 検索エンジンにサイト構造を伝える
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yoursite.com' // 🌐 本番URLに変更してください
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // 最重要ページ
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8, // 重要ページ
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6, // 普通の重要度
    },
    // 🔄 将来的にプロジェクト詳細ページを追加する場合
    // {
    //   url: `${baseUrl}/projects/project-slug`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.5,
    // },
  ]
} 