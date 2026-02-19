import { useParams, useLocation } from "react-router-dom";

export default function MoviePage() {
  const { movieId } = useParams();
  const passedMovie = useLocation().state?.movie;
  console.log(passedMovie)

  return (
    <div>
      <h1 className="text-xl">Movie id: {movieId}</h1>
      <h1 className="text-xl">Movie title: {passedMovie.title}</h1>
      <h1 className="text-xl">Movie genre: {passedMovie.genre}</h1>
      <h1 className="text-xl">Movie rating: {passedMovie.rating}</h1>
    </div>
  )
}