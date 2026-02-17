import { useEffect, useState } from "react";
import Spinner from "../components/LoadingSpinner"
import { getFavorites } from "../scripts/Favorites";
import MovieList from "../components/MovieList";
import { useOutletContext } from "react-router-dom";

export default function FavoritesPage() {
  const [favoriteMedia, setFavoriteMedia] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const {searchQuery, setSearchQuery} = useOutletContext('')
  
  const isSearching = searchQuery.trim().length > 0
  const searchedMovies = isSearching ? favoriteMedia.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())): favoriteMedia

  useEffect(() => { 
    setFavoriteMedia(getFavorites())
    setIsLoading(false)
  }, [])
    
  if (isLoading) {
    return (
      <div className="flex items-center justify-center bg-black">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-black/10 font-rubik gap-10"> 
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
    </div>
  );
}