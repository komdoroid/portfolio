'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    username: '@みお_19',
    userIcon: '🌸',
    time: '2時間前',
    content: 'このアプリ最高すぎる😭💕毎日の気分を記録してたら、なんか前向きになれた気がする！写真フィルターも可愛いし、匿名だから本音で書けるのが良い✨',
    likes: 127,
    retweets: 23,
    mood: '😊'
  },
  {
    id: 2,
    username: '@ゆうか_diary',
    userIcon: '🦋',
    time: '5時間前',
    content: '気分タグ機能が天才的👏今まで「なんかモヤモヤする」みたいな感情しか分からなかったけど、100種類のタグのおかげで自分の気持ちが明確になった🥺✨',
    likes: 89,
    retweets: 15,
    mood: '🤔'
  },
  {
    id: 3,
    username: '@あんな_20',
    userIcon: '💫',
    time: '1日前',
    content: 'SNSシェア機能が便利すぎて泣ける😭ワンタップでInstagramにポストできるし、テンプレートがオシャレすぎる！友達にも勧めちゃった💖',
    likes: 156,
    retweets: 32,
    mood: '🥰'
  },
  {
    id: 4,
    username: '@りん_student',
    userIcon: '🌙',
    time: '1日前',
    content: '睡眠記録と気分の関係が見えるようになって、生活リズム改善できた！データで可視化されるとやる気出る📊夜更かししてる時は確実に気分下がってることが判明w',
    likes: 203,
    retweets: 48,
    mood: '😴'
  },
  {
    id: 5,
    username: '@ちか_life',
    userIcon: '🌈',
    time: '2日前',
    content: 'プライベート日記モードがあるの知らなかった！公開する分と自分だけの分を使い分けられるの最高😌秘密の日記帳みたいでワクワクする💕',
    likes: 91,
    retweets: 19,
    mood: '😌'
  },
  {
    id: 6,
    username: '@まい_emotion',
    userIcon: '✨',
    time: '3日前',
    content: '匿名だから変な目で見られる心配がない🥺みんな優しいコメントくれるし、同じような悩みの人もいて安心する💭一人じゃないって思える大切なアプリ🌟',
    likes: 178,
    retweets: 41,
    mood: '🥺'
  }
];

export default function DiaryTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // 自動スライド
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + visibleCount >= testimonials.length ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleCount]);

  // レスポンシブ対応
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-25 to-indigo-50">
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
            みんなの
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              リアルな声💬
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            実際に使ってる人たちの投稿をチェック！<br />
            みんなが感じてる良さが伝わってくる✨
          </p>
        </motion.div>

        {/* ツイートカルーセル */}
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${currentIndex}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    {/* ツイートヘッダー */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-xl">
                        {testimonial.userIcon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold text-gray-800">{testimonial.username}</h3>
                          <span className="text-2xl">{testimonial.mood}</span>
                        </div>
                        <p className="text-sm text-gray-500">{testimonial.time}</p>
                      </div>
                      <div className="text-blue-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </div>
                    </div>

                    {/* ツイート本文 */}
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {testimonial.content}
                    </p>

                    {/* ツイートフッター */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-gray-500">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center space-x-1 hover:text-pink-500 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-sm">{testimonial.likes}</span>
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center space-x-1 hover:text-emerald-500 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                          </svg>
                          <span className="text-sm">{testimonial.retweets}</span>
                        </motion.button>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleCount)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleCount) === index
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 底部CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              あなたも仲間入り！
              <span className="text-pink-600">今すぐ</span>始めよう💕
            </h3>
            <p className="text-gray-600 mb-6">
              みんなと一緒に毎日を可愛く記録しませんか？
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              💖 無料でダウンロード
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 