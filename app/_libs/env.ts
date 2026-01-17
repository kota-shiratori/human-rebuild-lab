/**
 * 環境変数の型安全なアクセスを提供
 */
export const env = {
  MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
  MICROCMS_API_KEY: process.env.MICROCMS_API_KEY ?? "",
  
  /**
   * microCMSが設定されているかどうか
   */
  get isMicroCMSConfigured(): boolean {
    return Boolean(this.MICROCMS_SERVICE_DOMAIN && this.MICROCMS_API_KEY);
  },
} as const;
