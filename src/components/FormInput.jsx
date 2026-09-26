export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  as = 'input',
  options,
  rows = 4,
  required,
  className = '',
}) {
  const fieldClass =
    'w-full rounded-2xl border border-orange-200 bg-white px-4 py-3 text-stone-700 outline-none transition duration-300 focus:border-paw-orange focus:ring-2 focus:ring-orange-100 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 dark:focus:ring-stone-700'

  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold text-stone-700 dark:text-stone-200">
        {label}
        {required ? <span className="text-paw-orange"> *</span> : null}
      </span>
      {as === 'textarea' ? (
        <textarea
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          className={fieldClass}
          placeholder={placeholder}
        />
      ) : as === 'select' ? (
        <select name={name} value={value} onChange={onChange} className={fieldClass}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={fieldClass}
          placeholder={placeholder}
        />
      )}
      {error ? <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p> : null}
    </label>
  )
}
