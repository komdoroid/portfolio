import InvoiceHero from '@/components/lp/InvoiceHero'
import InvoiceFeatures from '@/components/lp/InvoiceFeatures'
import InvoiceStats from '@/components/lp/InvoiceStats'
import InvoiceCustomers from '@/components/lp/InvoiceCustomers'
import InvoicePricing from '@/components/lp/InvoicePricing'
import InvoiceCTA from '@/components/lp/InvoiceCTA'

export default function InvoiceSaasLP() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "InvoicePro - 請求書管理SaaS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI搭載の請求書管理システムで、煩雑な経理業務を自動化し、ビジネスの成長に集中できる環境を実現",
    "offers": [
      {
        "@type": "Offer",
        "name": "フリープラン",
        "price": "0",
        "priceCurrency": "JPY"
      },
      {
        "@type": "Offer", 
        "name": "スタンダードプラン",
        "price": "2980",
        "priceCurrency": "JPY"
      },
      {
        "@type": "Offer",
        "name": "プレミアムプラン", 
        "price": "5980",
        "priceCurrency": "JPY"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5000"
    },
    "author": {
      "@type": "Organization",
      "name": "Portfolio Showcase"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-white font-sans">
        {/* Hero Section */}
        <InvoiceHero />
        
        {/* Features Section */}
        <InvoiceFeatures />
        
        {/* Stats Section */}
        <InvoiceStats />
        
        {/* Customers Section */}
        <InvoiceCustomers />
        
        {/* Pricing Section */}
        <InvoicePricing />
        
        {/* CTA Section */}
        <InvoiceCTA />
      </main>
    </>
  )
} 