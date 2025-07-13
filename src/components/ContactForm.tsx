"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";

// フォームバリデーションスキーマ
const contactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください").min(2, "お名前は2文字以上で入力してください"),
  email: z.string().min(1, "メールアドレスを入力してください").email("有効なメールアドレスを入力してください"),
  message: z.string().min(1, "メッセージを入力してください").min(10, "メッセージは10文字以上で入力してください")
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || '送信に失敗しました');
      }
      
      setIsSubmitted(true);
      form.reset();
      
      // 3秒後に成功メッセージを非表示
      setTimeout(() => setIsSubmitted(false), 3000);
      
    } catch (error) {
      console.error('送信エラー:', error);
      
      // エラーメッセージの表示（今後トーストやモーダルで表示）
      const errorMessage = error instanceof Error ? error.message : '送信中にエラーが発生しました';
      alert(errorMessage); // 一時的にalertで表示
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/10">
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
              <span className="text-primary font-mono text-lg block mb-2">05.</span>
              お問い合わせ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              プロジェクトのご相談、採用に関するお問い合わせ、
              その他ご質問がございましたらお気軽にご連絡ください。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左側：連絡先情報 */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    連絡先情報
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <div>
                      <p className="font-medium text-foreground">メール</p>
                      <p className="text-muted-foreground">kom.commoc@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MessageSquare className="text-primary" size={20} />
                    <div>
                      <p className="font-medium text-foreground">返信時間</p>
                      <p className="text-muted-foreground">通常24時間以内</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    対応可能な業務
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Webアプリケーション開発</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>フロントエンド開発・UI実装</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>API開発・バックエンド構築</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>技術コンサルティング</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 右側：お問い合わせフォーム */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    メッセージを送信
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-4"
                    >
                      <CheckCircle className="text-primary mx-auto" size={48} />
                      <h3 className="text-lg font-semibold text-foreground">
                        送信完了！
                      </h3>
                      <p className="text-muted-foreground">
                        メッセージを受信いたしました。<br />
                        24時間以内にご返信いたします。
                      </p>
                    </motion.div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2">
                                <User size={16} />
                                お名前 <span className="text-destructive">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="山田太郎"
                                  className="bg-input border-border focus:border-primary/50 transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2">
                                <Mail size={16} />
                                メールアドレス <span className="text-destructive">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="example@email.com"
                                  className="bg-input border-border focus:border-primary/50 transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2">
                                <MessageSquare size={16} />
                                メッセージ <span className="text-destructive">*</span>
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="プロジェクトの詳細やご質問などをご記入ください..."
                                  className="bg-input border-border focus:border-primary/50 transition-colors min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                              送信中...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                              メッセージを送信
                            </div>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 