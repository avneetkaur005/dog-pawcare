import { useState } from 'react'
import Button from './Button'
import FormInput from './FormInput'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function validate() {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please write a short message.'
    }

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setForm(emptyForm)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-teal-50 p-8 text-center ring-1 ring-teal-100 dark:bg-teal-950/40 dark:ring-teal-900">
        <p className="text-2xl">🐾</p>
        <h3 className="mt-2 text-xl font-extrabold text-teal-800 dark:text-teal-200">
          Thank you for contacting PawCare!
        </h3>
        <p className="mt-2 text-stone-600 dark:text-stone-300">
          This is a demo form, so nothing was sent. In a real project, your
          message would go to the shelter team.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 transition duration-300 dark:bg-stone-800 dark:ring-stone-700 md:p-8"
    >
      <FormInput label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Your name" />
      <FormInput label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="you@example.com" />
      <FormInput label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="Your phone number" />
      <FormInput label="Message" name="message" as="textarea" value={form.message} onChange={handleChange} error={errors.message} placeholder="How can we help you?" />
      <Button type="submit" className="w-full md:w-auto">
        Submit
      </Button>
    </form>
  )
}
