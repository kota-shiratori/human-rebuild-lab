import type { Author } from "@/_types/blog";

/**
 * 著者マスターデータ
 * microCMSのセレクトフィールドの値をキーとして使用
 */
export const authorMaster: Record<string, Author> = {
  白鳥: {
    id: "shiratori",
    name: "Kota",
    slug: "kota",
    bio: "HUMAN REBUILD LAB 代表。脳科学と行動心理学をベースにした習慣化メソッドを研究・発信しています。「脳を入れ替える習慣メディア」として、皆様の活躍を応援します。",
    avatar: {
      url: "/images/kota.png",
      width: 200,
      height: 200,
    },
  },
  加藤: {
    id: "kato",
    name: "Hiro",
    slug: "hiro",
    bio: "HUMAN REBUILD LAB 代表。習慣化の実践者として、日々の経験を記事にしています。読者の皆さんと一緒に成長していきたいと思っています。",
    avatar: {
      url: "/images/hiro.png",
      width: 200,
      height: 200,
    },
  },
};

/**
 * microCMSのセレクトフィールドの値から著者情報を取得
 */
export function getAuthorByKey(key: string | undefined): Author | undefined {
  if (!key) return undefined;
  return authorMaster[key];
}

/**
 * 全著者リスト
 */
export const authors: Author[] = Object.values(authorMaster);
