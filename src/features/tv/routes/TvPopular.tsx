import { useState } from "react"

import { Pagination } from "@/components/Pagination"
import { SortTvs } from "../components/SortTvs"
import { FilterTvs } from "../components/FilterTvs"
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
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-[260px] flex-shrink-0 flex flex-col space-y-2 mb-4 xl:pl-0 xl:mb-0">
          <SortTvs />
          <FilterTvs />
        </div>
        <div className="flex flex-col grow">
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
