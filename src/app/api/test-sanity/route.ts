import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export async function GET() {
  try {
    console.log('🔍 Sanityクライアント設定確認:');
    console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);
    console.log('Client exists:', !!client);

    if (!client) {
      return NextResponse.json({ 
        error: 'Sanityクライアントが初期化されていません',
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
      }, { status: 500 });
    }

    // 基本的なドキュメント取得テスト
    console.log('🔍 全ドキュメント取得テスト...');
    const allDocs = await client.fetch('*[_type == "project"]');
    console.log('取得されたドキュメント数:', allDocs.length);
    console.log('ドキュメント一覧:', allDocs);

    // プロジェクトタイプのドキュメント取得
    console.log('🔍 プロジェクトデータ取得テスト...');
    const projects = await client.fetch(`
      *[_type == "project"] {
        _id,
        title,
        description,
        techStack,
        featured,
        order,
        status
      }
    `);

    console.log('プロジェクトデータ:', projects);

    return NextResponse.json({
      success: true,
      allDocuments: allDocs,
      projects: projects,
      projectCount: projects.length,
      clientConfig: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        clientExists: !!client
      }
    });

  } catch (error) {
    console.error('❌ Sanityテストエラー:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
} 