'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            if (prevIndex < text.length) {
              setDisplayedText(text.slice(0, prevIndex + 1));
              return prevIndex + 1;
            }
            clearInterval(interval);
            return prevIndex;
          });
        }, speed);

        return () => clearInterval(interval);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed, currentIndex]);

  return <span>{displayedText}</span>;
};

const CodeBackground = () => {
  const [codeLines, setCodeLines] = useState<string[]>([]);

  const codeSnippets = [
    "const express = require('express');",
    "app.get('/api/users', async (req: Request, res: Response) => {",
    "  const users: User[] = await userService.getAll();",
    "  res.json({ data: users, status: 'success' });",
    "});",
    "",
    "interface User {",
    "  id: number;",
    "  name: string;",
    "  email: string;",
    "}",
    "",
    "const server = app.listen(PORT, () => {",
    "  console.log(`Server running on port ${PORT}`);",
    "});"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev];
        if (newLines.length < codeSnippets.length) {
          newLines.push(codeSnippets[newLines.length]);
        } else {
          newLines.shift();
          newLines.push(codeSnippets[Math.floor(Math.random() * codeSnippets.length)]);
        }
        return newLines.slice(-10); // 最新10行のみ表示
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="font-mono text-sm text-sky-400 p-8 leading-relaxed">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function CodingHero() {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center relative overflow-hidden">
      {/* コード背景演出 */}
      <CodeBackground />

      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-90" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* メインキャッチコピー */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sky-400">ゼロから始める</span>
            <br />
            <TypewriterText text="Node.js" delay={1000} speed={150} />
            <span className="text-amber-400">エンジニア</span>
            <br />
            <span className="text-sky-400">への道</span>
          </motion.h1>

          {/* サブコピー */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            未経験から<span className="text-amber-400 font-bold">半年で現場レベル</span>へ
            <br />
            Node.js・TypeScript特化型オンラインスクール
          </motion.p>

          {/* 特徴ポイント */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }}
          >
            <div className="bg-slate-800 border border-sky-400/30 rounded-lg px-4 py-2 text-sky-400">
              <span className="text-amber-400">✓</span> 現役エンジニアによる1on1メンタリング
            </div>
            <div className="bg-slate-800 border border-sky-400/30 rounded-lg px-4 py-2 text-sky-400">
              <span className="text-amber-400">✓</span> 実務形式のハンズオン課題
            </div>
            <div className="bg-slate-800 border border-sky-400/30 rounded-lg px-4 py-2 text-sky-400">
              <span className="text-amber-400">✓</span> 転職サポート付き
            </div>
          </motion.div>

          {/* CTAボタン */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4 }}
          >
            <motion.button
              className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-sky-500 text-slate-900 px-10 py-5 rounded-lg font-bold text-xl shadow-2xl group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                🚀 無料カウンセリングを予約
              </span>

              {/* 波紋エフェクト */}
              <motion.div
                className="absolute inset-0 bg-white opacity-0 rounded-lg"
                whileHover={{
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.5, 2],
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.button>

            <motion.button
              className="border-2 border-sky-400 text-sky-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-400 hover:text-slate-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              カリキュラムを見る
            </motion.button>
          </motion.div>

          {/* 追加情報 */}
          <motion.div
            className="mt-12 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 4.5 }}
          >
            <p className="mb-4">
              ✓ 受講生の<span className="text-amber-400 font-bold">92%</span>が転職成功
              ✓ 平均年収アップ<span className="text-amber-400 font-bold">120万円</span>
            </p>
            <div className="text-sm">
              <span className="text-sky-400">const</span>{' '}
              <span className="text-amber-400">yourFuture</span> ={' '}
              <span className="text-green-400">'successful engineer'</span>;
            </div>
          </motion.div>
        </div>
      </div>

      {/* 装飾的な要素 */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-sky-400/30 rounded-lg opacity-20"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 border border-amber-400/30 rounded-full opacity-20"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      />
    </section>
  );
} 