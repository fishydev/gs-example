import { useState } from "react"

import { SortAccordion } from "@/components/Accordions/SortAccordion"
import { FilterAccordion } from "@/components/Accordions"
import { ListWrapper } from "../components/ListWrapper"

import { usePopularMovie } from "../api/getPopular"

export const MoviePopular = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const popularMovieQuery = usePopularMovie({ pageNumber })

  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="flex">
        <div className="w-[260px] flex-shrink-0 flex flex-col space-y-2">
          <SortAccordion />
          <FilterAccordion />
        </div>
        <ListWrapper
          isLoading={popularMovieQuery.isLoading}
          items={popularMovieQuery.data?.results}
        />
      </div>
    </div>
  )
}
