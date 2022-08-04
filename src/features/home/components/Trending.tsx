import { useTrending } from "../api/getTrending"

import { Card } from "@/components/Elements/Card"
import { RoundedProgressBar } from "@/components/Elements/RoundedProgressBar"
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
        {trendingQuery.data.results.map((movie) => (
          <Link to={`/movies/1`} key={movie.id}>
            <Card>
              <div className="flex-col h-[325px] w-[150px]">
                {/* <div
                  className="h-[225px] w-[150px] rounded-lg relative"
                  style={{ backgroundImage: `url(${movie.image})` }}
                > */}
                <div className="h-[225px] w-[150px] rounded-lg relative">
                  <div className="w-8 h-8 absolute bottom-3 right-3">
                    <RoundedProgressBar
                      value={Math.floor(movie.vote_average * 10)}
                    />
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-md">{movie.title}</p>
                  <p className="text-md">{movie.release_date}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
