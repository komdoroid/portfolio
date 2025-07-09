import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'プロジェクト',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'プロジェクト名',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '説明',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(500),
    }),
    defineField({
      name: 'techStack',
      title: '技術スタック',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
      options: {
        list: [
          // フロントエンド
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'Tailwind CSS',
          'CSS',
          'HTML',
          'Framer Motion',
          'Zustand',
          'React Hook Form',
          'Material-UI',
          'Chakra UI',
          
          // バックエンド
          'Node.js',
          'Express.js',
          'Prisma',
          'PostgreSQL',
          'MongoDB',
          'MySQL',
          'SQLite',
          'REST API',
          'GraphQL',
          'Socket.IO',
          
          // インフラ・ツール
          'Vercel',
          'Firebase',
          'Supabase',
          'AWS',
          'Docker',
          'GitHub Actions',
          'Git',
          'CI/CD',
          
          // その他
          'React DnD',
          'Python',
          'Go',
          'Rust',
        ],
      },
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'demoUrl',
      title: 'デモURL',
      type: 'url',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'image',
      title: 'プロジェクト画像',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt テキスト',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: '注目プロジェクト',
      type: 'boolean',
      description: 'トップページに表示するかどうか',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: '表示順序',
      type: 'number',
      description: '小さい数字ほど上に表示されます',
      initialValue: 1,
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'status',
      title: 'ステータス',
      type: 'string',
      options: {
        list: [
          { title: '開発中', value: 'development' },
          { title: '完成', value: 'completed' },
          { title: 'メンテナンス中', value: 'maintenance' },
          { title: 'アーカイブ', value: 'archived' },
        ],
      },
      initialValue: 'completed',
    }),
    defineField({
      name: 'startDate',
      title: '開始日',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: '完了日',
      type: 'date',
    }),
  ],
  orderings: [
    {
      title: '表示順序',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: '作成日（新しい順）',
      name: 'createdAtDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'description',
      techStack: 'techStack',
      featured: 'featured',
    },
    prepare(selection: any) {
      const { title, media, subtitle, techStack, featured } = selection;
      const tech = techStack ? techStack.slice(0, 3).join(', ') + (techStack.length > 3 ? '...' : '') : '';
      return {
        title: featured ? `⭐ ${title}` : title,
        media: media,
        subtitle: `${tech} | ${subtitle?.substring(0, 50)}${subtitle?.length > 50 ? '...' : ''}`,
      };
    },
  },
}); 