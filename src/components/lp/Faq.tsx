'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { accordionVariants, fadeInUp } from '@/lib/motionVariants';

const faqs = [
  {
    id: 1,
    question: 'カウンセリングは本当に匿名で利用できますか？',
    answer: 'はい、完全に匿名でご利用いただけます。本名や住所などの個人情報を提供していただく必要はありません。メールアドレスのみで会員登録が可能で、カウンセリング中もニックネームやイニシャルでお呼びすることができます。'
  },
  {
    id: 2,
    question: 'カウンセラーの資格や経験について教えてください',
    answer: '当サービスに在籍するカウンセラーは全員、臨床心理士または公認心理師の国家資格を保有しています。また、最低3年以上の実務経験を持ち、定期的な研修とスーパービジョンを受けて技術向上に努めています。専門分野も様々で、あなたのお悩みに最適なカウンセラーをマッチングいたします。'
  },
  {
    id: 3,
    question: '料金体系について詳しく教えてください',
    answer: '初回相談は30分無料でご利用いただけます。その後は、チャット相談が1回3,000円（30分）、音声通話が1回4,000円（30分）、ビデオ通話が1回5,000円（30分）となっています。月額プランもご用意しており、月4回利用で20%割引となります。お支払いはクレジットカード、銀行振込、コンビニ決済に対応しています。'
  },
  {
    id: 4,
    question: '相談内容に制限はありますか？',
    answer: '基本的にどのようなお悩みでもお聞きいたします。仕事のストレス、人間関係、家族問題、将来への不安、恋愛相談など、心の健康に関わることであれば何でもご相談ください。ただし、医療行為や診断は行えませんので、必要に応じて適切な医療機関をご紹介いたします。'
  },
  {
    id: 5,
    question: '緊急時やクライシス状況での対応はどうなりますか？',
    answer: '緊急事態や自傷・他害の恐れがある場合は、まず適切な医療機関や相談機関へのご相談をお勧めします。当サービスでは24時間体制でサポートを行っていますが、生命に関わる緊急事態の場合は、救急車（119番）や警察（110番）への連絡を最優先としてください。'
  },
  {
    id: 6,
    question: 'データのセキュリティは大丈夫ですか？',
    answer: 'お客様のプライバシー保護を最優先に考え、すべての通信はSSL暗号化によって保護されています。相談内容やお客様の情報は厳格に管理され、法的な義務がある場合を除き第三者に開示することはありません。また、カウンセラーには守秘義務があり、継続的な研修を通じて情報管理の徹底を図っています。'
  }
];

interface FaqItemProps {
  faq: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ faq, isOpen, onToggle }: FaqItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="font-semibold text-gray-800 pr-4">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={accordionVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isOpen = (id: number) => openItems.includes(id);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            よくある質問
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            お客様からよくいただくご質問にお答えします
          </p>
        </motion.div>

        {/* FAQ リスト */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <FaqItem
                faq={faq}
                isOpen={isOpen(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* 追加情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              他にご質問がありますか？
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              上記以外にもご不明な点がございましたら、<br />
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
                お問い合わせ
              </button>
              <button className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full font-semibold hover:border-gray-400 hover:text-gray-700 transition-colors duration-300">
                チャットで質問
              </button>
            </div>
          </div>
        </motion.div>

        {/* サポート情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">電話サポート</h4>
              <p className="text-sm text-gray-600">平日 9:00-18:00</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">チャットサポート</h4>
              <p className="text-sm text-gray-600">24時間対応</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">メールサポート</h4>
              <p className="text-sm text-gray-600">24時間以内に返信</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 