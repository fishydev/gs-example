import { useState } from "react"

import { Pagination } from "@/components/Pagination"
import { SortAccordion } from "@/components/Accordions"
import { FilterAccordion } from "@/components/Accordions"
import { ListWrapper } from "../components/ListWrapper"

import { usePopularMovie } from "../api/getPopular"

import { PageChangeEvent } from "@/components/Pagination"

export const MoviePopular = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const popularMovieQuery = usePopularMovie({ pageNumber: pageNumber })

  const handlePageChange = (event: PageChangeEvent) => {
    setPageNumber(event.selected + 1)
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-[260px] flex-shrink-0 flex flex-col space-y-2 mb-4 xl:pl-0 xl:mb-0">
          <SortAccordion />
          <FilterAccordion />
        </div>
        <div className="flex flex-col grow">
          <ListWrapper
            isLoading={popularMovieQuery.isLoading}
            items={popularMovieQuery.data?.results}
          />
          <Pagination
            pageCount={popularMovieQuery.data?.total_pages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}
