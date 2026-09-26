import { useState } from 'react'
import Button from '../components/Button'
import FormInput from '../components/FormInput'
import ReviewCard from '../components/ReviewCard'
import SectionTitle from '../components/SectionTitle'
import { demoReviews } from '../data/reviews'
import { createId, readJson, writeJson } from '../utils/storage'

const emptyForm = {
  name: '',
  rating: '5',
  review: '',
  dogName: '',
}

export default function Reviews() {
  const [userReviews, setUserReviews] = useState(() => readJson('reviews', []))
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  const reviews = [...userReviews, ...demoReviews]

  function persist(next) {
    setUserReviews(next)
    writeJson('reviews', next)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.review.trim()) nextErrors.review = 'Please write a short review.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    persist([
      {
        id: createId(),
        name: form.name.trim(),
        rating: Number(form.rating),
        review: form.review.trim(),
        dogName: form.dogName.trim(),
        isDemo: false,
      },
      ...userReviews,
    ])
    setForm(emptyForm)
  }

  function handleDelete(id) {
    persist(userReviews.filter((item) => item.id !== id))
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        title="Reviews & Testimonials"
        subtitle="The starred quotes with “Example testimonial” are fictional demo stories. Anything you write stays in this browser only."
      />

      <form
        onSubmit={handleSubmit}
        className="mb-12 grid gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700 md:grid-cols-2 md:p-8"
      >
        <h3 className="text-xl font-extrabold text-stone-800 dark:text-stone-100 md:col-span-2">Write a review</h3>
        <FormInput label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} required />
        <FormInput
          label="Rating"
          name="rating"
          as="select"
          value={form.rating}
          onChange={handleChange}
          options={[
            { value: '5', label: '5 stars' },
            { value: '4', label: '4 stars' },
            { value: '3', label: '3 stars' },
            { value: '2', label: '2 stars' },
            { value: '1', label: '1 star' },
          ]}
        />
        <FormInput label="Dog name (optional)" name="dogName" value={form.dogName} onChange={handleChange} placeholder="A demo dog you liked" />
        <FormInput
          label="Review"
          name="review"
          as="textarea"
          rows={3}
          value={form.review}
          onChange={handleChange}
          error={errors.review}
          required
          className="md:col-span-2"
        />
        <div className="md:col-span-2">
          <Button type="submit">Submit review</Button>
        </div>
      </form>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} onDelete={handleDelete} />
        ))}
      </div>
    </section>
  )
}
