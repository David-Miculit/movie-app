import SearchBar from "./SearchBar"
import { useNavigate, useLocation } from "react-router-dom"

function MiddleHeaderButtons() {
  const navigate = useNavigate();
  const location = useLocation()

  const items = [
    { label: "Watchlist", path: "/watchlist" },
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/liked-stuff" }
  ]

  return (
    <div className="flex gap-6 items-center group">
      {items.map(({ label, path }) => {
        const isActive = location.pathname === path

        return (
          <nav
            key={label}
            onClick={() => navigate(path)}
            className={
              `relative text-white cursor-pointer text-xl
              transition-all duration-200 ease-out
              group-hover:opacity-60 group-hover:scale-100
              hover:!opacity-100 hover:!scale-125 max-[600px]:text-sm

              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:bg-white
              after:transition-all after:duration-300
              ${isActive ? "after:w-full opacity-100" : "after:w-0"}`
            }
          >
            {label}
          </nav>
        )
      })}
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