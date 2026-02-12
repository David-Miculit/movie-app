import MovieList from "./components/MoviesRender";
import MainHeader from "./components/MainHeader";
import { useEffect, useState } from "react";
import Spinner from "./components/LoadingSpinner"

function App() {
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-black font-rubik"> 
      <MainHeader />

      <main className="relative bg-black">
        <div className="w-[90%] container mx-auto flex flex-col gap-10">
          <MovieList movies={movies} category={'fantasy'}/>
          <MovieList movies={movies} category={'action'}/>
          <MovieList movies={movies} category={'drama'}/>
          <MovieList movies={movies} category={'horror'}/>
        </div>
      </main>

      <footer className="mt-10 bg-zinc-900">
        <p className="container mx-auto px-4 py-4 text-center text-white text-sm">Footer.</p>
      </footer>
    </div>
  );
}

export default App;
