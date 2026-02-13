import SearchBar from "./SearchBar"
import { useNavigate } from "react-router-dom"

function MiddleHeaderButtons() {
  const navigate = useNavigate();

  const items = [
    { label: "Watchlist", path: "/watchlist" },
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/liked-stuff" }
  ]

  return (
    <div className="flex gap-8 items-center group">
      {items.map(({ label, path }) => (
        <nav
          key={label}
          onClick={() => navigate(path)}
          className="text-white cursor-pointer text-lg
                     transition-all duration-200 ease-out
                     group-hover:opacity-60 group-hover:scale-100
                     hover:!opacity-100 hover:!scale-150"
        >
          {label}
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