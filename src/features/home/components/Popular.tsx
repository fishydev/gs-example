import { getPopular } from "../api/getPopular"

import { MovieCard } from "@/components/Elements/MovieCard"

const movies = getPopular()

export const Popular = () => {
  return (
    <div className="flex-col p-8">
      <p className="text-xl mb-4">What's Popular</p>
      <div className="flex space-x-4 overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  )
}
