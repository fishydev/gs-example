import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/lib/axios"
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query"

import { TvCredits } from "../types"

export const getDetail = ({ tvId }: { tvId: string }): Promise<TvCredits> => {
  return axiosInstance.get(`/tv/${tvId}`)
}

type QueryFnType = typeof getDetail

type useTvDetailOptions = {
  tvId: string
  config?: QueryConfig<QueryFnType>
}

export const useTvDetail = ({ tvId, config }: useTvDetailOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["tvDetail", tvId],
    queryFn: () => getDetail({ tvId }),
    ...config,
  })
}
