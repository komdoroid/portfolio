'use client';

import { motion } from 'framer-motion';
import { buttonRipple, fadeInUp, scaleIn } from '@/lib/motionVariants';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-48 h-48 bg-white bg-opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white bg-opacity-5 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* メインメッセージ */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              今すぐ心のケアを
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                始めませんか？
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              一人で抱え込まずに、専門のカウンセラーと一緒に<br />
              あなたの心の健康を大切にしていきましょう
            </p>
          </motion.div>

          {/* 特典・メリット */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <span className="text-lg">✨ 初回30分無料</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <span className="text-lg">🔒 完全匿名対応</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <span className="text-lg">⏰ 24時間受付</span>
            </div>
          </motion.div>

          {/* CTAボタン群 */}
          <motion.div
            {...scaleIn}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            {/* メインCTAボタン */}
            <motion.button
              {...buttonRipple}
              className="relative overflow-hidden bg-gradient-to-r from-emerald-400 to-emerald-500 text-gray-900 px-10 py-5 rounded-full font-bold text-xl shadow-2xl group"
            >
              <span className="relative z-10 flex items-center">
                <span className="mr-2">🚀</span>
                まずは無料で相談する
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
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              サービス詳細を見る
            </motion.button>
          </motion.div>

          {/* 安心メッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-blue-200 text-lg mb-4">
              クレジットカード不要・登録後すぐご利用可能
            </p>
            
            {/* 信頼指標 */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🛡️</span>
                <span>SSL暗号化</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🏆</span>
                <span>国家資格保有</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">💯</span>
                <span>満足度96%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 浮遊する装飾要素 */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 hidden lg:block"
        >
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl">💙</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [0, -5, 0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 right-32 hidden lg:block"
        >
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-3xl">🌟</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            rotate: [0, 10, 0, -10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 hidden lg:block"
        >
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-xl">✨</span>
          </div>
        </motion.div>
      </div>

      {/* 下部のグラデーション */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-20"></div>
    </section>
  );
} 