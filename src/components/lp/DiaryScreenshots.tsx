'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { carouselVariants, carouselTransition } from '@/lib/motionVariants';

const screenshots = [
  {
    id: 1,
    title: 'ホーム画面',
    description: '今日の気分を選んでスタート！可愛いアイコンがいっぱい💕',
    image: '📱', // プレースホルダー
    bgColor: 'from-pink-400 to-rose-500',
    features: ['気分選択', 'カレンダー表示', 'お気に入り投稿']
  },
  {
    id: 2,
    title: '投稿作成',
    description: '写真を選んで、気分タグをペタペタ。コメントも自由に書ける！',
    image: '📝', // プレースホルダー
    bgColor: 'from-purple-400 to-indigo-500',
    features: ['写真フィルター', '気分タグ', 'プライバシー設定']
  },
  {
    id: 3,
    title: 'タイムライン',
    description: 'みんなの投稿をチェック。共感したらハートをポチッ♪',
    image: '📋', // プレースホルダー
    bgColor: 'from-emerald-400 to-teal-500',
    features: ['無限スクロール', 'いいね機能', 'コメント']
  },
  {
    id: 4,
    title: 'マイページ',
    description: '自分だけの日記帳。過去の投稿を振り返って成長を実感！',
    image: '📊', // プレースホルダー
    bgColor: 'from-orange-400 to-amber-500',
    features: ['統計表示', '検索機能', 'エクスポート']
  },
  {
    id: 5,
    title: 'SNSシェア',
    description: 'Instagram、Xへワンタップでシェア。おしゃれなテンプレート付き✨',
    image: '🔗', // プレースホルダー
    bgColor: 'from-blue-400 to-cyan-500',
    features: ['テンプレート', 'ワンタップシェア', 'プライバシー保護']
  }
];

export default function DiaryScreenshots() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-pink-25 to-purple-25">
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
            アプリの中身を
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              のぞいてみて👀
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            実際の画面をチェック！どれも使いやすくて可愛いデザイン💖
          </p>
        </motion.div>

        {/* メインコンテンツ */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* スマホモック */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* スマホフレーム */}
                <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* ノッチ */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                    
                    {/* スクリーンコンテンツ */}
                    <div className="w-full h-full pt-8">
                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                          key={currentIndex}
                          custom={direction}
                          variants={carouselVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={carouselTransition}
                          className={`w-full h-full bg-gradient-to-br ${screenshots[currentIndex].bgColor} flex flex-col items-center justify-center text-white relative`}
                        >
                          {/* プレースホルダーコンテンツ */}
                          <div className="text-8xl mb-4">
                            {screenshots[currentIndex].image}
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            {screenshots[currentIndex].title}
                          </h3>
                          <div className="px-4 space-y-2">
                            {screenshots[currentIndex].features.map((feature, index) => (
                              <div key={index} className="text-sm opacity-90 text-center">
                                • {feature}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* 浮遊する装飾要素 */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-8 -right-8 text-4xl"
                >
                  ✨
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -5, 0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-8 -left-8 text-3xl"
                >
                  💕
                </motion.div>
              </div>
            </motion.div>

            {/* 説明コンテンツ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {screenshots[currentIndex].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {screenshots[currentIndex].description}
                  </p>
                  
                  {/* 機能リスト */}
                  <div className="space-y-3">
                    {screenshots[currentIndex].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${screenshots[currentIndex].bgColor} rounded-full`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* ナビゲーションボタン */}
              <div className="flex space-x-4">
                <button
                  onClick={slidePrev}
                  className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors duration-300 shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={slideNext}
                  className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:border-pink-300 hover:text-pink-600 transition-colors duration-300 shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center mt-12 space-x-3">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 底部メッセージ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            他にもたくさんの機能が！実際にダウンロードして確認してみて♪
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            📱 アプリを体験する
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 