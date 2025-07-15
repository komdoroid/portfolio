'use client';

import { motion } from 'framer-motion';
import { slideInLeft, slideInRight, fadeInUp } from '@/lib/motionVariants';

const steps = [
  {
    step: '01',
    title: '会員登録',
    description: 'メールアドレスだけで簡単に会員登録。匿名でのご利用も可能です。',
    details: [
      'メールアドレスのみで登録',
      '本名の入力は不要',
      '登録は30秒で完了'
    ],
    icon: '📝',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    step: '02',
    title: '相談方法の選択',
    description: 'チャット・音声通話・ビデオ通話の中からお好きな方法をお選びください。',
    details: [
      'チャット相談（文字のみ）',
      '音声通話（声のみ）',
      'ビデオ通話（顔出し）'
    ],
    icon: '💬',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100'
  },
  {
    step: '03',
    title: 'カウンセリング開始',
    description: '専門のカウンセラーとの相談がスタート。心のお悩みを安心してお話しください。',
    details: [
      '経験豊富なカウンセラー',
      '完全な守秘義務',
      '24時間対応可能'
    ],
    icon: '🌟',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ご利用の流れ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            簡単3ステップで心のケアを始められます
          </p>
        </motion.div>

        {/* ステップ */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* コンテンツ */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4`}>
                      {step.step}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {index === steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="mt-8"
                    >
                      <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
                        今すぐ始める
                      </button>
                    </motion.div>
                  )}
                </motion.div>

                {/* イラストエリア */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={index % 2 === 0 ? slideInRight : slideInLeft}
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 lg:p-12 relative overflow-hidden`}>
                    {/* 背景装飾 */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-20 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-20 rounded-full translate-y-12 -translate-x-12"></div>

                    {/* メインアイコン */}
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                        <span className="text-4xl md:text-5xl">{step.icon}</span>
                      </div>

                      {/* ステップ番号 */}
                      <div className={`inline-block bg-gradient-to-r ${step.color} text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg`}>
                        STEP {step.step}
                      </div>
                    </div>

                    {/* 浮遊する装飾要素 */}
                    <motion.div
                      animate={{ 
                        y: [-5, 5, -5],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-8 left-8 bg-white rounded-full p-2 shadow-md"
                    >
                      <span className="text-xl">✨</span>
                    </motion.div>

                    <motion.div
                      animate={{ 
                        y: [5, -5, 5],
                        rotate: [0, -5, 0, 5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute bottom-8 right-8 bg-white rounded-full p-2 shadow-md"
                    >
                      <span className="text-xl">💫</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* ステップ間の矢印（最後のステップ以外） */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex justify-center my-8"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* 安心メッセージ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              初めてでも安心してご利用いただけます
            </h3>
            <p className="text-gray-600 leading-relaxed">
              カウンセリングが初めての方でも、経験豊富なカウンセラーが優しくサポートいたします。<br />
              お気軽にお試しください。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 