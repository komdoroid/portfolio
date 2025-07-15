'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight, buttonRipple } from '@/lib/motionVariants';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
}

const TypewriterText = ({ text, delay = 0, speed = 50 }: TypewriterTextProps) => {
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
          className="inline-block w-0.5 h-8 bg-blue-500 ml-1"
        />
      )}
    </span>
  );
};

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左側: テキストコンテンツ */}
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            {/* メインキャッチコピー */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <TypewriterText 
                text="心の重荷を" 
                delay={500}
                speed={80}
              />
              <br />
              <TypewriterText 
                text="一人で抱えないで" 
                delay={2000}
                speed={80}
              />
            </h1>

            {/* サブコピー */}
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              専門の臨床心理士があなたの心に寄り添い、<br />
              安心できる環境で丁寧にサポートいたします。
            </motion.p>

            {/* 特徴ポイント */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 4.5, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">匿名相談可能</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">24時間受付</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">スマホで完結</span>
              </div>
            </motion.div>

            {/* CTAボタン */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                {...buttonRipple}
                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="relative z-10">今すぐ相談をはじめる</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                {...buttonRipple}
                className="border-2 border-gray-300 text-gray-600 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 hover:text-gray-700 transition-colors duration-300"
              >
                まずは話を聞いてみる
              </motion.button>
            </motion.div>

            {/* 追加情報 */}
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 5.5, duration: 0.6 }}
              className="text-sm text-gray-500 mt-6"
            >
              ✓ 初回相談30分無料　✓ 国家資格保有カウンセラー在籍
            </motion.p>
          </motion.div>

          {/* 右側: イラスト・画像エリア */}
          <motion.div
            {...fadeInRight}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl p-8 lg:p-12">
              {/* 背景装飾 */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-emerald-200 rounded-full opacity-50"></div>
              
              {/* メインイラスト */}
              <div className="relative z-10 text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-6xl md:text-7xl">🫂</div>
                </div>
                
                {/* 浮遊する要素 */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 bg-white rounded-full p-3 shadow-md"
                >
                  <span className="text-2xl">💙</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-16 right-16 bg-white rounded-full p-3 shadow-md"
                >
                  <span className="text-2xl">🌱</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-12 left-16 bg-white rounded-full p-3 shadow-md"
                >
                  <span className="text-2xl">✨</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 