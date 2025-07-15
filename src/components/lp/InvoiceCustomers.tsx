'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    company: 'アルファテック株式会社',
    industry: 'IT・ソフトウェア',
    logo: 'AT',
    comment: '請求書作成にかかる時間が月40時間から5時間に短縮されました。経理担当の負担が大幅に減り、本来の業務に集中できるようになりました。',
    author: '経理部長 田中様',
    improvement: '作業時間88%削減'
  },
  {
    company: 'ベータコーポレーション',
    industry: '製造業',
    logo: 'BC',
    comment: '自動リマインド機能のおかげで、入金遅延が70%減少しました。キャッシュフローの改善に大きく貢献しています。',
    author: 'CFO 佐藤様',
    improvement: '入金遅延70%減'
  },
  {
    company: 'ガンマエンタープライズ',
    industry: 'サービス業',
    logo: 'GE',
    comment: '複数拠点の請求データを一元管理できるようになり、月次決算が5日早くなりました。経営判断のスピードアップに繋がっています。',
    author: '代表取締役 鈴木様',
    improvement: '決算期間5日短縮'
  },
  {
    company: 'デルタソリューションズ',
    industry: 'コンサルティング',
    logo: 'DS',
    comment: 'API連携により既存システムとのデータ連携が完璧に。データの二重入力がなくなり、ミスも大幅に減少しました。',
    author: 'システム管理者 高橋様',
    improvement: 'データエラー95%削減'
  }
]

const partners = [
  { name: 'Company A', logo: 'CA' },
  { name: 'Company B', logo: 'CB' },
  { name: 'Company C', logo: 'CC' },
  { name: 'Company D', logo: 'CD' },
  { name: 'Company E', logo: 'CE' },
  { name: 'Company F', logo: 'CF' },
  { name: 'Company G', logo: 'CG' },
  { name: 'Company H', logo: 'CH' }
]

export default function InvoiceCustomers() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            お客様の<span className="text-green-400">成功事例</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            様々な業界のお客様から高い評価をいただいています
          </p>
        </motion.div>

        {/* 導入事例 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-green-400 opacity-50" />
              
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-16 h-16 bg-blue-900 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4"
                  whileHover={{ scale: 1.1, backgroundColor: '#4ade80' }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.logo}
                </motion.div>
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">
                    {testimonial.company}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {testimonial.industry}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  {testimonial.author}
                </p>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.improvement}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* パートナー企業ロゴ */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-12">
            5,000社以上の企業にご利用いただいています
          </h3>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold text-lg hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                {partner.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            導入事例をもっと見る
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 