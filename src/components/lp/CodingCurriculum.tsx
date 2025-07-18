'use client';

import { motion } from 'framer-motion';

const curriculumSteps = [
  {
    step: "STEP 01",
    title: "JavaScript・Node.js基礎",
    duration: "4週間",
    description: "プログラミングの基礎からNode.jsの環境構築、基本的な非同期処理まで学習",
    skills: [
      "JavaScript ES6+ 構文",
      "Node.js環境構築",
      "npm/yarnパッケージ管理",
      "非同期処理（Promise/async-await）",
      "モジュールシステム"
    ],
    project: "簡単なCLIアプリケーションの開発",
    icon: "🟢",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-400/30"
  },
  {
    step: "STEP 02", 
    title: "TypeScript実装",
    duration: "3週間",
    description: "型安全なコード開発を学び、大規模アプリケーション開発の基盤を構築",
    skills: [
      "TypeScript基本構文",
      "型定義・インターフェース",
      "ジェネリクス活用",
      "デコレータパターン",
      "設定ファイル管理"
    ],
    project: "型安全なタスク管理APIの設計",
    icon: "🔷",
    color: "from-blue-400 to-sky-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30"
  },
  {
    step: "STEP 03",
    title: "Express.js API開発",
    duration: "5週間", 
    description: "RESTful API設計と認証システムの実装で実用的なバックエンド開発を習得",
    skills: [
      "Express.js基礎・ルーティング",
      "ミドルウェア開発",
      "JWT認証・認可システム",
      "バリデーション・エラーハンドリング",
      "API設計ベストプラクティス"
    ],
    project: "ユーザー管理機能付きブログAPI",
    icon: "⚡",
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-400/30"
  },
  {
    step: "STEP 04",
    title: "データベース連携",
    duration: "4週間",
    description: "MongoDB・PostgreSQLとの連携実装とORM活用によるデータ操作を学習",
    skills: [
      "MongoDB/Mongoose操作",
      "PostgreSQL/SQL基礎",
      "Prisma ORM活用",
      "データベース設計",
      "マイグレーション管理"
    ],
    project: "EC サイトのデータベース設計・実装",
    icon: "🛢️",
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30"
  },
  {
    step: "STEP 05",
    title: "テスト・品質管理",
    duration: "3週間",
    description: "単体テスト・統合テストの実装と、コード品質向上のための手法を習得",
    skills: [
      "Jest単体テスト",
      "Supertest API テスト",
      "テストカバレッジ",
      "ESLint/Prettier設定",
      "CI/CD基礎"
    ],
    project: "完全テストカバレッジAPIの構築",
    icon: "🧪",
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-400/30"
  },
  {
    step: "STEP 06",
    title: "本番環境デプロイ",
    duration: "5週間",
    description: "Docker・AWS・CI/CDパイプラインを活用した本格的な本番環境構築",
    skills: [
      "Docker コンテナ化",
      "AWS (EC2/RDS/S3)",
      "GitHub Actions CI/CD",
      "Nginx リバースプロキシ",
      "監視・ログ管理"
    ],
    project: "スケーラブルなWebアプリケーションの本番リリース",
    icon: "🚀",
    color: "from-red-400 to-pink-500", 
    bgColor: "bg-red-500/10",
    borderColor: "border-red-400/30"
  }
];

