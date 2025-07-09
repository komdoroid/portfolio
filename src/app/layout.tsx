import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name - フルスタック開発者",
  description: "フロントエンド・バックエンド開発を得意とするフルスタック開発者のポートフォリオサイト。React、Next.js、TypeScript、Node.jsを使用したWebアプリケーション開発の実績をご紹介します。",
  keywords: ["フルスタック開発者", "React", "Next.js", "TypeScript", "Node.js", "ポートフォリオ"],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
