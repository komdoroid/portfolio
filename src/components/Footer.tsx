"use client";

import { Github, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 左側：ブランド・説明 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Your Name</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              フルスタック開発者として、
              React・Next.js・TypeScriptを中心とした
              モダンなWeb開発に取り組んでいます。
            </p>
          </div>

          {/* 中央：技術スタック */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">使用技術</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <span>Next.js 14 (App Router)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <span>Tailwind CSS + shadcn/ui</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <span>Framer Motion</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <span>Sanity CMS (予定)</span>
              </div>
            </div>
          </div>

          {/* 右側：リンク・コンタクト */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">リンク</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/komdoroid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group"
              >
                <Github size={16} />
                <span className="group-hover:underline">GitHub</span>
                <ExternalLink size={12} className="opacity-50" />
              </a>
              
              <a
                href="mailto:kom.commoc@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group"
              >
                <Mail size={16} />
                <span className="group-hover:underline">メールでお問い合わせ</span>
              </a>
            </div>
          </div>
        </div>

        {/* 下部：コピーライト */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Your Name. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <span className="text-primary">♡</span>
              <span>using Next.js & Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 