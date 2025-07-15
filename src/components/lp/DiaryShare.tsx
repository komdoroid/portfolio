'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/motionVariants';

const socialPlatforms = [
  {
    name: 'Instagram',
    icon: '📸',
    color: 'from-pink-500 to-purple-600',
    bgColor: 'from-pink-50 to-purple-50',
    description: 'ストーリーで日記をシェア！可愛いテンプレートで投稿しよう💕',
    followers: '1.2万',
    hashtag: '#日記アプリ #気分記録',
    link: '#'
  },
  {
    name: 'X (Twitter)',
    icon: '🐦',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50',
    description: 'ツイートで今日の気分をみんなとシェア！140文字で気持ちを表現✨',
    followers: '8.5万',
    hashtag: '#日記アプリ #今日の気分',
    link: '#'
  },
  {
    name: 'TikTok',
    icon: '🎵',
    color: 'from-black to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    description: '日記動画で1日の振り返り！音楽と一緒に気分を投稿してみよう🎶',
    followers: '3.2万',
    hashtag: '#日記動画 #今日の1日',
    link: '#'
  }
];

const shareTemplates = [
  {
    title: 'キュートピンク',
    preview: '💕',
    bgGradient: 'from-pink-200 to-rose-200',
    textColor: 'text-pink-800',
    description: '可愛らしいピンクベースのテンプレート'
  },
  {
    title: 'パープルドリーム',
    preview: '💜',
    bgGradient: 'from-purple-200 to-indigo-200',
    textColor: 'text-purple-800',
    description: '夢見るような紫のグラデーション'
  },
  {
    title: 'ミントフレッシュ',
    preview: '🌿',
    bgGradient: 'from-emerald-200 to-teal-200',
    textColor: 'text-emerald-800',
    description: 'さわやかなミントグリーン'
  },
  {
    title: 'サンセット',
    preview: '🌅',
    bgGradient: 'from-orange-200 to-pink-200',
    textColor: 'text-orange-800',
    description: '夕焼けのような温かいカラー'
  }
];

export default function DiaryShare() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-25 to-pink-25">
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
            みんなと
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              つながろう🌟
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            あなたの日記をSNSでシェアして、たくさんの人と気持ちを共有しよう！<br />
            可愛いテンプレートでおしゃれに投稿できます✨
          </p>
        </motion.div>

        {/* SNSプラットフォーム */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto"
        >
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${platform.bgColor} rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300`}>
                {/* プラットフォームアイコン */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`w-20 h-20 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {platform.icon}
                  </motion.div>
                </div>

                {/* プラットフォーム名 */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  {platform.name}
                </h3>

                {/* フォロワー数 */}
                <div className="text-center mb-4">
                  <span className="bg-white bg-opacity-70 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
                    フォロワー {platform.followers}人
                  </span>
                </div>

                {/* 説明 */}
                <p className="text-gray-600 text-center leading-relaxed mb-6">
                  {platform.description}
                </p>

                {/* ハッシュタグ */}
                <div className="text-center mb-6">
                  <span className="text-sm text-gray-500">
                    {platform.hashtag}
                  </span>
                </div>

                {/* シェアボタン */}
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${platform.color} text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300`}
                  >
                    {platform.name}でシェア
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* シェアテンプレート */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
            可愛いテンプレートでシェア💕
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            気分に合わせて選べる豊富なテンプレート！どれも可愛くて迷っちゃう✨
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {shareTemplates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${template.bgGradient} rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300`}>
                  <div className="text-4xl mb-3">{template.preview}</div>
                  <h4 className={`font-bold ${template.textColor} mb-2`}>
                    {template.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {template.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 公式アカウント紹介 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-100 via-purple-50 to-indigo-100 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              公式アカウントをフォローしよう📱
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              最新機能やお得情報、ユーザーの投稿リポストなど<br />
              楽しいコンテンツをお届けします！
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-2"
              >
                <span>📸</span>
                <span>@diary_app_official</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-2"
              >
                <span>🐦</span>
                <span>@DiaryApp_JP</span>
              </motion.a>
            </div>

            {/* シェア促進 */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-600 mb-4">
                あなたの投稿が公式アカウントでリポストされるかも？✨
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                🌟 ハッシュタグで投稿する
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 