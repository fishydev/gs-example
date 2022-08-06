import { CastWrapper, Header } from "@/components/Detail"
import { useParams } from "react-router-dom"

import { useTvCredits } from "../api/getCredits"
import { useTvDetail } from "../api/getDetail"

export const TvDetail = () => {
  const { tvId } = useParams()
  const tvDetailQuery = useTvDetail({ tvId: tvId as string })
  const TvCreditQuery = useTvCredits({ tvId: tvId as string })

  return (
    <div className="w-full flex-col">
      <Header
        isLoading={tvDetailQuery.isLoading}
        backdrop={tvDetailQuery.data?.backdrop_path}
        genres={tvDetailQuery.data?.genres}
        overview={tvDetailQuery.data?.overview}
        poster_path={tvDetailQuery.data?.poster_path}
        tagline={tvDetailQuery.data?.tagline}
        title={tvDetailQuery.data?.name}
      />
      <div className="max-w-7xl mx-auto flex-col">
        <CastWrapper
          isLoading={TvCreditQuery.isLoading}
          items={TvCreditQuery.data?.cast}
        />
      </div>
    </div>
  )
}
