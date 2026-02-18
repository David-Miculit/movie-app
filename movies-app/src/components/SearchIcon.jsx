import searchIcon from "../assets/search_icon.svg";
import { NavLink } from "react-router-dom";

export default function SearchBar() {
    return(
      <div className="flex flex-1 justify-end">
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `relative cursor-pointer transition-all duration-200 ease-out
            ${isActive ? "opacity-100 scale-125" : "opacity-80"}
            hover:opacity-100 hover:scale-125`
          }
        >
          <img
            src={searchIcon}
            alt="search"
            className="w-6 h-6 cursor-pointer"
          />
        </NavLink>
      </div>
    )
}