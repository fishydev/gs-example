import { Link } from "react-router-dom"
import { Card } from "@/components/Elements/Card"
import { MovieCardContent } from "./MovieCardContent"
import { Movie } from "@/features/movies/types"
import { Tv } from "@/features/tv/types"

type ShowListProps = {
  items?: Movie[] | Tv[]
  isLoading: boolean
  mediaType: string
}

export const ShowList = (props: ShowListProps) => {
  const { isLoading, items, mediaType } = props
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!items) {
    return <p>No Data Found</p>
  }

  return (
    <div className="flex space-x-4 overflow-x-scroll h-[400px]">
      {items.map((show) => (
        <Link
          to={`/${mediaType === "tv" ? "tv" : "movies"}/${show.id}`}
          key={show.id}
        >
          <Card>
            <MovieCardContent {...show} />
          </Card>
        </Link>
      ))}
    </div>
  )
}
