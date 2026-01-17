"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "../actions";
import SubmitButton from "./SubmitButton";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-8">
      {/* エラーメッセージ */}
      {state.message && !state.success && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{state.message}</p>
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-brand-black mb-2"
        >
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          placeholder="山田 太郎"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-brand-black mb-2"
        >
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          placeholder="example@email.com"
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-brand-black mb-2"
        >
          お問い合わせ種別 <span className="text-red-500">*</span>
        </label>
        <select
          id="category"
          name="category"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
        >
          <option value="">選択してください</option>
          <option value="coaching">コーチング無料相談</option>
          <option value="template">テンプレートについて</option>
          <option value="media">取材・メディア掲載</option>
          <option value="collaboration">コラボレーション</option>
          <option value="other">その他</option>
        </select>
        {state.errors?.category && (
          <p className="mt-1 text-sm text-red-500">{state.errors.category[0]}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-black mb-2"
        >
          メッセージ <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
          placeholder="お問い合わせ内容をご記入ください"
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>
        )}
      </div>

      {/* Privacy */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          value="agreed"
          required
          className="w-5 h-5 mt-0.5 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
        />
        <label htmlFor="privacy" className="text-sm text-brand-gray-dark">
          <a
            href="/privacy"
            className="text-brand-blue hover:underline"
            target="_blank"
          >
            プライバシーポリシー
          </a>
          に同意します
        </label>
      </div>
      {state.errors?.privacy && (
        <p className="text-sm text-red-500">{state.errors.privacy[0]}</p>
      )}

      {/* Submit */}
      <SubmitButton />
    </form>
  );
}
