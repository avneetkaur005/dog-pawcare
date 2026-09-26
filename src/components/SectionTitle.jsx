export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold text-stone-800 dark:text-stone-100 md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-base text-stone-600 dark:text-stone-300 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}
