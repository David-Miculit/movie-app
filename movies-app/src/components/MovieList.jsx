import { MovieCard } from "./MovieCard"
import { getFavorites, saveFavorites } from "../scripts/Favorites"
import { useState, useRef } from "react"

export default function MovieList({movies, category}) {
  const shownCategory = category ? category.charAt(0).toUpperCase() + category.slice(1): ''
  const carouselRef = useRef(null)
  const [favorites, setFavorites] = useState(() => getFavorites())

  const toggleFavorite = (movie) => {
    const exists = favorites.some(f => f.id === movie.id)
    const updated = exists ? favorites.filter(f => f.id !== movie.id) : [...favorites, movie]

    setFavorites(updated)
    saveFavorites(updated)
  }

  const categoryList = category ? movies.filter(movie => movie.genre === category): movies
  console.log(`${category ?? "searched/favorite"} media: \n`, categoryList);

  if(categoryList.length == 0){
    return (
      <div className="flex justify-center p-9">
        <p className="text-white">Nothing to show here. Try again later</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2 className="text-white text-2xl font-medium mb-2 px-2">
          {shownCategory}
        </h2>

        <div ref={carouselRef} className="flex flex-wrap gap-4">
          {categoryList.map(movie => (<MovieCard key={movie.id} movie={movie} favorites={favorites} toggleFavorite={toggleFavorite}/>))}
        </div>
      </div>  
    )
  }
}