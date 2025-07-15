'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/motionVariants';

const features = [
  {
    icon: '📸',
    title: '写真で気持ちを表現',
    description: '今日の1枚と一緒に気持ちを記録。フィルターも豊富で可愛く仕上がる♪',
    gradient: 'from-pink-400 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50',
    hoverColor: 'hover:from-pink-500 hover:to-rose-600'
  },
  {
    icon: '🎭',
    title: '気分タグで感情整理',
    description: '100種類以上の気分タグで今の感情をペタペタ。心の変化が見える化される！',
    gradient: 'from-purple-400 to-indigo-500',
    bgGradient: 'from-purple-50 to-indigo-50',
    hoverColor: 'hover:from-purple-500 hover:to-indigo-600'
  },
  {
    icon: '👤',
    title: '匿名だから本音で投稿',
    description: '顔も名前も出さずに投稿OK。誰にも知られずに気持ちを吐き出せる安心感✨',
    gradient: 'from-emerald-400 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    hoverColor: 'hover:from-emerald-500 hover:to-teal-600'
  },
  {
    icon: '💌',
    title: 'SNSで気軽にシェア',
    description: 'Instagram、X（Twitter）へワンタップでシェア。おしゃれなテンプレートも用意！',
    gradient: 'from-orange-400 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
    hoverColor: 'hover:from-orange-500 hover:to-amber-600'
  },
  {
    icon: '🌙',
    title: '睡眠・体調も記録',
    description: '睡眠時間や体調もカンタン記録。生活リズムと気分の関係が見えてくる！',
    gradient: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    hoverColor: 'hover:from-blue-500 hover:to-cyan-600'
  },
  {
    icon: '💎',
    title: 'プライベート日記',
    description: '公開せずに自分だけの秘密の日記も作成可能。完全プライベートモードで安心♪',
    gradient: 'from-violet-400 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    hoverColor: 'hover:from-violet-500 hover:to-purple-600'
  }
];

export default function DiaryFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-pink-25 to-purple-25">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            こんな機能が
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              詰まってる💕
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            毎日を楽しく記録できる機能がいっぱい！<br />
            あなたの日常を特別な思い出に変えよう✨
          </p>
        </motion.div>

        {/* 特徴カード */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 h-full border border-white shadow-lg hover:shadow-2xl transition-all duration-300`}>
                {/* アイコン */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} ${feature.hoverColor} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                {/* タイトル */}
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* 説明文 */}
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* 装飾ドット */}
                <div className="flex justify-center mt-6 space-x-2">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full`}
                  />
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    transition={{ delay: 0.1 }}
                    className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-70`}
                  />
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    transition={{ delay: 0.2 }}
                    className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-40`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 底部のCTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-100 via-purple-50 to-indigo-100 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              今すぐ始めて、毎日をもっと
              <span className="text-pink-600">可愛く</span>記録しよう💖
            </h3>
            <p className="text-gray-600 mb-6">
              無料でダウンロード！課金なしでも十分楽しめます
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              🚀 無料でダウンロード
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 