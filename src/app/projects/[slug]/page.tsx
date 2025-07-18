import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OnlineCounselingLP from '@/components/projects/OnlineCounselingLP';
import DiaryAppLP from '@/components/projects/DiaryAppLP';
import InvoiceSaasLP from '@/components/projects/InvoiceSaasLP';
import CodingSchoolLP from '@/components/projects/CodingSchoolLP';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// プロジェクト設定
const projects = {
  'lp-online-counseling': {
    component: OnlineCounselingLP,
    metadata: {
      title: 'オンラインカウンセリング | 心の重荷を一人で抱えないで',
      description: '専門の臨床心理士が24時間対応。匿名でも安心してご相談いただけるオンラインカウンセリングサービス。初回30分無料、スマホで簡単にカウンセリングを始められます。',
      keywords: ['オンラインカウンセリング', '心理相談', 'メンタルヘルス', '臨床心理士', '匿名相談', 'ストレス'],
      openGraph: {
        title: 'オンラインカウンセリング | 心の重荷を一人で抱えないで',
        description: '専門の臨床心理士が24時間対応。匿名でも安心してご相談いただけるオンラインカウンセリングサービス。',
        type: 'website' as const,
        locale: 'ja_JP',
      },
      twitter: {
        card: 'summary_large_image' as const,
        title: 'オンラインカウンセリング | 心の重荷を一人で抱えないで',
        description: '専門の臨床心理士が24時間対応。匿名でも安心してご相談いただけるオンラインカウンセリングサービス。',
      },
      robots: {
        index: true,
        follow: true,
      }
    }
  },
  'lp-diary-app': {
    component: DiaryAppLP,
    metadata: {
      title: 'SNS日記アプリ | 毎日の気持ちを可愛く記録💕',
      description: '10〜20代女性に人気！写真と気分タグで毎日の感情を記録・共有できるSNS日記アプリ。匿名で安心、可愛いフィルター付き、SNSシェア機能で友達とつながろう✨',
      keywords: ['日記アプリ', 'SNS', '感情記録', '気分タグ', '写真日記', '匿名', 'Instagram', 'Twitter'],
      openGraph: {
        title: 'SNS日記アプリ | 毎日の気持ちを可愛く記録💕',
        description: '10〜20代女性に人気！写真と気分タグで毎日の感情を記録・共有できるSNS日記アプリ。',
        type: 'website' as const,
        locale: 'ja_JP',
      },
      twitter: {
        card: 'summary_large_image' as const,
        title: 'SNS日記アプリ | 毎日の気持ちを可愛く記録💕',
        description: '10〜20代女性に人気！写真と気分タグで毎日の感情を記録・共有できるSNS日記アプリ。',
      },
      robots: {
        index: true,
        follow: true,
      }
    }
  },
  'lp-invoice-saas': {
    component: InvoiceSaasLP,
    metadata: {
      title: '請求書管理SaaS | 請求業務をもっとスマートに',
      description: 'AI搭載の請求書管理システムで、煩雑な経理業務を自動化し、ビジネスの成長に集中できる環境を実現。自動リマインド、PDF出力、取引先管理まで完全対応。',
      keywords: ['請求書管理', 'SaaS', '経理業務', '自動化', 'AI', 'PDF出力', '自動リマインド', '取引先管理', 'BtoB'],
      openGraph: {
        title: '請求書管理SaaS | 請求業務をもっとスマートに',
        description: 'AI搭載の請求書管理システムで、煩雑な経理業務を自動化し、ビジネスの成長に集中できる環境を実現。',
        type: 'website' as const,
        locale: 'ja_JP',
      },
      twitter: {
        card: 'summary_large_image' as const,
        title: '請求書管理SaaS | 請求業務をもっとスマートに',
        description: 'AI搭載の請求書管理システムで、煩雑な経理業務を自動化し、ビジネスの成長に集中できる環境を実現。',
      },
      robots: {
        index: true,
        follow: true,
      }
    }
  },
  'lp-coding-school': {
    component: CodingSchoolLP,
    metadata: {
      title: 'Node.js + TypeScript コーディングスクール | ゼロから始めるエンジニアへの道',
      description: '未経験から半年で現場レベルへ。Node.js・TypeScript特化型オンラインスクールで、現役エンジニアによる1on1メンタリングと実務形式のハンズオン課題で確実にスキルアップ。',
      keywords: ['Node.js', 'TypeScript', 'プログラミングスクール', 'オンライン学習', 'バックエンド', 'エンジニア転職', '未経験者歓迎', 'メンタリング'],
      openGraph: {
        title: 'Node.js + TypeScript コーディングスクール | ゼロから始めるエンジニアへの道',
        description: '未経験から半年で現場レベルへ。Node.js・TypeScript特化型オンラインスクールで確実にスキルアップ。',
        type: 'website' as const,
        locale: 'ja_JP',
      },
      twitter: {
        card: 'summary_large_image' as const,
        title: 'Node.js + TypeScript コーディングスクール | ゼロから始めるエンジニアへの道',
        description: '未経験から半年で現場レベルへ。Node.js・TypeScript特化型オンラインスクールで確実にスキルアップ。',
      },
      robots: {
        index: true,
        follow: true,
      }
    }
  }
};

// 動的メタデータ生成
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  
  if (!project) {
    return {
      title: 'プロジェクトが見つかりません',
      description: '指定されたプロジェクトは存在しません。'
    };
  }

  return project.metadata;
}

// 静的パス生成（ISGに対応）
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  const ProjectComponent = project.component;
  return <ProjectComponent />;
} 