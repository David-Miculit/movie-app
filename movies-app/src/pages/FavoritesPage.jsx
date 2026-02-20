import { useEffect, useState } from "react";
import Spinner from "../components/LoadingSpinner"
import { getFavorites } from "../scripts/Favorites";
import MovieList from "../components/MovieList";

export default function FavoritesPage() {
  const [favoriteMedia, setFavoriteMedia] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 
    setFavoriteMedia(getFavorites())
    setIsLoading(false)
  }, [])
    
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if(favoriteMedia!=0) {
    console.log(`Favorite movies: \n`,favoriteMedia)
    return (
      <section className="container mx-auto flex flex-col">
        <h2 className="text-2xl font-medium max-[800px]:mx-auto">
          Your liked stuff
        </h2>
        <MovieList movies={favoriteMedia}/>
      </section>
    );
  } else {
      return (
        <section className="text-center">
          <h2 className="text-2xl font-medium">
            Nothing to display here for now. Go add the things you like
          </h2>
        </section>
      );
  }
}