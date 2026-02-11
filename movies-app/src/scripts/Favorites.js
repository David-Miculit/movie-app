export const getFavorites = () => {
  const saved = localStorage.getItem('myFavorites')
  return saved ? JSON.parse(saved) : []
}

export const saveFavorites = (favs) => {
  localStorage.setItem('myFavorites', JSON.stringify(favs))
}