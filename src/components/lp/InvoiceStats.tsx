'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  value: number
  duration: number
  suffix?: string
  prefix?: string
}

function AnimatedCounter({ value, duration, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix
      }
    })
    return unsubscribe
  }, [springValue, prefix, suffix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

const stats = [
  {
    value: 85,
    suffix: '%',
    label: '作業時間削減率',
    description: '請求書作成・管理業務の効率化を実現',
    color: 'text-green-400'
  },
  {
    value: 5000,
    suffix: '+',
    label: '導入企業数',
    description: '中小企業から上場企業まで幅広く採用',
    color: 'text-blue-500'
  },
  {
    value: 98,
    suffix: '%',
    label: '継続利用率',
    description: '高い満足度で長期継続いただいています',
    color: 'text-purple-500'
  },
  {
    value: 24,
    suffix: '時間',
    label: '平均導入期間',
    description: '簡単設定でスピーディーな運用開始',
    color: 'text-green-400'
  }
]

export default function InvoiceStats() {
  return (
    <section className="py-24 bg-blue-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            数字で見る導入効果
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            実際にご利用いただいているお客様の声と実績データで、
            <br />
            確かな効果をご確認ください
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`text-6xl md:text-7xl font-bold ${stat.color} mb-2`}>
                  <AnimatedCounter 
                    value={stat.value} 
                    duration={2} 
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {stat.label}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl px-8 py-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-green-400 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">導入企業の平均評価</div>
              <div className="text-green-400 text-sm">★★★★★ 4.8/5.0</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 