'use client';

import { motion } from 'framer-motion';
import { AppBadges } from '@/components/ui/AppBadge';

export default function DiaryCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        {/* グラデーション背景オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-900/40"></div>
        
        {/* 動的な背景要素 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="absolute top-32 right-20 w-60 h-60 bg-white rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 8
          }}
          className="absolute bottom-20 left-1/4 w-48 h-48 bg-white rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* メインメッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              今すぐ始めよう！
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                あなたの毎日を💖
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              10万人以上が使ってる日記アプリ✨<br />
              今日から可愛く気持ちを記録して、もっと自分を好きになろう！
            </p>
          </motion.div>

          {/* 特典・アピールポイント */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/30">
              <span className="text-lg font-medium">🆓 完全無料でスタート</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/30">
              <span className="text-lg font-medium">📱 30秒で始められる</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/30">
              <span className="text-lg font-medium">🎁 限定フィルタープレゼント</span>
            </div>
          </motion.div>

          {/* アプリストアバッジ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <AppBadges 
              animate={true}
              className="justify-center"
            />
          </motion.div>

          {/* 通知設定の促し */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              📢 通知をONにして、もっと楽しく！
            </h3>
            <p className="text-purple-100 mb-6 leading-relaxed">
              日記リマインダーや新機能の通知で、<br />
              記録習慣をサポート✨ いつでもOFFにできます
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                🔔 通知を許可する
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-700 transition-colors duration-300"
              >
                📤 友達に教える
              </motion.button>
            </div>
          </motion.div>

          {/* 最終CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-12 py-6 rounded-full font-bold text-2xl shadow-2xl group"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-3 text-3xl">🚀</span>
                今すぐ無料でダウンロード
              </span>
              
              {/* 光沢エフェクト */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -skew-x-12"
                animate={{
                  x: [-100, 400]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 3
                }}
              />
            </motion.button>

            {/* 追加メッセージ */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-purple-200 text-lg mt-6"
            >
              ✓ クレジットカード不要　✓ 個人情報なしで始められる　✓ いつでも削除OK
            </motion.p>
          </motion.div>
        </div>

        {/* 浮遊する絵文字 */}
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 hidden lg:block text-5xl"
        >
          💕
        </motion.div>

        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [0, -15, 0, 15, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-32 hidden lg:block text-4xl"
        >
          ✨
        </motion.div>

        <motion.div
          animate={{ 
            y: [-25, 25, -25],
            rotate: [0, 20, 0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-32 hidden lg:block text-5xl"
        >
          🌈
        </motion.div>

        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -10, 0, 10, 0],
            scale: [1.05, 1.15, 1.05]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-20 right-20 hidden lg:block text-4xl"
        >
          💖
        </motion.div>

        <motion.div
          animate={{ 
            y: [-12, 12, -12],
            rotate: [0, 8, 0, -8, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute top-1/2 left-16 hidden lg:block text-3xl"
        >
          🎀
        </motion.div>

        <motion.div
          animate={{ 
            y: [18, -18, 18],
            rotate: [0, -12, 0, 12, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
          className="absolute top-1/2 right-16 hidden lg:block text-4xl"
        >
          🌸
        </motion.div>
      </div>
    </section>
  );
} 