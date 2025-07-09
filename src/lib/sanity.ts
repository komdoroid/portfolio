import { createClient } from '@sanity/client';

// 基本的なSanityDocument型定義
interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01', // APIバージョンを固定
  token: process.env.SANITY_API_TOKEN, // 書き込み用トークン（サーバーサイドのみ）
});

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
}

// API関数
export async function createContact(data: Omit<ContactDocument, '_id' | '_type' | '_createdAt' | '_updatedAt' | '_rev'>) {
  return client.create({
    _type: 'contact',
    ...data,
  });
}

export async function getProjects(): Promise<ProjectDocument[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc, _createdAt desc) {
      _id,
      title,
      description,
      techStack,
      githubUrl,
      demoUrl,
      image,
      featured,
      order
    }`
  );
}

export async function getFeaturedProjects(): Promise<ProjectDocument[]> {
  return client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) {
      _id,
      title,
      description,
      techStack,
      githubUrl,
      demoUrl,
      image,
      featured,
      order
    }`
  );
} 