export default function CodingCurriculum() {
  return (
    <section className="py-20 bg-slate-800 relative">
      {/* 背景パターン */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(45deg,transparent_24%,rgba(56,189,248,0.1)_25%,rgba(56,189,248,0.1)_26%,transparent_27%,transparent_74%,rgba(56,189,248,0.1)_75%,rgba(56,189,248,0.1)_76%,transparent_77%)]" />
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
            <span className="text-sky-400">体系的な</span>学習ロードマップ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            6ヶ月間で<span className="text-amber-400">確実にスキルアップ</span>
            <br />
            基礎から本番環境まで段階的に学習を進めます
          </p>
        </motion.div>

        {/* カリキュラムステップ */}
        <div className="max-w-6xl mx-auto">
          {curriculumSteps.map((curriculum, index) => (
            <motion.div
              key={index}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* コンテンツ部分 */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      ${curriculum.bgColor} border ${curriculum.borderColor} rounded-2xl p-8
                      hover:bg-slate-700 transition-all duration-300
                    `}
                  >
                    {/* ステップヘッダー */}
                    <div className="flex items-center mb-6">
                      <motion.div
                        className={`
                          w-16 h-16 rounded-xl flex items-center justify-center text-3xl
                          bg-gradient-to-r ${curriculum.color}
                        `}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {curriculum.icon}
                      </motion.div>
                      <div className="ml-4">
                        <div className="text-sky-400 font-bold text-sm tracking-wider">
                          {curriculum.step}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {curriculum.title}
                        </h3>
                        <div className="text-amber-400 font-semibold">
                          期間: {curriculum.duration}
                        </div>
                      </div>
                    </div>

                    {/* 説明 */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {curriculum.description}
                    </p>

                    {/* スキル一覧 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        習得スキル
                      </h4>
                      <ul className="space-y-2">
                        {curriculum.skills.map((skill, skillIndex) => (
                          <motion.li
                            key={skillIndex}
                            className="flex items-center text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: index * 0.1 + skillIndex * 0.05,
                              duration: 0.4 
                            }}
                          >
                            <span className="text-amber-400 mr-3 font-mono">▶</span>
                            {skill}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* プロジェクト */}
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-sky-400 font-semibold mb-2">
                        🎯 実践プロジェクト
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {curriculum.project}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* ビジュアル部分 */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.3
                    }}
                  >
                    {/* コード例のモックアップ */}
                    <div className="bg-slate-900 border border-slate-600 rounded-lg p-6 font-mono text-sm overflow-hidden">
                      <div className="flex items-center mb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="ml-4 text-gray-400 text-xs">
                          {curriculum.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.ts
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-gray-300">
                        <div>
                          <span className="text-sky-400">import</span>{' '}
                          <span className="text-amber-400">express</span>{' '}
                          <span className="text-sky-400">from</span>{' '}
                          <span className="text-green-400">'express'</span>;
                        </div>
                        <div>
                          <span className="text-sky-400">const</span>{' '}
                          <span className="text-amber-400">app</span> ={' '}
                          <span className="text-amber-400">express</span>();
                        </div>
                        <div className="text-gray-500">// {curriculum.description}</div>
                        <div>
                          <span className="text-amber-400">app</span>.
                          <span className="text-sky-400">listen</span>(
                          <span className="text-green-400">3000</span>);
                        </div>
                      </div>
                    </div>

                    {/* ステップ番号の表示 */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center text-slate-900 font-bold shadow-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </motion.div>
                </div>

                {/* ステップ間の矢印（最後以外） */}
                {index < curriculumSteps.length - 1 && (
                  <motion.div
                    className="flex justify-center my-8 lg:col-span-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                  >
                    <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 最終成果物 */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-sky-500/10 to-amber-500/10 border border-sky-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎉 最終成果物
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              6ヶ月後、あなたは<span className="text-sky-400 font-bold">本格的なWebアプリケーション</span>を
              <br />
              ゼロから設計・開発・デプロイできるエンジニアになっています
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🏗️</div>
                <h4 className="font-bold text-white mb-1">アーキテクチャ設計</h4>
                <p className="text-sm text-gray-400">スケーラブルなシステム設計</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚙️</div>
                <h4 className="font-bold text-white mb-1">フルスタック開発</h4>
                <p className="text-sm text-gray-400">API〜フロントエンド〜DB</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="font-bold text-white mb-1">本番環境運用</h4>
                <p className="text-sm text-gray-400">デプロイ〜監視〜保守</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 