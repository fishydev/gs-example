import { Cast } from "@/features/people/types"
import { CastCard } from "./CastCard"

type CastWrapperProps = {
  items?: Cast[]
  isLoading: boolean
}

export const CastWrapper = (props: CastWrapperProps) => {
  const { items, isLoading } = props

  if (!items) {
    return <span>No Data Found</span>
  }

  return (
    <div className="flex flex-col p-4">
      <span className="mb-4 text-xl font-bold">Cast</span>
      {isLoading && <span>Loading...</span>}
      {!items.length && <span>Not found</span>}
      <div className="flex space-x-4 overflow-x-scroll h-[350px]">
        {items.map((cast) => (
          <CastCard {...cast} key={cast.cast_id} />
        ))}
      </div>
    </div>
  )
}
