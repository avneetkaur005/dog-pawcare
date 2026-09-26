export default function EmptyState({ icon = '🐾', title, message, children }) {
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700">
      <p className="text-3xl">{icon}</p>
      {title ? (
        <h3 className="mt-3 text-xl font-extrabold text-stone-800 dark:text-stone-100">{title}</h3>
      ) : null}
      {message ? (
        <p className="mt-2 text-stone-600 dark:text-stone-300">{message}</p>
      ) : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  )
}
