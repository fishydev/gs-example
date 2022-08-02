import { getPopular } from "../api/getPopular"

import { ItemCard } from "@/components/Elements/ItemCard"
import { SortAccordion } from "@/components/Accordions/SortAccordion"
import { FilterAccordion } from "@/components/Accordions"

export const TvPopular = () => {
  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="flex">
        <div className="w-[260px] flex-shrink-0 flex flex-col space-y-2">
          <SortAccordion />
          <FilterAccordion />
        </div>
        <div className="flex flex-wrap pl-4">
          {getPopular().map((movie, index) => (
            <div className="mr-2">
              <ItemCard {...movie} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
