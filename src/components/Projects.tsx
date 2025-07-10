"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

// サンプルプロジェクトデータ（Sanityデータがない場合のフォールバック）
const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Eコマースダッシュボード",
    description: "Next.js、TypeScript、Prismaを使用した管理者向けEコマースダッシュボード。リアルタイムの売上分析、在庫管理、顧客管理機能を備えています。",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: "2", 
    title: "チャットアプリケーション",
    description: "リアルタイムメッセージング機能を持つチャットアプリ。Socket.IOによるリアルタイム通信、ファイル共有、グループチャット機能を実装。",
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com"
  },
  {
    id: "3",
    title: "タスク管理システム",
    description: "チーム向けのプロジェクト管理ツール。ドラッグ&ドロップでのタスク管理、進捗追跡、チームコラボレーション機能を提供。",
    techStack: ["Next.js", "Zustand", "React DnD", "Firebase", "Framer Motion"],
    githubUrl: "https://github.com"
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
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
              プロジェクト
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              これまでに開発したWebアプリケーションの一部をご紹介します。
              各プロジェクトで異なる技術スタックを使用し、様々な課題解決に取り組んでいます。
            </p>
          </motion.div>

          {/* プロジェクト一覧 */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {sampleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* プロジェクト画像プレースホルダー */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-video bg-secondary/20 rounded-lg border border-border flex items-center justify-center">
                    <div className="text-muted-foreground text-center">
                      <div className="text-4xl mb-2">🖥️</div>
                      <p className="text-sm">プロジェクト画像</p>
                    </div>
                  </div>
                </div>

                {/* プロジェクト詳細 */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <Card className="bg-card/60 border-border hover:border-primary/20 transition-all duration-300">
                    <CardHeader>
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* 技術スタック */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* リンク */}
                      <div className="flex gap-4 pt-2">
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-border hover:border-primary/50"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github size={16} />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                            asChild
                          >
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink size={16} />
                              デモを見る
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub リンク */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <Button
              variant="outline"
              className="border-border hover:border-primary/50"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                その他のプロジェクトを見る
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 