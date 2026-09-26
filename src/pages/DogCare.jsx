import SectionTitle from '../components/SectionTitle'
import { careTips } from '../data/careTips'

export default function DogCare() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        title="Dog care basics"
        subtitle="Short beginner-friendly tips you can start using today."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {careTips.map((tip) => (
          <article
            key={tip.id}
            className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 transition duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-stone-800 dark:ring-stone-700"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-3xl dark:bg-stone-700">
              {tip.icon}
            </div>
            <h2 className="mt-4 text-xl font-extrabold text-stone-800 dark:text-stone-100">{tip.title}</h2>
            <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">{tip.summary}</p>
            <p className="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">{tip.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
