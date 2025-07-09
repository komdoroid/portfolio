# Sanity CMS セットアップ手順

## 1. Sanity アカウント作成・プロジェクト作成

### 1-1. Sanity公式サイトでアカウント作成
1. https://www.sanity.io/ にアクセス
2. 「Get Started」をクリック
3. GitHubまたはGoogleアカウントでサインアップ

### 1-2. 新しいプロジェクトの作成
1. Sanity管理画面で「Create new project」をクリック
2. プロジェクト名を入力（例：「Portfolio Site」）
3. データセット名は `production` のまま

## 2. 環境変数の設定

### 2-1. .env.local ファイルの作成
プロジェクトルートに `.env.local` ファイルを作成し、以下の内容を記載：

```bash
# Sanity CMS 設定
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token
```

### 2-2. 各値の取得方法

#### プロジェクトID（NEXT_PUBLIC_SANITY_PROJECT_ID）
1. Sanity管理画面の「Settings」→「General」
2. 「Project ID」をコピー

#### APIトークン（SANITY_API_TOKEN）
1. Sanity管理画面の「Settings」→「API」→「Tokens」
2. 「Add API token」をクリック
3. 以下の設定でトークンを作成：
   - Name: `Portfolio API Token`
   - Permissions: `Editor`
4. 生成されたトークンをコピー（一度しか表示されません）

## 3. Sanity Studio の起動

### 3-1. Sanity Studio を別ポートで起動
```bash
npx sanity dev
```

または

```bash
npm run dev:sanity
```

### 3-2. ブラウザでアクセス
- URL: http://localhost:3333
- Sanity Studioの管理画面が表示されます

## 4. データの投入

### 4-1. プロジェクト情報の登録
1. Sanity Studioで「プロジェクト」をクリック
2. 「Create」→「Project」で新しいプロジェクトを作成
3. 以下の情報を入力：
   - プロジェクト名
   - 説明
   - 技術スタック（複数選択可能）
   - GitHub URL（任意）
   - デモURL（任意）
   - 注目プロジェクト（チェックボックス）
   - 表示順序（数字）

### 4-2. お問い合わせテスト
1. ポートフォリオサイトのお問い合わせフォームからテスト送信
2. Sanity Studioの「お問い合わせ」セクションで受信確認

## 5. トラブルシューティング

### プロジェクトIDが見つからない場合
- `.env.local` ファイルが正しく作成されているか確認
- 環境変数名にタイポがないか確認
- 開発サーバーを再起動

### APIトークンの権限エラー
- トークンの権限が「Editor」以上に設定されているか確認
- トークンが正しくコピーされているか確認

### Sanity Studioが起動しない場合
```bash
# Sanity パッケージの再インストール
npm install sanity @sanity/vision

# Sanity CLIの最新化
npm install -g @sanity/cli@latest
```

## 6. 本番環境（Vercel）での設定

### 6-1. Vercelでの環境変数設定
1. Vercelプロジェクトの「Settings」→「Environment Variables」
2. 以下の環境変数を追加：
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

### 6-2. デプロイ確認
- お問い合わせフォームの動作確認
- プロジェクト情報の表示確認

---

## 参考リンク
- [Sanity公式ドキュメント](https://www.sanity.io/docs)
- [Next.js × Sanity ガイド](https://www.sanity.io/guides/nextjs)
- [Sanity Studio設定](https://www.sanity.io/docs/sanity-studio) 