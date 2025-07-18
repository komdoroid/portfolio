import CodingHero from '@/components/lp/CodingHero';
import CodingFeatures from '@/components/lp/CodingFeatures';
import CodingCurriculum from '@/components/lp/CodingCurriculum';
import CodingTestimonials from '@/components/lp/CodingTestimonials';
import CodingConsultationForm from '@/components/lp/CodingConsultationForm';
import CodingFaq from '@/components/lp/CodingFaq';
import CodingCTA from '@/components/lp/CodingCTA';

export default function CodingSchoolLP() {
  return (
    <main className="min-h-screen bg-slate-900 font-mono">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Node.js + TypeScript コーディングスクール",
            "description": "未経験から半年で現場レベルへ。Node.js・TypeScript特化型オンラインスクール",
            "url": "https://example.com/projects/lp-coding-school",
            "courseMode": "online",
            "educationalCredentialAwarded": "Certificate",
            "provider": {
              "@type": "Organization",
              "name": "コーディングスクール"
            },
            "hasCourse": [
              {
                "@type": "Course",
                "name": "Node.js基礎コース",
                "description": "Node.jsの基礎から実践まで学べるコース"
              },
              {
                "@type": "Course", 
                "name": "TypeScript実践コース",
                "description": "TypeScriptを使った実践的な開発スキルを習得"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "248"
            }
          })
        }}
      />

      {/* ページコンテンツ */}
      <CodingHero />
      <CodingFeatures />
      <CodingCurriculum />
      <CodingTestimonials />
      <CodingConsultationForm />
      <CodingFaq />
      <CodingCTA />
    </main>
  );
} 