import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero セクション */}
      <Hero />
      
      {/* スキル セクション */}
      <Skills />
      
      {/* 自己紹介 セクション */}
      <About />
      
      {/* フッター */}
      <Footer />
    </main>
  );
}
