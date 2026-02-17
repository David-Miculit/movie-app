import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { movieId } = useParams();

  return (
    <h1 className="text-white text-xl">{movieId}</h1>
  )
}