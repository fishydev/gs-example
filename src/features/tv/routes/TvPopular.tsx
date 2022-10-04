import { useState } from "react"

import { Pagination } from "@/components/Pagination"
import { ListWrapper } from "../components/ListWrapper"
import { SearchTvs } from "../components/SearchTvs"

import { usePopularTv } from "../api/getPopular"

import { PageChangeEvent } from "@/components/Pagination"

export const TvPopular = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [query, setQuery] = useState("")

  const popularTvQuery = usePopularTv({ pageNumber: pageNumber, query: query })

  const handlePageChange = (event: PageChangeEvent) => {
    setPageNumber(event.selected + 1)
  }

  const handleSearchTvs = (query: string) => {
    setQuery(query)
    // console.log(query)
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-[260px] flex-shrink-0 flex flex-col space-y-2 mb-4 xl:pl-0 xl:mb-0">
          <SearchTvs onSearch={handleSearchTvs} />
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
