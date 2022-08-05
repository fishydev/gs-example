import { CastWrapper, Header } from "@/components/Detail"
import { useParams } from "react-router-dom"

import { useTvCredits } from "../api/getCredits"
import { useTvDetail } from "../api/getDetail"

export const TvDetail = () => {
  const { tvId } = useParams()
  const movieDetailQuery = useTvDetail({ tvId: tvId as string })
  const movieCreditQuery = useTvCredits({ tvId: tvId as string })

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
