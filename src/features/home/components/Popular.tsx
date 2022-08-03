import { getPopular } from "../api/getPopular"

import { ItemCard } from "@/components/Elements/ItemCard"
import { Selector, Option } from "./Selector"

import { Link } from "react-router-dom"

const movies = getPopular()

const options = [
  { label: "On TV", value: "tv" },
  { label: "In Theaters", value: "movie" },
] as Option[]

export const Popular = () => {
  const handleChangeSelection = (value: string | number) => {
    console.log(value)
  }

  return (
    <div className="flex-col p-8">
      <div className="flex">
        <p className="text-xl mb-4 mr-5">What's Popular</p>
        <Selector
          options={options}
          defaultValue={"tv"}
          onChangeSelection={handleChangeSelection}
        />
      </div>
      <div className="flex space-x-4 overflow-x-scroll">
        {movies.map((movie, index) => (
          <Link to={`/movies/1`} key={index}>
            <ItemCard {...movie} key={index} />
          </Link>
        ))}
      </div>
    </div>
  )
}
