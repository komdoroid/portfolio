'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppBadges } from '@/components/ui/AppBadge';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
}

const TypewriterText = ({ text, delay = 0, speed = 80 }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;

    const startTyping = () => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
        timeout = setTimeout(startTyping, speed);
      } else {
        setIsComplete(true);
      }
    };

    const initialDelay = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, delay, speed]);

  return (
    <span className="inline-block">
      {displayText}
      {!isComplete && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-1 h-12 bg-pink-500 ml-1"
        />
      )}
    </span>
  );
};

export default function DiaryHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* カラフル背景エフェクト */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          className="absolute top-32 right-20 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* アプリロゴ風 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
              <span className="text-4xl">💖</span>
            </div>
          </motion.div>

          {/* メインキャッチコピー */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 leading-tight">
              <TypewriterText 
                text="毎日の気持ちを" 
                delay={500}
                speed={100}
              />
              <br />
              <TypewriterText 
                text="可愛く記録💕" 
                delay={2500}
                speed={100}
              />
            </h1>
          </div>

          {/* サブコピー */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl"
          >
            写真とコメントで今日の気分をシェア✨<br />
            <span className="text-pink-600 font-semibold">匿名だから安心</span>して本音を投稿できる
          </motion.p>

          {/* 特徴ポイント */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
              <span className="text-pink-600 font-medium">📸 写真日記</span>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
              <span className="text-purple-600 font-medium">🎭 気分タグ</span>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
              <span className="text-indigo-600 font-medium">👤 匿名投稿</span>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
              <span className="text-pink-600 font-medium">💌 SNSシェア</span>
            </div>
          </motion.div>

          {/* アプリストアバッジ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <AppBadges 
              animate={true}
              className="justify-center"
            />
          </motion.div>

          {/* 利用者数 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-600"
          >
            <p className="text-lg">
              🌟 既に<span className="font-bold text-pink-600">10万人</span>以上が利用中！
            </p>
          </motion.div>
        </div>

        {/* 浮遊する絵文字 */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 10, 0, -10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 hidden lg:block"
        >
          <div className="text-4xl">💕</div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [15, -15, 15],
            rotate: [0, -15, 0, 15, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-32 hidden lg:block"
        >
          <div className="text-3xl">✨</div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 20, 0, -20, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-32 hidden lg:block"
        >
          <div className="text-4xl">🌈</div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -10, 0, 10, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-20 right-20 hidden lg:block"
        >
          <div className="text-3xl">💖</div>
        </motion.div>
      </div>
    </section>
  );
} 