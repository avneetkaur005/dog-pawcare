const PREFIX = 'pawcare-'

export function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(`${PREFIX}${key}`)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function writeJson(key, value) {
  localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value))
}

export function readString(key, fallback = '') {
  const value = localStorage.getItem(`${PREFIX}${key}`)
  return value ?? fallback
}

export function writeString(key, value) {
  localStorage.setItem(`${PREFIX}${key}`, value)
}

export function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}
