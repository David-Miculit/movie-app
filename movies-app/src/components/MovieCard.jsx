export default function MovieCard(movie) {
    return (
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
 )
}