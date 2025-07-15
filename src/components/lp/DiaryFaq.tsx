'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { accordionVariants } from '@/lib/motionVariants';

const faqs = [
  {
    id: 1,
    category: 'プライバシー',
    icon: '🔒',
    question: '本当に匿名で使えるの？個人情報は大丈夫？',
    answer: 'はい、完全に匿名でご利用いただけます！本名やメールアドレスなどの個人情報を公開する必要は一切ありません。ニックネームと好きなアイコンだけで始められます。また、すべてのデータは高度な暗号化技術で保護されており、第三者に漏れる心配はありません🛡️'
  },
  {
    id: 2,
    category: '料金',
    icon: '💰',
    question: 'アプリは無料で使えるの？課金要素はある？',
    answer: 'アプリのダウンロードと基本機能は完全無料です！写真投稿、気分タグ、SNSシェアなど主要機能はすべて無料でお使いいただけます。プレミアム機能（月額480円）では、無制限の写真保存、特別なフィルター、詳細な統計機能などが利用できますが、無料版でも十分楽しめます💕'
  },
  {
    id: 3,
    category: '機能',
    icon: '✨',
    question: '気分タグって何種類あるの？自分で作れる？',
    answer: '気分タグは100種類以上ご用意しています！「嬉しい」「悲しい」から「なんかモヤモヤ」「キラキラ気分」まで、細かい感情表現が可能です。また、プレミアム機能では自分だけのオリジナルタグも作成できます。みんなが作ったタグをシェアして使うこともできるんです🎭'
  },
  {
    id: 4,
    category: 'SNS連携',
    icon: '🔗',
    question: 'SNSシェアすると個人が特定されちゃう？',
    answer: 'ご安心ください！SNSシェア機能では、アプリ内のニックネームとアイコンのみが表示され、本名やプロフィール情報は一切共有されません。また、シェアする内容も自分で選択できるので、プライベートな部分は非公開にできます。テンプレートを使えば、より安全におしゃれに投稿できます📱'
  },
  {
    id: 5,
    category: 'データ',
    icon: '📊',
    question: '書いた日記はどのくらい保存される？バックアップは？',
    answer: '無料版では過去3ヶ月分、プレミアム版では無制限で日記を保存できます。また、クラウドバックアップ機能により、機種変更時でもデータを引き継げます。エクスポート機能で自分のPCにダウンロードすることも可能です。大切な思い出を失う心配はありません💾'
  },
  {
    id: 6,
    category: '安全性',
    icon: '🛡️',
    question: '不適切な投稿やいじめはない？安全対策は？',
    answer: 'ユーザーの安全を最優先に考えています。AI による自動監視システムと、24時間体制の人的監視により、不適切な投稿を即座に検出・削除します。また、ブロック機能やレポート機能も充実しており、嫌な思いをした場合はすぐに対処できます。みんなが安心して使える環境づくりに努めています🌟'
  },
  {
    id: 7,
    category: '利用制限',
    icon: '📝',
    question: '年齢制限はある？未成年でも使える？',
    answer: '13歳以上の方にご利用いただけます。18歳未満の方は保護者の同意を得てからご利用ください。また、未成年の方の安全のため、より厳格なプライバシー設定と監視体制を設けています。安心してお使いいただける環境を提供しています👥'
  },
  {
    id: 8,
    category: 'サポート',
    icon: '💬',
    question: '困った時のサポートはある？',
    answer: 'もちろんです！アプリ内のヘルプセンターでは、よくある質問や使い方ガイドを確認できます。それでも解決しない場合は、サポートチャット（24時間対応）でいつでもお気軽にご相談ください。専門スタッフが丁寧にサポートいたします💕'
  }
];

export default function DiaryFaq() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isOpen = (id: number) => openItems.includes(id);

  const categoryColors: Record<string, string> = {
    'プライバシー': 'from-green-400 to-emerald-500',
    '料金': 'from-yellow-400 to-orange-500',
    '機能': 'from-purple-400 to-indigo-500',
    'SNS連携': 'from-pink-400 to-rose-500',
    'データ': 'from-blue-400 to-cyan-500',
    '安全性': 'from-red-400 to-pink-500',
    '利用制限': 'from-gray-400 to-slate-500',
    'サポート': 'from-indigo-400 to-purple-500'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-25 to-pink-25">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            よくある
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              質問🤔
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            みんなが気になってることを集めました！<br />
            他にも分からないことがあったら、いつでもサポートに聞いてね💕
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
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4 flex-1">
                  {/* カテゴリアイコン */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${categoryColors[faq.category] || 'from-gray-400 to-gray-500'} rounded-xl flex items-center justify-center text-white text-xl shadow-md`}>
                    {faq.icon}
                  </div>
                  
                  <div className="flex-1">
                    {/* カテゴリバッジ */}
                    <div className="mb-2">
                      <span className={`bg-gradient-to-r ${categoryColors[faq.category] || 'from-gray-400 to-gray-500'} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                        {faq.category}
                      </span>
                    </div>
                    
                    {/* 質問 */}
                    <h3 className="font-bold text-gray-800 text-lg leading-tight pr-4">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                {/* 開閉アイコン */}
                <motion.div
                  animate={{ rotate: isOpen(faq.id) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-shrink-0 ml-4"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isOpen(faq.id) && (
                  <motion.div
                    variants={accordionVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-100 pt-4 pl-16">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* サポート情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              まだ疑問が解決しない？
              <span className="text-pink-600">お気軽に</span>連絡して💌
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              24時間いつでもサポートチームがお答えします！<br />
              アプリの使い方から技術的な質問まで、なんでもOK✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                💬 チャットで質問
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-pink-300 text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors duration-300"
              >
                📧 メールで問い合わせ
              </motion.button>
            </div>

            {/* 追加情報 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg">⚡</span>
                  <span>平均回答時間: 5分以内</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg">🕐</span>
                  <span>24時間365日対応</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg">😊</span>
                  <span>満足度98%のサポート</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 