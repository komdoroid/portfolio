import { NextRequest, NextResponse } from 'next/server';
import { createContact } from '@/lib/sanity';
import { z } from 'zod';

// バリデーションスキーマ
const contactSchema = z.object({
  name: z.string().min(2, 'お名前は2文字以上で入力してください').max(100, 'お名前は100文字以内で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  message: z.string().min(10, 'メッセージは10文字以上で入力してください').max(2000, 'メッセージは2000文字以内で入力してください'),
});

export async function POST(request: NextRequest) {
  try {
    // リクエストボディを取得
    const body = await request.json();
    
    // バリデーション
    const validatedData = contactSchema.parse(body);
    
    // Sanityに保存
    const result = await createContact({
      ...validatedData,
      createdAt: new Date().toISOString(),
    });

    // 成功レスポンス
    return NextResponse.json(
      {
        success: true,
        message: 'お問い合わせを受け付けました。24時間以内にご返信いたします。',
        id: result._id,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    // バリデーションエラーの場合
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'フォームの内容に問題があります。',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Sanityエラーの場合
    if (error instanceof Error && error.message.includes('UNAUTHORIZED')) {
      return NextResponse.json(
        {
          success: false,
          message: 'サーバーの設定に問題があります。管理者にお問い合わせください。',
        },
        { status: 500 }
      );
    }

    // その他のエラー
    return NextResponse.json(
      {
        success: false,
        message: '送信中にエラーが発生しました。しばらく時間をおいて再度お試しください。',
      },
      { status: 500 }
    );
  }
}

// GET リクエストは許可しない
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

// その他のHTTPメソッドも許可しない
export async function PUT() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
} 