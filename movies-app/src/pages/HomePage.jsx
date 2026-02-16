import MainHeroSection from "../components/MainHeroSection";
import { useEffect, useState } from "react";
import Spinner from "../components/LoadingSpinner"
import MoviesCarousel from "../components/MoviesCarousel";
import Footer from "../components/Footer";

export default function HomePage() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  
  const isSearching = searchQuery.trim().length > 0
  const searchedMovies = isSearching ? movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())): movies

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Spinner />
      </div>
    )
  }

  let name = 'Dune: Part Two'
  let description = "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future."
  let url = 'url(https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2021/08/dune-poster-2-new.png?fit=1515%2C825&ssl=1)'
  return (
    <div className="min-h-screen flex flex-col bg-black font-rubik gap-10"> 
      <MainHeroSection name={name} description={description} imageUrl={url} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      <main className="relative bg-black">
          {isSearching ? (
            <>
            <div className="container mx-auto flex flex-col">
              <h2 className="text-white text-2xl font-medium px-2">
                Search results for: “{searchQuery}”
              </h2>
              <MoviesCarousel movies={searchedMovies} />
            </div>       
            </>
          ) : (
            <>
            <div className="container mx-auto flex flex-col gap-10">
              <MoviesCarousel movies={movies} category="fantasy" />
              <MoviesCarousel movies={movies} category="action" />
              <MoviesCarousel movies={movies} category="drama" />
              <MoviesCarousel movies={movies} category="horror" />
            </div>
            </>
          )}
      </main>

      <Footer/>
    </div>
  );
}