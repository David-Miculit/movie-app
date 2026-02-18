import MainHeroSection from "../components/MainHeroSection";
import MoviesCarousel from "../components/MoviesCarousel";
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
  const movies = useOutletContext()

  let name = 'Dune: Part Two'
  let description = "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future."
  let url = 'url(https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2021/08/dune-poster-2-new.png?fit=1515%2C825&ssl=1)'

  if(movies.length!=0) {
    return (
      <div className="flex flex-col bg-black font-rubik gap-10"> 
        <MainHeroSection name={name} description={description} imageUrl={url}/>
        
        <main className="relative bg-black">
          <div className="container mx-auto flex flex-col gap-10">
            <MoviesCarousel movies={movies} category="fantasy" />
            <MoviesCarousel movies={movies} category="action" />
            <MoviesCarousel movies={movies} category="drama" />
            <MoviesCarousel movies={movies} category="horror" />
          </div>
        </main>
      </div>
    );  
    } else {
        return(
          <div className="flex flex-col bg-black font-rubik gap-10"> 
            <MainHeroSection name={name} description={description} imageUrl={url}/>
            
            <main className="relative bg-black">
              <div className="container mx-auto flex flex-col gap-10">
                <p className="text-white text-xl mx-auto">No movies were found. Try again later :(</p>
              </div>
            </main>
          </div>
        );      
    }
}