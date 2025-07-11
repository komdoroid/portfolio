"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { getProjects, ProjectDocument, generateResponsiveUrls, optimizeImage } from "@/lib/sanity";

// プロジェクト画像コンポーネント
const ProjectImage = ({ image, title }: { image: any, title: string }) => {
  if (!image) {
    return (
      <div className="aspect-video bg-secondary/20 rounded-lg border border-border flex items-center justify-center">
        <div className="text-muted-foreground text-center">
          <div className="text-4xl mb-2">🖥️</div>
          <p className="text-sm">プロジェクト画像</p>
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
          <div className="text-4xl mb-2">🖥️</div>
          <p className="text-sm">画像読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video overflow-hidden rounded-lg">
      <img
        src={optimizedUrl}
        srcSet={responsiveUrls.srcSet}
        sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, 800px"
        alt={image.alt || title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

// サンプルプロジェクトデータ（Sanityデータがない場合のフォールバック）
const sampleProjects: ProjectDocument[] = [
  {
    _id: "sample-1",
    _type: "project",
    _createdAt: "2024-01-01",
    _updatedAt: "2024-01-01",
    _rev: "1",
    title: "Eコマースダッシュボード",
    description: "Next.js、TypeScript、Prismaを使用した管理者向けEコマースダッシュボード。リアルタイムの売上分析、在庫管理、顧客管理機能を備えています。",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    featured: true,
    order: 1,
    status: "completed"
  },
  {
    _id: "sample-2",
    _type: "project",
    _createdAt: "2024-01-01",
    _updatedAt: "2024-01-01",
    _rev: "1",
    title: "チャットアプリケーション",
    description: "リアルタイムメッセージング機能を持つチャットアプリ。Socket.IOによるリアルタイム通信、ファイル共有、グループチャット機能を実装。",
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    featured: false,
    order: 2,
    status: "completed"
  },
  {
    _id: "sample-3",
    _type: "project",
    _createdAt: "2024-01-01",
    _updatedAt: "2024-01-01",
    _rev: "1",
    title: "タスク管理システム",
    description: "チーム向けのプロジェクト管理ツール。ドラッグ&ドロップでのタスク管理、進捗追跡、チームコラボレーション機能を提供。",
    techStack: ["Next.js", "Zustand", "React DnD", "Firebase", "Framer Motion"],
    githubUrl: "https://github.com",
    featured: false,
    order: 3,
    status: "completed"
  }
];

export function Projects() {
  const [projects, setProjects] = useState<ProjectDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        // デバッグ情報を追加
        console.log('🔍 Projects: データ取得開始');
        console.log('環境変数確認:', {
          projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
          dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
        });
        
        const data = await getProjects();
        console.log('🔍 getProjects 結果:', data);
        console.log('🔍 データ長:', data.length);
        
        // 取得されたデータの詳細を確認
        if (data && data.length > 0) {
          console.log('📊 取得された全プロジェクトデータの詳細:');
          data.forEach((project, index) => {
            console.log(`  ${index + 1}. ${project.title}:`, {
              _id: project._id,
              title: project.title,
              description: project.description?.substring(0, 50) + '...',
              featured: project.featured,
              order: project.order,
              status: project.status,
              techStack: project.techStack?.length || 0,
              hasImage: !!project.image
            });
          });
        }
        
        // データが存在しない場合はサンプルデータを使用
        if (data.length === 0) {
          console.warn('⚠️  Sanityからプロジェクトデータが取得できませんでした。サンプルデータを使用します。');
          console.log('🔍 サンプルデータに切り替え:', sampleProjects.length + '件');
          setProjects(sampleProjects);
        } else {
          console.log('✅ Sanityデータを使用:', data.length + '件');
          setProjects(data);
        }
      } catch (err) {
        console.error('❌ プロジェクトデータの取得に失敗しました:', err);
        setError('プロジェクトデータの取得に失敗しました');
        // エラー時もサンプルデータを使用
        console.log('🔍 エラー時サンプルデータ使用:', sampleProjects.length + '件');
        setProjects(sampleProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              <span className="text-primary font-mono text-lg block mb-2">04.</span>
              プロジェクト
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* セクションヘッダー */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary font-mono text-lg block mb-2">05.</span>
              プロジェクト
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              これまでに開発したWebアプリケーションの一部をご紹介します。
              各プロジェクトで異なる技術スタックを使用し、様々な課題解決に取り組んでいます。
            </p>
            {error && (
              <p className="text-yellow-600 text-sm">
                ⚠️ {error} - サンプルデータを表示しています
              </p>
            )}
          </div>

          {/* プロジェクト一覧 */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project._id}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* プロジェクト画像 */}
                <div className="w-full lg:w-1/2">
                  <ProjectImage image={project.image} title={project.title} />
                </div>

                {/* プロジェクト詳細 */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <Card className="bg-card/60 border-border hover:border-primary/20 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        {project.status && (
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            project.status === 'completed' ? 'bg-green-100 text-green-800' :
                            project.status === 'development' ? 'bg-blue-100 text-blue-800' :
                            project.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {project.status === 'completed' ? '完成' :
                             project.status === 'development' ? '開発中' :
                             project.status === 'maintenance' ? 'メンテナンス中' : 
                             project.status}
                          </span>
                        )}
                      </div>
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
              </div>
            ))}
          </div>

          {/* GitHub リンク */}
          <div className="text-center pt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
} 