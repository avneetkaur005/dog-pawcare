import { useMemo, useState } from 'react'
import DogCard from '../components/DogCard'
import Filter from '../components/Filter'
import SectionTitle from '../components/SectionTitle'
import { ageFilters, dogs, getBreeds } from '../data/dogs'

export default function Adopt() {
  const breeds = getBreeds()
  const [selectedBreed, setSelectedBreed] = useState('All breeds')
  const [selectedAge, setSelectedAge] = useState('All ages')

  const filteredDogs = useMemo(() => {
    return dogs.filter((dog) => {
      const breedMatch =
        selectedBreed === 'All breeds' || dog.breed === selectedBreed
      const ageMatch =
        selectedAge === 'All ages' || dog.ageLabel === selectedAge
      return breedMatch && ageMatch
    })
  }, [selectedBreed, selectedAge])

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        title="Adopt a dog"
        subtitle="Filter by breed or age, then open a card to learn more. Tap the heart to save a favourite."
      />
      <Filter
        breeds={breeds}
        ages={ageFilters}
        selectedBreed={selectedBreed}
        selectedAge={selectedAge}
        onBreedChange={setSelectedBreed}
        onAgeChange={setSelectedAge}
      />
      {filteredDogs.length === 0 ? (
        <p className="rounded-3xl bg-white p-8 text-center text-stone-600 ring-1 ring-orange-100 dark:bg-stone-800 dark:text-stone-300 dark:ring-stone-700">
          No dogs match these filters. Try another breed or age group.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDogs.map((dog) => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>
      )}
    </section>
  )
}
