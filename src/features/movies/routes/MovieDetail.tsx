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
      <Header
        isLoading={movieDetailQuery.isLoading}
        backdrop={movieDetailQuery.data?.backdrop_path}
        genres={movieDetailQuery.data?.genres}
        overview={movieDetailQuery.data?.overview}
        poster_path={movieDetailQuery.data?.poster_path}
        tagline={movieDetailQuery.data?.tagline}
        title={movieDetailQuery.data?.title}
      />
      <div className="max-w-7xl mx-auto flex-col">
        <div className="flex flex-col p-4">
          <span className="mb-4 text-xl font-bold">Cast</span>
          <CastWrapper
            isLoading={movieCreditQuery.isLoading}
            items={movieCreditQuery.data?.cast}
          />
        </div>
      </div>
    </div>
  )
}
