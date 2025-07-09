'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  // Sanity Studio専用のベースパス（PostCSS競合回避）
  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .id('root') // ルートリストにIDを追加
          .title('管理画面')
          .items([
            S.listItem()
              .id('contact-list') // IDを追加
              .title('お問い合わせ')
              .icon(() => '📧')
              .child(
                S.documentTypeList('contact')
                  .title('お問い合わせ一覧')
                  .filter('_type == "contact"')
                  .defaultOrdering([{ field: 'createdAt', direction: 'desc' }])
              ),
            S.listItem()
              .id('project-list') // IDを追加
              .title('プロジェクト')
              .icon(() => '🚀')
              .child(
                S.documentTypeList('project')
                  .title('プロジェクト一覧')
                  .filter('_type == "project"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
          ])
    }),
    visionTool(), // GROQ クエリをテストするツール
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // 新しいドキュメント作成時のデフォルト動作
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId !== 'contact');
      }
      return prev;
    },
    
    // ドキュメントのアクション設定
    actions: (prev, { schemaType }) => {
      if (schemaType === 'contact') {
        // お問い合わせは削除とアーカイブのみ許可
        return prev.filter(({ action }) => ['delete', 'unpublish'].includes(action || ''));
      }
      return prev;
    },
  },

  // Vite設定でPostCSS競合を回避
  vite: (config: any) => {
    // PostCSS設定をリセット
    if (config.css) {
      config.css.postcss = {
        plugins: [],
      };
    } else {
      config.css = {
        postcss: {
          plugins: [],
        },
      };
    }
    return config;
  },

  // プレビュー機能の設定（将来的にプロジェクト詳細ページを作成時に使用）
  /* 
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare: ({ title, slug }) => ({
      title,
      subtitle: slug && `/${slug}`,
    }),
  },
  */
});
