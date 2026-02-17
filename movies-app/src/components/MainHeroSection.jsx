export default function MainHeroSection({name, description, imageUrl}) {
  return(
    <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: imageUrl}}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

      <section id="movieDescription" className="absolute bottom-16 left-0 right-0 container mx-auto px-2">
        <div className="px-2 pt-96 max-w-3xl max-h-3xl">
          <h1 className="text-white text-6xl font-bold mb-4 max-[600px]:text-4xl">
            {name}
          </h1>

          <p className="text-gray-300 text-xl line-clamp-3 mb-6 max-[600px]:text-lg" >
            {description}
          </p>
          
          <div className="flex gap-4">
            <button className="bg-white text-black px-20 py-4 rounded-md font-medium hover:bg-gray-200 transition max-[600px]:px-14 max-[600px]:py-4">
              ▶ Play
            </button>

            <button className="bg-green-800/80 text-white px-6 py-4 rounded-md font-medium hover:bg-green-800 transition">
              More Info
            </button>
          </div>
        </div>
      </section>

    </section>
  )
}