"use server";

import { redirect } from "next/navigation";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    category?: string[];
    message?: string[];
    privacy?: string[];
  };
};

export async function submitContact(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const category = formData.get("category") as string;
  const message = formData.get("message") as string;
  const privacy = formData.get("privacy") as string;

  // バリデーション
  const errors: ContactFormState["errors"] = {};

  if (!name || name.trim().length === 0) {
    errors.name = ["お名前を入力してください"];
  }

  if (!email || email.trim().length === 0) {
    errors.email = ["メールアドレスを入力してください"];
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["有効なメールアドレスを入力してください"];
  }

  if (!category || category.trim().length === 0) {
    errors.category = ["お問い合わせ種別を選択してください"];
  }

  if (!message || message.trim().length === 0) {
    errors.message = ["メッセージを入力してください"];
  }

  if (!privacy) {
    errors.privacy = ["プライバシーポリシーに同意してください"];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "入力内容にエラーがあります",
      errors,
    };
  }

  try {
    // TODO: 実際の送信処理を実装
    // 例: メール送信API、Slack通知、DBへの保存など
    console.log("Contact form submitted:", { name, email, category, message });

    // 成功時はリダイレクト
    // redirect は try-catch の外で呼ぶ必要がある場合があるため、
    // ここではフラグを返す
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return {
      success: false,
      message: "送信に失敗しました。時間をおいて再度お試しください。",
    };
  }

  redirect("/contact/success");
}
