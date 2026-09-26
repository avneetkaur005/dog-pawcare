export default function ReviewCard({ review, onDelete }) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 transition duration-200 hover:-translate-y-1 dark:bg-stone-800 dark:ring-stone-700">
      <p className="text-lg tracking-wide text-paw-orange" aria-label={`${review.rating} out of 5 stars`}>
        {'★'.repeat(review.rating)}
        <span className="text-stone-300 dark:text-stone-600">{'★'.repeat(5 - review.rating)}</span>
      </p>
      <p className="mt-3 flex-1 text-base leading-7 text-stone-600 dark:text-stone-300">
        “{review.review}”
      </p>
      <p className="mt-4 font-extrabold text-stone-800 dark:text-stone-100">— {review.name}</p>
      {review.dogName ? (
        <p className="text-sm text-stone-500">Adopted {review.dogName} (demo)</p>
      ) : null}
      {review.isDemo ? (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-stone-400">
          Example testimonial
        </p>
      ) : (
        <button
          type="button"
          onClick={() => onDelete(review.id)}
          className="mt-4 text-left text-sm font-bold text-red-600 hover:underline dark:text-red-400"
        >
          Delete my review
        </button>
      )}
    </article>
  )
}
