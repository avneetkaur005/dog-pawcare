import Button from './Button'
import { reminderLabel } from '../utils/dates'

export default function HealthCard({ record, onEdit, onDelete }) {
  const warnings = [
    reminderLabel(record.nextVetVisit, 'Next vet visit'),
    reminderLabel(record.nextVaccination, 'Next vaccination'),
  ].filter(Boolean)

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 transition duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-stone-800 dark:ring-stone-700">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-extrabold text-stone-800 dark:text-stone-100">{record.dogName}</h3>
          <p className="mt-1 text-sm font-semibold text-paw-orange">Demo health record</p>
        </div>
        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-paw-orange dark:bg-stone-700 dark:text-orange-300">
          {record.weight ? `${record.weight} kg` : 'Weight n/a'}
        </span>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <Info label="Date of birth" value={record.dateOfBirth} />
        <Info label="Last vet visit" value={record.lastVetVisit} />
        <Info label="Next vet visit" value={record.nextVetVisit} />
        <Info label="Vaccination date" value={record.vaccinationDate} />
        <Info label="Next vaccination" value={record.nextVaccination} />
        <Info label="Medication" value={record.medication} />
      </dl>
      {record.notes ? (
        <p className="mt-4 text-sm leading-6 text-stone-600 dark:text-stone-300">{record.notes}</p>
      ) : null}
      {warnings.length > 0 ? (
        <div className="mt-4 rounded-2xl bg-amber-50 p-3 text-sm font-semibold text-amber-800 ring-1 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:ring-amber-800">
          {warnings.map((warning) => (
            <p key={warning}>{warning}</p>
          ))}
          <p className="mt-1 text-xs font-normal">Reminder only — not medical advice.</p>
        </div>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-2">
        <Button onClick={() => onEdit(record)} className="px-4 py-2 text-sm">
          Edit
        </Button>
        <Button variant="secondary" onClick={() => onDelete(record.id)} className="px-4 py-2 text-sm">
          Delete
        </Button>
      </div>
    </article>
  )
}

function Info({ label, value }) {
  return (
    <div>
      <dt className="text-xs font-bold uppercase tracking-wide text-stone-400">{label}</dt>
      <dd className="mt-1 font-semibold text-stone-700 dark:text-stone-200">{value || '—'}</dd>
    </div>
  )
}
