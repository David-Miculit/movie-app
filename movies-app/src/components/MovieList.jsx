import { MovieCard } from "./MovieCard"

export default function MovieList({movies}) {
  if(movies.length == 0){
    return (
      <div className="flex justify-center p-9">
        <p >Nothing to show here. Try again later</p>
      </div>
    )
  } else {
    return (
      <div>
        <div className="flex flex-wrap gap-4">
          {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
        </div>
      </div>  
    )
  }
}