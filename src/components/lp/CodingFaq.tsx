'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: 1,
    question: 'どれくらいで習得できますか？',
    answer: '個人差はありますが、平均的には6ヶ月で転職レベルのスキルを習得できます。週20-30時間の学習時間を確保していただければ、Node.js・TypeScriptを使った実務レベルのAPI開発ができるようになります。現在お忙しい方でも、平日夜間・休日を活用して無理なく学習を進められるカリキュラム設計になっています。',
    category: '学習期間'
  },
  {
    id: 2,
    question: '未経験でも本当に大丈夫？',
    answer: 'はい、大丈夫です。受講生の約80%がプログラミング完全未経験からスタートしています。基礎的なパソコン操作ができれば問題ありません。JavaScript基礎から丁寧に指導し、段階的にNode.js・TypeScriptへとステップアップしていくカリキュラムです。また、週2回の1on1メンタリングで個別にサポートいたします。',
    category: '学習レベル'
  },
  {
    id: 3,
    question: '転職サポートはどのような内容ですか？',
    answer: 'ポートフォリオ作成支援、履歴書・職務経歴書の添削、模擬面接、企業紹介まで包括的にサポートします。特にNode.js案件を多く持つ転職エージェントと提携しており、受講生限定の求人もご紹介可能です。転職成功率92%、平均年収アップ130万円の実績があります。転職保証制度もございます。',
    category: '転職サポート'
  },
  {
    id: 4,
    question: '働きながらでも学習できますか？',
    answer: '多くの受講生が働きながら学習されています。平日夜間（19:00-23:00）と休日を活用した学習スケジュールをご提案します。メンタリングも平日夜間・休日に対応しており、録画された講義動画はいつでも視聴可能です。仕事との両立についても個別にご相談に乗ります。',
    category: '学習時間'
  },
  {
    id: 5,
    question: '他のプログラミングスクールとの違いは？',
    answer: 'Node.js・TypeScript特化という点が最大の特徴です。幅広く浅くではなく、バックエンド開発に必要なスキルを深く学べます。現役エンジニアによる1on1メンタリング、実務形式のプロジェクト課題、転職に特化したポートフォリオ作成など、転職成功に直結するカリキュラムを提供しています。',
    category: 'スクール特徴'
  },
  {
    id: 6,
    question: '年齢制限はありますか？30代からでも遅くない？',
    answer: '年齢制限はございません。30代・40代からエンジニア転職に成功された方も多数いらっしゃいます。実際、30代の受講生の転職成功率は90%以上です。むしろ社会人経験を活かせる場面も多く、マネジメント経験のある方は特に評価される傾向があります。年齢に応じた転職戦略もご相談できます。',
    category: '年齢・適性'
  },
  {
    id: 7,
    question: '料金と支払い方法について教えてください',
    answer: '6ヶ月コース：598,000円（税込）です。一括払いの他、分割払い（最大24回）も可能です。また、転職成功時のキャッシュバック制度（10万円）や、学割（学生証提示で5万円割引）もございます。無料カウンセリング時に詳細をご説明いたします。',
    category: '料金'
  },
  {
    id: 8,
    question: '卒業後のサポートはありますか？',
    answer: '卒業後6ヶ月間は質問し放題のサポートを提供しています。また、卒業生限定のSlackコミュニティで情報交換や相談が可能です。転職後も定期的なキャリア相談、スキルアップ勉強会なども開催しており、継続的な成長をサポートしています。',
    category: 'アフターサポート'
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
      className="bg-slate-900 border border-slate-600 rounded-xl overflow-hidden"
      whileHover={{ borderColor: '#38bdf8' }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-800 transition-colors duration-300"
        whileHover={{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
      >
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span className="inline-block bg-sky-500/20 text-sky-400 text-xs px-2 py-1 rounded-full mr-3">
              {faq.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white">
            {faq.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 text-sky-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 border-t border-slate-700">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-gray-300 leading-relaxed mt-4"
              >
                {faq.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function CodingFaq() {
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
    <section className="py-20 bg-slate-900 relative">
      {/* 背景パターン */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(90deg,transparent_24%,rgba(56,189,248,0.1)_25%,rgba(56,189,248,0.1)_26%,transparent_27%,transparent_74%,rgba(56,189,248,0.1)_75%,rgba(56,189,248,0.1)_76%,transparent_77%)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* セクションヘッダー */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-sky-400">よくある</span>質問
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            受講をご検討中の方からよくいただく
            <br />
            <span className="text-amber-400">ご質問</span>にお答えします
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
                ease: 'easeOut'
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
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-slate-800 border border-sky-400/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              他にご質問がございますか？
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              無料カウンセリングでは、どんな小さなことでも
              <br />
              お気軽にご質問ください。
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-sky-400 to-sky-500 text-slate-900 px-8 py-3 rounded-lg font-bold shadow-lg hover:from-sky-500 hover:to-sky-600 transition-all duration-300"
            >
              🎯 無料カウンセリングで相談する
            </motion.button>
          </div>
        </motion.div>

        {/* 学習開始への誘導 */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              <span className="text-amber-400">迷っている時間</span>が
              <br />
              一番もったいない
            </h4>
            <p className="text-gray-300 leading-relaxed">
              プログラミング学習は「今日」始めるのと「1年後」始めるのでは
              <br />
              <span className="text-sky-400 font-bold">大きな差</span>が生まれます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 