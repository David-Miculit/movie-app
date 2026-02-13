import MainHeroSection from "../components/MainHeroSection";
import { useEffect, useState } from "react";
import Spinner from "../components/LoadingSpinner"
import { getFavorites } from "../scripts/Favorites";
import MainHeader from "../components/MainHeader";
import MoviesCarousel from "../components/MoviesCarousel";

export default function FavoritesPage() {
  const [favoriteMedia, setFavoriteMedia] = useState()
  console.log(`favorite media:`, favoriteMedia)
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
    <div className="min-h-screen flex flex-col bg-black font-rubik gap-10"> 
      <MainHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

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
              <MoviesCarousel movies={favoriteMedia}/>
            </div>
            </>
          )}
      </main>

      <footer className="mt-10 bg-transparent">
        <p className="container mx-auto px-4 py-4 text-center text-white text-sm">Footer.</p>
      </footer>
    </div>
  );
}