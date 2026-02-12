export default function SearchBar({searchQuery, setSearchQuery}) {
    return(
      <form id="searchBar" className="flex flex-1 justify-end">
        <input
          id="searchInput"
          type="text"
          placeholder=""
          autoComplete="off"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="text-gray-300 w-full max-w-52 font-rubik rounded-md border border-slate-200 bg-slate-50 shadow-lg outline-none transition
                  focus:border-gray-400 focus:ring-1 focus:ring-gray-400 p-0.5 bg-opacity-20"
        >
        </input>
        <button type="submit" hidden></button>
      </form>        
    )
}