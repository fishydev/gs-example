import { Link } from "react-router-dom"
import { Card } from "@/components/Elements/Card"
import { CardContent } from "./CardContent"
import { Movie } from "@/features/movies/types"
import { Tv } from "@/features/tv/types"
import { generateCardPlaceholders } from "@/components/Placeholders"

type ListWrapperProps = {
  items?: Movie[] | Tv[]
  isLoading: boolean
}

export const ListWrapper = (props: ListWrapperProps) => {
  const { isLoading, items } = props

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 md:ml-4">
        {generateCardPlaceholders(20)}
      </div>
    )
  }

  if (!items) {
    return <p>No Data Found</p>
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 md:ml-4">
      {items.map((show) => (
        <Card key={show.id}>
          <Link to={`${show.id}`}>
            <CardContent {...show} />
          </Link>
        </Card>
      ))}
    </div>
  )
}
