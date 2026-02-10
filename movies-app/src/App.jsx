import Card from "./components/card";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black"> 
      <header className="bg-red-950 flex flex-row items-center justify-center">
        <h1 className="text-white p-5 cursor-pointer">Logo</h1>
        <form id="searchBar" className="">
          <input
            id="searchInput"
            type="text"
            placeholder=""
            autoComplete="off"
            className="rounded-sm border border-slate-200 bg-slate-50 shadow-sm outline-none transition
                     focus:border-black focus:ring-1 focus:ring-black"
          >
          </input>
          <button type="submit" hidden></button>
        </form>
      </header>

      <main class="flex container mx-auto px-4 py-10 justify-center">
          <section class="w-full max-w-2xl" aria-labelledby="page-title">
            <section id="countryDetails" class="mt-2 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] [&>*:last-child:nth-child(odd)]:col-span-full">
          </section>
              
          </section>
      </main>

      <footer className="mt-auto bg-red-950">
        <p class="container mx-auto px-4 py-4 text-center text-white text-sm">Footer.</p>
      </footer>
    </div>
  );
}

export default App;
