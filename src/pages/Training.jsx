import SectionTitle from '../components/SectionTitle'
import { trainingTopics } from '../data/trainingTopics'

export default function Training() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        title="Dog Training"
        subtitle="Simple, beginner-friendly ideas. These are educational demo tips, not a replacement for a trainer or vet."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {trainingTopics.map((topic) => (
          <article
            key={topic.id}
            className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 transition duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-stone-800 dark:ring-stone-700"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-3xl dark:bg-stone-700">
              {topic.icon}
            </div>
            <h2 className="mt-4 text-xl font-extrabold text-stone-800 dark:text-stone-100">{topic.title}</h2>
            <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">{topic.summary}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-600 dark:text-stone-300">
              {topic.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
            <details className="mt-4 rounded-2xl bg-orange-50 p-4 dark:bg-stone-900">
              <summary className="cursor-pointer font-bold text-paw-orange">Learn more</summary>
              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">{topic.details}</p>
            </details>
          </article>
        ))}
      </div>
    </section>
  )
}
