import type { BlogPost, Category, Tag, BlogListResponse } from "@/_types/blog";

// ダミーカテゴリ
export const dummyCategories: Category[] = [
  { id: "1", name: "習慣化", slug: "habit" },
  { id: "2", name: "筋トレ", slug: "workout" },
  { id: "3", name: "学習", slug: "learning" },
  { id: "4", name: "時間管理", slug: "time-management" },
  { id: "5", name: "瞑想", slug: "meditation" },
];

// ダミータグ
export const dummyTags: Tag[] = [
  { id: "1", name: "初心者向け", slug: "beginner" },
  { id: "2", name: "モーニングルーティン", slug: "morning-routine" },
  { id: "3", name: "生産性", slug: "productivity" },
  { id: "4", name: "マインドセット", slug: "mindset" },
  { id: "5", name: "継続のコツ", slug: "consistency" },
  { id: "6", name: "科学的アプローチ", slug: "science" },
];

// ダミー記事
export const dummyPosts: BlogPost[] = [
  {
    id: "1",
    title: "忙しい会社員が朝5時起きを習慣化する5つのステップ",
    slug: "morning-routine-5steps",
    description: "仕事に追われる毎日でも、朝の時間を確保する方法を科学的根拠とともに解説します。",
    content: `
## はじめに

忙しい会社員にとって、朝の時間は貴重です。この記事では、無理なく早起きを習慣化する方法を紹介します。

## ステップ1: 就寝時間を固定する

まずは寝る時間を決めましょう。起きる時間より、寝る時間の方が重要です。

## ステップ2: 夜のルーティンを作る

就寝1時間前からスマホを見ない、軽いストレッチをするなど、睡眠の質を上げる習慣を取り入れましょう。

## ステップ3: 朝起きる理由を明確にする

なぜ早起きしたいのか？その目的が明確でないと続きません。

## ステップ4: 小さく始める

いきなり5時起きではなく、まずは15分早く起きることから始めましょう。

## ステップ5: 記録をつける

習慣化アプリやカレンダーで記録をつけることで、継続のモチベーションが上がります。

## まとめ

早起きは一日を変え、人生を変えます。まずは今夜から始めてみましょう。
    `,
    thumbnail: {
      url: "/images/placeholder.svg",
      width: 1200,
      height: 630,
    },
    category: dummyCategories[0],
    tags: [dummyTags[1], dummyTags[4]],
    publishedAt: "2026-01-10T09:00:00.000Z",
    updatedAt: "2026-01-10T09:00:00.000Z",
  },
  {
    id: "2",
    title: "週3回の筋トレで体が変わる：会社員のための効率的ワークアウト",
    slug: "workout-3times-week",
    description: "限られた時間で最大の効果を得る、科学的に証明された筋トレメニューを紹介します。",
    content: `
## なぜ週3回なのか

毎日トレーニングする必要はありません。週3回で十分な効果が得られます。

## おすすめのスケジュール

- 月曜日: 上半身
- 水曜日: 下半身
- 金曜日: 全身

## 各日のメニュー

### 月曜日（上半身）
1. ベンチプレス 3×10
2. ダンベルロウ 3×10
3. ショルダープレス 3×10

### 水曜日（下半身）
1. スクワット 3×10
2. デッドリフト 3×8
3. ランジ 3×12

## まとめ

継続こそが最大のトレーニングです。
    `,
    thumbnail: {
      url: "/images/placeholder.svg",
      width: 1200,
      height: 630,
    },
    category: dummyCategories[1],
    tags: [dummyTags[0], dummyTags[5]],
    publishedAt: "2026-01-08T10:00:00.000Z",
    updatedAt: "2026-01-08T10:00:00.000Z",
  },
  {
    id: "3",
    title: "1日30分の学習習慣で年間180時間の自己投資を実現する方法",
    slug: "learning-30min-daily",
    description: "スキマ時間を活用した効率的な学習法で、キャリアアップを目指しましょう。",
    content: `
## 30分学習の威力

1日30分 × 365日 = 182.5時間

これは約23日分の勉強時間に相当します。

## いつ学習するか

- 通勤時間
- 昼休み
- 就寝前

## 何を学ぶか

1. 本業に関連するスキル
2. 英語
3. プログラミング
4. ファイナンス

## 学習を習慣化するコツ

同じ時間、同じ場所で学習することで、脳が自動的に学習モードに入ります。
    `,
    thumbnail: {
      url: "/images/placeholder.svg",
      width: 1200,
      height: 630,
    },
    category: dummyCategories[2],
    tags: [dummyTags[2], dummyTags[4]],
    publishedAt: "2026-01-06T08:00:00.000Z",
    updatedAt: "2026-01-06T08:00:00.000Z",
  },
  {
    id: "4",
    title: "タイムブロッキング入門：時間管理の最強メソッド",
    slug: "time-blocking-intro",
    description: "Googleカレンダーを使った時間管理術で、生産性を2倍にする方法を解説します。",
    content: `
## タイムブロッキングとは

時間を「予定」ではなく「ブロック」として管理する方法です。

## なぜ効果的なのか

- 集中力が持続する
- 優先順位が明確になる
- 無駄な時間が減る

## 実践方法

1. 週の初めに主要タスクをリストアップ
2. 各タスクに必要な時間を見積もる
3. カレンダーに「ブロック」として配置
4. ブロック中は他のことをしない

## よくある失敗と対策

完璧を目指さず、70%達成を目標にしましょう。
    `,
    thumbnail: {
      url: "/images/placeholder.svg",
      width: 1200,
      height: 630,
    },
    category: dummyCategories[3],
    tags: [dummyTags[2], dummyTags[3]],
    publishedAt: "2026-01-04T12:00:00.000Z",
    updatedAt: "2026-01-04T12:00:00.000Z",
  },
  {
    id: "5",
    title: "瞑想を始めて3ヶ月で感じた5つの変化",
    slug: "meditation-3months",
    description: "瞑想初心者が3ヶ月続けた結果、仕事とプライベートにどんな変化があったかを紹介します。",
    content: `
## 瞑想を始めたきっかけ

ストレスと睡眠の質の低下に悩んでいました。

## 3ヶ月間の実践内容

- 毎朝10分の瞑想
- アプリを使用
- 同じ場所で実践

## 感じた5つの変化

1. 集中力が上がった
2. イライラしにくくなった
3. 睡眠の質が改善した
4. 創造性が上がった
5. 人間関係が良くなった

## 初心者へのアドバイス

まずは5分から始めてみてください。
    `,
    thumbnail: {
      url: "/images/placeholder.svg",
      width: 1200,
      height: 630,
    },
    category: dummyCategories[4],
    tags: [dummyTags[0], dummyTags[3]],
    publishedAt: "2026-01-02T14:00:00.000Z",
    updatedAt: "2026-01-02T14:00:00.000Z",
  },
  {
    id: "6",
    title: "習慣化の科学：脳の仕組みを理解して挫折しない自分になる",
    slug: "habit-science",
    description: "習慣がどのように形成されるか、神経科学の観点から解説します。",
    content: `
## 習慣のループ

1. きっかけ（Cue）
2. ルーティン（Routine）
3. 報酬（Reward）

この3つの要素が習慣を形成します。

## 習慣化に必要な期間

平均66日と言われていますが、個人差があります。

## 挫折を防ぐテクニック

- 環境を整える
- 小さく始める
- 仲間を作る
- 記録をつける

## まとめ

習慣化は科学です。正しい方法を知れば、誰でも習慣を作れます。
    `,
    thumbnail: {
      url: "/images/placeholder.svg",
      width: 1200,
      height: 630,
    },
    category: dummyCategories[0],
    tags: [dummyTags[3], dummyTags[5]],
    publishedAt: "2025-12-28T10:00:00.000Z",
    updatedAt: "2025-12-28T10:00:00.000Z",
  },
  {
    id: "7",
    title: "自宅でできる器具なし筋トレ：忙しい朝の15分ワークアウト",
    slug: "home-workout-15min",
    description: "特別な器具がなくても、自宅で効果的なトレーニングができます。",
    content: `
## 15分で完結するメニュー

1. ジャンピングジャック 1分
2. スクワット 2分
3. プッシュアップ 2分
4. プランク 1分
5. ランジ 2分
6. バーピー 2分
7. マウンテンクライマー 2分
8. ストレッチ 3分

## ポイント

- 休憩は最小限に
- フォームを意識
- 毎日同じ時間に

## まとめ

朝の15分が1日のエネルギーを変えます。
    `,
    thumbnail: {
      url: "/images/placeholder.svg",
      width: 1200,
      height: 630,
    },
    category: dummyCategories[1],
    tags: [dummyTags[0], dummyTags[1]],
    publishedAt: "2025-12-25T08:00:00.000Z",
    updatedAt: "2025-12-25T08:00:00.000Z",
  },
  {
    id: "8",
    title: "ポモドーロテクニックで集中力を最大化する方法",
    slug: "pomodoro-technique",
    description: "25分の集中と5分の休憩を繰り返す、シンプルだけど効果的な時間管理術。",
    content: `
## ポモドーロテクニックとは

イタリアのトマト型キッチンタイマーが名前の由来です。

## 基本ルール

1. 25分間集中して作業
2. 5分間休憩
3. 4セット後に15-30分の長い休憩

## なぜ効果的なのか

人間の集中力は長くは持続しません。短い集中を繰り返すことで、1日を通して高い生産性を維持できます。

## おすすめツール

- Forest
- Focus To-Do
- 物理タイマー

## まとめ

シンプルなテクニックですが、継続すれば確実に生産性が上がります。
    `,
    thumbnail: {
      url: "/images/placeholder.svg",
      width: 1200,
      height: 630,
    },
    category: dummyCategories[3],
    tags: [dummyTags[2], dummyTags[4]],
    publishedAt: "2025-12-22T09:00:00.000Z",
    updatedAt: "2025-12-22T09:00:00.000Z",
  },
];

// ダミーデータを取得する関数
export function getDummyPosts(
  options: {
    limit?: number;
    offset?: number;
    category?: string;
    tag?: string;
  } = {}
): BlogListResponse {
  const { limit = 10, offset = 0, category, tag } = options;

  let filteredPosts = [...dummyPosts];

  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category.slug === category);
  }

  if (tag) {
    filteredPosts = filteredPosts.filter((post) =>
      (post.tags ?? []).some((t) => t.slug === tag)
    );
  }

  const paginatedPosts = filteredPosts.slice(offset, offset + limit);

  return {
    contents: paginatedPosts,
    totalCount: filteredPosts.length,
    offset,
    limit,
  };
}

export function getDummyPostBySlug(slug: string): BlogPost | undefined {
  return dummyPosts.find((post) => post.slug === slug);
}

export function getDummyRelatedPosts(
  currentPost: BlogPost,
  limit: number = 3
): BlogPost[] {
  const currentTags = currentPost.tags ?? [];
  return dummyPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        (post.category.id === currentPost.category.id ||
          (post.tags ?? []).some((tag) =>
            currentTags.some((t) => t.id === tag.id)
          ))
    )
    .slice(0, limit);
}
