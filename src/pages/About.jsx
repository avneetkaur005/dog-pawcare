import SectionTitle from '../components/SectionTitle'

const stats = [
  { value: '240+', label: 'Dogs helped' },
  { value: '180+', label: 'Dogs adopted' },
  { value: '65', label: 'Volunteers' },
]

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <SectionTitle
        title="About PawCare"
        subtitle="A fictional community rescue created as a student demo project."
      />
      <div className="space-y-6 rounded-3xl bg-white p-8 leading-8 text-stone-600 shadow-sm ring-1 ring-orange-100 dark:bg-stone-800 dark:text-stone-300 dark:ring-stone-700">
        <p>
          PawCare is a demo dog care and adoption website. The stories, numbers,
          and dogs on this site are made up so students can practice building a
          complete React app without a backend.
        </p>
        <div>
          <h3 className="text-xl font-extrabold text-stone-800 dark:text-stone-100">Our mission</h3>
          <p className="mt-2">
            Help families learn responsible dog care and imagine how adoption
            matching could work in a simple, friendly website.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-stone-800 dark:text-stone-100">Our vision</h3>
          <p className="mt-2">
            Make beginner-friendly information easy to find, so more people feel
            ready to welcome a dog with patience and kindness.
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl bg-orange-50 p-6 text-center ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700"
          >
            <p className="text-3xl font-extrabold text-paw-orange">{stat.value}</p>
            <p className="mt-1 font-bold text-stone-700 dark:text-stone-200">{stat.label}</p>
            <p className="mt-2 text-xs text-stone-500">Demo numbers only</p>
          </div>
        ))}
      </div>
    </section>
  )
}
