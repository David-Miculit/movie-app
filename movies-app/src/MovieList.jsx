import { useEffect, useState } from "react";
import { useRef } from "react";
import Spinner from "./components/LoadingSpinner";
import MoviesCarousel from "./components/MoviesCarousel";

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const carouselRef = useRef(null)

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
    return <Spinner></Spinner>;
  }
  
  if(movies.length == 0){
    return (
      <div className="flex justify-center p-9">
        <p className="text-white">No movies to show. Try again later</p>
      </div>
    )
  } else {
    return (MoviesCarousel(movies, carouselRef))
  }
}
