import DiaryHero from '@/components/lp/DiaryHero';
import DiaryFeatures from '@/components/lp/DiaryFeatures';
import DiaryScreenshots from '@/components/lp/DiaryScreenshots';
import DiaryTestimonials from '@/components/lp/DiaryTestimonials';
import DiaryShare from '@/components/lp/DiaryShare';
import DiaryFaq from '@/components/lp/DiaryFaq';
import DiaryCTA from '@/components/lp/DiaryCTA';

export default function DiaryAppLP() {
  return (
    <main className="min-h-screen bg-white">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SNS日記アプリ",
            "description": "若年層向けの感情記録・共有SNS日記アプリ",
            "url": "https://example.com/projects/lp-diary-app",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "SNS日記アプリ",
              "description": "毎日の気持ちを可愛く記録・共有できるSNS日記アプリ",
              "applicationCategory": "Lifestyle",
              "operatingSystem": ["iOS", "Android"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "JPY"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "10000"
              }
            }
          })
        }}
      />

      {/* ページコンテンツ */}
      <DiaryHero />
      <DiaryFeatures />
      <DiaryScreenshots />
      <DiaryTestimonials />
      <DiaryShare />
      <DiaryFaq />
      <DiaryCTA />
    </main>
  );
} 