import Button from './Button'

export default function AppointmentCard({ appointment, onCancel }) {
  return (
    <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 dark:bg-stone-800 dark:ring-stone-700">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-extrabold text-stone-800 dark:text-stone-100">
            {appointment.dogName}
          </h3>
          <p className="mt-1 text-sm font-semibold text-paw-orange">{appointment.reason}</p>
        </div>
        <p className="rounded-full bg-teal-50 px-3 py-1 text-sm font-bold text-paw-teal dark:bg-teal-950/50 dark:text-teal-200">
          {appointment.date} · {appointment.time}
        </p>
      </div>
      <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
        {appointment.ownerName} · {appointment.email} · {appointment.phone}
      </p>
      {appointment.notes ? (
        <p className="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">{appointment.notes}</p>
      ) : null}
      <p className="mt-3 text-xs text-stone-400">Demo booking stored in this browser only.</p>
      <Button variant="secondary" className="mt-4 px-4 py-2 text-sm" onClick={() => onCancel(appointment.id)}>
        Cancel appointment
      </Button>
    </article>
  )
}
