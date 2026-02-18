import { useOutletContext } from "react-router-dom"
import MovieList from "../components/MovieList"
import { useSearchParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";

export default function SearchPage() {
  const movies = useOutletContext()
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
    <div className="flex flex-col bg-black font-rubik gap-6">
      <div className="container mx-auto">
        <h2 className="text-white text-2xl font-medium mb-3">Search Movies</h2>

        <form onSubmit={onSubmit} id="searchBar" className="">
          <input
            id="searchInput"
            type="text"
            placeholder="Search by title..."
            autoComplete="off"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/10 text-white outline-none
                       focus:ring-2 focus:ring-white/30"
          >
          </input>
          <button type="submit" hidden></button>
        </form>

        <p className="text-white/70 mt-3">
          {search.trim() ? `Results for: “${search}” (${filteredMovies.length})`: `Showing all movies (${filteredMovies.length})`}
        </p>
      </div>

      <div className="container mx-auto">
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
    </div>
  );
}