function MiddleHeaderButtons() {
  return (
    <div className="flex gap-8 items-center group">
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
      <header className="relative flex items-center gap-8 p-10">
        <div className="flex-1" />
        <MiddleHeaderButtons></MiddleHeaderButtons>
        <form id="searchBar" className="flex flex-1 justify-end">
          <input
            id="searchInput"
            type="text"
            placeholder=""
            autoComplete="off"
            className="text-gray-300 w-full max-w-52 font-rubik rounded-md border border-slate-200 bg-slate-50 shadow-lg outline-none transition
                     focus:border-gray-400 focus:ring-1 focus:ring-gray-400 p-0.5 bg-opacity-20"
          >
          </input>
          <button type="submit" hidden></button>
        </form>
      </header>
    )
}