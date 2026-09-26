export default function Filter({
  breeds,
  ages,
  selectedBreed,
  selectedAge,
  onBreedChange,
  onAgeChange,
}) {
  const selectClass =
    'w-full rounded-2xl border border-orange-200 bg-white px-4 py-3 text-stone-700 outline-none transition duration-300 focus:border-paw-orange focus:ring-2 focus:ring-orange-100 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 dark:focus:ring-stone-700'

  return (
    <div className="mb-10 grid gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-orange-100 transition duration-300 dark:bg-stone-800 dark:ring-stone-700 md:grid-cols-2">
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-stone-700 dark:text-stone-200">Breed</span>
        <select
          value={selectedBreed}
          onChange={(event) => onBreedChange(event.target.value)}
          className={selectClass}
        >
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-stone-700 dark:text-stone-200">Age</span>
        <select
          value={selectedAge}
          onChange={(event) => onAgeChange(event.target.value)}
          className={selectClass}
        >
          {ages.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
