import { getTrending } from "../api/getTrending"

import { ItemCard } from "@/components/Elements/ItemCard"

const movies = getTrending()

export const Trending = () => {
  return (
    <div className="flex-col p-8">
      <p className="text-xl mb-4">Trending</p>
      <div className="flex space-x-4 overflow-x-scroll">
        {movies.map((movie, index) => (
          <ItemCard {...movie} key={index} />
        ))}
      </div>
    </div>
  )
}
