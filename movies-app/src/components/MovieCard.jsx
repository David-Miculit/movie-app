import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom"

export function MovieCard({movie, favorites, toggleFavorite}) {
    const isFavorite = favorites.some(favs => favs.id === movie.id)
    const star = isFavorite ? '★' : '☆'

    return (
        <div key={movie.id} onClick={() => <Navigate to={`/movies/${movie.id}`}></Navigate>} className="text-white p-2 rounded-lg snap-start flex-none w-80 ">
            <Link to={`/movies/${movie.id}`} className="cursor-pointer group">
              <img
                  src={`http://localhost:5000/images/${movie.image}`}
                  alt={movie.title}
                  className="h-44 border border-zinc-800 w-full object-cover rounded-lg ring-1 ring-transparent ring-offset-2 ring-offset-black group-hover:ring-white"
              />
              <h3 className="mt-2 font-medium text-xl">{movie.title}</h3>
            </Link>
            <div className="container flex flex-row gap-2">
                <button onClick={() => toggleFavorite(movie)} className="text-green-800 p-2 w-6 h-6 flex items-center justify-center rounded-full">
                    {star}
                </button>
                <p className="text-zinc-400">Genre: {movie.genre}</p>
                <p className="text-zinc-400">•</p>
                <p className="text-zinc-400">Rating: {movie.rating}</p>
            </div>
            
        </div>
    )
}