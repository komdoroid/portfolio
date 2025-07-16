import Hero from '@/components/lp/Hero';
import Features from '@/components/lp/Features';
import HowItWorks from '@/components/lp/HowItWorks';
import Stats from '@/components/lp/Stats';
import Testimonials from '@/components/lp/Testimonials';
import Faq from '@/components/lp/Faq';
import CallToAction from '@/components/lp/CallToAction';

export default function OnlineCounselingLP() {
  return (
    <main className="min-h-screen bg-white">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "オンラインカウンセリングサービス",
            "description": "専門の臨床心理士による24時間対応のオンラインカウンセリング",
            "url": "https://example.com/projects/lp-online-counseling",
            "mainEntity": {
              "@type": "Service",
              "name": "オンラインカウンセリング",
              "description": "匿名で安心してご利用いただけるオンラインカウンセリングサービス",
              "provider": {
                "@type": "Organization",
                "name": "オンラインカウンセリングサービス"
              },
              "serviceType": "心理カウンセリング",
              "areaServed": "日本",
              "availableLanguage": "日本語"
            }
          })
        }}
      />

      {/* ページコンテンツ */}
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Faq />
      <CallToAction />
    </main>
  );
} 