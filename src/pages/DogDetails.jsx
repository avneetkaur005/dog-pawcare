import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import { useFavorites } from '../context/FavoritesContext'
import { getDogById } from '../data/dogs'

export default function DogDetails() {
  const { id } = useParams()
  const dog = getDogById(id)
  const { isFavorite, toggleFavorite } = useFavorites()

  if (!dog) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-stone-800 dark:text-stone-100">Dog not found</h1>
        <p className="mt-3 text-stone-600 dark:text-stone-300">
          This dog is not in our sample list. Please go back to the adoption page.
        </p>
        <Button to="/adopt" className="mt-6">
          Back to Adopt Dogs
        </Button>
      </section>
    )
  }

  const favorited = isFavorite(dog.id)

  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <Link to="/adopt" className="text-sm font-bold text-paw-orange hover:underline">
        ← Back to all dogs
      </Link>
      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <img
          src={dog.image}
          alt={dog.name}
          className="h-80 w-full rounded-3xl object-cover shadow-lg md:h-full"
        />
        <div>
          <h1 className="text-4xl font-extrabold text-stone-800 dark:text-stone-100">{dog.name}</h1>
          <p className="mt-2 text-lg font-bold text-paw-orange">{dog.breed}</p>
          <p className="mt-2 text-stone-500 dark:text-stone-400">
            {dog.age} {dog.age === 1 ? 'year' : 'years'} · {dog.gender}
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-white p-4 ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700">
              <h2 className="font-extrabold text-stone-800 dark:text-stone-100">Personality</h2>
              <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">{dog.personality}</p>
            </div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700">
              <h2 className="font-extrabold text-stone-800 dark:text-stone-100">Health information</h2>
              <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">{dog.health}</p>
            </div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700">
              <h2 className="font-extrabold text-stone-800 dark:text-stone-100">Description</h2>
              <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">{dog.description}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/contact">Apply for Adoption</Button>
            <Button variant="secondary" onClick={() => toggleFavorite(dog.id)}>
              {favorited ? 'Remove favourite' : 'Add to favourites'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
