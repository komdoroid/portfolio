'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/motionVariants';

const features = [
  {
    icon: '🔒',
    title: '匿名相談可能',
    description: '本名を明かす必要はありません。安心してお気持ちを打ち明けられる環境を提供します。',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    iconBg: 'bg-emerald-500'
  },
  {
    icon: '👩‍⚕️',
    title: '臨床心理士多数在籍',
    description: '国家資格を持つ専門のカウンセラーが、あなたの心に寄り添い丁寧にサポートします。',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    iconBg: 'bg-blue-500'
  },
  {
    icon: '📱',
    title: 'スマホのみで完結',
    description: '特別なアプリのダウンロード不要。ブラウザからすぐにカウンセリングを始められます。',
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    iconBg: 'bg-purple-500'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            3つの安心ポイント
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            心の健康をサポートするために、安全で利用しやすい環境を整えています
          </p>
        </motion.div>

        {/* 特徴カード */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <div className={`${feature.bgColor} rounded-2xl p-8 h-full transition-transform duration-300 group-hover:scale-105 shadow-sm hover:shadow-md`}>
                {/* アイコン */}
                <div className="flex justify-center mb-6">
                  <div className={`${feature.iconBg} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>

                {/* タイトル */}
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                  {feature.title}
                </h3>

                {/* 説明文 */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>

                {/* 装飾要素 */}
                <div className="mt-6 flex justify-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors duration-300"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors duration-300 delay-75"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors duration-300 delay-150"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 追加の安心要素 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              さらなる安心のために
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <span className="text-xl">🛡️</span>
                </div>
                <span className="text-sm font-medium text-gray-700">厳格な守秘義務</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <span className="text-xl">⏰</span>
                </div>
                <span className="text-sm font-medium text-gray-700">24時間受付対応</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <span className="text-xl">💝</span>
                </div>
                <span className="text-sm font-medium text-gray-700">初回30分無料</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 