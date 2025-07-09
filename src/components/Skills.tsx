"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "フロントエンド",
    icon: "🎨",
    skills: [
      "React",
      "Next.js", 
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "React Hook Form"
    ]
  },
  {
    title: "バックエンド",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "REST API",
      "GraphQL"
    ]
  },
  {
    title: "インフラ・ツール",
    icon: "🚀",
    skills: [
      "Vercel",
      "Firebase",
      "GitHub Actions",
      "Docker",
      "AWS",
      "Git",
      "CI/CD"
    ]
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* セクションヘッダー */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary font-mono text-lg block mb-2">02.</span>
              スキル & 技術スタック
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              これまでの開発経験で習得した技術スタックをご紹介します。
              常に新しい技術の学習に取り組み、最適なソリューションの提供を心がけています。
            </p>
          </motion.div>

          {/* スキルカテゴリ */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full bg-card/50 border-border hover:border-primary/20 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-xl text-foreground">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{
                            delay: 0.1 * index + 0.05 * skillIndex,
                            duration: 0.3
                          }}
                          className="text-center"
                        >
                          <div className="bg-secondary/50 rounded-lg py-2 px-3 text-sm font-medium text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300">
                            {skill}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* 追加情報 */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 pt-8"
          >
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">現在学習中：</span>
              {" "}Go言語、Rust、機械学習 (Python)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 