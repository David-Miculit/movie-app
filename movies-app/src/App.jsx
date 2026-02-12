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
    
  if(isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-black font-rubik"> 
      <section className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage:"url(https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2021/08/dune-poster-2-new.png?fit=1515%2C825&ssl=1)"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

        <MainHeader />
      </section>

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
