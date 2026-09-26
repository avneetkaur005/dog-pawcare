import Button from '../components/Button'
import DogCard from '../components/DogCard'
import ReviewCard from '../components/ReviewCard'
import SectionTitle from '../components/SectionTitle'
import { useFavorites } from '../context/FavoritesContext'
import { demoReviews } from '../data/reviews'
import { getFeaturedDogs } from '../data/dogs'
import { trainingTopics } from '../data/trainingTopics'

const reasons = [
  {
    title: 'Kind matching',
    text: 'We help you find a dog whose energy and needs fit your home.',
  },
  {
    title: 'Care first',
    text: 'Every listed dog receives a health check, vaccines, and lots of attention.',
  },
  {
    title: 'Beginner support',
    text: 'New adopters get simple care guides so the first weeks feel less stressful.',
  },
]

const healthPreview = [
  { title: 'Weight & visits', text: 'Keep a simple log of checkups in this browser.' },
  { title: 'Vaccine dates', text: 'See a reminder when a demo date is coming up.' },
  { title: 'Notes', text: 'Save medication notes so you can practice the form.' },
]

const appointmentPreview = [
  { title: 'Pick a demo dog', text: 'Choose a listed dog and a practice time.' },
  { title: 'Saved locally', text: 'Bookings stay after refresh, with no real clinic.' },
  { title: 'Cancel anytime', text: 'Remove a demo appointment from the list.' },
]

export default function Home() {
  const featuredDogs = getFeaturedDogs()
  const { favoriteDogs } = useFavorites()
  const previewFavourites = favoriteDogs.slice(0, 3)
  const previewTraining = trainingTopics.slice(0, 3)
  const previewReviews = demoReviews.slice(0, 3)

  return (
    <div>
      <section className="bg-gradient-to-b from-orange-50 to-white transition duration-300 dark:from-stone-900 dark:to-stone-950">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-3 font-bold text-paw-orange">Dog care & adoption</p>
            <h1 className="text-4xl font-extrabold leading-tight text-stone-800 dark:text-stone-100 md:text-5xl">
              Give a Dog a Loving Home
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-8 text-stone-600 dark:text-stone-300">
              PawCare helps people learn about dogs, meet adoptable pets, and
              practice kind care. Browse our demo dogs and find a new best friend.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/adopt">Adopt a Dog</Button>
              <Button to="/care" variant="secondary">
                Learn Dog Care
              </Button>
            </div>
          </div>
          <img
            src="/dogs/hero.jpg"
            alt="Happy dog looking at the camera"
            className="h-80 w-full rounded-3xl object-cover shadow-xl md:h-[420px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          title="Featured dogs"
          subtitle="A few of our current demo dogs waiting for a family."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDogs.map((dog) => (
            <DogCard key={dog.id} dog={dog} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 transition duration-300 dark:bg-stone-900">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="Why Choose PawCare?"
            subtitle="Simple support for people who want to welcome a dog with confidence."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-3xl bg-orange-50 p-6 ring-1 ring-orange-100 transition hover:-translate-y-1 dark:bg-stone-800 dark:ring-stone-700"
              >
                <h3 className="text-xl font-extrabold text-stone-800 dark:text-stone-100">{reason.title}</h3>
                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          title="Favourite Dogs"
          subtitle="Heart a dog on any card, then come back here. Your list is saved in this browser."
        />
        {previewFavourites.length === 0 ? (
          <p className="mb-6 text-center text-stone-600 dark:text-stone-300">
            You have not favourited a dog yet. Try the heart on Bella, Max, or Luna.
          </p>
        ) : (
          <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewFavourites.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        )}
        <div className="text-center">
          <Button to="/favourites">View favourite dogs</Button>
        </div>
      </section>

      <section className="bg-white py-14 transition duration-300 dark:bg-stone-900">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="Dog Training"
            subtitle="Short lessons on commands, house training, and kind coaching."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {previewTraining.map((topic) => (
              <article
                key={topic.id}
                className="rounded-3xl bg-orange-50 p-6 ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700"
              >
                <p className="text-3xl">{topic.icon}</p>
                <h3 className="mt-3 text-lg font-extrabold text-stone-800 dark:text-stone-100">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">{topic.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/training">Open training guide</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          title="Health Tracker"
          subtitle="Practice logging weight, vet visits, and vaccination dates. Demo only."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {healthPreview.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white p-6 ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700"
            >
              <h3 className="text-lg font-extrabold text-stone-800 dark:text-stone-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/health">Open health tracker</Button>
        </div>
      </section>

      <section className="bg-white py-14 transition duration-300 dark:bg-stone-900">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="Vet Appointments"
            subtitle="A frontend-only booking form. No hospital, payment, or email is involved."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {appointmentPreview.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-orange-50 p-6 ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700"
              >
                <h3 className="text-lg font-extrabold text-stone-800 dark:text-stone-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/appointments">Book a demo visit</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          title="Testimonials"
          subtitle="Example quotes from fictional adopters, used to practice the reviews page."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {previewReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/reviews">Read all reviews</Button>
        </div>
      </section>
    </div>
  )
}
