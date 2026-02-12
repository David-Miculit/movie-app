import SearchBar from "./SearchBar"

function MiddleHeaderButtons() {
  return (
    <div className="flex gap-8 items-center group">
      {["Watchlist", "Home", "Favorites"].map((item) => (
        <nav
          key={item}
          className="text-white cursor-pointer text-lg
                     transition-all duration-200 ease-out
                     group-hover:opacity-60 group-hover:scale-100
                     hover:!opacity-100 hover:!scale-150"
        >
          {item}
        </nav>
      ))}
    </div>
  )
}

export default function MainHeader({searchQuery, setSearchQuery}) {
  return(
    <header className="relative flex items-center gap-8 p-10">
      <div className="flex-1" />
      <MiddleHeaderButtons></MiddleHeaderButtons>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </header>
  )
}