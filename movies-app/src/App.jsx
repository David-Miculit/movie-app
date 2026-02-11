import MovieList from "./MovieList";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black font-rubik"> 
      <section className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage:"url(https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2021/08/dune-poster-2-new.png?fit=1515%2C825&ssl=1)"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

        <MainHeader />
      </section>

      <main className="relative bg-black">
        <div className="w-[90%] container mx-auto">
          <MovieList />
        </div>
      </main>

      <footer className="mt-10 bg-zinc-900">
        <p className="container mx-auto px-4 py-4 text-center text-white text-sm">Footer.</p>
      </footer>
    </div>
  );
}

export default App;
