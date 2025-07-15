'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { countUpVariants, staggerContainer, staggerItem } from '@/lib/motionVariants';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CountUp = ({ end, duration = 2, suffix = '', prefix = '' }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationId: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationId);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const stats = [
  {
    number: 15000,
    suffix: '+',
    label: '累計相談件数',
    description: '多くの方にご利用いただいています',
    icon: '💬',
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: 96,
    suffix: '%',
    label: '満足度',
    description: 'ご利用者様から高い評価',
    icon: '⭐',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    number: 89,
    suffix: '%',
    label: '継続利用率',
    description: '安心して続けていただけます',
    icon: '🤝',
    color: 'from-purple-500 to-purple-600'
  },
  {
    number: 24,
    suffix: '時間',
    label: '対応時間',
    description: 'いつでもサポート体制',
    icon: '🕐',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            選ばれる理由
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            数字で見る私たちの実績と信頼
          </p>
        </motion.div>

        {/* 統計カード */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                {/* アイコン */}
                <div className="flex justify-center mb-4">
                  <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                </div>

                {/* 数字 */}
                <motion.div
                  variants={countUpVariants}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-4"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                    <CountUp 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <div className="text-lg font-semibold text-gray-700">
                    {stat.label}
                  </div>
                </motion.div>

                {/* 説明 */}
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>

                {/* プログレスバー風装飾 */}
                <div className="mt-6">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <motion.div
                      className={`bg-gradient-to-r ${stat.color} h-1 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.number > 100 ? 100 : stat.number}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 追加の信頼指標 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 via-white to-emerald-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-800 text-center mb-8">
              安心・安全への取り組み
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔐</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  SSL暗号化通信
                </h4>
                <p className="text-sm text-gray-600">
                  すべての通信を暗号化し、<br />プライバシーを保護
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏥</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  医療機関連携
                </h4>
                <p className="text-sm text-gray-600">
                  必要に応じて適切な<br />医療機関をご紹介
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📋</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  継続的研修
                </h4>
                <p className="text-sm text-gray-600">
                  カウンセラーの技術向上と<br />品質管理を徹底
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            まずはお気軽にお試しください
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
            初回無料相談を受ける
          </button>
        </motion.div>
      </div>
    </section>
  );
} 