'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function InvoiceHero() {
  const [animatedValues, setAnimatedValues] = useState<number[]>([])

  // グラフアニメーション用のランダムデータ生成
  useEffect(() => {
    const interval = setInterval(() => {
      const newValues = Array.from({ length: 12 }, () => Math.random() * 80 + 20)
      setAnimatedValues(newValues)
    }, 3000)

    // 初期値設定
    setAnimatedValues(Array.from({ length: 12 }, () => Math.random() * 80 + 20))

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* 背景グラフエフェクト */}
      <div className="absolute inset-0 opacity-5">
        <div className="flex items-end justify-center h-full space-x-2 p-8">
          {animatedValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-blue-900 rounded-t-lg"
              style={{ width: '20px' }}
              animate={{ height: `${value}%` }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-blue-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              請求業務を、
              <br />
              <span className="text-green-400">もっとスマート</span>に
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI搭載の請求書管理システムで、<br />
              煩雑な経理業務を自動化し、<br />
              ビジネスの成長に集中できる環境を実現
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="bg-green-400 hover:bg-green-500 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(74, 222, 128, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                無料で試してみる
              </motion.button>
              
              <motion.button
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                製品デモを見る
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-12 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p>✓ 導入費用無料 ✓ 30日間無料トライアル ✓ 専任サポート付き</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 装飾的な要素 */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-green-100 rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-blue-100 rounded-full opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
} 