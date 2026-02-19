import { useOutletContext } from "react-router-dom"
import MovieList from "../components/MovieList"
import { useSearchParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";

export default function SearchPage() {
  const {movies} = useOutletContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const [inputValue, setInputValue] = useState("")

  const search = searchParams.get("search") ?? ""

  const filteredMovies = useMemo(() => {
    const lowercaseSearch = search.trim().toLowerCase()
    
    const filtered = lowercaseSearch.length ? movies.filter((movie) => movie.title?.toLowerCase().includes(lowercaseSearch)): movies

    return filtered
  }, [movies, search])

  useEffect(() => {setInputValue(search)}, [search])

  const onSubmit = (e) => {
    e.preventDefault()
    const input = inputValue.trim()

    const params = {}
    if (input)
    {
      params.search = input
    }
    setSearchParams(params, { replace: true })
  }

  return (
    <section className="container mx-auto">
      <>
        <h2 className="text-2xl font-medium mb-3 max-[800px]:mx-auto">Search Movies</h2>

        <form onSubmit={onSubmit} id="searchBar">
          <input
            id="searchInput"
            type="text"
            placeholder="Search by title..."
            autoComplete="off"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-white/30"
          >
          </input>
          <button type="submit" hidden></button>
        </form>

        <p className="text-white/70 my-3">
          {search.trim() ? `Results for: “${search}” (${filteredMovies.length})`: `Showing all movies (${filteredMovies.length})`}
        </p>
      </>

      <div className="">
        {filteredMovies.length > 0 ? 
        (
          <MovieList movies={filteredMovies} />
        ) : 
        (
          <div className="text-white/80 mt-6">
            No movies found for “{search}”
          </div>
        )}
      </div>
    </section>
  );
}