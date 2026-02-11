export default function MovieCard(movie) {
    return (
        <div key={movie.id} className="text-white p-2 rounded-lg snap-start flex-none w-80 ">
            <img
                src={`http://localhost:5000/images/${movie.image}`}
                alt={movie.title}
                className="h-44 border border-zinc-800 w-full object-cover rounded-lg"
            />
            <h2 className="mt-2 font-semibold">{movie.title}</h2>
            <div className="container flex flex-row gap-2">
                <p>Genre: {movie.genre}</p>
                <p className="">|</p>
                <p>Rating: {movie.rating}</p>
            </div>
        </div>
    )
}