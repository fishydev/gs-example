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
    <div className="flex flex-wrap md:pl-4 justify-between">
      {items.map((show) => (
        <Card className="mb-2 w-[150px] md:w-[200px]" key={show.id}>
          <Link to={`${show.id}`}>
            <CardContent {...show} />
          </Link>
        </Card>
      ))}
    </div>
  )
}
