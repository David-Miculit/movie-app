import { MovieCard } from "./MovieCard"
import { useRef } from "react"

const scrollNext = (carouselRef) => {
  if (carouselRef.current) {
    const cardWidth = carouselRef.current.firstChild.offsetWidth + 24
    carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" })
  }
}
const scrollPrev = (carouselRef) => {
  if (carouselRef.current) {
    const cardWidth = carouselRef.current.firstChild.offsetWidth + 24
    carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" })
  }
}

export default function MoviesCarousel({movies, category}) {
  const shownCategory = category ? category.charAt(0).toUpperCase() + category.slice(1): ''
  const carouselRef = useRef(null)

  const categoryList = category ? movies.filter(movie => movie.genre === category): movies
  console.log(`${category} movies: \n`, categoryList);

  if(categoryList.length == 0){
    return (
      <div className="flex justify-center p-9">
        <p >Nothing to show here. Try again later</p>
      </div>
    )
  } else {
    return (
      <div className="movieCarousel">
        <h2 className="text-2xl font-medium px-2">
          {shownCategory}
        </h2>

        <div className="relative">
          <div ref={carouselRef} className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {categoryList.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
          </div>

          <button onClick={() => scrollPrev(carouselRef)} className="absolute left-5 top-24 -translate-y-1/2 z-10 bg-zinc-900 text-zinc-400 p-2 w-8 h-8 flex items-center justify-center rounded-full">
          {'<'}
          </button>

          <button onClick={() => scrollNext(carouselRef)} className="absolute right-5 top-24 -translate-y-1/2 z-10 bg-zinc-900 text-zinc-400 p-2 w-8 h-8 flex items-center justify-center rounded-full">
          {'>'}
          </button>

          <div className="pointer-events-none absolute top-0 right-0 h-full w-40 bg-gradient-to-r from-transparent to-black/100" />
          <div className="pointer-events-none absolute top-0 left-0 h-full w-3 bg-gradient-to-l from-transparent to-black/100" />
        </div>  
      </div>  
    )
  }
}