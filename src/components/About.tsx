"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* セクションヘッダー */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary font-mono text-lg block mb-2">04.</span>
              私について
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Web開発に情熱を注ぐフルスタック開発者として、
              技術を通じて価値あるソリューションを提供することを目指しています。
            </p>
          </motion.div>

          {/* メインコンテンツ */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* 左側：プロフィール詳細 */}
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card/50 border-border">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    経歴・背景
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      大学でコンピュータサイエンスを学び、Web開発の世界に魅力を感じて
                      フロントエンド開発からキャリアをスタートしました。現在はフルスタック開発者として、
                      ユーザー体験とパフォーマンスを重視したアプリケーション開発に従事しています。
                    </p>
                    
                    <p>
                      特にReactエコシステムとTypeScriptによる型安全な開発を得意とし、
                      モダンなWebフレームワークを活用したスケーラブルなアプリケーション構築に
                      取り組んでいます。
                    </p>

                    <p>
                      常に新しい技術の学習を心がけ、業界のトレンドをキャッチアップしながら、
                      チーム開発における品質向上とプロセス改善にも積極的に貢献しています。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 右側：開発スタイル・強み */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="bg-card/50 border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    開発スタイル
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-primary text-lg">💡</div>
                      <div>
                        <h4 className="font-semibold text-foreground">ユーザー中心設計</h4>
                        <p className="text-sm text-muted-foreground">
                          ユーザビリティとアクセシビリティを重視した設計アプローチ
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-primary text-lg">🔧</div>
                      <div>
                        <h4 className="font-semibold text-foreground">品質重視</h4>
                        <p className="text-sm text-muted-foreground">
                          テスト駆動開発とコードレビューによる堅牢な開発
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-primary text-lg">🚀</div>
                      <div>
                        <h4 className="font-semibold text-foreground">パフォーマンス最適化</h4>
                        <p className="text-sm text-muted-foreground">
                          Core Web Vitalsを意識した高速なWebアプリケーション構築
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-primary text-lg">👥</div>
                      <div>
                        <h4 className="font-semibold text-foreground">チームワーク</h4>
                        <p className="text-sm text-muted-foreground">
                          アジャイル開発手法とコミュニケーションを重視した協働
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    現在の活動
                  </h3>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>オープンソースプロジェクトへの貢献</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>技術ブログの執筆（週1回更新）</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>勉強会・カンファレンスへの参加</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>新技術の検証・プロトタイプ開発</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 