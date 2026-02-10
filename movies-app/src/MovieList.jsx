import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState([])

  const fetchMovies = async() => {
    try {
      const response = await fetch("http://localhost:5000/api/movies")
      if (!response.ok) {
        throw new Error("Failed to fetch movies")
      }

      const data = await response.json()
      if(data) {
        console.log(data)
        setMovies(data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => { fetchMovies() }, [])

  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.map(movie => MovieCard(movie))}
    </div>
  )
}
