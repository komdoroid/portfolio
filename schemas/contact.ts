import { defineType, defineField } from 'sanity';

export const contact = defineType({
  name: 'contact',
  title: 'お問い合わせ',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'お名前',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: 'email',
      title: 'メールアドレス',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'message',
      title: 'メッセージ',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(2000),
    }),
    defineField({
      name: 'createdAt',
      title: '送信日時',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'ステータス',
      type: 'string',
      options: {
        list: [
          { title: '未読', value: 'unread' },
          { title: '返信済み', value: 'replied' },
          { title: 'アーカイブ', value: 'archived' },
        ],
      },
      initialValue: 'unread',
    }),
  ],
  orderings: [
    {
      title: '送信日時（新しい順）',
      name: 'createdAtDesc',
      by: [{ field: 'createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      description: 'message',
    },
    prepare(selection: any) {
      const { title, subtitle, description } = selection;
      return {
        title: `${title} さんからのお問い合わせ`,
        subtitle: subtitle,
        description: description?.substring(0, 100) + (description?.length > 100 ? '...' : ''),
      };
    },
  },
}); 