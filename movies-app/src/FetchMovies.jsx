import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async() => {
      try {
        const response = await fetch("http://localhost:5000/api/movies")
        if (!response.ok) {
          throw new Error("Failed to fetch movies")
        }

        const data = await response.json()
        if(data) {
          console.log(data)
          setMovies(data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.map(movie => (
        <div key={movie.id} className="text-white border p-2 rounded-lg">
          <img
            src={`http://localhost:5000/images/${movie.image}`}
            alt={movie.title}
            className="h-48 object-cover rounded-lg"
          />
          <h2 className="font-bold mt-2">{movie.title}</h2>
          <p>Genre: {movie.genre}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  )
}
