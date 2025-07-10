import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "プロジェクト | ポートフォリオ",
  description: "これまでに手がけたプロジェクトの一覧です。",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* プロジェクト セクション */}
      <Projects />
      
      {/* フッター */}
      <Footer />
    </main>
  );
} 