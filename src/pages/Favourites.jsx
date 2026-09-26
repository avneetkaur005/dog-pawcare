import Button from '../components/Button'
import DogCard from '../components/DogCard'
import EmptyState from '../components/EmptyState'
import SectionTitle from '../components/SectionTitle'
import { useFavorites } from '../context/FavoritesContext'

export default function Favourites() {
  const { favoriteDogs } = useFavorites()

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        title="Favourite Dogs"
        subtitle="Dogs you heart on the Adopt page are saved in this browser."
      />
      {favoriteDogs.length === 0 ? (
        <EmptyState
          icon="💛"
          title="No favourite dogs yet"
          message="Browse adoptable dogs and tap the heart on a card. Your list will show up here after you refresh, too."
        >
          <Button to="/adopt">Browse Adopt Dogs</Button>
        </EmptyState>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteDogs.map((dog) => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>
      )}
    </section>
  )
}
