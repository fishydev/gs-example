import { getPopular } from "../api/getPopular"

import { ItemCard } from "@/components/Elements/ItemCard"

const movies = getPopular()

export const Popular = () => {
  return (
    <div className="flex-col p-8">
      <p className="text-xl mb-4">What's Popular</p>
      <div className="flex space-x-4 overflow-x-scroll">
        {movies.map((movie, index) => (
          <ItemCard {...movie} key={index} />
        ))}
      </div>
    </div>
  )
}
