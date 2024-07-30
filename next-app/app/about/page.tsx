import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nikulshin.D - Potrfolio | About",
  description: "Web Developer Portfolio <Nikulshin Dmitriy>",
  keywords:
    "Web Developer Portfolio, Портфолио Web разработчика, Портфолио Web разработчика Nikulshin Dmitriy, Портфолио Web разработчика Никульшин Дмитрий",
};

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section className="text-white">
        <h1 className="text-center font-bold text-2xl">About Me</h1>
        <p>
          Есть много вариантов Lorem Ipsum, но большинство из них имеет не
          всегда приемлемые модификации, например, юмористические вставки или
          слова, которые даже отдалённо не напоминают латынь. Если вам нужен
          Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
          какой-нибудь шутки, скрытой в середине абзаца. Также все другие
          известные генераторы Lorem Ipsum используют один и тот же текст,
          который они просто повторяют, пока не достигнут нужный объём. Это
          делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum
          генератором. Он использует словарь из более чем 200 латинских слов, а
          также набор моделей предложений. В результате сгенерированный Lorem
          Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или
          невозможных слов.
        </p>
      </section>
    </main>
  );
}
