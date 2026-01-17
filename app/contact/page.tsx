import { Metadata } from "next";
import Logo from "@/_components/Logo";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "HUMAN REBUILD LABへのお問い合わせ。コーチングの無料相談、取材依頼、その他のお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-sm font-medium text-white/80 mb-4">Contact</p>
              <h1 className="text-giant mb-6">GET IN TOUCH</h1>
              <p className="text-lg text-white/90 max-w-lg">
                コーチングの無料相談、取材依頼、その他のお問い合わせはこちらからどうぞ。
                通常2営業日以内にご返信いたします。
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <Logo size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper">
          <div className="max-w-2xl mx-auto">
            <ContactForm />

            {/* Other Contact */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h2 className="text-xl font-bold text-brand-black mb-6 text-center">
                その他のお問い合わせ方法
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-brand-gray rounded-xl text-center">
                  <p className="font-semibold text-brand-black mb-2">Email</p>
                  <a
                    href="mailto:hello@humanrebuildlab.com"
                    className="text-brand-blue hover:underline"
                  >
                    hello@humanrebuildlab.com
                  </a>
                </div>
                <div className="p-6 bg-brand-gray rounded-xl text-center">
                  <p className="font-semibold text-brand-black mb-2">SNS</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-blue-dark"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-blue-dark"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
