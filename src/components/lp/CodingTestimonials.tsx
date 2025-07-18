'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'K.Tさん',
    age: '28歳',
    previousJob: '営業職',
    currentJob: 'バックエンドエンジニア',
    company: 'スタートアップIT企業',
    salary: '+150万円',
    period: '5ヶ月で転職成功',
    avatar: '👨‍💻',
    comment: '完全未経験からのスタートでしたが、メンターの方が親身になってサポートしてくださり、Node.jsの奥深さを理解できました。実際のプロジェクト形式の課題が特に役立ち、面接でも自信を持ってアピールできました。',
    beforeAfter: {
      before: 'プログラミング完全未経験',
      after: 'Node.js/TypeScriptを活用したAPI開発ができるように'
    }
  },
  {
    id: 2,
    name: 'M.Sさん',
    age: '32歳',
    previousJob: 'デザイナー',
    currentJob: 'フルスタックエンジニア',
    company: '中堅Web制作会社',
    salary: '+120万円',
    period: '6ヶ月で転職成功',
    avatar: '👩‍💻',
    comment: 'フロントエンドの知識はありましたが、バックエンドは全くの初心者でした。TypeScriptの型システムや、Express.jsを使ったAPI設計など、体系的に学べたおかげで、幅広いプロジェクトに対応できるようになりました。',
    beforeAfter: {
      before: 'フロントエンドのみ',
      after: 'フルスタック開発者として活躍'
    }
  },
  {
    id: 3,
    name: 'Y.Nさん',
    age: '25歳',
    previousJob: '事務職',
    currentJob: 'サーバーサイドエンジニア',
    company: '大手SIer',
    salary: '+180万円',
    period: '4ヶ月で転職成功',
    avatar: '🧑‍💻',
    comment: 'プログラミングスクール選びで悩んでいましたが、Node.js特化というのが決め手でした。実際に現場で使われている技術をピンポイントで学べたので、入社後もスムーズに業務に入れました。DockerやAWSも学べて実務ですぐに活用できています。',
    beforeAfter: {
      before: 'IT業界未経験',
      after: 'インフラも含めた幅広い知識を習得'
    }
  },
  {
    id: 4,
    name: 'R.Iさん',
    age: '29歳',
    previousJob: '小売業店長',
    currentJob: 'バックエンドエンジニア',
    company: 'EC系ベンチャー企業',
    salary: '+200万円',
    period: '6ヶ月で転職成功',
    avatar: '👨‍💼',
    comment: '完全に異業種からの転職でしたが、週2回のメンタリングで質問しやすい環境があったのが大きかったです。コードレビューも丁寧で、現場で通用するコードの書き方を身につけることができました。転職活動でも自作アプリをポートフォリオにして高評価をいただけました。',
    beforeAfter: {
      before: 'IT業界外で管理業務',
      after: 'EC サイトのバックエンド開発をリード'
    }
  }
];

export default function CodingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const slideNextManual = () => {
    slideNext();
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const slidePrevManual = () => {
    slidePrev();
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // 自動切り替え機能
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      slideNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-slate-900 relative">
      {/* 背景パターン */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />
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
            <span className="text-sky-400">卒業生の</span>転職成功体験
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            未経験から<span className="text-amber-400">エンジニア転職</span>を実現した
            <br />
            受講生の生の声をお聞きください
          </p>
        </motion.div>

        {/* カルーセル */}
        <div className="max-w-6xl mx-auto">
          <div 
            className="relative bg-slate-800 border border-sky-400/30 rounded-3xl shadow-2xl overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="p-8 md:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* 左側: ユーザー情報 */}
                  <div className="text-center lg:text-left">
                    <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4 text-4xl">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <h3 className="font-bold text-white text-xl mb-2">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-400 mb-2">
                      {testimonials[currentIndex].age} • {testimonials[currentIndex].previousJob} → {testimonials[currentIndex].currentJob}
                    </p>
                    <div className="text-sm text-gray-400 mb-4">
                      {testimonials[currentIndex].company}
                    </div>
                    
                    {/* 成果指標 */}
                    <div className="space-y-2">
                      <div className="bg-green-500/20 border border-green-400/30 rounded-lg px-3 py-2">
                        <span className="text-green-400 font-bold">{testimonials[currentIndex].salary}</span>
                        <div className="text-xs text-gray-400">年収アップ</div>
                      </div>
                      <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg px-3 py-2">
                        <span className="text-amber-400 font-bold">{testimonials[currentIndex].period}</span>
                      </div>
                    </div>
                  </div>

                  {/* 中央・右側: コメントとBefore/After */}
                  <div className="lg:col-span-2">
                    {/* 吹き出し */}
                    <div className="relative bg-slate-700 rounded-2xl p-6 mb-6">
                      <div className="absolute left-6 top-0 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-slate-700 -translate-y-2"></div>
                      
                      <p className="text-gray-200 leading-relaxed">
                        "{testimonials[currentIndex].comment}"
                      </p>
                    </div>

                    {/* Before/After */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
                        <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                          <span className="mr-2">📋</span> Before
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {testimonials[currentIndex].beforeAfter.before}
                        </p>
                      </div>
                      <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
                        <h4 className="text-green-400 font-semibold mb-2 flex items-center">
                          <span className="mr-2">🚀</span> After
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {testimonials[currentIndex].beforeAfter.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ナビゲーションボタン */}
            <button
              onClick={slidePrevManual}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full shadow-lg flex items-center justify-center text-sky-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={slideNextManual}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full shadow-lg flex items-center justify-center text-sky-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-sky-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* 自動再生表示 */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              4秒ごとに自動で切り替わります
            </p>
          </div>
        </div>

        {/* 転職統計 */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-slate-800 border border-sky-400/30 rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">
              転職成功実績
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">92%</div>
                <p className="text-gray-300">転職成功率</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">+130万円</div>
                <p className="text-gray-300">平均年収アップ</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">5.2ヶ月</div>
                <p className="text-gray-300">平均転職期間</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">248名</div>
                <p className="text-gray-300">転職成功者数</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 