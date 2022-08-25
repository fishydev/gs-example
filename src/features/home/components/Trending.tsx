import { useTrending } from "../api/getTrending"

import { Selector, Option } from "./Selector"
import { ListWrapper } from "./ListWrapper"
import { useState } from "react"

const options = [
  { label: "On TV", value: "tv" },
  { label: "In Theaters", value: "movie" },
] as Option[]

export const Trending = () => {
  const [trendingMediaType, setTrendingMediaType] = useState("tv")
  const trendingQuery = useTrending({ mediaType: trendingMediaType })

  const handleChangeSelection = (value: string) => {
    setTrendingMediaType(value)
  }

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
      <ListWrapper
        items={trendingQuery.data?.results}
        isLoading={trendingQuery.isLoading}
        mediaType={trendingMediaType}
      />
    </div>
  )
}
