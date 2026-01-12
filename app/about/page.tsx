import { Metadata } from "next";
import Logo from "@/_components/Logo";
import CtaBanner from "@/_components/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "HUMAN REBUILD LABは、忙しい会社員のための習慣化メディアです。筋トレ・学習・時間管理・瞑想を通じて、あなたの人生を再構築します。",
};

const values = [
  {
    title: "科学的アプローチ",
    description:
      "すべてのコンテンツは、心理学・神経科学・行動経済学などの科学的根拠に基づいています。",
  },
  {
    title: "実践第一",
    description:
      "理論だけでなく、明日から実践できる具体的なアクションを重視しています。",
  },
  {
    title: "継続可能性",
    description:
      "無理なく続けられることを最優先に。小さな習慣の積み重ねが人生を変えます。",
  },
  {
    title: "コミュニティ",
    description:
      "同じ志を持つ仲間とつながることで、モチベーションを維持できます。",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-brand-blue mb-4">
                About Us
              </p>
              <h1 className="text-giant text-brand-black mb-6">
                脳を
                <br />
                入れ替える
              </h1>
              <p className="text-lg text-brand-gray-dark max-w-lg">
                HUMAN REBUILD LABは、「脳を入れ替えられる場所」をコンセプトに、
                忙しい会社員のための習慣化メディアを運営しています。
              </p>
            </div>
            <div className="flex justify-center">
              <Logo size="xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto text-center text-white">
            <p className="text-sm font-medium text-white/80 mb-4">Mission</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              習慣を変えることで、
              <br />
              人生を変える人を増やす
            </h2>
            <p className="text-lg text-white/90">
              私たちは、科学的根拠に基づいた習慣化メソッドを通じて、
              一人でも多くの人が理想の自分に近づけるよう支援します。
              筋トレ・学習・時間管理・瞑想という4つの柱を軸に、
              あなたの「脳」と「習慣」をリビルドします。
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-brand-blue mb-4">Values</p>
            <h2 className="text-giant text-brand-black">私たちの価値観</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-brand-gray rounded-2xl"
              >
                <h3 className="text-xl font-bold text-brand-black mb-4">
                  {value.title}
                </h3>
                <p className="text-brand-gray-dark">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="bg-brand-gray py-16 md:py-24">
        <div className="section-wrapper">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-brand-blue mb-4">
              4 Pillars
            </p>
            <h2 className="text-giant text-brand-black">4つの柱</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "💪",
                title: "筋トレ",
                description: "身体を鍛え、エネルギーと自信を高める",
              },
              {
                emoji: "📚",
                title: "学習",
                description: "知識を広げ、スキルを磨き続ける",
              },
              {
                emoji: "⏰",
                title: "時間管理",
                description: "限られた時間を最大限に活用する",
              },
              {
                emoji: "🧘",
                title: "瞑想",
                description: "心を整え、ストレスに強くなる",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl text-center shadow-sm"
              >
                <div className="text-5xl mb-4">{pillar.emoji}</div>
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brand-gray-dark">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-wrapper max-w-3xl">
          <CtaBanner variant="both" />
        </div>
      </section>
    </>
  );
}
