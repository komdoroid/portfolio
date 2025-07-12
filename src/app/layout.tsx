import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

// 🎯 SEO最適化: 詳細なメタデータ設定
export const metadata: Metadata = {
  title: "Kazuki Komuratani - フルスタック開発者",
  description: "React、Next.js、TypeScriptを中心としたモダンなWeb開発を得意とするフルスタック開発者のポートフォリオサイト。転職・副業案件のご相談はお気軽にどうぞ。",
  keywords: [
    "フルスタック開発者",
    "React",
    "Next.js", 
    "TypeScript",
    "Node.js",
    "ポートフォリオ",
    "Web開発",
    "フロントエンド",
    "バックエンド",
    "転職",
    "副業",
    "エンジニア"
  ],
  authors: [{ name: "Kazuki Komuratani" }],
  creator: "Kazuki Komuratani",
  publisher: "Kazuki Komuratani",
  
  // 🌐 多言語対応
  alternates: {
    canonical: "https://yoursite.com",
    languages: {
      "ja-JP": "https://yoursite.com",
    },
  },
  
  // 📱 Open Graph (Facebook、LinkedIn等)
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://yoursite.com",
    title: "Kazuki Komuratani - フルスタック開発者",
    description: "React、Next.js、TypeScriptを中心としたモダンなWeb開発を得意とするフルスタック開発者のポートフォリオサイト。",
    siteName: "Kazuki Komuratani Portfolio",
    images: [
      {
        url: "https://yoursite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kazuki Komuratani Portfolio - フルスタック開発者",
      },
    ],
  },
  
  // 🐦 Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
    title: "Kazuki Komuratani - フルスタック開発者",
    description: "React、Next.js、TypeScriptを中心としたモダンなWeb開発を得意とするフルスタック開発者のポートフォリオサイト。",
    images: ["https://yoursite.com/og-image.jpg"],
  },
  
  // 🤖 検索エンジン向け設定
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // 📊 検証用
  verification: {
    google: "your_google_verification_code",
    // yandex: "your_yandex_verification_code",
    // bing: "your_bing_verification_code",
  },
  
  // 🏷️ その他のメタデータ
  category: "portfolio",
  classification: "Web Development Portfolio",
  referrer: "origin-when-cross-origin",
  
  // 📱 アプリ情報（PWA用）
  applicationName: "Kazuki Komuratani Portfolio",
  appleWebApp: {
    capable: true,
    title: "Kazuki Komuratani Portfolio",
    statusBarStyle: "default",
  },
  
  
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#64ffda",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <head>
        {/* 🎯 構造化データ (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kazuki Komuratani",
              jobTitle: "フルスタック開発者",
              description: "React、Next.js、TypeScriptを中心としたモダンなWeb開発を得意とするフルスタック開発者",
              url: "https://yoursite.com",
              image: "https://yoursite.com/profile-image.jpg",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Web Development",
                "Frontend Development",
                "Backend Development",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Full Stack Developer",
                description: "フルスタック開発者として、React、Next.js、TypeScriptを中心としたWebアプリケーション開発を行っています。",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Header />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
