"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getFeaturedProjects, ProjectDocument, generateResponsiveUrls, optimizeImage } from "@/lib/sanity";

// プロジェクト画像コンポーネント
const ProjectImage = ({ image, title }: { image: any, title: string }) => {
  if (!image) {
    return (
      <div className="aspect-video bg-secondary/20 rounded-lg border border-border flex items-center justify-center">
        <div className="text-muted-foreground text-center">
          <div className="text-2xl mb-1">🖥️</div>
          <p className="text-xs">プロジェクト画像</p>
        </div>
      </div>
    );
  }

  const responsiveUrls = generateResponsiveUrls(image);
  const optimizedUrl = optimizeImage(image, 'card');

  if (!responsiveUrls || !optimizedUrl) {
    return (
      <div className="aspect-video bg-secondary/20 rounded-lg border border-border flex items-center justify-center">
        <div className="text-muted-foreground text-center">
          <div className="text-2xl mb-1">🖥️</div>
          <p className="text-xs">読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
      <img
        src={optimizedUrl}
        srcSet={responsiveUrls.srcSet}
        sizes="(max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
        alt={image.alt || title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

// サンプル注目プロジェクトデータ（フォールバック）
const sampleFeaturedProjects: ProjectDocument[] = [
  {
    _id: "featured-1",
    _type: "project",
    _createdAt: "2024-01-01",
    _updatedAt: "2024-01-01",
    _rev: "1",
    title: "Eコマースダッシュボード",
    description: "Next.js、TypeScript、Prismaを使用した管理者向けEコマースダッシュボード。リアルタイムの売上分析、在庫管理、顧客管理機能を備えています。",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    featured: true,
    order: 1,
    status: "completed"
  },
  {
    _id: "featured-2",
    _type: "project",
    _createdAt: "2024-01-01",
    _updatedAt: "2024-01-01",
    _rev: "1",
    title: "タスク管理システム",
    description: "チーム向けのプロジェクト管理ツール。ドラッグ&ドロップでのタスク管理、進捗追跡、チームコラボレーション機能を提供。",
    techStack: ["Next.js", "Zustand", "React DnD", "Firebase"],
    githubUrl: "https://github.com",
    featured: true,
    order: 2,
    status: "completed"
  },
  {
    _id: "featured-3",
    _type: "project",
    _createdAt: "2024-01-01",
    _updatedAt: "2024-01-01",
    _rev: "1",
    title: "チャットアプリケーション",
    description: "リアルタイムメッセージング機能を持つチャットアプリ。Socket.IOによるリアルタイム通信、ファイル共有機能を実装。",
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    featured: true,
    order: 3,
    status: "completed"
  }
];

export function FeaturedProjects() {
  const [projects, setProjects] = useState<ProjectDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        setLoading(true);
        const data = await getFeaturedProjects();
        
        if (data.length === 0) {
          console.warn('⚠️  Sanityから注目プロジェクトデータが取得できませんでした。サンプルデータを使用します。');
          setProjects(sampleFeaturedProjects);
        } else {
          setProjects(data);
        }
      } catch (err) {
        console.error('❌ 注目プロジェクトデータの取得に失敗しました:', err);
        setError('データの取得に失敗しました');
        setProjects(sampleFeaturedProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              <span className="text-primary font-mono text-lg block mb-2">03.</span>
              注目プロジェクト
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="text-muted-foreground">プロジェクトを読み込み中...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured-projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* セクションヘッダー */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary font-mono text-lg block mb-2">03.</span>
              注目プロジェクト
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              これまでに開発したプロジェクトの中から、特に力を入れて取り組んだものをご紹介します。
            </p>
            {error && (
              <p className="text-yellow-600 text-sm">
                ⚠️ {error} - サンプルデータを表示しています
              </p>
            )}
          </div>

          {/* プロジェクトグリッド */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div key={project._id} className="group">
                <Card className="h-full bg-card/60 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="p-0">
                    <ProjectImage image={project.image} title={project.title} />
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground line-clamp-1">
                        {project.title}
                      </h3>
                      {project.status === 'completed' && (
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          完成
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* 技術スタック（上位4つのみ表示） */}
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* リンク */}
                    <div className="flex gap-2 pt-2">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-border hover:border-primary/50 flex-1"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1"
                          >
                            <Github size={14} />
                            <span className="text-xs">GitHub</span>
                          </a>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                          asChild
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1"
                          >
                            <ExternalLink size={14} />
                            <span className="text-xs">デモ</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* すべてのプロジェクトを見るリンク */}
          <div className="text-center pt-8">
            <Button
              variant="outline"
              className="border-border hover:border-primary/50"
              asChild
            >
              <Link
                href="/projects"
                className="flex items-center gap-2"
              >
                すべてのプロジェクトを見る
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}