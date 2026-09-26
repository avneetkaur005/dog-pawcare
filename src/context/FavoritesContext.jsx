import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { dogs } from '../data/dogs'
import { readJson, writeJson } from '../utils/storage'

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(() => readJson('favorites', []))

  useEffect(() => {
    writeJson('favorites', favoriteIds)
  }, [favoriteIds])

  const isFavorite = useCallback((id) => favoriteIds.includes(id), [favoriteIds])

  const toggleFavorite = useCallback((id) => {
    setFavoriteIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }, [])

  const favoriteDogs = useMemo(
    () => dogs.filter((dog) => favoriteIds.includes(dog.id)),
    [favoriteIds],
  )

  const value = useMemo(
    () => ({ favoriteIds, favoriteDogs, isFavorite, toggleFavorite }),
    [favoriteIds, favoriteDogs, isFavorite, toggleFavorite],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used inside FavoritesProvider')
  }
  return context
}
