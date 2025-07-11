import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero セクション */}
      <Hero />
      
      {/* スキル セクション */}
      <Skills />
      
      {/* 注目プロジェクト セクション */}
      <FeaturedProjects />
      
      {/* 自己紹介 セクション */}
      <About />
      
      {/* フッター */}
      <Footer />
    </main>
  );
}
