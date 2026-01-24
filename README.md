# Human Rebuild Lab

「人間再構築研究所」のWebサイトプロジェクト。Next.js 16 + microCMS + Tailwind CSS で構築されたブログ・コーチングサイトです。

## プロジェクト概要

### 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| Next.js | 16.1.1 | Reactフレームワーク |
| React | 19.2.3 | UIライブラリ |
| TypeScript | 5.x | 型安全な開発 |
| Tailwind CSS | 4.x | スタイリング |
| microCMS | - | ヘッドレスCMS |

### ディレクトリ構成

```
app/
├── _components/     # 共通コンポーネント
├── _libs/           # ユーティリティ・API
├── _types/          # TypeScript型定義
├── about/           # アバウトページ
├── blog/            # ブログ記事
├── category/        # カテゴリ別一覧
├── coaching/        # コーチングページ
├── contact/         # お問い合わせ
├── privacy/         # プライバシーポリシー
└── tag/             # タグ別一覧
```

### 主な機能

- ブログ記事の表示・一覧
- カテゴリ・タグによる記事フィルタリング
- お問い合わせフォーム
- コーチングサービス案内
- SEO最適化（OGP画像自動生成）

---

## 開発環境のセットアップ

### 必要条件

- Node.js 20.x 以上
- npm または yarn
- Git Flow（git-flow-avh）

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd human-rebuild-lab

# 依存関係をインストール
npm install

# 環境変数を設定（.env.localを作成）
cp .env.example .env.local
# microCMSのAPIキーを設定
```

### 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアクセス可能。

### その他のコマンド

```bash
npm run build   # 本番ビルド
npm run start   # 本番サーバー起動
npm run lint    # ESLintによるコードチェック
```

---

## Git Flow ブランチ戦略

このプロジェクトでは **Git Flow** を採用しています。

### ブランチ構成

```
main ─────────────────────────────────────────────────────
       \                             /          \
        \                           / (release)  \ (hotfix)
         \                         /              \
develop ──●───────●───────●───────●────────────────●─────
           \     / \     /
          feature  feature
```

| ブランチ | 用途 | 派生元 | マージ先 |
|---------|------|--------|---------|
| `main` | 本番環境のコード | - | - |
| `develop` | 開発の統合ブランチ | main | main |
| `feature/*` | 新機能開発 | develop | develop |
| `release/*` | リリース準備 | develop | main, develop |
| `hotfix/*` | 緊急バグ修正 | main | main, develop |

### Git Flow コマンド一覧

#### 初期設定

```bash
# Git Flowを初期化（初回のみ）
git flow init
```

#### 機能開発（Feature）

```bash
# featureブランチを作成
git flow feature start <feature-name>

# 例: issue #1 の機能開発
git flow feature start issue-1

# 作業完了後、developにマージ
git flow feature finish <feature-name>
```

#### リリース（Release）

```bash
# releaseブランチを作成
git flow release start <version>

# 例: バージョン 1.0.0 のリリース
git flow release start 1.0.0

# リリース完了（main + developにマージ、タグ作成）
git flow release finish -m "Release 1.0.0" 1.0.0

# リモートにプッシュ
git push origin main develop --tags
```

#### 緊急修正（Hotfix）

```bash
# hotfixブランチを作成
git flow hotfix start <version>

# 例: 緊急バグ修正
git flow hotfix start 1.0.1

# 修正完了（main + developにマージ、タグ作成）
git flow hotfix finish -m "Hotfix 1.0.1" 1.0.1

# リモートにプッシュ
git push origin main develop --tags
```

### コミットメッセージ規約

GitHub Issue と連携する場合、以下のキーワードを使用：

```bash
# Issueを参照
git commit -m "refs #1: 機能の説明"

# Issueを自動クローズ
git commit -m "closes #1: バグ修正の説明"
git commit -m "fixes #1: バグ修正の説明"
```

### 開発フロー例

1. **Issue作成**: GitHubでIssueを作成
2. **Feature開始**: `git flow feature start issue-1`
3. **開発・コミット**: 機能を実装し、コミット
4. **Feature完了**: `git flow feature finish issue-1`
5. **プッシュ**: `git push origin develop`
6. **リリース準備**: `git flow release start 1.x.x`
7. **リリース完了**: `git flow release finish -m "Release 1.x.x" 1.x.x`
8. **デプロイ**: `git push origin main develop --tags`

---

## デプロイ

Vercel へのデプロイを推奨。

```bash
# Vercel CLIでデプロイ
npx vercel
```

または、GitHubリポジトリをVercelに連携し、mainブランチへのプッシュで自動デプロイ。

---

## ライセンス

Private
