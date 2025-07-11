import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// 基本的なSanityDocument型定義
interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

// 環境変数の確認
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production';

// 環境変数が設定されていない場合の警告とダミークライアント
if (!projectId) {
  console.warn('⚠️  Sanity環境変数が設定されていません。サンプルデータを使用します。');
  console.warn('   設定方法: .env.localファイルにNEXT_PUBLIC_SANITY_PROJECT_IDを追加してください。');
}

// Sanityクライアントの条件付き初期化
export const client = projectId ? createClient({
  projectId,
  dataset,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01', // APIバージョンを固定
  token: process.env.SANITY_API_TOKEN, // 書き込み用トークン（サーバーサイドのみ）
}) : null;

// 画像URL生成機能（条件付き）
const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    console.warn('Sanityクライアントが初期化されていません');
    return null;
  }
  return builder.image(source);
}

// 画像最適化ヘルパー関数
export const optimizeImage = (
  image: any, 
  context: 'thumbnail' | 'card' | 'hero' | 'gallery' = 'card'
) => {
  if (!image || !builder) return null;
  
  const configs = {
    thumbnail: { width: 150, height: 150, quality: 60 },
    card: { width: 600, height: 400, quality: 85 },
    hero: { width: 1200, height: 600, quality: 90 },
    gallery: { width: 800, height: 600, quality: 85 }
  };
  
  const config = configs[context];
  const urlBuilder = urlFor(image);
  if (!urlBuilder) return null;
  
  return urlBuilder
    .width(config.width)
    .height(config.height)
    .quality(config.quality)
    .format('webp')
    .url();
};

// レスポンシブ画像URL生成
export const generateResponsiveUrls = (image: any) => {
  if (!image || !builder) return null;
  
  const urlBuilder = urlFor(image);
  if (!urlBuilder) return null;
  
  return {
    mobile: urlBuilder.width(400).height(267).format('webp').quality(70).url(),
    tablet: urlBuilder.width(600).height(400).format('webp').quality(85).url(),
    desktop: urlBuilder.width(800).height(533).format('webp').quality(90).url(),
    srcSet: [
      `${urlBuilder.width(400).height(267).format('webp').quality(70).url()} 400w`,
      `${urlBuilder.width(600).height(400).format('webp').quality(85).url()} 600w`,
      `${urlBuilder.width(800).height(533).format('webp').quality(90).url()} 800w`
    ].join(', ')
  };
};

// 型定義
export interface ContactDocument extends SanityDocument {
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface ProjectDocument extends SanityDocument {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  featured: boolean;
  order: number;
  status?: string;
  startDate?: string;
  endDate?: string;
}

// API関数（条件付き実行）
export async function createContact(data: Omit<ContactDocument, '_id' | '_type' | '_createdAt' | '_updatedAt' | '_rev'>) {
  if (!client) {
    throw new Error('Sanityクライアントが初期化されていません。環境変数を確認してください。');
  }
  
  return client.create({
    _type: 'contact',
    ...data,
  });
}

export async function getProjects(): Promise<ProjectDocument[]> {
  if (!client) {
    console.warn('Sanityクライアントが初期化されていません。空の配列を返します。');
    return [];
  }
  
  try {
    return await client.fetch(
      `*[_type == "project"] | order(order asc, _createdAt desc) {
        _id,
        title,
        description,
        techStack,
        githubUrl,
        demoUrl,
        image,
        featured,
        order,
        status,
        startDate,
        endDate
      }`
    );
  } catch (error) {
    console.error('プロジェクトデータの取得に失敗しました:', error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<ProjectDocument[]> {
  if (!client) {
    console.warn('Sanityクライアントが初期化されていません。空の配列を返します。');
    return [];
  }
  
  try {
    console.log('🔍 getFeaturedProjects: クエリ実行開始');
    
    const result = await client.fetch(
      `*[_type == "project" && featured == true] | order(order asc) {
        _id,
        title,
        description,
        techStack,
        githubUrl,
        demoUrl,
        image,
        featured,
        order,
        status
      }`
    );
    
    console.log('🔍 getFeaturedProjects: クエリ結果:', result);
    return result;
  } catch (error) {
    console.error('注目プロジェクトデータの取得に失敗しました:', error);
    return [];
  }
}

// デバッグ用: featuredフィルタなしの全プロジェクト取得
export async function getAllProjectsForDebug(): Promise<ProjectDocument[]> {
  if (!client) {
    console.warn('Sanityクライアントが初期化されていません。空の配列を返します。');
    return [];
  }
  
  try {
    console.log('🔍 getAllProjectsForDebug: フィルタなしクエリ実行');
    
    const result = await client.fetch(
      `*[_type == "project"] | order(order asc) {
        _id,
        title,
        description,
        techStack,
        githubUrl,
        demoUrl,
        image,
        featured,
        order,
        status
      }`
    );
    
    console.log('🔍 getAllProjectsForDebug: 全プロジェクト取得結果:', result);
    console.log('🔍 featured=trueのプロジェクト数:', result.filter((p: ProjectDocument) => p.featured).length);
    console.log('🔍 featured属性の分布:', result.map((p: ProjectDocument) => ({ title: p.title, featured: p.featured })));
    
    return result;
  } catch (error) {
    console.error('デバッグ用プロジェクトデータの取得に失敗しました:', error);
    return [];
  }
} 