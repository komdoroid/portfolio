'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { carouselVariants, carouselTransition, fadeInUp } from '@/lib/motionVariants';

const testimonials = [
  {
    id: 1,
    name: 'M.Kさん',
    age: '30代女性',
    category: '仕事のストレス',
    rating: 5,
    comment: '仕事のプレッシャーで眠れない日が続いていましたが、カウンセリングを受けて心が軽くなりました。匿名で相談できるので、安心して本音を話せました。',
    beforeAfter: {
      before: '毎日不安で仕事に集中できない',
      after: 'ストレス管理ができるようになった'
    }
  },
  {
    id: 2,
    name: 'T.Sさん',
    age: '40代男性',
    category: '人間関係',
    rating: 5,
    comment: '職場の人間関係に悩んでいましたが、カウンセラーの方が親身に聞いてくださり、具体的なアドバイスをいただけました。今では以前より楽に働けています。',
    beforeAfter: {
      before: '職場での孤立感に悩んでいた',
      after: 'コミュニケーションが改善された'
    }
  },
  {
    id: 3,
    name: 'A.Yさん',
    age: '20代女性',
    category: '将来への不安',
    rating: 4,
    comment: '将来に対する漠然とした不安がありましたが、自分の気持ちを整理することができました。スマホで手軽に相談できるのが本当に助かります。',
    beforeAfter: {
      before: '将来が見えず不安だった',
      after: '目標が明確になり前向きに'
    }
  },
  {
    id: 4,
    name: 'K.Mさん',
    age: '50代女性',
    category: '家族関係',
    rating: 5,
    comment: '家族との関係で悩んでいましたが、カウンセリングを通じて新しい視点を得ることができました。24時間対応なので、深夜でも相談できて心強いです。',
    beforeAfter: {
      before: '家族との距離感に悩んでいた',
      after: '良好な関係を築けるようになった'
    }
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <span className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ⭐
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            利用者の声
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            実際にサービスをご利用いただいた方の体験談をご紹介します
          </p>
        </motion.div>

        {/* カルーセル */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={carouselTransition}
                className="p-8 md:p-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* 左側: ユーザー情報 */}
                  <div className="text-center md:text-left">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                      <span className="text-2xl text-white font-bold">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {testimonials[currentIndex].age}
                    </p>
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {testimonials[currentIndex].category}
                    </div>
                    <StarRating rating={testimonials[currentIndex].rating} />
                  </div>

                  {/* 中央: コメント（吹き出し） */}
                  <div className="md:col-span-2">
                    <div className="relative bg-gray-50 rounded-2xl p-6">
                      {/* 吹き出しの三角 */}
                      <div className="absolute left-6 top-0 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-50 -translate-y-2"></div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        "{testimonials[currentIndex].comment}"
                      </p>

                      {/* Before/After */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-3">
                          <h4 className="text-sm font-semibold text-red-700 mb-1">Before</h4>
                          <p className="text-xs text-red-600">
                            {testimonials[currentIndex].beforeAfter.before}
                          </p>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-3">
                          <h4 className="text-sm font-semibold text-emerald-700 mb-1">After</h4>
                          <p className="text-xs text-emerald-600">
                            {testimonials[currentIndex].beforeAfter.after}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ナビゲーションボタン */}
            <button
              onClick={slidePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={slideNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* 自動再生表示 */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              3秒ごとに自動で切り替わります
            </p>
          </div>
        </div>

        {/* 統計情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              多くの方にご満足いただいています
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
                <p className="text-sm text-gray-600">満足度</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">89%</div>
                <p className="text-sm text-gray-600">継続利用率</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
                <p className="text-sm text-gray-600">平均評価点</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 