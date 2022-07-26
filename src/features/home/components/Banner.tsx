const SearchButton = () => {
  return (
    <div className="h-12 flex mt-8">
      <input
        type="text"
        className="p-4 w-80 bg-slate-50 flex-grow rounded-l-lg"
      ></input>
      <button className="w-20 bg-red-700 text-slate-50 rounded-r-lg">
        Search
      </button>
    </div>
  )
}

export const Banner = () => {
  return (
    <div className="flex-col bg-gradient-to-br from-red-600 to-orange-500 p-8">
      <h1 className="text-5xl">Welcome.</h1>
      <h2 className="text-2xl">
        Millions of movies, shows, and personalities to discover. Explore now.
      </h2>
      <SearchButton />
    </div>
  )
}
