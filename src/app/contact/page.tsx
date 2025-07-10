import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "お問い合わせ | ポートフォリオ",
  description: "お仕事のご依頼やご相談はこちらからお気軽にお問い合わせください。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* お問い合わせ セクション */}
      <ContactForm />
      
      {/* フッター */}
      <Footer />
    </main>
  );
} 