import { Selector, Option } from "./Selector"

import { useState } from "react"

import { ShowList } from "./ShowList"
import { usePopular } from "../api/getPopular"

const options = [
  { label: "On TV", value: "tv" },
  { label: "In Theaters", value: "movie" },
] as Option[]

export const Popular = () => {
  const [popularMediaType, setPopularMediaType] = useState("tv")
  const popularQuery = usePopular({ mediaType: popularMediaType })

  const handleChangeSelection = (value: string) => {
    // console.log(value)
    setPopularMediaType(value)
  }

  return (
    <div className="flex-col p-8">
      <div className="flex">
        <p className="text-xl mb-4 mr-5">What's Popular</p>
        <Selector
          options={options}
          defaultValue={popularMediaType}
          onChangeSelection={handleChangeSelection}
        />
      </div>
      <ShowList
        isLoading={popularQuery.isLoading}
        items={popularQuery.data?.results}
        mediaType={popularMediaType}
      />
    </div>
  )
}
