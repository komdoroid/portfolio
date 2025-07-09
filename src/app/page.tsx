import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero セクション */}
      <Hero />
      
      {/* スキル セクション */}
      <Skills />
      
      {/* プロジェクト セクション */}
      <Projects />
      
      {/* 自己紹介 セクション */}
      <About />
      
      {/* お問い合わせ セクション */}
      <ContactForm />
      
      {/* フッター */}
      <Footer />
    </main>
  );
}
