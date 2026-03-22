"use client";

import { useActionState } from "react";
import { submitTemplateRequest, type TemplateFormState } from "../actions";

const initialState: TemplateFormState = {
  success: false,
  message: "",
};

export default function TemplateForm() {
  const [state, formAction, isPending] = useActionState(
    submitTemplateRequest,
    initialState
  );

  return (
    <form action={formAction} className="space-y-4">
      {state.message && !state.success && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{state.message}</p>
        </div>
      )}

      <div>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          placeholder="example@email.com"
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-brand-blue text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "送信中..." : "無料でダウンロードする"}
      </button>

      <p className="text-xs text-brand-gray-dark text-center">
        入力いただいたメールアドレスは、テンプレート配布およびHUMAN REBUILD
        LABからのお知らせにのみ使用します。
      </p>
    </form>
  );
}
