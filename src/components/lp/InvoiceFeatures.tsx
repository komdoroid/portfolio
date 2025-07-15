'use client'

import { motion } from 'framer-motion'
import { FileText, Bell, Users, BarChart3, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Bell,
    title: '自動リマインド機能',
    description: '支払期限が近づくと自動で顧客にリマインドメールを送信。督促業務を完全自動化します。',
    color: 'text-green-400'
  },
  {
    icon: FileText,
    title: 'PDF一括出力',
    description: '請求書・見積書・領収書を美しいPDFで一括出力。プロフェッショナルな書類を瞬時に作成。',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: '取引先管理',
    description: '顧客情報を一元管理し、過去の取引履歴や支払い状況をリアルタイムで確認できます。',
    color: 'text-purple-500'
  },
  {
    icon: BarChart3,
    title: '売上分析ダッシュボード',
    description: '月次・年次の売上推移、未収金状況などを視覚的に分析。経営判断をデータでサポート。',
    color: 'text-green-400'
  },
  {
    icon: Shield,
    title: 'セキュリティ完備',
    description: '銀行レベルの暗号化とバックアップで大切なデータを保護。安心してご利用いただけます。',
    color: 'text-red-500'
  },
  {
    icon: Zap,
    title: 'API連携対応',
    description: '既存の会計ソフトやCRMシステムとシームレスに連携。データの二重入力を完全に排除。',
    color: 'text-yellow-500'
  }
]

export default function InvoiceFeatures() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            請求業務の<span className="text-green-400">すべて</span>を効率化
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            面倒な請求書作成から入金管理まで、AIが自動化する革新的な機能で
            <br />
            経理担当者の負担を大幅に軽減します
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 ${feature.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-green-400 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(74, 222, 128, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            すべての機能を詳しく見る
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 