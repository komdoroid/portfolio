'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

export default function CodingConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferredDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // デモ用：実際の送信処理をシミュレート
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // 3秒後にフォームをリセット
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', preferredDate: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-slate-800 relative">
      {/* 背景パターン */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.3),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.3),transparent_30%)]" />
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
            <span className="text-sky-400">無料カウンセリング</span>予約
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            あなたの<span className="text-amber-400">学習目標</span>や<span className="text-amber-400">キャリアプラン</span>について
            <br />
            現役エンジニアが個別にご相談をお受けします
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 左側: フォーム */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-900 border border-sky-400/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">📅</span>
                カウンセリング予約フォーム
              </h3>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* 名前 */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                        お名前 <span className="text-red-400">*</span>
                      </label>
                      <motion.input
                        whileFocus={{ 
                          borderColor: '#38bdf8',
                          boxShadow: '0 0 0 3px rgba(56, 189, 248, 0.1)'
                        }}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all duration-300"
                        placeholder="山田 太郎"
                      />
                    </div>

                    {/* メールアドレス */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                        メールアドレス <span className="text-red-400">*</span>
                      </label>
                      <motion.input
                        whileFocus={{ 
                          borderColor: '#38bdf8',
                          boxShadow: '0 0 0 3px rgba(56, 189, 248, 0.1)'
                        }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all duration-300"
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* 希望日程 */}
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-300 mb-2">
                        希望日程 <span className="text-red-400">*</span>
                      </label>
                      <motion.select
                        whileFocus={{ 
                          borderColor: '#38bdf8',
                          boxShadow: '0 0 0 3px rgba(56, 189, 248, 0.1)'
                        }}
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all duration-300"
                      >
                        <option value="">日程を選択してください</option>
                        <option value="平日午前">平日午前（10:00-12:00）</option>
                        <option value="平日午後">平日午後（13:00-17:00）</option>
                        <option value="平日夜間">平日夜間（19:00-21:00）</option>
                        <option value="土曜午前">土曜午前（10:00-12:00）</option>
                        <option value="土曜午後">土曜午後（13:00-17:00）</option>
                        <option value="日曜午前">日曜午前（10:00-12:00）</option>
                        <option value="日曜午後">日曜午後（13:00-17:00）</option>
                      </motion.select>
                    </div>

                    {/* 送信ボタン */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-sky-400 to-sky-500 text-slate-900 py-4 rounded-lg font-bold text-lg shadow-lg hover:from-sky-500 hover:to-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center justify-center"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full mr-2"
                          />
                          送信中...
                        </motion.div>
                      ) : (
                        <>
                          <span className="relative z-10">🚀 無料カウンセリングを予約する</span>
                          {/* ホバー時の光沢エフェクト */}
                          <motion.div
                            className="absolute inset-0 bg-white opacity-0"
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
                    >
                      ✅
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      予約完了！
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      ご予約ありがとうございます。<br />
                      24時間以内に担当者より確認のご連絡をいたします。
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 注意事項 */}
              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-400/30 rounded-lg">
                <p className="text-amber-400 text-sm">
                  <span className="font-bold">💡 カウンセリング内容</span><br />
                  • 学習目標・キャリアプランのヒアリング<br />
                  • 最適な学習ルートのご提案<br />
                  • 転職市場・年収レンジのご説明<br />
                  • スクール詳細・料金のご案内
                </p>
              </div>
            </div>
          </motion.div>

          {/* 右側: カウンセリング詳細 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* カウンセリングの特徴 */}
              <div className="bg-slate-900 border border-sky-400/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-3">🎯</span>
                  無料カウンセリングの特徴
                </h4>
                <ul className="space-y-3">
                  {[
                    '現役エンジニアによる個別相談',
                    '学習ロードマップの個別設計',
                    '転職市場の最新情報を提供',
                    '無理な勧誘は一切なし'
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-sky-400 mr-3 font-mono">▶</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* 相談可能な内容 */}
              <div className="bg-slate-900 border border-amber-400/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-3">💬</span>
                  こんなご相談にお答えします
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    '「未経験からエンジニアになれる？」',
                    '「どのくらいの期間で転職できる？」',
                    '「実際の年収はいくらくらい？」',
                    '「他のスクールとの違いは？」',
                    '「働きながらでも学習できる？」',
                    '「30代からでも遅くない？」'
                  ].map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="bg-amber-500/10 rounded-lg p-3"
                    >
                      <p className="text-gray-300 text-sm">{question}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 参加者の声 */}
              <div className="bg-slate-900 border border-green-400/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-3">💭</span>
                  カウンセリング参加者の声
                </h4>
                <blockquote className="text-gray-300 text-sm leading-relaxed italic">
                  "漠然とした不安が具体的な学習計画に変わりました。
                  現役エンジニアの方から直接話を聞けて、
                  転職への道筋が明確になりました。"
                  <footer className="mt-2 text-sky-400 not-italic">
                    - T.Kさん（営業職 → エンジニア転職成功）
                  </footer>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 