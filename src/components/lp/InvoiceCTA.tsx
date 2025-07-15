'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Users } from 'lucide-react'

export default function InvoiceCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            今すぐ始めて、
            <br />
            <span className="text-green-400">請求業務を変革</span>しませんか？
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            数千社が選んだ請求書管理システムで、
            <br />
            あなたのビジネスも次のステージへ
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* 左側：メリット */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Clock className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    5分で設定完了
                  </h3>
                  <p className="text-blue-100">
                    複雑な設定は不要。簡単3ステップですぐに利用開始
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Shield className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    30日間返金保証
                  </h3>
                  <p className="text-blue-100">
                    満足いただけない場合は全額返金いたします
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    専任サポート
                  </h3>
                  <p className="text-blue-100">
                    導入から運用まで専門スタッフがしっかりサポート
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 右側：CTA */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  今すぐ無料で始める
                </h3>
                <p className="text-gray-600">
                  クレジットカード不要・導入費用無料
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                    placeholder="株式会社サンプル"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                    placeholder="sample@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    従業員数
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300">
                    <option>1-10名</option>
                    <option>11-50名</option>
                    <option>51-100名</option>
                    <option>100名以上</option>
                  </select>
                </div>

                <motion.button
                  className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(74, 222, 128, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  無料トライアルを開始
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  ご登録いただいた情報は、サービス提供とサポート以外の目的では使用いたしません
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-100 mb-6">
            まずは製品デモをご覧になりたい方はこちら
          </p>
          
          <motion.button
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            オンラインデモを予約
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 