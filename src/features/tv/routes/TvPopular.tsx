import { SortAccordion } from "@/components/Accordions/SortAccordion"
import { FilterAccordion } from "@/components/Accordions"
import { ListWrapper } from "../components/ListWrapper"

import { usePopularTv } from "../api/getPopular"

export const TvPopular = () => {
  const popularTvQuery = usePopularTv({})
  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="flex">
        <div className="w-[260px] flex-shrink-0 flex flex-col space-y-2">
          <SortAccordion />
          <FilterAccordion />
        </div>
        <ListWrapper
          isLoading={popularTvQuery.isLoading}
          items={popularTvQuery.data?.results}
        />
      </div>
    </div>
  )
}
