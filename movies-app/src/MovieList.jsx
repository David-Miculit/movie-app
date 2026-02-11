import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchMovies = async() => {
    try {
      const response = await fetch("http://localhost:5000/api/movies")
      if (!response.ok) {
        throw new Error("Failed to fetch movies")
      }

      const data = await response.json()

      if(data && data.length != 0) {
        console.log(`Movie list data`, data)
        setMovies(data)
      } else {
        console.log("No movie data")
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { fetchMovies() }, [])

  if(isLoading) {
    return <div className="spinner flex justify-center p-9 text-white ">Loading...</div>;
  }
  
  if(movies.length == 0){
    return (
      <div className="flex justify-center p-9">
        <p className="text-white">No movies to show. Try again later</p>
      </div>
    )
  } else {
    return (
      <div className="grid grid-cols-5 gap-6">
        {movies.map(movie => MovieCard(movie))}
      </div>
    )
  }
}
