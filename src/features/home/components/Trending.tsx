import { useTrending } from "../api/getTrending"

import { Card } from "@/components/Elements/Card"
import { MovieCardContent } from "./MovieCardContent"
import { Selector, Option } from "./Selector"

import { Link } from "react-router-dom"

const options = [
  { label: "On TV", value: "tv" },
  { label: "In Theaters", value: "movie" },
] as Option[]

export const Trending = () => {
  const trendingQuery = useTrending()

  const handleChangeSelection = (value: string | number) => {
    console.log(value)
  }

  if (trendingQuery.isLoading) {
    return <p>Loading...</p>
  }

  if (!trendingQuery.data) return null

  return (
    <div className="flex-col p-8">
      <div className="flex">
        <p className="text-xl mb-4 mr-5">Trending</p>
        <Selector
          options={options}
          defaultValue={"tv"}
          onChangeSelection={handleChangeSelection}
        />
      </div>
      <div className="flex space-x-4 overflow-x-scroll h-[400px]">
        {trendingQuery.data.results.map((show) => (
          <Link
            to={`/${show.media_type === "tv" ? "tv" : "movies"}/${show.id}`}
            key={show.id}
          >
            <Card>
              <MovieCardContent {...show} />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
