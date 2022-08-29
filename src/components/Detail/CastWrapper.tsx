import { Cast } from "@/features/people/types"
import { CastCard } from "./CastCard"

type CastWrapperProps = {
  items?: Cast[]
  isLoading: boolean
}

export const CastWrapper = (props: CastWrapperProps) => {
  const { items, isLoading } = props

  if (isLoading) {
    return <div className="flex items-center justify-center">Loading...</div>
  }

  if (!items) {
    return <div className="flex items-center justify-center">Not Found</div>
  }

  return (
    <div className="flex space-x-4 overflow-x-scroll h-[350px]">
      {items.map((cast) => (
        <CastCard {...cast} key={cast.cast_id} />
      ))}
    </div>
  )
}
