import { Link } from "react-router-dom"
import { Card } from "@/components/Elements/Card"
import { CardContent } from "./CardContent"
import { Movie } from "@/features/movies/types"
import { Tv } from "@/features/tv/types"

type ListWrapperProps = {
  items?: Movie[] | Tv[]
  isLoading: boolean
}

export const ListWrapper = (props: ListWrapperProps) => {
  const { isLoading, items } = props
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!items) {
    return <p>No Data Found</p>
  }

  return (
    <div className="flex flex-wrap pl-4">
      {items.map((show) => (
        <Card className="mr-2 mb-2" key={show.id}>
          <Link to={`${show.id}`}>
            <CardContent {...show} />
          </Link>
        </Card>
      ))}
    </div>
  )
}
