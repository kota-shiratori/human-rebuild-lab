"use server";

import { redirect } from "next/navigation";

export type TemplateFormState = {
  success: boolean;
  message: string;
  errors?: {
    email?: string[];
  };
};

export async function submitTemplateRequest(
  prevState: TemplateFormState,
  formData: FormData
): Promise<TemplateFormState> {
  const email = formData.get("email") as string;

  // バリデーション
  if (!email || email.trim().length === 0) {
    return {
      success: false,
      message: "入力内容にエラーがあります",
      errors: { email: ["メールアドレスを入力してください"] },
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: "入力内容にエラーがあります",
      errors: { email: ["有効なメールアドレスを入力してください"] },
    };
  }

  try {
    // Google Spreadsheet にメアドを記録
    const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (sheetUrl) {
      await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "template-download",
          timestamp: new Date().toISOString(),
        }),
      });
    } else {
      // Webhook未設定の場合はログに記録
      console.log("Template download request:", { email, timestamp: new Date().toISOString() });
    }
  } catch (error) {
    console.error("Failed to record email:", error);
    // メール記録に失敗してもテンプレートは配布する
  }

  redirect("/template/success");
}
