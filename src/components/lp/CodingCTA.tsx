'use client';

import { motion } from 'framer-motion';

export default function CodingCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* 背景エフェクト */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-blue-900/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.6),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(251,191,36,0.6),transparent_50%)]" />
        </div>
      </div>

      {/* 装飾的なコード要素 */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="font-mono text-sky-400 text-sm absolute top-20 left-10 animate-pulse">
          <div>const success = await startLearning();</div>
        </div>
        <div className="font-mono text-amber-400 text-sm absolute bottom-20 right-10 animate-pulse">
          <div>if (motivation) &#123; achieve(); &#125;</div>
        </div>
        <div className="font-mono text-green-400 text-sm absolute top-1/2 left-20 animate-pulse">
          <div>console.log('Your future starts now');</div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* メインメッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              あなたも次の
              <br />
              <span className="bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">
                成功者
              </span>に
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              <span className="text-amber-400 font-bold">6ヶ月後</span>、あなたは憧れのエンジニアとして
              <br />
              新しいキャリアをスタートしています
            </p>
          </motion.div>

          {/* 成功事例の統計 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-slate-800/50 border border-sky-400/30 rounded-2xl p-8 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                className="text-5xl font-bold text-sky-400 mb-4"
              >
                92%
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">転職成功率</h3>
              <p className="text-gray-400 text-sm">
                受講生の9割以上が
                <br />
                エンジニア転職を実現
              </p>
            </div>

            <div className="bg-slate-800/50 border border-amber-400/30 rounded-2xl p-8 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                className="text-5xl font-bold text-amber-400 mb-4"
              >
                +130万円
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">平均年収アップ</h3>
              <p className="text-gray-400 text-sm">
                転職により大幅な
                <br />
                年収アップを実現
              </p>
            </div>

            <div className="bg-slate-800/50 border border-green-400/30 rounded-2xl p-8 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
                className="text-5xl font-bold text-green-400 mb-4"
              >
                248名
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">転職成功者数</h3>
              <p className="text-gray-400 text-sm">
                多くの仲間が
                <br />
                新しいキャリアを歩んでいます
              </p>
            </div>
          </motion.div>

          {/* 最後のメッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="text-amber-400">迷っている間</span>も
              <br />
              時間は過ぎていきます
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              1年後、あなたはどんな自分でいたいですか？
              <br />
              <span className="text-sky-400 font-bold">今日が人生を変える最初の日</span>になるかもしれません。
            </p>
          </motion.div>

          {/* CTAボタン群 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            {/* メインCTAボタン */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(56, 189, 248, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-sky-500 text-slate-900 px-12 py-6 rounded-full font-bold text-xl shadow-2xl group"
            >
              <span className="relative z-10 flex items-center">
                🚀 今すぐ無料カウンセリングを予約
              </span>

              {/* 波紋エフェクト */}
              <motion.div
                className="absolute inset-0 bg-white opacity-0 rounded-full"
                whileHover={{
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.5, 2],
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* 光沢エフェクト */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -skew-x-12 group-hover:animate-pulse"></div>
            </motion.button>

            {/* サブCTAボタン */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
            >
              📋 カリキュラム詳細を見る
            </motion.button>
          </motion.div>

          {/* 特典・メリット */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-lg">✨ 完全無料相談</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-lg">🎯 転職保証制度</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <span className="text-lg">💰 分割払い対応</span>
            </div>
          </motion.div>

          {/* 最終メッセージ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-gray-400"
          >
            <p className="mb-4">
              ✓ カウンセリングは<span className="text-sky-400 font-bold">完全無料</span>
              ✓ 無理な勧誘は<span className="text-sky-400 font-bold">一切なし</span>
            </p>
            <div className="text-sm font-mono">
              <span className="text-sky-400">while</span>{' '}
              <span className="text-amber-400">(dreaming)</span> &#123;{' '}
              <span className="text-green-400">startActing()</span>; &#125;
            </div>
          </motion.div>
        </div>
      </div>

      {/* 装飾的な要素 */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 border border-sky-400/20 rounded-lg opacity-30"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 border border-amber-400/20 rounded-full opacity-30"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      />
    </section>
  );
} 