export function daysUntil(dateString) {
  if (!dateString) return null
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const date = new Date(`${dateString}T00:00:00`)
  if (Number.isNaN(date.getTime())) return null
  return Math.round((date - today) / 86400000)
}

export function isApproaching(dateString, withinDays = 7) {
  const days = daysUntil(dateString)
  return days !== null && days >= 0 && days <= withinDays
}

export function isOverdue(dateString) {
  const days = daysUntil(dateString)
  return days !== null && days < 0
}

export function reminderLabel(dateString, label) {
  const days = daysUntil(dateString)
  if (days === null) return null
  if (days < 0) return `${label} is overdue by ${Math.abs(days)} day${Math.abs(days) === 1 ? '' : 's'}.`
  if (days === 0) return `${label} is today.`
  if (days <= 7) return `${label} is in ${days} day${days === 1 ? '' : 's'}.`
  return null
}
