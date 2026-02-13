import MainHeader from "./MainHeader"

export default function MainHeroSection({name, description, imageUrl, searchQuery, setSearchQuery}) {
  return(
    <section className="relative  bg-center" style={{backgroundImage: imageUrl}}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

      <MainHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      <section id="movieDescription" className="container mx-auto relative">
        <div className="px-2 pt-72 max-w-3xl">
          <h1 className="text-white text-5xl font-semibold mb-4">
            {name}
          </h1>

          <p className="text-gray-300 text-lg line-clamp-3 mb-6">
            {description}
          </p>
          
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
              ▶ Play
            </button>

            <button className="bg-green-800/80 text-white px-6 py-2 rounded-md font-medium hover:bg-green-800 transition">
              More Info
            </button>
          </div>
        </div>
      </section>

    </section>
  )
}