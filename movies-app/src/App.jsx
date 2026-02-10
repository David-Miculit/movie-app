import MovieList from "./MovieList";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black"> 
      <header className="bg-zinc-900 flex gap-3 flex-row items-center justify-center p-2">
        <h1 className="text-white cursor-pointer p-2">Logo</h1>
        <form id="searchBar" className="">
          <input
            id="searchInput"
            type="text"
            placeholder=""
            autoComplete="off"
            className="rounded-md border border-slate-200 bg-slate-50 shadow-sm outline-none transition
                     focus:border-black focus:ring-1 focus:ring-black p-0.5"
          >
          </input>
          <button type="submit" hidden></button>
        </form>
      </header>

      <main className="flex container mx-auto px-4 py-10 justify-center">
          <MovieList></MovieList>
      </main>

      <footer className="mt-auto bg-zinc-900">
        <p className="container mx-auto px-4 py-4 text-center text-white text-sm">Footer.</p>
      </footer>
    </div>
  );
}

export default App;
