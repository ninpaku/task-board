# CLAUDE.md — タスクボード (SAMURAI Sprint)

## プロジェクト概要

SAMURAI Sprint のタスクボードアプリ。スプリント管理・タスク管理を行うWebアプリケーション。

## 技術スタック

- フロントエンド: React 18 + Vite 6
- スタイル: Plain CSS（BEM 命名）
- 状態管理: React `useState` / `useEffect`
- データ永続化: `localStorage`
- ビルドツール: Vite
- デプロイ: GitHub Actions → GitHub Pages

## ディレクトリ構成

```
task-board/
├── .github/workflows/deploy.yml   # GitHub Pages 自動デプロイ
├── src/
│   ├── main.jsx                   # エントリーポイント
│   ├── App.jsx                    # タスクボード本体
│   ├── App.css                    # コンポーネントスタイル
│   └── index.css                  # グローバルスタイル
├── index.html
├── vite.config.js
└── package.json
```

## コンポーネント命名規約

- **ファイル名**: PascalCase（例: `TaskItem.jsx`、`AddTaskForm.jsx`）
- **コンポーネント関数名**: PascalCase（ファイル名と一致させる）
- **CSS クラス名**: BEM 記法（例: `.task-item`、`.task-item__text`、`.task-item--done`）
- **props**: camelCase（例: `onToggle`、`onDelete`、`isCompleted`）
- **イベントハンドラー**: `handle〇〇` / `on〇〇`（例: `handleKeyDown`、`onDelete`）

## デプロイ先

**https://ninpaku.github.io/task-board/**

`main` ブランチへのプッシュで GitHub Actions が自動ビルド＆デプロイする。

## 開発ルール

### コードスタイル

- インデント: スペース2つ
- コメント: 自明なコードにはコメントを書かない。WHYが非自明な場合のみ記述
- ファイル末尾に改行を入れる

### テスト

- 新機能追加時はテストも合わせて書く
- テストが通らない状態でコミットしない

---

## Git・GitHub 運用ルール

### 基本方針

**コードを変更するたびに必ずGitHubにプッシュする。**

### 手順

1. 変更をステージング: `git add <変更ファイル>`
2. コミット: `git commit -m "意味のあるメッセージ"`
3. **プッシュ: `git push origin <ブランチ名>`** ← 毎回必須

### ブランチ戦略

- `main` — 本番相当の安定ブランチ。直接プッシュ禁止
- `develop` — 開発統合ブランチ
- `feature/<機能名>` — 機能開発ブランチ

### コミットメッセージ規約

```
<type>: <概要（日本語可）>

type の種類:
  feat     新機能
  fix      バグ修正
  refactor リファクタリング
  test     テスト追加・修正
  docs     ドキュメント
  chore    ビルド・設定変更
```

例:
```
feat: タスクのドラッグ&ドロップ移動機能を追加
fix: 期限切れタスクのステータスが更新されない問題を修正
```

### Claude へのお願い

- ファイルを変更したら、毎回 `git add` → `git commit` → `git push` を実行すること
- プッシュ先のブランチを確認してから push すること
- `main` への直接 push はユーザーに確認を取ること
- force push (`--force`) はユーザーの明示的な指示がない限り行わないこと
