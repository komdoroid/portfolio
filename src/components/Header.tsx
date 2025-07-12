"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  id: string;
  label: string;
  href?: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "featured-projects", label: "Works" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "contact", label: "Contact", href: "/contact" }
];

export function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const controls = useAnimation();

  // ページ遷移後のスクロール処理
  useEffect(() => {
    if (pathname === "/" && pendingScrollTarget) {
      // ページが完全に読み込まれるまで待つ
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setPendingScrollTarget(null);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [pathname, pendingScrollTarget]);

  // スクロール位置に基づいてアクティブセクションを検出
  useEffect(() => {
    // ホームページ以外では、URLに基づいてアクティブセクションを設定
    if (pathname === "/projects") {
      setActiveSection("projects");
      return;
    }
    if (pathname === "/contact") {
      setActiveSection("contact");
      return;
    }

    // ホームページでのIntersectionObserver
    if (pathname === "/") {
      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0.1
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      
      // セクションを監視
      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });

      return () => observer.disconnect();
    }
  }, [pathname]);

  // アンダーラインの位置とサイズを計算
  const updateUnderlinePosition = () => {
    if (!navRef.current) return;

    const activeNavItem = navRef.current.querySelector(`[data-nav="${activeSection}"]`) as HTMLElement;
    if (activeNavItem) {
      const navRect = navRef.current.getBoundingClientRect();
      const activeRect = activeNavItem.getBoundingClientRect();
      
      setUnderlineStyle({
        width: activeRect.width,
        left: activeRect.left - navRect.left
      });
    }
  };

  useEffect(() => {
    updateUnderlinePosition();
  }, [activeSection, isMenuOpen]);

  // セクションへのスムーススクロール
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // ナビゲーションリンクの処理
  const handleNavClick = (item: NavItem) => {
    setIsMenuOpen(false);
    
    if (item.href) {
      // 外部ページへのリンク（Projects、Contact）
      router.push(item.href);
      setActiveSection(item.id);
    } else {
      // Home、Skills、Works、Aboutの場合
      if (pathname === "/") {
        // 既にホームページにいる場合はスクロール
        setTimeout(() => {
          scrollToSection(item.id);
        }, 300);
        setActiveSection(item.id);
      } else {
        // 別ページにいる場合はホームページに移動してからスクロール
        setActiveSection(item.id);
        setPendingScrollTarget(item.id);
        router.push("/");
      }
    }
  };

  // ヘッダーのスクロール時の背景変化
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      controls.start({
        backgroundColor: scrolled ? "rgba(10, 25, 47, 0.9)" : "rgba(10, 25, 47, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: { duration: 0.3 }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.header
      animate={controls}
      initial={{ backgroundColor: "rgba(10, 25, 47, 0)" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* デスクトップナビゲーション */}
          <motion.nav
            ref={navRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8 relative"
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  data-nav={item.id}
                  className="relative"
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`font-mono text-sm transition-colors duration-300 hover:text-[#64ffda] ${
                      isActive ? "text-[#64ffda]" : "text-[#ccd6f6]"
                    }`}
                  >
                    <span className="text-[#64ffda] mr-1">0{index + 1}.</span>
                    {item.label}
                  </button>
                </motion.div>
              );
            })}
            
            {/* アンダーライン */}
            <motion.div
              className="absolute bottom-0 h-[2px] bg-gradient-to-r from-[#64ffda] to-[#4fd1c5] rounded-full"
              animate={{
                width: underlineStyle.width,
                x: underlineStyle.left
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </motion.nav>

          {/* ハンバーガーメニューボタン (モバイル) */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#0a192f]/95 backdrop-blur-md border-t border-[#64ffda]/20"
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left font-mono text-sm py-2 transition-colors duration-300 hover:text-[#64ffda] ${
                    isActive ? "text-[#64ffda]" : "text-[#ccd6f6]"
                  }`}
                >
                  <span className="text-[#64ffda] mr-2">0{index + 1}.</span>
                  {item.label}
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.header>
  );
} 