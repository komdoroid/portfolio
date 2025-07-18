'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🟢',
    title: 'Node.js 完全マスター',
    description: 'サーバーサイドJavaScriptの基礎から応用まで。非同期処理、ファイルシステム、ストリームなど実務必須スキルを網羅。',
    details: [
      'イベントループの理解',
      'npm/yarnパッケージ管理',
      'モジュールシステム',
      'ファイル操作・ストリーム処理'
    ],
    color: 'from-green-400 to-emerald-500',
    bgColor: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-400/30'
  },
  {
    icon: '🔷',
    title: 'TypeScript実践開発',
    description: '型安全なコードで開発効率UP。インターフェース、ジェネリクス、デコレータまで現場で使われる技術を習得。',
    details: [
      '型システムの深い理解',
      'インターフェース設計',
      'ジェネリクス活用',
      'デコレータパターン'
    ],
    color: 'from-blue-400 to-sky-500',
    bgColor: 'from-blue-500/10 to-sky-500/10',
    borderColor: 'border-blue-400/30'
  },
  {
    icon: '⚡',
    title: 'Express.js API開発',
    description: 'RESTful API設計からGraphQL実装まで。認証、ミドルウェア、エラーハンドリングを含む実用的なAPI構築。',
    details: [
      'RESTful API設計',
      '認証・認可システム',
      'ミドルウェア開発',
      'エラーハンドリング'
    ],
    color: 'from-yellow-400 to-amber-500',
    bgColor: 'from-yellow-500/10 to-amber-500/10',
    borderColor: 'border-yellow-400/30'
  },
  {
    icon: '🛢️',
    title: 'データベース連携',
    description: 'MongoDB、PostgreSQL、Redisとの連携実装。ORMライブラリを使った効率的なデータ操作を学習。',
    details: [
      'MongoDB操作',
      'PostgreSQL/SQL',
      'Prisma ORM',
      'Redis キャッシュ'
    ],
    color: 'from-purple-400 to-violet-500',
    bgColor: 'from-purple-500/10 to-violet-500/10',
    borderColor: 'border-purple-400/30'
  },
  {
    icon: '🚀',
    title: '本番環境デプロイ',
    description: 'Docker、AWS、CI/CDパイプラインを使った本格デプロイ。運用監視、ログ管理まで実務レベルで対応。',
    details: [
      'Docker コンテナ化',
      'AWS クラウドデプロイ',
      'CI/CD パイプライン',
      '監視・ログ管理'
    ],
    color: 'from-red-400 to-pink-500',
    bgColor: 'from-red-500/10 to-pink-500/10',
    borderColor: 'border-red-400/30'
  },
  {
    icon: '👥',
    title: '1on1メンタリング',
    description: '現役エンジニアによる個別指導。コードレビュー、キャリア相談、転職サポートまで手厚くフォロー。',
    details: [
      '週2回の個別面談',
      'コードレビュー',
      'キャリア相談',
      '転職活動サポート'
    ],
    color: 'from-cyan-400 to-teal-500',
    bgColor: 'from-cyan-500/10 to-teal-500/10',
    borderColor: 'border-cyan-400/30'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function CodingFeatures() {
  return (
    <section className="py-20 bg-slate-900 relative">
      {/* 背景パターン */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.3),transparent_50%)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* セクションヘッダー */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-sky-400">実践的な</span>学習カリキュラム
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            現場で求められるスキルを体系的に習得。
            <br />
            <span className="text-amber-400">ハンズオン形式</span>で実際にコードを書きながら学びます。
          </p>
        </motion.div>

        {/* 特徴グリッド */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <div className={`
                bg-slate-800 border ${feature.borderColor} rounded-2xl p-8 h-full
                hover:bg-slate-700 transition-all duration-300
                bg-gradient-to-br ${feature.bgColor}
              `}>
                {/* アイコンとタイトル */}
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`
                      w-16 h-16 rounded-xl flex items-center justify-center text-3xl
                      bg-gradient-to-r ${feature.color}
                      group-hover:scale-110 transition-transform duration-300
                    `}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white ml-4 group-hover:text-sky-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                {/* 説明文 */}
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* 詳細リスト */}
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1 + detailIndex * 0.05,
                        duration: 0.4 
                      }}
                    >
                      <span className="text-amber-400 mr-2 font-mono">▶</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>

                {/* ホバー時の光沢エフェクト */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 統計情報 */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-slate-800 border border-sky-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">
              確実なスキルアップを実現
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">6ヶ月</div>
                <p className="text-gray-300">完走期間</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
                <p className="text-gray-300">実践課題</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">92%</div>
                <p className="text-gray-300">転職成功率</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 