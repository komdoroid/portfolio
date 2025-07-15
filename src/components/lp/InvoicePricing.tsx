'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

const plans = [
  {
    name: 'フリー',
    price: '¥0',
    period: '永年無料',
    description: '小規模事業者向け',
    icon: Zap,
    features: [
      '月間請求書 10通まで',
      '基本的な請求書テンプレート',
      'PDF出力',
      'メールサポート',
      '取引先管理 20件まで'
    ],
    limitations: [
      'リマインド機能なし',
      'API連携なし',
      'カスタムテンプレートなし'
    ],
    recommended: false,
    ctaText: '無料で始める'
  },
  {
    name: 'スタンダード',
    price: '¥2,980',
    period: '/月',
    description: '中小企業向け',
    icon: Star,
    features: [
      '月間請求書 無制限',
      '全テンプレート利用可能',
      '自動リマインド機能',
      'PDF・Excel出力',
      '取引先管理 無制限',
      '売上分析レポート',
      '電話・メールサポート',
      'API連携（基本）'
    ],
    limitations: [],
    recommended: true,
    ctaText: '14日間無料トライアル'
  },
  {
    name: 'プレミアム',
    price: '¥5,980',
    period: '/月',
    description: '成長企業向け',
    icon: Star,
    features: [
      'スタンダードの全機能',
      'カスタムテンプレート作成',
      '高度な売上分析',
      'ワークフロー自動化',
      'API連携（フル）',
      '複数ユーザー管理',
      '専任サポート',
      'セキュリティ強化',
      'データバックアップ'
    ],
    limitations: [],
    recommended: false,
    ctaText: '14日間無料トライアル'
  }
]

export default function InvoicePricing() {
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
            シンプルで<span className="text-green-400">透明</span>な料金体系
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            事業規模に合わせて選べる3つのプラン
            <br />
            すべてのプランで30日間返金保証付き
          </p>
          
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
            <Star className="w-4 h-4" />
            <span className="font-semibold">初期費用・解約手数料 完全無料</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.recommended ? 'ring-2 ring-green-400 scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      最も人気
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                        plan.recommended ? 'bg-green-400 text-white' : 'bg-blue-100 text-blue-900'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">
                        {plan.period}
                      </span>
                    </div>

                    <motion.button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.recommended
                          ? 'bg-green-400 hover:bg-green-500 text-white shadow-lg'
                          : 'bg-blue-900 hover:bg-blue-800 text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.ctaText}
                    </motion.button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-900 text-sm uppercase tracking-wide">
                      含まれる機能
                    </h4>
                    
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}

                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-500 text-sm uppercase tracking-wide mt-6">
                          制限事項
                        </h4>
                        {plan.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 border border-gray-300 rounded mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500">{limitation}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
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
          <p className="text-gray-600 mb-6">
            どのプランが最適かわからない場合は、お気軽にご相談ください
          </p>
          
          <motion.button
            className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            プラン相談・見積もり依頼
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 