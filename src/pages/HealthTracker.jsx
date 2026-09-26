import { useState } from 'react'
import Button from '../components/Button'
import EmptyState from '../components/EmptyState'
import FormInput from '../components/FormInput'
import HealthCard from '../components/HealthCard'
import SectionTitle from '../components/SectionTitle'
import { dogs } from '../data/dogs'
import { createId, readJson, writeJson } from '../utils/storage'

const emptyRecord = {
  dogName: '',
  dateOfBirth: '',
  weight: '',
  lastVetVisit: '',
  nextVetVisit: '',
  vaccinationDate: '',
  nextVaccination: '',
  medication: '',
  notes: '',
}

export default function HealthTracker() {
  const [records, setRecords] = useState(() => readJson('health', []))
  const [form, setForm] = useState(emptyRecord)
  const [editingId, setEditingId] = useState(null)
  const [errors, setErrors] = useState({})

  function persist(next) {
    setRecords(next)
    writeJson('health', next)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function validate() {
    const nextErrors = {}
    if (!form.dogName.trim()) nextErrors.dogName = 'Please enter or select a dog name.'
    if (!form.weight.trim()) nextErrors.weight = 'Please add a weight (demo number is fine).'
    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (editingId) {
      persist(records.map((record) => (record.id === editingId ? { ...form, id: editingId } : record)))
    } else {
      persist([{ ...form, id: createId() }, ...records])
    }

    setForm(emptyRecord)
    setEditingId(null)
  }

  function handleEdit(record) {
    setEditingId(record.id)
    setForm({ ...emptyRecord, ...record })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleDelete(id) {
    persist(records.filter((record) => record.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setForm(emptyRecord)
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        title="Health Tracker"
        subtitle="A demo dashboard stored in this browser. It is not medical advice and is not connected to a real clinic."
      />

      <form
        onSubmit={handleSubmit}
        className="mb-12 grid gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700 md:grid-cols-2 md:p-8"
      >
        <h3 className="text-xl font-extrabold text-stone-800 dark:text-stone-100 md:col-span-2">
          {editingId ? 'Edit health record' : 'Add health record'}
        </h3>
        <FormInput
          label="Dog name"
          name="dogName"
          value={form.dogName}
          onChange={handleChange}
          error={errors.dogName}
          placeholder="Type a name or pick a demo dog below"
          required
        />
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-stone-700 dark:text-stone-200">Quick pick (demo dogs)</span>
          <select
            className="w-full rounded-2xl border border-orange-200 bg-white px-4 py-3 text-stone-700 outline-none transition duration-300 focus:border-paw-orange focus:ring-2 focus:ring-orange-100 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
            value=""
            onChange={(event) => {
              if (event.target.value) {
                setForm((current) => ({ ...current, dogName: event.target.value }))
              }
            }}
          >
            <option value="">Select a listed dog…</option>
            {dogs.map((dog) => (
              <option key={dog.id} value={dog.name}>
                {dog.name}
              </option>
            ))}
          </select>
        </label>
        <FormInput label="Date of birth" name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} />
        <FormInput label="Weight (kg)" name="weight" value={form.weight} onChange={handleChange} error={errors.weight} placeholder="e.g. 18" required />
        <FormInput label="Last vet visit" name="lastVetVisit" type="date" value={form.lastVetVisit} onChange={handleChange} />
        <FormInput label="Next vet visit" name="nextVetVisit" type="date" value={form.nextVetVisit} onChange={handleChange} />
        <FormInput label="Vaccination date" name="vaccinationDate" type="date" value={form.vaccinationDate} onChange={handleChange} />
        <FormInput label="Next vaccination" name="nextVaccination" type="date" value={form.nextVaccination} onChange={handleChange} />
        <FormInput label="Medication" name="medication" value={form.medication} onChange={handleChange} placeholder="Optional demo note" />
        <FormInput
          label="Notes"
          name="notes"
          as="textarea"
          rows={3}
          value={form.notes}
          onChange={handleChange}
          placeholder="Reminders, food, or questions for a real vet later"
          className="md:col-span-2"
        />
        <div className="flex flex-wrap gap-3 md:col-span-2">
          <Button type="submit">{editingId ? 'Save changes' : 'Save record'}</Button>
          {editingId ? (
            <Button
              variant="secondary"
              onClick={() => {
                setEditingId(null)
                setForm(emptyRecord)
              }}
            >
              Cancel edit
            </Button>
          ) : null}
        </div>
      </form>

      {records.length === 0 ? (
        <EmptyState
          icon="🩺"
          title="No health records yet"
          message="Add a demo dog above. Dates within 7 days will show a friendly reminder on the card."
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {records.map((record) => (
            <HealthCard key={record.id} record={record} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </section>
  )
}
