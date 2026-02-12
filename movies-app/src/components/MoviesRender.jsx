import { useState } from "react";
import { useRef } from "react";
import MoviesCarousel from "./MoviesCarousel";
import { getFavorites, saveFavorites } from "../scripts/Favorites"

export default function MovieList({movies, category}) {
  const carouselRef = useRef(null)
  const [favorites, setFavorites] = useState(() => getFavorites())

  const toggleFavorite = (movieId) => {
    let updated;

    if (favorites.includes(movieId)) {
      updated = favorites.filter(id => id !== movieId)
    } else {
      updated = [...favorites, movieId]
    }

    setFavorites(updated)
    saveFavorites(updated)
  }

  const categoryList = category ? movies.filter(movie => movie.genre === category): movies
  console.log(`${category ?? "searched"} media: \n`, categoryList);

  if(categoryList.length == 0){
    return (
      <div className="flex justify-center p-9">
        <p className="text-white">No movies to show. Try again later</p>
      </div>
    )
  } else {
    return (<MoviesCarousel movies={categoryList} category={category} favorites={favorites} toggleFavorite={toggleFavorite} carouselRef={carouselRef}/>)
    }
}
