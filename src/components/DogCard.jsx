import Button from './Button'
import { useFavorites } from '../context/FavoritesContext'

export default function DogCard({ dog }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorited = isFavorite(dog.id)

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-orange-100 transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-stone-800 dark:ring-stone-700">
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
          toggleFavorite(dog.id)
        }}
        className={`absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full shadow-md transition duration-200 ${
          favorited
            ? 'bg-paw-orange text-white'
            : 'bg-white/95 text-stone-400 hover:text-paw-orange dark:bg-stone-900/90 dark:text-stone-300'
        }`}
        aria-label={favorited ? `Remove ${dog.name} from favourites` : `Add ${dog.name} to favourites`}
        aria-pressed={favorited}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill={favorited ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
          <path d="M12 21s-6.7-4.35-9.33-8.1C.5 9.9 1.7 5.8 5.4 4.7c1.9-.55 3.9.12 5.1 1.6 1.2-1.48 3.2-2.15 5.1-1.6 3.7 1.1 4.9 5.2 2.73 8.2C18.7 16.65 12 21 12 21z" />
        </svg>
      </button>
      <img src={dog.image} alt={dog.name} className="h-52 w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-extrabold text-stone-800 dark:text-stone-100">{dog.name}</h3>
        <p className="mt-1 text-sm font-semibold text-paw-orange">{dog.breed}</p>
        <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
          {dog.age} {dog.age === 1 ? 'year' : 'years'} · {dog.gender}
        </p>
        <p className="mt-3 flex-1 text-sm leading-6 text-stone-600 dark:text-stone-300">
          {dog.shortDescription}
        </p>
        <div className="mt-5">
          <Button to={`/adopt/${dog.id}`} className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </article>
  )
}
