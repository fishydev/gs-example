import { useState } from "react"

import { Pagination } from "@/components/Pagination"
import { SortAccordion } from "@/components/Accordions/SortAccordion"
import { FilterAccordion } from "@/components/Accordions"
import { ListWrapper } from "../components/ListWrapper"

import { usePopularTv } from "../api/getPopular"

import { PageChangeEvent } from "@/components/Pagination"

export const TvPopular = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const popularTvQuery = usePopularTv({ pageNumber: pageNumber })

  const handlePageChange = (event: PageChangeEvent) => {
    setPageNumber(event.selected + 1)
  }

  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="flex">
        <div className="w-[260px] flex-shrink-0 flex flex-col space-y-2">
          <SortAccordion />
          <FilterAccordion />
        </div>
        <div className="flex flex-col">
          <ListWrapper
            isLoading={popularTvQuery.isLoading}
            items={popularTvQuery.data?.results}
          />
          <Pagination
            pageCount={popularTvQuery.data?.total_pages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}
