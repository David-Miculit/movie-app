function MiddleHeaderOptions() {
  return (
    <div className="relative left-1/2 -translate-x-1/2 flex gap-8 items-center group">
      {["Watchlist", "Home", "Favorites"].map((item) => (
        <h2
          key={item}
          className="text-white cursor-pointer
                     transition-all duration-200 ease-out
                     group-hover:opacity-60 group-hover:scale-100
                     hover:!opacity-100 hover:!scale-150"
        >
          {item}
        </h2>
      ))}
    </div>
  )
}

export default function MainHeader() {
    return(
      <header className="relative flex items-center p-10">
        <MiddleHeaderOptions></MiddleHeaderOptions>
        <form id="searchBar" className="ml-auto">
          <input
            id="searchInput"
            type="text"
            placeholder=""
            autoComplete="off"
            className="rounded-md border border-slate-200 bg-slate-50 shadow-sm outline-none transition
                     focus:border-black focus:ring-1 focus:ring-black p-0.5 bg-opacity-20"
          >
          </input>
          <button type="submit" hidden></button>
        </form>
      </header>
    )
}