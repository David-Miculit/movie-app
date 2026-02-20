import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import Spinner from "../components/LoadingSpinner";
import { getFavorites } from "../scripts/Favorites";

export default function MainLayout() {
  const isHome = useLocation().pathname=== "/"
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchMovies = async() => {
    try {
      const response = await fetch("http://localhost:5000/api/movies")
      if(!response.ok) {
        throw new Error("Failed to fetch movies")
      }

      const data = await response.json()
      if(data && data.length!=0) {
        console.log(`Movie list data`, data)
        setMovies(data)
      } else {
        console.log("No movie data")
      }
    } catch (err) {
      console.log(err)
      setMovies([])
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => { fetchMovies() }, [])
  if(isLoading) {
    return(
      <Spinner/>
    )
  }

  return (
    <div id={'main-layout'} className="min-h-screen flex flex-col text-white font-rubik">
        <MainHeader className={isHome && movies.length!=0 ? "absolute w-full z-50": ""}/>
        <main className="flex-1">
          <Outlet context={{movies}}/>
        </main>
        <Footer />
    </div>
  )
}