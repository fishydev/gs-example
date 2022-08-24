import BannerBackground from "@/assets/home-banner.jpg"

const SearchButton = () => {
  return (
    <div className="h-12 flex mt-8">
      <input
        type="text"
        className="p-4 w-80 bg-slate-50 flex-grow rounded-l-sm text-black"
      ></input>
      <button className="w-20 bg-rose-600 text-slate-50 rounded-r-sm">
        Search
      </button>
    </div>
  )
}

export const Banner = () => {
  return (
    <div
      className="flex bg-gradient-to-b from-zinc-700 to-black bg-center h-[768px] justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(${BannerBackground})`,
      }}
    >
      <div className="flex-col max-w-7xl items-center align-middle p-8">
        <h1 className="text-5xl">Welcome.</h1>
        <h2 className="text-2xl">
          Millions of movies, shows, and personalities to discover. Explore now.
        </h2>
        {/* <SearchButton /> */}
      </div>
    </div>
  )
}
