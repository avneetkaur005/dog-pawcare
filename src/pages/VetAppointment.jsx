import { useState } from 'react'
import AppointmentCard from '../components/AppointmentCard'
import Button from '../components/Button'
import EmptyState from '../components/EmptyState'
import FormInput from '../components/FormInput'
import SectionTitle from '../components/SectionTitle'
import { dogs } from '../data/dogs'
import { createId, readJson, writeJson } from '../utils/storage'

const emptyForm = {
  ownerName: '',
  email: '',
  phone: '',
  dogId: '',
  date: '',
  time: '',
  reason: '',
  notes: '',
}

export default function VetAppointment() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')
  const [appointments, setAppointments] = useState(() => readJson('appointments', []))

  function persist(next) {
    setAppointments(next)
    writeJson('appointments', next)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function validate() {
    const nextErrors = {}
    if (!form.ownerName.trim()) nextErrors.ownerName = 'Please enter the owner name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter an email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.phone.trim()) nextErrors.phone = 'Please enter a phone number.'
    if (!form.dogId) nextErrors.dogId = 'Please select a dog.'
    if (!form.date) nextErrors.date = 'Please choose a date.'
    if (!form.time) nextErrors.time = 'Please choose a time.'
    if (!form.reason.trim()) nextErrors.reason = 'Please add a reason for the visit.'
    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSuccess('')
      return
    }

    const dog = dogs.find((item) => item.id === form.dogId)
    const appointment = {
      id: createId(),
      ...form,
      dogName: dog?.name || 'Demo dog',
    }
    persist([appointment, ...appointments])
    setForm(emptyForm)
    setSuccess('Demo appointment saved. Nothing was sent to a real veterinarian.')
  }

  function handleCancel(id) {
    persist(appointments.filter((item) => item.id !== id))
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <SectionTitle
        title="Vet Appointment"
        subtitle="Practice booking a visit. This form only saves to localStorage. It does not contact a hospital, vet, or payment system."
      />

      {success ? (
        <p className="mb-6 rounded-3xl bg-teal-50 p-4 text-center font-semibold text-teal-800 ring-1 ring-teal-100 dark:bg-teal-950/40 dark:text-teal-200 dark:ring-teal-900">
          {success}
        </p>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700 md:grid-cols-2 md:p-8"
      >
        <FormInput label="Owner name" name="ownerName" value={form.ownerName} onChange={handleChange} error={errors.ownerName} required />
        <FormInput label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} required />
        <FormInput label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} required />
        <FormInput
          label="Select dog"
          name="dogId"
          as="select"
          value={form.dogId}
          onChange={handleChange}
          error={errors.dogId}
          required
          options={[
            { value: '', label: 'Choose a demo dog…' },
            ...dogs.map((dog) => ({ value: dog.id, label: dog.name })),
          ]}
        />
        <FormInput label="Appointment date" name="date" type="date" value={form.date} onChange={handleChange} error={errors.date} required />
        <FormInput label="Appointment time" name="time" type="time" value={form.time} onChange={handleChange} error={errors.time} required />
        <FormInput label="Reason for visit" name="reason" value={form.reason} onChange={handleChange} error={errors.reason} placeholder="Checkup, vaccines, demo question…" required />
        <FormInput
          label="Additional notes"
          name="notes"
          as="textarea"
          rows={3}
          value={form.notes}
          onChange={handleChange}
          placeholder="Optional"
          className="md:col-span-2"
        />
        <div className="md:col-span-2">
          <Button type="submit">Book Appointment</Button>
        </div>
      </form>

      <div className="mt-12">
        <h3 className="mb-5 text-2xl font-extrabold text-stone-800 dark:text-stone-100">Upcoming appointments</h3>
        {appointments.length === 0 ? (
          <EmptyState
            icon="📅"
            title="No demo appointments yet"
            message="Fill in the form above to see a booking appear here."
          />
        ) : (
          <div className="space-y-4">
            {[...appointments]
              .sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`))
              .map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} onCancel={handleCancel} />
              ))}
          </div>
        )}
      </div>
    </section>
  )
}
