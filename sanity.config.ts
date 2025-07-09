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

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('管理画面')
          .items([
            S.listItem()
              .title('お問い合わせ')
              .icon(() => '📧')
              .child(
                S.documentTypeList('contact')
                  .title('お問い合わせ一覧')
                  .filter('_type == "contact"')
                  .defaultOrdering([{ field: 'createdAt', direction: 'desc' }])
              ),
            S.listItem()
              .title('プロジェクト')
              .icon(() => '🚀')
              .child(
                S.documentTypeList('project')
                  .title('プロジェクト一覧')
                  .filter('_type == "project"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['contact', 'project'].includes(listItem.getId() || '')
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
