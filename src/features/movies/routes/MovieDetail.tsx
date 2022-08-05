import { CastWrapper, Header } from "@/components/Detail"
import { useParams } from "react-router-dom"

import { useMovieCredits } from "../api/getCredits"
import { useMovieDetail } from "../api/getDetail"

export const MovieDetail = () => {
  const { movieId } = useParams()
  const movieDetailQuery = useMovieDetail({ movieId: movieId as string })
  const movieCreditQuery = useMovieCredits({ movieId: movieId as string })

  return (
    <div className="w-full flex-col">
      <Header />
      <div className="max-w-7xl mx-auto flex-col">
        <CastWrapper
          isLoading={movieCreditQuery.isLoading}
          items={movieCreditQuery.data?.cast}
        />
      </div>
    </div>
  )
}
