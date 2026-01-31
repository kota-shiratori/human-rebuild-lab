export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
};

export type Author = {
  id: string;
  name: string;
  slug: string;
  bio: string;
  avatar: {
    url: string;
    width: number;
    height: number;
  };
  /** SNSリンク（オプション） */
  twitter?: string;
  instagram?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  category: Category;
  /** タグ（未設定の場合はundefined） */
  tags?: Tag[];
  /** 著者（未設定の場合はundefined） */
  author?: Author;
  publishedAt: string;
  updatedAt: string;
};

export type BlogListResponse = {
  contents: BlogPost[];
  totalCount: number;
  offset: number;
  limit: number;
};
