import { useEffect, useState } from "react";
import Spinner from "../components/LoadingSpinner"
import { getFavorites } from "../scripts/Favorites";
import MainHeader from "../components/MainHeader";
import MoviesCarousel from "../components/MoviesCarousel";
import MovieList from "../components/MovieList";

export default function FavoritesPage() {
  const [favoriteMedia, setFavoriteMedia] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  
  const isSearching = searchQuery.trim().length > 0
  const searchedMovies = isSearching ? favoriteMedia.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())): favoriteMedia

  useEffect(() => { 
    setFavoriteMedia(getFavorites())
    setIsLoading(false)
  }, [])
    
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-black/10 font-rubik gap-10"> 
      <MainHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      <main className="relative bg-black flex-1">
          {isSearching ? (
            <>
            <div className="container mx-auto flex flex-col">
              <h2 className="text-white text-3xl font-medium px-2">
                Search results for: “{searchQuery}”
              </h2>
              <MovieList movies={searchedMovies} />
            </div>       
            </>
          ) : (
            <>
            <div className="container mx-auto flex flex-col max-[500px]:justify-center">
              <h2 className="text-white text-3xl font-medium px-2 max-[500px]:mx-auto">
                Your liked stuff
              </h2>
              <MovieList movies={favoriteMedia}/>
            </div>
            </>
          )}
      </main>

      <footer className="mt-10 bottom- bg-transparent">
        <p className="container mx-auto px-4 py-4 text-center text-white text-sm">Footer.</p>
      </footer>
    </div>
  );
}